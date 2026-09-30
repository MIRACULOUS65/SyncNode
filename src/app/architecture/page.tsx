import type { Metadata } from "next";
import { PageShell, PageSection } from "@/components/layout/PageShell";
import { ArchitectureOverview } from "@/components/sections/ArchitectureOverview";
import { PrivacyZones } from "@/components/sections/PrivacyZones";

export const metadata: Metadata = { title: "Architecture" };

const flow = [
  { k: "1 · PERCEIVE", d: "Screen capture, DOM / accessibility tree and Screen Graph built locally in the browser client." },
  { k: "2 · PROTECT", d: "Privacy fusion, redaction and the Privacy Firewall reduce raw state to sanitized context." },
  { k: "3 · REASON", d: "Intent Engine, Planner / Supervisor and local models choose the next validated action." },
  { k: "4 · EXECUTE", d: "Action Validator admits only structured actions; the Browser Executor performs them." },
  { k: "5 · VERIFY", d: "Verification checks outcomes against skill conditions before continuing." },
  { k: "6 · REMEMBER", d: "Skill Memory and Visual Forensics persist versions, evidence and bounded timelines." },
];

export default function ArchitecturePage() {
  return (
    <PageShell
      eyebrow="Architecture"
      title="One local core. Two memory planes. A hard privacy boundary."
      description="SyncNode runs entirely on-device: the browser client captures and sanitizes, the local core reasons and plans, and only structured actions re-enter the browser."
    >
      <PageSection title="End-to-end architecture" kicker="SYSTEM MAP">
        <ArchitectureOverview />
      </PageSection>

      <PageSection title="Privacy boundary" kicker="TRUST ZONES" dark>
        <PrivacyZones />
      </PageSection>

      <PageSection title="Execution flow" kicker="RUNTIME LOOP">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {flow.map((f) => (
            <li
              key={f.k}
              className="rounded-md border border-neutral-200 bg-white p-5"
            >
              <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-neutral-900">
                {f.k}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.d}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection title="Browser client & Local SyncNode core" kicker="COMPONENTS" dark>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-md border border-neutral-800 bg-neutral-900 p-6">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Browser Client
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {[
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
              ].map((i) => (
                <li
                  key={i}
                  className="rounded-sm border border-neutral-800 bg-neutral-950 px-3 py-2 font-mono text-[10px] text-neutral-300"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-neutral-800 bg-neutral-900 p-6">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Local SyncNode Core
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {[
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
              ].map((i) => (
                <li
                  key={i}
                  className="rounded-sm border border-neutral-800 bg-neutral-950 px-3 py-2 font-mono text-[10px] text-neutral-300"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
