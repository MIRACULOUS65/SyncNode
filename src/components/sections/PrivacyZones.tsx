import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, ArrowRight } from "lucide-react";

const zones = [
  {
    id: "Zone 0",
    name: "Raw Browser",
    label: "STRICTLY LOCAL",
    items: ["Full Screen", "Raw DOM", "Credentials", "PII", "Mission Data"],
    dark: true,
  },
  {
    id: "Zone 1",
    name: "Local Sanitization",
    label: "PRIVACY FIREWALL",
    items: ["Detection", "OCR", "Visual Detection", "Redaction", "Sanitized DOM", "Sanitized Image"],
    dark: false,
  },
  {
    id: "Zone 2",
    name: "Sanitized Context",
    label: "EXPORT SET",
    items: ["Allowed Structure", "Allowed Visual Regions", "Task Metadata", "Privacy Proof"],
    dark: false,
  },
  {
    id: "Zone 3",
    name: "Reasoning",
    label: "LOCAL CORE",
    items: ["User Goal", "Sanitized Context", "Policy", "Skill", "Action Schema"],
    dark: false,
  },
  {
    id: "Zone 4",
    name: "Execution",
    label: "VALIDATED STRUCTURED ACTIONS ONLY",
    items: [],
    dark: true,
  },
];

export function PrivacyZones() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Privacy Architecture"
          title="The browser is the trust boundary."
          description="Sensitive content never needs to leave the local boundary: sanitization happens on-device, and only sanitized context is available to reasoning."
        />

        <div className="mt-14 overflow-x-auto">
          <div className="flex min-w-[900px] items-stretch gap-3 pb-2">
            {zones.map((z, i) => (
              <React.Fragment key={z.id}>
                <div
                  className={
                    "flex w-56 shrink-0 flex-col gap-3 rounded-md border p-4 " +
                    (z.dark
                      ? "border-neutral-900 bg-neutral-950 text-white"
                      : "border-neutral-200 bg-neutral-50 text-neutral-900")
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                      {z.id}
                    </span>
                    {z.id === "Zone 0" && <ShieldCheck className="h-3.5 w-3.5 text-white" />}
                  </div>
                  <span className="text-sm font-semibold">{z.name}</span>
                  <Badge variant={z.dark ? "inverse" : "outline"}>{z.label}</Badge>
                  {z.items.length > 0 && (
                    <ul className="flex flex-col gap-1.5 border-t border-dashed border-neutral-300 pt-2">
                      {z.items.map((it) => (
                        <li key={it} className="text-xs text-neutral-600">
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                  {z.items.length === 0 && (
                    <p className="text-xs text-neutral-400">
                      Only validated structured actions re-enter the browser.
                    </p>
                  )}
                </div>
                {i < zones.length - 1 && (
                  <div className="flex shrink-0 items-center">
                    <ArrowRight className="h-4 w-4 text-neutral-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-neutral-500">
          Architecture visualization. Only sanitized context crosses the privacy
          boundary; raw screen and DOM content remain local. This is a product
          architecture diagram, not a claim of a real-time deployment.
        </p>
      </div>
    </section>
  );
}
