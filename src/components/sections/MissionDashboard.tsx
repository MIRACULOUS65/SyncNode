"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MetricCard } from "@/components/ui/MetricCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";

type Subsystem = "Power" | "Thermal" | "Attitude" | "Communication" | "Payload";

const subsystems: Subsystem[] = ["Power", "Thermal", "Attitude", "Communication", "Payload"];

const base: Record<Subsystem, { value: string; unit: string; status: "ok" | "warn" | "error"; series: number[] }> = {
  Power: { value: "28.4", unit: "V", status: "ok", series: [28.1, 28.2, 28.4, 28.3, 28.5, 28.4, 28.6, 28.4] },
  Thermal: { value: "41.2", unit: "°C", status: "warn", series: [38.0, 38.6, 39.2, 39.8, 40.4, 40.8, 41.0, 41.2] },
  Attitude: { value: "0.42", unit: "°", status: "ok", series: [0.5, 0.48, 0.45, 0.46, 0.44, 0.43, 0.42, 0.42] },
  Communication: { value: "dB-SN", unit: "", status: "ok", series: [70, 72, 71, 73, 72, 74, 73, 74] },
  Payload: { value: "NOMINAL", unit: "", status: "ok", series: [1, 1, 1, 1, 1, 1, 1, 1] },
};

const steps = [
  "Link margin check",
  "Eclipse power balance",
  "Thermal trend review",
  "Attitude drift correction",
];

export function MissionDashboard() {
  const [tab, setTab] = React.useState<Subsystem>("Power");
  const [acknowledged, setAcknowledged] = React.useState(false);
  const [reportReady, setReportReady] = React.useState(false);
  const [exported, setExported] = React.useState(false);
  const [step, setStep] = React.useState(0);

  const data = base[tab];

  React.useEffect(() => {
    if (step >= steps.length) return;
    const id = setTimeout(() => setStep((s) => s + 1), 900);
    return () => clearTimeout(id);
  }, [step, tab]);

  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Synthetic Mission Operations Dashboard · Research Demonstrator"
          title="Built for high-assurance scientific workflows."
          description="A synthetic operations console shows the class of workflow SyncNode is designed to learn: review telemetry, generate reports, export data, acknowledge alerts — verified at each step."
        />

        <div className="mt-14 overflow-hidden rounded-md border border-neutral-300 bg-white shadow-md">
          {/* Title bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 bg-neutral-100 px-4 py-2.5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
                SYN-01 · Spacecraft Console
              </span>
              <StatusBadge status="ok" label="Link OK" />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
              Synthetic data · research demonstrator
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-[200px_1fr_260px]">
            {/* Subsystem nav */}
            <div className="border-b border-neutral-200 bg-neutral-50 p-3 lg:border-b-0 lg:border-r">
              <div className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Subsystems
              </div>
              <div className="flex flex-wrap gap-1 lg:flex-col">
                {subsystems.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => { setTab(s); setStep(0); }}
                    className={cn(
                      "rounded-sm px-3 py-1.5 text-left font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                      tab === s
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-600 hover:bg-neutral-200"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="flex flex-col gap-4 border-b border-neutral-200 p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {tab} · Telemetry
                </span>
                <span className="font-mono text-[10px] tabular-nums text-neutral-400">
                  {new Date().toISOString().slice(0, 16).replace("T", " ")}Z
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <MetricCard label="Voltage" value={tab === "Power" ? data.value : "28.4"} unit="V" status="ok" series={base.Power.series} />
                <MetricCard label="Battery" value="86" unit="%" status="ok" series={[80, 82, 83, 84, 85, 85, 86, 86]} />
                <MetricCard label="Temperature" value={tab === "Thermal" ? data.value : "41.2"} unit="°C" status={tab === "Thermal" ? "warn" : "ok"} series={base.Thermal.series} />
                <MetricCard label="Attitude Error" value="0.42" unit="°" status="ok" series={base.Attitude.series} />
                <MetricCard label="Comm Status" value="LINK" status="ok" />
                <MetricCard label="Payload" value="ACTIVE" status="ok" />
              </div>
              <div>
                <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  Health review steps
                </div>
                <ul className="flex flex-col gap-1">
                  {steps.map((s, i) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-neutral-600">
                      <span
                        className={cn(
                          "flex h-4 w-4 items-center justify-center rounded-full border text-[8px] font-mono",
                          i < step ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300 text-neutral-400"
                        )}
                      >
                        {i < step ? "✓" : ""}
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-3 bg-neutral-50 p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Operator controls
              </span>
              <Button size="sm" variant="outline" onClick={() => setStep(0)}>
                View Health
              </Button>
              <Button size="sm" onClick={() => setReportReady(true)}>
                Generate Report
              </Button>
              <Button size="sm" variant="outline" onClick={() => setExported(true)}>
                Export Data
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setAcknowledged(true)}
                disabled={acknowledged}
              >
                {acknowledged ? "Alert Acknowledged" : "Acknowledge Alert"}
              </Button>
              <div className="mt-2 flex flex-col gap-2 rounded-sm border border-dashed border-neutral-300 p-3">
                {reportReady && (
                  <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-700">
                    REPORT GENERATED · SYN-01-2026-09-30
                  </span>
                )}
                {exported && (
                  <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-700">
                    TELEMETRY EXPORTED · CSV (SYNTHETIC)
                  </span>
                )}
                {acknowledged && (
                  <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-700">
                    THERMAL TREND ALERT ACKNOWLEDGED
                  </span>
                )}
                {!reportReady && !exported && !acknowledged && (
                  <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-400">
                    NO OPERATOR ACTIONS YET
                  </span>
                )}
              </div>
              <div className="mt-auto flex items-center gap-2">
                <StatusBadge status={tab === "Thermal" ? "warn" : "ok"} label={tab === "Thermal" ? "Thermal Trend" : "All Nominal"} />
              </div>
            </div>
          </div>

          {/* Footer strip */}
          <div className="border-t border-neutral-200 bg-neutral-100 px-4 py-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
              Synthetic Mission Operations Dashboard · Research Demonstrator · All data is mocked
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
