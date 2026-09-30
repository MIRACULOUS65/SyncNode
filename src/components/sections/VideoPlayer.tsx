"use client";

import * as React from "react";
import { Play, ShieldCheck, Radio, Cpu } from "lucide-react";

const HAS_VIDEO = false;

export function VideoPlayer() {
  const [hasVideo, setHasVideo] = React.useState(HAS_VIDEO);
  const [failed, setFailed] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const showFallback = !hasVideo || failed;

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-md border border-neutral-200 bg-neutral-950 shadow-lg">
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 px-4 py-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-300">
              SyncNode · Live Demonstration
            </span>
            <div className="flex items-center gap-2">
              {["LOCAL", "VERIFIED", "SYNTHETIC ENVIRONMENT"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-700 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400"
                >
                  {t === "LOCAL" ? (
                    <Cpu className="h-2.5 w-2.5" />
                  ) : t === "VERIFIED" ? (
                    <ShieldCheck className="h-2.5 w-2.5" />
                  ) : (
                    <Radio className="h-2.5 w-2.5" />
                  )}
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Video / fallback */}
          <div className="relative aspect-video w-full bg-neutral-900">
            {!showFallback ? (
              <video
                ref={videoRef}
                className="h-full w-full"
                controls
                playsInline
                preload="metadata"
                onError={() => setFailed(true)}
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900">
                  <Play className="h-8 w-8 text-neutral-300" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-white">
                    SyncNode Demonstration
                  </p>
                  <p className="text-sm text-neutral-500">
                    Demo video will appear here.
                  </p>
                </div>
                <p className="max-w-md px-6 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-neutral-600">
                  PLACE /demo.mp4 IN THE /public DIRECTORY TO ENABLE PLAYBACK
                </p>
              </div>
            )}

            {/* Corner brackets */}
            <div aria-hidden className="pointer-events-none absolute inset-3">
              <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-neutral-700" />
              <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-neutral-700" />
              <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-neutral-700" />
              <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-neutral-700" />
            </div>
          </div>

          {/* Bottom status strip */}
          <div className="flex items-center justify-between border-t border-neutral-800 px-4 py-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
              VIEWPORT 01 · SYNTHETIC MISSION CONSOLE
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
              UI LABELS ONLY · NOT LIVE METRICS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
