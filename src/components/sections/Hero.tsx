import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const metadata = [
  "LOCAL PERCEPTION",
  "PRIVACY BOUNDARY",
  "SKILL COMPILATION",
  "VERIFIED EXECUTION",
];

export function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="flex max-w-4xl flex-col items-start gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-neutral-500">
            SIH 26171 · On-Device Visual Perception
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 text-balance sm:text-6xl">
            Teach once. Execute for the long horizon. Adapt with proof.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
            SyncNode is a self-learning, privacy-preserving browser agent that
            understands visual browser state locally, learns procedures from human
            demonstrations, executes long-horizon workflows, and verifies
            consequential actions.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/demo"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-neutral-900 px-7 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            >
              <Play className="h-4 w-4" /> Watch Demo
            </Link>
            <Link
              href="/architecture"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-neutral-300 px-7 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-500 hover:bg-neutral-100"
            >
              Explore Architecture <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-200 pt-6 w-full">
            {metadata.map((m) => (
              <span
                key={m}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
