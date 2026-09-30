"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const steps = [
  "TEACH NEW SKILL",
  "SELECT SPACECRAFT",
  "OPEN HEALTH",
  "CHOOSE 1-HOUR RANGE",
  "OPEN THERMAL",
  "EXPORT DATA",
  "GENERATE SUMMARY",
];

const stats = [
  { label: "actions learned", value: "6" },
  { label: "verification conditions", value: "4" },
  { label: "privacy constraints", value: "3" },
  { label: "recovery strategies", value: "2" },
];

export function SkillCompilerDemo() {
  const [phase, setPhase] = React.useState<"idle" | "teaching" | "learned" | "running" | "verified">("idle");
  const [visibleSteps, setVisibleSteps] = React.useState(0);

  // Teaching animation
  React.useEffect(() => {
    if (phase !== "teaching") return;
    if (visibleSteps >= steps.length) {
      const done = setTimeout(() => setPhase("learned"), 400);
      return () => clearTimeout(done);
    }
    const id = setTimeout(() => setVisibleSteps((v) => v + 1), 500);
    return () => clearTimeout(id);
  }, [phase, visibleSteps]);

  // Running animation
  React.useEffect(() => {
    if (phase !== "running") return;
    const id = setTimeout(() => setPhase("verified"), 1800);
    return () => clearTimeout(id);
  }, [phase]);

  const reset = () => {
    setPhase("idle");
    setVisibleSteps(0);
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Flagship Demonstration"
          title="Teach a new procedure."
          description="An operator demonstrates a workflow once. SyncNode compiles it into a governed, verifiable skill that can be replayed autonomously."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Left: teach flow */}
          <div className="flex flex-col rounded-md border border-neutral-200 bg-neutral-950 p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Demonstration Session
              </span>
              {phase === "idle" ? (
                <Button size="sm" variant="inverse" onClick={() => setPhase("teaching")}>
                  Start Teaching
                </Button>
              ) : (
                <StatusBadge
                  status={phase === "verified" ? "ok" : "active"}
                  label={
                    phase === "learned" || phase === "verified"
                      ? "Compiled"
                      : phase === "running"
                        ? "Running"
                        : "Recording"
                  }
                />
              )}
            </div>
            <ol className="flex flex-1 flex-col justify-center gap-2">
              {steps.map((s, i) => {
                const visible = phase === "idle" || i < visibleSteps;
                return (
                  <li
                    key={s}
                    className={cn(
                      "flex items-center gap-3 rounded-sm border px-3 py-2 font-mono text-[11px] tracking-[0.14em] transition-all duration-300",
                      visible
                        ? "border-neutral-800 bg-neutral-900 text-neutral-200"
                        : "border-transparent bg-transparent text-neutral-700 opacity-30"
                    )}
                  >
                    <span className="text-neutral-500">{String(i + 1).padStart(2, "0")}</span>
                    {s}
                    {i < steps.length - 1 && <span className="ml-auto text-neutral-600">↓</span>}
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right: compiled skill result */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-1 flex-col rounded-md border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Compilation Result
                </span>
                <Badge variant={phase === "idle" ? "outline" : "solid"}>
                  {phase === "idle" ? "Awaiting" : "Skill Learned"}
                </Badge>
              </div>
              {phase === "idle" ? (
                <div className="flex flex-1 items-center justify-center rounded-sm border border-dashed border-neutral-300 p-8 text-center">
                  <p className="font-mono text-xs tracking-[0.14em] text-neutral-400">
                    AWAITING DEMONSTRATION
                  </p>
                </div>
              ) : (
                <div className="flex flex-1 flex-col gap-4">
                  <p className="text-lg font-semibold tracking-tight text-neutral-900">
                    Generate Thermal Health Summary
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-sm border border-neutral-200 bg-neutral-50 px-4 py-3"
                      >
                        <div className="font-mono text-xl font-semibold text-neutral-900">{s.value}</div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 p-4">
              {phase === "verified" ? (
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-3">
                    <StatusBadge status="ok" label="Verified" />
                    <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-500">
                      ALL CONDITIONS PASSED · REPORT READY
                    </span>
                  </div>
                  <Button size="sm" variant="outline" onClick={reset}>
                    Reset
                  </Button>
                </div>
              ) : (
                <>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-500">
                    {phase === "running" ? "EXECUTING · VERIFICATION ACTIVE" : "COMPILED SKILL READY"}
                  </span>
                  <Button
                    size="sm"
                    disabled={phase === "idle" || phase === "teaching" || phase === "running"}
                    onClick={() => setPhase("running")}
                  >
                    {phase === "running" ? "Running…" : "Run Skill"}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
