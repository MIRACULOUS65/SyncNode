"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const chain = [
  "RE-OBSERVE",
  "SCREEN GRAPH",
  "SEMANTIC MATCH",
  "VISUAL GROUNDING",
  "NEW TARGET",
  "EXECUTE",
  "VERIFY",
];

export function AdaptationDemo() {
  const [started, setStarted] = React.useState(false);
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (!started || step >= chain.length) return;
    const id = setTimeout(() => setStep((s) => s + 1), 700);
    return () => clearTimeout(id);
  }, [started, step]);

  const done = step >= chain.length;

  const reset = () => {
    setStarted(false);
    setStep(0);
  };

  return (
    <section className="bg-neutral-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          eyebrow="Adaptive Execution"
          title="The interface changed. The skill didn't break."
          description="Skills encode procedures and semantic targets — not brittle coordinate macros. When the interface changes, SyncNode re-grounds and continues."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Before/after UI */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1 rounded-md border border-neutral-800 bg-neutral-900 p-4">
                <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  Before
                </div>
                <div className="rounded-sm border border-neutral-700 px-3 py-2 font-mono text-xs text-neutral-400">
                  Thermal
                </div>
                <div className="mt-3">
                  <StatusBadge status="error" label="Target Not Found" />
                </div>
              </div>
              <div className="flex-1 rounded-md border border-neutral-700 bg-neutral-900 p-4">
                <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  After
                </div>
                <div className="rounded-sm border border-white px-3 py-2 font-mono text-xs text-white">
                  Thermal Health
                </div>
                <div className="mt-3">
                  <StatusBadge
                    status={done ? "ok" : "idle"}
                    label={done ? "Grounded" : "Pending"}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md border border-neutral-800 bg-neutral-900 p-5">
              <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Adaptation log
              </div>
              <ol className="flex flex-col gap-1.5">
                {chain.map((c, i) => (
                  <li
                    key={c}
                    className={cn(
                      "flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] transition-all duration-300",
                      i < step ? "text-white" : "text-neutral-700"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-4 w-4 items-center justify-center rounded-full border text-[8px]",
                        i < step ? "border-neutral-900 bg-white text-neutral-900" : "border-neutral-700"
                      )}
                    >
                      {i < step ? "✓" : ""}
                    </span>
                    {c}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Result panel */}
          <div className="flex flex-col justify-between rounded-md border border-neutral-800 bg-neutral-900 p-6">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Outcome
              </span>
              <p
                className={cn(
                  "text-2xl font-semibold tracking-tight transition-colors",
                  done ? "text-white" : "text-neutral-600"
                )}
              >
                {done ? "Equivalent target grounded" : "Awaiting adaptation"}
              </p>
              <p className="max-w-md text-sm leading-relaxed text-neutral-400">
                {done
                  ? "The learned procedure matched the renamed control through its semantic description and visual role, re-grounded, executed, and verified the result."
                  : "Run the adaptation to watch SyncNode re-observe the screen, build a screen graph, match semantics, and ground the new target."}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {!started ? (
                <Button variant="inverse" onClick={() => setStarted(true)}>
                  Simulate Interface Change
                </Button>
              ) : (
                <>
                  <StatusBadge status={done ? "ok" : "active"} label={done ? "Adapted" : "Adapting"} />
                  <Button size="sm" variant="inverse-outline" onClick={reset}>
                    Reset
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
