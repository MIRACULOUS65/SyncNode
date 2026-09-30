import * as React from "react";
import { ArrowDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const browserClient = [
  "Screen Capture",
  "DOM / Accessibility",
  "Screen Graph",
  "Local Vision",
  "Privacy Fusion",
  "Redaction",
  "Privacy Firewall",
  "Action Validator",
  "Browser Executor",
  "Verification",
];

const core = [
  "Intent Engine",
  "Planner / Supervisor",
  "Reasoning Model",
  "Strong Local VLM",
  "Model Router",
  "Policy Engine",
  "Skill Compiler",
  "Long-Horizon Runner",
  "Skill Adaptation",
  "Memory",
  "Document Engine",
  "Timeline Engine",
];

function Box({
  title,
  items,
  dark,
}: {
  title: string;
  items: string[];
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "rounded-md border border-neutral-700 bg-neutral-950 p-5 text-white"
          : "rounded-md border border-neutral-200 bg-white p-5 shadow-sm"
      }
    >
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
        {title}
      </p>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((i) => (
          <li
            key={i}
            className={
              dark
                ? "rounded-sm border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.06em] text-neutral-300"
                : "rounded-sm border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.06em] text-neutral-700"
            }
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArchitectureOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Architecture Overview"
          title="Everything above the browser stays local."
          description="Capture and sanitization happen in the browser client; reasoning, planning, and skill compilation run in the local SyncNode core. Nothing leaves the device boundary."
        />

        <div className="mt-14 flex flex-col items-center gap-0">
          <span className="font-mono text-xs font-semibold tracking-[0.24em] text-neutral-900">
            USER
          </span>
          <ArrowDown className="my-2 h-4 w-4 text-neutral-400" />

          <div className="w-full">
            <Box title="Browser Client" items={browserClient} dark />
          </div>
          <ArrowDown className="my-2 h-4 w-4 text-neutral-400" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Sanitized Context
          </span>
          <ArrowDown className="my-2 h-4 w-4 text-neutral-400" />

          <div className="w-full">
            <Box title="Local SyncNode Core" items={core} dark />
          </div>
          <ArrowDown className="my-2 h-4 w-4 text-neutral-400" />

          <div className="grid w-full gap-3 sm:grid-cols-2">
            <Box title="Skill Memory" items={["Skill definitions", "Versions", "Recovery strategies", "Privacy proofs"]} />
            <Box title="Visual Forensics" items={["Bounded timeline", "Filtered states", "Transitions", "Evidence"]} />
          </div>
        </div>
      </div>
    </section>
  );
}
