"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const steps = [
  "Mission Portal",
  "Resume Session",
  "Locate Spacecraft",
  "Open Health Dashboard",
  "Inspect Power",
  "Inspect Thermal",
  "Inspect Attitude",
  "Inspect Comms",
  "Capture Trends",
  "Cross-Check Limits",
  "Draft Notes",
  "Prepare Export",
  "Checkpoint",           // 13
  "Thermal Page Failed",  // 14 — failure
  "Recovery: Strategy 2",
  "Re-Observe",
  "Re-Ground",
  "Retry",
  "Verify",
  "Checkpoint",
  "Inspect Payload",
  "Final Review",
  "Generate Report",
  "Close Session",        // 24
];

const recovery = ["RE-OBSERVE", "RE-GROUND", "RETRY", "VERIFY", "CHECKPOINT"];

export function ExecutionTimeline() {
  const [running, setRunning] = React.useState(false);
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (!running || step >= steps.length) return;
    const id = setTimeout(() => setStep((s) => s + 1), 260);
    return () => clearTimeout(id);
  }, [running, step]);

  const done = step >= steps.length;

  return (
    <section className="border-y border-neutral-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Long-Horizon Skill Runner"
          title="Twenty-four steps. One failure. Objective complete."
          description="A simulated 24-step mission health review, including a mid-run page failure and automatic recovery via strategy 2."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Timeline */}
          <div className="rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Execution timeline
              </span>
              <span className="font-mono text-[11px] tabular-nums text-neutral-900">
                {Math.min(step, 24)} / 24 steps
              </span>
            </div>
            <ol className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-4">
              {steps.slice(0, 24).map((s, i) => {
                const doneStep = i < step;
                const failedStep = i === 13;
                const recovering = i >= 14 && i < 19;
                return (
                  <li
                    key={s}
                    className={cn(
                      "flex items-start gap-2 rounded-sm border px-2.5 py-2 font-mono text-[10px] leading-tight tracking-[0.08em]",
                      doneStep
                        ? failedStep
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-300 bg-white text-neutral-800"
                        : "border-neutral-200 text-neutral-400",
                      i === 13 && step === 14 && "animate-pulse"
                    )}
                  >
                    <span className={cn("mt-px", doneStep ? "text-neutral-500" : "")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s}</span>
                  </li>
                );
              })}
            </ol>
            {!running && !done && (
              <div className="mt-5">
                <Button onClick={() => setRunning(true)}>Start Execution</Button>
              </div>
            )}
          </div>

          {/* Status panel */}
          <div className="flex flex-col gap-4">
            <div className="rounded-md border border-neutral-900 bg-neutral-950 p-5 text-white">
              <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Objective status
              </div>
              <p className="text-2xl font-semibold tracking-tight">
                {done ? "OBJECTIVE COMPLETE" : running ? "EXECUTING" : "STANDBY"}
              </p>
              <div className="mt-4 flex flex-col gap-2 font-mono text-[11px] tracking-[0.12em] text-neutral-400">
                <div className="flex justify-between border-b border-dashed border-neutral-800 pb-1.5">
                  <span>PROGRESS</span>
                  <span className="tabular-nums text-white">{Math.min(step, 24)} / 24</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-neutral-800 pb-1.5">
                  <span>VERIFICATION</span>
                  <span className={done ? "text-white" : ""}>
                    {done ? "PASSED" : running ? "ACTIVE" : "—"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-dashed border-neutral-800 pb-1.5">
                  <span>RECOVERY</span>
                  <span>{step > 14 ? "STRATEGY 2 · USED" : "READY"}</span>
                </div>
                <div className="flex justify-between">
                  <span>REPORT</span>
                  <span className={done ? "text-white" : ""}>{done ? "READY" : "—"}</span>
                </div>
              </div>
              {done && (
                <Button
                  size="sm"
                  variant="inverse-outline"
                  className="mt-5"
                  onClick={() => { setRunning(false); setStep(0); }}
                >
                  Reset
                </Button>
              )}
            </div>

            <div className="rounded-md border border-neutral-200 bg-neutral-50 p-5">
              <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Recovery strategy 2
              </div>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] tracking-[0.12em]">
                {recovery.map((r, i) => (
                  <React.Fragment key={r}>
                    <span
                      className={cn(
                        "rounded-sm border px-2 py-1",
                        step > 14 + i ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300 text-neutral-400"
                      )}
                    >
                      {r}
                    </span>
                    {i < recovery.length - 1 && <span className="text-neutral-400">→</span>}
                  </React.Fragment>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-neutral-500">
                On page failure the runner re-observes, re-grounds the target, retries,
                verifies, and saves a checkpoint before resuming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
