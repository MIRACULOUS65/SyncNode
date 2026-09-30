import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-neutral-950 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-neutral-500">
            SyncNode
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Human expertise should not disappear into repetition.
          </h2>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-neutral-400">
            Teach once. Execute for the long horizon. Adapt with proof.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-7 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
            >
              Explore SyncNode <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/architecture"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-neutral-600 px-7 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              View Architecture
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
