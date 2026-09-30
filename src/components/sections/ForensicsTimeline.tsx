import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";

const events = [
  { t: "T-42s", e: "Thermal trend begins rising" },
  { t: "T-31s", e: "Warning state detected" },
  { t: "T-18s", e: "Rate of change increases" },
  { t: "T-06s", e: "Threshold crossed" },
  { t: "T+00s", e: "Anomaly displayed" },
];

const cards = [
  { title: "Timeline", note: "Bounded window around the event, reconstructed from captured states." },
  { title: "Relevant Visual States", note: "Privacy-filtered snapshots of the regions that mattered." },
  { title: "Extracted Values", note: "Telemetry figures read from the visual state at each moment." },
  { title: "Detected Transitions", note: "Threshold crossings, label changes, state flips." },
  { title: "Analysis", note: "Causal ordering of what changed, and when." },
  { title: "Verification Status", note: "Every reconstructed claim is checked against captured evidence." },
];

export function ForensicsPreview() {
  return (
    <section className="bg-neutral-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="Visual Mission Forensics"
              title="What changed before the anomaly?"
              description="SyncNode keeps a bounded, privacy-filtered memory of browser-visible states so that any event can be reconstructed and explained after the fact."
            />
            <Link
              href="/forensics"
              className="inline-flex w-fit items-center gap-2 border-b border-neutral-900 pb-0.5 text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-500"
            >
              Open Visual Mission Forensics <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-md border border-neutral-300 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Reconstruction window · SYN-01 thermal
                </span>
                <StatusBadge status="warn" label="Anomaly" />
              </div>
              <ol className="relative flex flex-col gap-3 border-l border-neutral-400 pl-5">
                {events.map((f, i) => (
                  <li key={f.t} className="relative">
                    <span
                      className={
                        i === events.length - 1
                          ? "absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full bg-neutral-900"
                          : "absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full border border-neutral-500 bg-white"
                      }
                    />
                    <div className="flex items-baseline gap-3">
                      <span className="w-14 shrink-0 font-mono text-[10px] font-semibold tracking-[0.12em] text-neutral-900">
                        {f.t}
                      </span>
                      <span className="text-xs text-neutral-600">{f.e}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-md border border-neutral-200 bg-white p-3.5"
                >
                  <p className="text-xs font-semibold text-neutral-900">{c.title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-neutral-500">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
