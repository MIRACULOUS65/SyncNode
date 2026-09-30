import Link from "next/link";
import { ArrowRight, ListChecks, PlayCircle, ScrollText } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { StatusBadge } from "@/components/ui/StatusBadge";

const compilerItems = [
  "Intent",
  "Semantic Procedure",
  "Visual Grounding",
  "Privacy Rules",
  "Risk Policy",
  "Verification",
  "Recovery",
  "Version History",
];

const runnerState = [
  { label: "MISSION HEALTH REVIEW", value: "13 / 24 STEPS" },
  { label: "CHECKPOINT", value: "SAVED" },
  { label: "RECOVERY", value: "READY" },
  { label: "VERIFICATION", value: "ACTIVE" },
];

const forensicsTimeline = [
  { t: "T-42s", e: "Thermal trend begins rising" },
  { t: "T-31s", e: "Warning state detected" },
  { t: "T-18s", e: "Rate of change increases" },
  { t: "T-06s", e: "Threshold crossed" },
  { t: "T+00s", e: "Anomaly displayed" },
];

export function CoreCapabilities() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Capabilities"
          title="Three capabilities. One verifiable loop."
          description="SyncNode learns procedures, executes them over long horizons, and reconstructs what happened when something changes."
        />

        <div className="mt-14 flex flex-col gap-6">
          {/* Visual Skill Compiler */}
          <article className="grid gap-8 rounded-md border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="solid">Primary USP</Badge>
                <Badge variant="outline">Visual Skill Compiler</Badge>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Teach → Compile → Adapt
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                A human demonstrates a browser procedure once. SyncNode converts that
                demonstration into a structured, privacy-aware, risk-governed and
                verifiable skill.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {compilerItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-neutral-700"
                  >
                    <ListChecks className="h-3.5 w-3.5 text-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/capabilities"
                className="mt-auto inline-flex w-fit items-center gap-2 border-b border-neutral-900 pb-0.5 text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-500"
              >
                Explore Skill Compiler <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="flex flex-col justify-center rounded-md border border-neutral-200 bg-neutral-50 p-5 font-mono text-[11px] leading-loose text-neutral-600">
              <div className="mb-2 font-semibold tracking-[0.16em] text-neutral-400">
                COMPILED SKILL · THERMAL SUMMARY v3
              </div>
              {[
                "intent: generate thermal health summary",
                "procedure: 6 semantic steps",
                "grounding: visual targets (no fixed coords)",
                "privacy: redact credentials · mask PII",
                "risk: consequential → require verification",
                "verification: 4 conditions",
                "recovery: 2 strategies",
                "versions: v1 → v2 → v3 (adapted)",
              ].map((l) => (
                <div key={l} className="border-b border-dashed border-neutral-200 py-0.5 last:border-0">
                  {l}
                </div>
              ))}
            </div>
          </article>

          {/* Long-Horizon Skill Runner */}
          <article className="grid gap-8 rounded-md border border-neutral-200 bg-neutral-950 p-6 text-white shadow-sm sm:p-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="inverse">Execution</Badge>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Plan → Execute → Checkpoint → Recover → Resume
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                A learned skill can execute across extended multi-step workflows with
                persistent task state, checkpoints, recovery and verification.
              </p>
              <div className="mt-auto">
                <Link
                  href="/demo"
                  className="inline-flex w-fit items-center gap-2 border-b border-white pb-0.5 text-sm font-medium text-white transition-colors hover:text-neutral-300"
                >
                  See it run <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 rounded-md border border-neutral-800 bg-neutral-900 p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-300">
                  Long-Horizon Skill Runner
                </span>
                <PlayCircle className="h-4 w-4 text-neutral-500" />
              </div>
              {runnerState.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between border-b border-dashed border-neutral-800 py-1.5 last:border-0"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    {r.label}
                  </span>
                  <span className="font-mono text-xs font-medium text-white">
                    {r.value}
                  </span>
                </div>
              ))}
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
                <div className="h-full w-[54%] bg-white" />
              </div>
            </div>
          </article>

          {/* Visual Mission Forensics */}
          <article className="grid gap-8 rounded-md border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Mission Support</Badge>
                <Badge>Visual Mission Forensics</Badge>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Observe → Remember → Reconstruct → Explain
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                SyncNode maintains a bounded, privacy-filtered temporal representation
                of selected browser-visible states and reconstructs what changed around
                an event or anomaly.
              </p>
              <div className="mt-auto">
                <Link
                  href="/forensics"
                  className="inline-flex w-fit items-center gap-2 border-b border-neutral-900 pb-0.5 text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-500"
                >
                  Open forensics <ScrollText className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-md border border-neutral-200 bg-neutral-50 p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Reconstruction window
                </span>
                <StatusBadge status="warn" label="Anomaly" />
              </div>
              <ol className="relative flex flex-col gap-3 border-l border-neutral-300 pl-5">
                {forensicsTimeline.map((f, i) => (
                  <li key={f.t} className="relative">
                    <span
                      className={
                        i === forensicsTimeline.length - 1
                          ? "absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full bg-neutral-900"
                          : "absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full border border-neutral-400 bg-white"
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
          </article>
        </div>
      </div>
    </section>
  );
}
