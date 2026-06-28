const GAME_ASSETS = {
  'index.pck': {
    chunks: ['nophenia-pck-aaa', 'nophenia-pck-aab', 'nophenia-pck-aac'],
    size: 53_914_688,
    contentType: 'application/octet-stream',
  },
  'index.wasm': {
    chunks: ['nophenia-wasm-aaa', 'nophenia-wasm-aab'],
    size: 38_034_280,
    contentType: 'application/wasm',
  },
} as const;

const CHUNK_BASE_PATH = '/games/nophenia/chunks';

type GameAssetName = keyof typeof GAME_ASSETS;

function isGameAssetName(asset: string): asset is GameAssetName {
  return asset in GAME_ASSETS;
}

function headers(asset: GameAssetName) {
  const config = GAME_ASSETS[asset];

  return {
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Content-Length': String(config.size),
    'Content-Type': config.contentType,
  };
}

export async function HEAD(
  _request: Request,
  context: { params: Promise<{ asset: string }> }
) {
  const { asset } = await context.params;

  if (!isGameAssetName(asset)) {
    return new Response(null, { status: 404 });
  }

  return new Response(null, { headers: headers(asset) });
}

export async function GET(
  request: Request,
  context: { params: Promise<{ asset: string }> }
) {
  const { asset } = await context.params;

  if (!isGameAssetName(asset)) {
    return new Response('Unknown Nophenia game asset.', { status: 404 });
  }

  const origin = new URL(request.url).origin;
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for (const chunk of GAME_ASSETS[asset].chunks) {
          const response = await fetch(`${origin}${CHUNK_BASE_PATH}/${chunk}`);

          if (!response.ok || !response.body) {
            throw new Error(`Unable to load Nophenia chunk: ${chunk}`);
          }

          const reader = response.body.getReader();

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

        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return new Response(stream, { headers: headers(asset) });
}
