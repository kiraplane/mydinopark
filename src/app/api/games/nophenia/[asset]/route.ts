const GAME_ASSETS = {
  'index.pck': {
    chunks: [
      { name: 'nophenia-pck-aaa', size: 24_000_000 },
      { name: 'nophenia-pck-aab', size: 24_000_000 },
      { name: 'nophenia-pck-aac', size: 5_914_688 },
    ],
    size: 53_914_688,
    contentType: 'application/octet-stream',
  },
  'index.wasm': {
    chunks: [
      { name: 'nophenia-wasm-aaa', size: 24_000_000 },
      { name: 'nophenia-wasm-aab', size: 14_034_280 },
    ],
    size: 38_034_280,
    contentType: 'application/wasm',
  },
} as const;

const CHUNK_BASE_PATH = '/games/nophenia/chunks';

type GameAssetName = keyof typeof GAME_ASSETS;
type ByteRange = {
  start: number;
  end: number;
};

function isGameAssetName(asset: string): asset is GameAssetName {
  return asset in GAME_ASSETS;
}

function headers(asset: GameAssetName, range?: ByteRange) {
  const config = GAME_ASSETS[asset];
  const responseHeaders = new Headers({
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Content-Type': config.contentType,
  });

  if (range) {
    responseHeaders.set('Content-Length', String(range.end - range.start + 1));
    responseHeaders.set(
      'Content-Range',
      `bytes ${range.start}-${range.end}/${config.size}`
    );
    return responseHeaders;
  }

  responseHeaders.set('Content-Length', String(config.size));
  return responseHeaders;
}

function rangeNotSatisfiableHeaders(asset: GameAssetName) {
  const config = GAME_ASSETS[asset];
  const responseHeaders = headers(asset);
  responseHeaders.delete('Content-Length');
  responseHeaders.set('Content-Range', `bytes */${config.size}`);
  return responseHeaders;
}

function parseRangeHeader(
  rangeHeader: string | null,
  size: number
): ByteRange | 'invalid' | null {
  if (!rangeHeader) {
    return null;
  }

  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader.trim());

  if (!match) {
    return 'invalid';
  }

  const [, startText, endText] = match;

  if (!startText && !endText) {
    return 'invalid';
  }

  if (!startText) {
    const suffixLength = Number(endText);

    if (!Number.isSafeInteger(suffixLength) || suffixLength <= 0) {
      return 'invalid';
    }

    return {
      start: Math.max(size - suffixLength, 0),
      end: size - 1,
    };
  }

  const start = Number(startText);
  const requestedEnd = endText ? Number(endText) : size - 1;

  if (
    !Number.isSafeInteger(start) ||
    !Number.isSafeInteger(requestedEnd) ||
    start < 0 ||
    requestedEnd < start ||
    start >= size
  ) {
    return 'invalid';
  }

  return {
    start,
    end: Math.min(requestedEnd, size - 1),
  };
}

async function enqueueBody(
  controller: ReadableStreamDefaultController<Uint8Array>,
  body: ReadableStream<Uint8Array>
) {
  const reader = body.getReader();

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    if (value) {
      controller.enqueue(value);
    }
  }
}

async function enqueueSlicedBody(
  controller: ReadableStreamDefaultController<Uint8Array>,
  body: ReadableStream<Uint8Array>,
  start: number,
  end: number
) {
  const reader = body.getReader();
  const totalLength = end - start + 1;
  let skipped = 0;
  let emitted = 0;

  while (emitted < totalLength) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    if (!value) {
      continue;
    }

    if (skipped + value.byteLength <= start) {
      skipped += value.byteLength;
      continue;
    }

    const sliceStart = Math.max(0, start - skipped);
    const remaining = totalLength - emitted;
    const sliceEnd = Math.min(value.byteLength, sliceStart + remaining);

    if (sliceStart < sliceEnd) {
      controller.enqueue(value.subarray(sliceStart, sliceEnd));
      emitted += sliceEnd - sliceStart;
    }

    skipped += value.byteLength;
  }
}

function streamAsset(origin: string, asset: GameAssetName, range?: ByteRange) {
  const config = GAME_ASSETS[asset];
  const assetStart = range?.start ?? 0;
  const assetEnd = range?.end ?? config.size - 1;

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        let offset = 0;

        for (const chunk of config.chunks) {
          const chunkStart = offset;
          const chunkEnd = offset + chunk.size - 1;
          offset += chunk.size;

          if (chunkEnd < assetStart) {
            continue;
          }

          if (chunkStart > assetEnd) {
            break;
          }

          const localStart = Math.max(0, assetStart - chunkStart);
          const localEnd = Math.min(chunk.size - 1, assetEnd - chunkStart);
          const needsPartialChunk = localStart > 0 || localEnd < chunk.size - 1;
          const response = await fetch(
            `${origin}${CHUNK_BASE_PATH}/${chunk.name}`,
            needsPartialChunk
              ? {
                  headers: {
                    Range: `bytes=${localStart}-${localEnd}`,
                  },
                }
              : undefined
          );

          if (!response.ok || !response.body) {
            throw new Error(`Unable to load Nophenia chunk: ${chunk.name}`);
          }

          if (response.status === 206 || !needsPartialChunk) {
            await enqueueBody(controller, response.body);
          } else {
            await enqueueSlicedBody(
              controller,
              response.body,
              localStart,
              localEnd
            );
          }
        }

        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });
}

export async function HEAD(
  request: Request,
  context: { params: Promise<{ asset: string }> }
) {
  const { asset } = await context.params;

  if (!isGameAssetName(asset)) {
    return new Response(null, { status: 404 });
  }

  const range = parseRangeHeader(
    request.headers.get('range'),
    GAME_ASSETS[asset].size
  );

  if (range === 'invalid') {
    return new Response(null, {
      status: 416,
      headers: rangeNotSatisfiableHeaders(asset),
    });
  }

  return new Response(null, {
    status: range ? 206 : 200,
    headers: headers(asset, range ?? undefined),
  });
}

export async function GET(
  request: Request,
  context: { params: Promise<{ asset: string }> }
) {
  const { asset } = await context.params;

  if (!isGameAssetName(asset)) {
    return new Response('Unknown Nophenia game asset.', { status: 404 });
  }

  const range = parseRangeHeader(
    request.headers.get('range'),
    GAME_ASSETS[asset].size
  );

  if (range === 'invalid') {
    return new Response(null, {
      status: 416,
      headers: rangeNotSatisfiableHeaders(asset),
    });
  }

  const origin = new URL(request.url).origin;
  const stream = streamAsset(origin, asset, range ?? undefined);

  return new Response(stream, {
    status: range ? 206 : 200,
    headers: headers(asset, range ?? undefined),
  });
}
