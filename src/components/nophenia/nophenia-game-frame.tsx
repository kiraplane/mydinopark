'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ExternalLinkIcon,
  Maximize2Icon,
  Minimize2Icon,
  PlayIcon,
  RotateCcwIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

type NopheniaGameFrameProps = {
  src: string;
  posterSrc: string;
  labels: {
    title: string;
    loading: string;
    start: string;
    reset: string;
    fullscreen: string;
    exitFullscreen: string;
    open: string;
  };
  className?: string;
};

type NopheniaFrameWindow = Window & {
  nopheniaResize?: () => void;
  nopheniaSetFullscreen?: (fullscreen: boolean) => boolean;
};

function shouldOpenDirectlyForMobileFullscreen() {
  const userAgent = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(userAgent);
  const isSmallTouchScreen =
    navigator.maxTouchPoints > 0 &&
    window.matchMedia('(max-width: 767px)').matches;

  return isIOS || isAndroid || isSmallTouchScreen;
}

function getFrameDocument(frame: HTMLIFrameElement | null) {
  try {
    return frame?.contentDocument ?? null;
  } catch {
    return null;
  }
}

export function NopheniaGameFrame({
  src,
  posterSrc,
  labels,
  className,
}: NopheniaGameFrameProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [frameKey, setFrameKey] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showWarmup, setShowWarmup] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [openDirectForFullscreen, setOpenDirectForFullscreen] = useState(false);

  const syncFullscreenState = useCallback(() => {
    const childDocument = getFrameDocument(iframeRef.current);
    setIsFullscreen(
      document.fullscreenElement === stageRef.current ||
        document.fullscreenElement === iframeRef.current ||
        Boolean(childDocument?.fullscreenElement)
    );
  }, []);

  useEffect(() => {
    const shouldOpenDirect = shouldOpenDirectlyForMobileFullscreen();
    setOpenDirectForFullscreen(shouldOpenDirect);
    setCanFullscreen(Boolean(document.fullscreenEnabled) || shouldOpenDirect);

    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreenState);
    };
  }, [syncFullscreenState]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    setShowWarmup(true);
    const timer = window.setTimeout(() => setShowWarmup(false), 2200);

    return () => window.clearTimeout(timer);
  }, [frameKey, hasStarted]);

  const openGameDirectly = useCallback(() => {
    const opened = window.open(src, '_blank', 'noopener,noreferrer');

    if (!opened) {
      window.location.href = src;
    }
  }, [src]);

  const restartFrame = () => {
    if (!hasStarted) {
      return;
    }

    setFrameKey((current) => current + 1);
  };

  const toggleFullscreen = async () => {
    if (!hasStarted) {
      return;
    }

    if (openDirectForFullscreen) {
      openGameDirectly();
      return;
    }

    if (!stageRef.current || !iframeRef.current || !canFullscreen) {
      return;
    }

    const childDocument = getFrameDocument(iframeRef.current);
    const childWindow = iframeRef.current
      .contentWindow as NopheniaFrameWindow | null;

    if (document.fullscreenElement || childDocument?.fullscreenElement) {
      if (childWindow?.nopheniaSetFullscreen?.(false)) {
        return;
      }

      await document.exitFullscreen();
      return;
    }

    if (childWindow?.nopheniaSetFullscreen?.(true)) {
      window.setTimeout(syncFullscreenState, 120);
      return;
    }

    await stageRef.current.requestFullscreen();
    childWindow?.nopheniaResize?.();
    syncFullscreenState();
  };

  const handleFrameLoad = () => {
    setShowWarmup(false);
    const childDocument = getFrameDocument(iframeRef.current);
    childDocument?.addEventListener('fullscreenchange', syncFullscreenState);
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-[#26384A] bg-black shadow-2xl shadow-black/35',
        className
      )}
    >
      <div
        ref={stageRef}
        className="relative aspect-video min-h-[280px] w-full overflow-hidden bg-black sm:min-h-[380px] lg:min-h-[620px]"
      >
        {hasStarted ? (
          <iframe
            ref={iframeRef}
            key={frameKey}
            title="nophenia online game"
            src={src}
            allow="fullscreen; autoplay; gamepad; cross-origin-isolated"
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 size-full border-0 bg-black"
            onLoad={handleFrameLoad}
          />
        ) : (
          <div className="absolute inset-0">
            <Image
              src={posterSrc}
              alt="nophenia dreamlike screenshot"
              fill
              priority
              sizes="(min-width: 1024px) 1120px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,17,0.10)_0%,rgba(7,9,17,0.76)_68%,rgba(7,9,17,0.96)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <div className="max-w-2xl rounded-lg border border-[#6DDFC4]/40 bg-[#070911]/90 p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6DDFC4]">
                  Browser play
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#F6F0EA] md:text-3xl">
                  Try nophenia in your browser
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#D8E8EF]">
                  The first launch downloads the Godot HTML5 runtime and game
                  pack. Start here when you want to play nophenia online, then
                  use the guide links for controls and route help.
                </p>
                <Button
                  type="button"
                  className="mt-5 bg-[#F6D089] text-[#17100B] hover:bg-[#FFE1A8]"
                  onClick={() => setHasStarted(true)}
                >
                  <PlayIcon className="size-4" />
                  {labels.start}
                </Button>
              </div>
            </div>
          </div>
        )}

        {showWarmup ? (
          <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/80 text-sm font-medium text-[#F6F0EA]">
            <span className="rounded-md border border-[#6DDFC4]/35 bg-[#111827] px-3 py-2">
              {labels.loading}
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 border-[#26384A] border-t bg-[#111827] px-3 py-2">
        <div className="flex min-w-0 items-center gap-2 text-sm text-[#D8E8EF]">
          <span
            className="size-2 shrink-0 rounded-full bg-[#6DDFC4]"
            aria-hidden
          />
          <span className="truncate">{labels.title}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 text-[#D8E8EF] hover:bg-white/10 hover:text-white"
            title={labels.reset}
            aria-label={labels.reset}
            disabled={!hasStarted}
            onClick={restartFrame}
          >
            <RotateCcwIcon className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 text-[#D8E8EF] hover:bg-white/10 hover:text-white"
            title={
              openDirectForFullscreen
                ? labels.open
                : isFullscreen
                  ? labels.exitFullscreen
                  : labels.fullscreen
            }
            aria-label={
              openDirectForFullscreen
                ? labels.open
                : isFullscreen
                  ? labels.exitFullscreen
                  : labels.fullscreen
            }
            disabled={!hasStarted || !canFullscreen}
            onClick={() => {
              toggleFullscreen().catch(() => {
                if (openDirectForFullscreen) {
                  openGameDirectly();
                  return;
                }

                setCanFullscreen(false);
              });
            }}
          >
            {isFullscreen ? (
              <Minimize2Icon className="size-4" />
            ) : (
              <Maximize2Icon className="size-4" />
            )}
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-9 text-[#D8E8EF] hover:bg-white/10 hover:text-white"
            title={labels.open}
            aria-label={labels.open}
          >
            <a href={src} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
