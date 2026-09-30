import type { Metadata } from "next";
import { PageShell, PageSection } from "@/components/layout/PageShell";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Visual Mission Forensics" };

const events = [
  { t: "T-42s", e: "Thermal trend begins rising", detail: "Baseline drift from nominal 38.0 °C band; no warning state yet." },
  { t: "T-31s", e: "Warning state detected", detail: "Status label transitions NOMINAL → CAUTION in the header region." },
  { t: "T-18s", e: "Rate of change increases", detail: "Slope steepens; +0.6 °C per interval vs +0.2 °C prior." },
  { t: "T-06s", e: "Threshold crossed", detail: "Value passes 41.0 °C advisory line on the trend graph." },
  { t: "T+00s", e: "Anomaly displayed", detail: "Console raises anomaly banner; operator acknowledges." },
];

const evidence = [
  { title: "Timeline", note: "Bounded 48-second reconstruction window around the anomaly." },
  { title: "Visual States", note: "5 privacy-filtered captures of the thermal panel region." },
  { title: "Extracted Values", note: "12 numeric readings with timestamps and units." },
  { title: "Detected Transitions", note: "3 state transitions: NOMINAL → CAUTION → THRESHOLD → ANOMALY." },
  { title: "Analysis", note: "Causal chain: trend rise → warning → acceleration → crossing → anomaly." },
  { title: "Verification Status", note: "All reconstructed claims checked against captured evidence." },
];

export default function ForensicsPage() {
  return (
    <PageShell
      eyebrow="Visual Mission Forensics"
      title="Reconstruct exactly what the operator saw — and when."
      description="A bounded, privacy-filtered temporal memory of browser-visible states lets SyncNode answer the question that matters after an event: what changed, and in what order?"
    >
      <PageSection title="Incident timeline · SYN-01 thermal" kicker="RECONSTRUCTION">
        <div className="rounded-md border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Synthetic Mission Operations Dashboard · research demonstrator
            </span>
            <StatusBadge status="warn" label="Anomaly reviewed" />
          </div>
          <ol className="relative flex flex-col gap-5 border-l border-neutral-300 pl-6">
            {events.map((f, i) => (
              <li key={f.t} className="relative">
                <span
                  className={cn(
                    "absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2",
                    i === events.length - 1
                      ? "border-neutral-900 bg-neutral-900"
                      : "border-neutral-400 bg-white"
                  )}
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="w-16 shrink-0 font-mono text-xs font-semibold tracking-[0.1em] text-neutral-900">
                    {f.t}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-neutral-900">{f.e}</span>
                    <span className="text-xs leading-relaxed text-neutral-500">{f.detail}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </PageSection>

      <PageSection title="Evidence package" kicker="BOUNDED MEMORY" dark>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {evidence.map((e) => (
            <div key={e.title} className="rounded-md border border-neutral-800 bg-neutral-900 p-5">
              <p className="text-sm font-semibold text-white">{e.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">{e.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-md border border-dashed border-neutral-700 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Incident report (summary)
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-300">
            At T-42s the thermal trend for SYN-01 begins rising above its nominal band. A
            warning state appears at T-31s; the rate of change increases at T-18s; the
            advisory threshold is crossed at T-06s; the anomaly is displayed at T+00s.
            Three transitions and twelve extracted values support this ordering. All data
            shown is synthetic.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="inverse">Synthetic data</Badge>
            <Badge variant="inverse">Privacy-filtered</Badge>
            <Badge variant="inverse">Bounded retention</Badge>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
