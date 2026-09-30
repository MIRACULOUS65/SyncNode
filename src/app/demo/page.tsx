"use client";

import * as React from "react";
import { PageShell, PageSection } from "@/components/layout/PageShell";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

/* ---------- 1. Teach New Skill ---------- */
function TeachDemo() {
  const [step, setStep] = React.useState(0);
  const steps = [
    "Select spacecraft",
    "Open health",
    "Choose 1-hour range",
    "Open thermal",
    "Export data",
    "Generate summary",
  ];
  const done = step >= steps.length;
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-md border border-neutral-200 bg-neutral-950 p-6 text-white">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            Demonstration recording
          </span>
          <Button size="sm" variant="inverse" onClick={() => { setStep(0); }}>
            {step === 0 ? "Start Teaching" : "Restart"}
          </Button>
        </div>
        <ol className="flex flex-col gap-2">
          {steps.map((s, i) => (
            <li
              key={s}
              className={cn(
                "rounded-sm border px-3 py-2 font-mono text-[11px] tracking-[0.12em]",
                i < step ? "border-neutral-700 bg-neutral-900 text-white" : "border-neutral-800 text-neutral-600"
              )}
            >
              {String(i + 1).padStart(2, "0")} · {s}
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col justify-between rounded-md border border-neutral-200 bg-white p-6">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Compile result
          </span>
          <p className="mt-2 text-lg font-semibold">Generate Thermal Health Summary</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["6", "actions learned"],
              ["4", "verification conditions"],
              ["3", "privacy constraints"],
              ["2", "recovery strategies"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-sm border border-neutral-200 bg-neutral-50 px-3 py-2">
                <div className="font-mono text-lg font-semibold">{v}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-500">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <Button
          className="mt-6"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.min(s + 2, steps.length))}
        >
          {done ? "Skill Compiled ✓" : "Next Demonstration Step"}
        </Button>
      </div>
    </div>
  );
}

/* ---------- 2. Run Learned Skill ---------- */
function RunDemo() {
  const [phase, setPhase] = React.useState<"idle" | "running" | "verified">("idle");
  React.useEffect(() => {
    if (phase !== "running") return;
    const id = setTimeout(() => setPhase("verified"), 1600);
    return () => clearTimeout(id);
  }, [phase]);
  return (
    <div className="rounded-md border border-neutral-200 bg-white p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-semibold">Generate Thermal Health Summary</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            Skill v3 · compiled from demonstration
          </p>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge
            status={phase === "verified" ? "ok" : phase === "running" ? "active" : "idle"}
            label={phase === "verified" ? "Verified" : phase === "running" ? "Running" : "Idle"}
          />
          <Button
            size="sm"
            disabled={phase === "running"}
            onClick={() => setPhase(phase === "verified" ? "idle" : "running")}
          >
            {phase === "verified" ? "Reset" : "Run Skill"}
          </Button>
        </div>
      </div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-neutral-100">
        <div
          className={cn(
            "h-full bg-neutral-900 transition-all duration-700",
            phase === "idle" ? "w-0" : phase === "running" ? "w-2/3" : "w-full"
          )}
        />
      </div>
      <div className="mt-4 flex flex-col gap-1 font-mono text-[11px] tracking-[0.1em] text-neutral-500">
        <span>{phase !== "idle" ? "→ select spacecraft SYN-01 · ok" : "→ waiting"}</span>
        <span>{phase !== "idle" ? "→ open health dashboard · ok" : ""}</span>
        <span>{phase !== "idle" ? "→ export thermal data · ok" : ""}</span>
        <span>{phase === "verified" ? "→ summary generated · verified ✓" : ""}</span>
      </div>
    </div>
  );
}

/* ---------- 3. Adapt to Changed Interface ---------- */
function AdaptDemo() {
  const [step, setStep] = React.useState(0);
  const chain = ["RE-OBSERVE", "SCREEN GRAPH", "SEMANTIC MATCH", "VISUAL GROUNDING", "NEW TARGET", "EXECUTE", "VERIFY"];
  const done = step >= chain.length;
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-md border border-neutral-200 bg-neutral-950 p-6 text-white">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-sm border border-neutral-700 p-3">
            <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">Before</p>
            <p className="font-mono text-xs text-neutral-400">Thermal</p>
            <p className="mt-2"><StatusBadge status="error" label="Target Not Found" /></p>
          </div>
          <div className="rounded-sm border border-white p-3">
            <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">After</p>
            <p className="font-mono text-xs text-white">Thermal Health</p>
            <p className="mt-2"><StatusBadge status={done ? "ok" : "idle"} label={done ? "Grounded" : "Pending"} /></p>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-neutral-200 bg-white p-6">
        <ol className="flex flex-col gap-1.5">
          {chain.map((c, i) => (
            <li key={c} className={cn("flex items-center gap-2 font-mono text-[11px] tracking-[0.12em]", i < step ? "text-neutral-900" : "text-neutral-400")}>
              <span className={cn("flex h-4 w-4 items-center justify-center rounded-full border text-[8px]", i < step ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300")}>
                {i < step ? "✓" : ""}
              </span>
              {c}
            </li>
          ))}
        </ol>
        <div className="mt-5 flex items-center gap-3">
          <Button size="sm" disabled={done} onClick={() => setStep((s) => s + 1)}>
            {done ? "Equivalent target grounded ✓" : "Next Adaptation Step"}
          </Button>
          {done && <StatusBadge status="ok" label="Adapted" />}
        </div>
      </div>
    </div>
  );
}

/* ---------- 4. Privacy Attack ---------- */
function PrivacyDemo() {
  const [revealed, setRevealed] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const chain = ["RAW FRAME", "PII DETECTED", "CREDENTIAL FIELD DETECTED", "REDACTED", "SANITIZED CONTEXT ONLY"];
  const done = step >= chain.length;
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-md border border-neutral-200 bg-white p-6">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          Page contains sensitive data
        </p>
        <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs">
          <div className="flex justify-between py-1">
            <span className="text-neutral-500">operator</span>
            <span className={revealed ? "text-neutral-900" : "select-none blur-sm"}>A. Sharma</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-neutral-500">access-key</span>
            <span className={revealed ? "text-neutral-900" : "select-none blur-sm"}>sk-live-••••-4F2A</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-neutral-500">orbit-params</span>
            <span className="text-neutral-900">LEO · 505 km</span>
          </div>
        </div>
        <Button size="sm" variant="outline" className="mt-4" onClick={() => setRevealed((r) => !r)}>
          {revealed ? "Hide raw values" : "Peek raw values (before filtering)"}
        </Button>
      </div>
      <div className="rounded-md border border-neutral-900 bg-neutral-950 p-6 text-white">
        <ol className="flex flex-col gap-2">
          {chain.map((c, i) => (
            <li key={c} className={cn("rounded-sm border px-3 py-2 font-mono text-[11px] tracking-[0.12em]", i < step ? "border-neutral-700 bg-neutral-900 text-white" : "border-neutral-800 text-neutral-600")}>
              {String(i + 1).padStart(2, "0")} · {c}
            </li>
          ))}
        </ol>
        <Button size="sm" variant="inverse" className="mt-5" disabled={done} onClick={() => setStep((s) => s + 1)}>
          {done ? "Privacy proof produced ✓" : "Run Privacy Filter"}
        </Button>
      </div>
    </div>
  );
}

/* ---------- 5. Long-Horizon Execution ---------- */
function LongHorizonDemo() {
  const [running, setRunning] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const steps = [
    "Mission Portal", "Resume Session", "Locate Spacecraft", "Open Health Dashboard",
    "Inspect Power", "Inspect Thermal", "Thermal Page Failed", "Recovery: Strategy 2",
    "Re-Ground", "Retry Thermal", "Verify", "Checkpoint", "Inspect Attitude",
    "Generate Report", "Close Session",
  ];
  React.useEffect(() => {
    if (!running || step >= steps.length) return;
    const id = setTimeout(() => setStep((s) => s + 1), 350);
    return () => clearTimeout(id);
  }, [running, step]);
  const done = step >= steps.length;
  return (
    <div className="rounded-md border border-neutral-200 bg-neutral-50 p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          Mission health review · 15 steps (abridged)
        </span>
        <Button size="sm" onClick={() => { if (done) { setStep(0); setRunning(false); } else { setRunning(true); } }}>
          {done ? "Reset" : running ? "Running…" : "Start Execution"}
        </Button>
      </div>
      <ol className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li
            key={s}
            className={cn(
              "rounded-sm border px-2.5 py-2 font-mono text-[10px] leading-tight",
              i === 6 && i < step
                ? "border-neutral-900 bg-neutral-900 text-white"
                : i < step
                  ? "border-neutral-300 bg-white text-neutral-800"
                  : "border-neutral-200 text-neutral-400"
            )}
          >
            {String(i + 1).padStart(2, "0")} · {s}
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <StatusBadge status={done ? "ok" : running ? "active" : "idle"} label={done ? "Objective Complete" : running ? "Executing" : "Standby"} />
        {done && (
          <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-500">
            VERIFICATION PASSED · REPORT READY
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------- 6. Forensics mini ---------- */
function ForensicsMini() {
  const events = [
    { t: "T-42s", e: "Thermal trend begins rising" },
    { t: "T-31s", e: "Warning state detected" },
    { t: "T-18s", e: "Rate of change increases" },
    { t: "T-06s", e: "Threshold crossed" },
    { t: "T+00s", e: "Anomaly displayed" },
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-md border border-neutral-200 bg-white p-6">
        <ol className="relative flex flex-col gap-3 border-l border-neutral-300 pl-5">
          {events.map((f, i) => (
            <li key={f.t} className="relative">
              <span className={cn("absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full", i === events.length - 1 ? "bg-neutral-900" : "border border-neutral-400 bg-white")} />
              <div className="flex items-baseline gap-3">
                <span className="w-14 font-mono text-[10px] font-semibold">{f.t}</span>
                <span className="text-xs text-neutral-600">{f.e}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="rounded-md border border-neutral-200 bg-neutral-50 p-6">
        <div className="flex flex-col gap-2 font-mono text-[11px]">
          {[
            "EVIDENCE PACKAGE · 5 STATES, 12 VALUES",
            "DETECTED TRANSITIONS · 3",
            "ANALYSIS · TREND → WARNING → THRESHOLD",
            "VERIFICATION · RECONSTRUCTED ✓",
          ].map((l) => (
            <div key={l} className="border-b border-dashed border-neutral-300 py-1.5 tracking-[0.12em] text-neutral-700">
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- 7. Skill Versioning ---------- */
function VersioningDemo() {
  const versions = [
    { v: "v1", note: "Initial demonstration compiled" },
    { v: "v2", note: "Adapted: 'Thermal' → 'Thermal Health' (verified)" },
    { v: "v3", note: "Recovery strategy 2 added after page failure" },
  ];
  const [active, setActive] = React.useState("v3");
  return (
    <div className="rounded-md border border-neutral-200 bg-white p-6">
      <div className="flex flex-wrap gap-2">
        {versions.map((ver) => (
          <button
            key={ver.v}
            type="button"
            onClick={() => setActive(ver.v)}
            className={cn(
              "rounded-sm border px-3 py-1.5 font-mono text-[11px] tracking-[0.12em]",
              active === ver.v ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 text-neutral-500 hover:border-neutral-400"
            )}
          >
            {ver.v}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-neutral-700">
        {versions.find((v) => v.v === active)?.note}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
        Each adaptation is verified before it becomes the new version · full history retained
      </p>
    </div>
  );
}

export default function DemoPage() {
  return (
    <PageShell
      eyebrow="Interactive Demonstration"
      title="Every interaction on this page is a frontend simulation."
      description="Teach, run, adapt, attack privacy, execute long-horizon workflows, reconstruct events, and version skills — entirely in the browser."
    >
      <PageSection>
        <Tabs defaultValue="teach">
          <TabsList>
            <TabsTrigger value="teach">1 · Teach New Skill</TabsTrigger>
            <TabsTrigger value="run">2 · Run Learned Skill</TabsTrigger>
            <TabsTrigger value="adapt">3 · Adapt to Changed UI</TabsTrigger>
            <TabsTrigger value="privacy">4 · Privacy Attack</TabsTrigger>
            <TabsTrigger value="long">5 · Long-Horizon</TabsTrigger>
            <TabsTrigger value="forensics">6 · Forensics</TabsTrigger>
            <TabsTrigger value="versions">7 · Skill Versioning</TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="teach"><TeachDemo /></TabsContent>
            <TabsContent value="run"><RunDemo /></TabsContent>
            <TabsContent value="adapt"><AdaptDemo /></TabsContent>
            <TabsContent value="privacy"><PrivacyDemo /></TabsContent>
            <TabsContent value="long"><LongHorizonDemo /></TabsContent>
            <TabsContent value="forensics"><ForensicsMini /></TabsContent>
            <TabsContent value="versions"><VersioningDemo /></TabsContent>
          </div>
        </Tabs>
      </PageSection>
    </PageShell>
  );
}
