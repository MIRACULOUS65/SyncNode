import type { Metadata } from "next";
import { PageShell, PageSection } from "@/components/layout/PageShell";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "Capabilities" };

const groups = [
  {
    tag: "PRIMARY USP",
    title: "Visual Skill Compiler",
    body: "A human demonstrates a browser procedure once. SyncNode converts that demonstration into a structured, privacy-aware, risk-governed and verifiable skill — capturing intent, semantic procedure, visual grounding, privacy rules, risk policy, verification, recovery and version history.",
    points: [
      "Intent & semantic procedure capture",
      "Visual grounding without fixed coordinates",
      "Privacy rules attached at compile time",
      "Risk policy & verification conditions",
      "Recovery strategies & version history",
    ],
  },
  {
    tag: "EXECUTION",
    title: "Long-Horizon Skill Runner",
    body: "A learned skill can execute across extended multi-step workflows with persistent task state, checkpoints, recovery and verification — resuming cleanly after failures or interface changes.",
    points: [
      "Persistent task state & checkpoints",
      "Automatic recovery strategies",
      "Resume from last verified checkpoint",
      "Verification gates on consequential actions",
    ],
  },
  {
    tag: "MISSION SUPPORT",
    title: "Visual Mission Forensics",
    body: "SyncNode maintains a bounded, privacy-filtered temporal representation of selected browser-visible states and reconstructs what changed around an event or anomaly — timeline, transitions, values and evidence.",
    points: [
      "Bounded reconstruction windows",
      "Detected transitions & extracted values",
      "Analysis with verification status",
      "Exportable evidence package",
    ],
  },
  {
    tag: "ADAPTATION",
    title: "Adaptive Execution",
    body: "When the interface changes — a renamed control, a moved panel — SyncNode re-observes, builds a screen graph, matches semantics and grounds the equivalent target, so skills keep working.",
    points: [
      "Re-observe & screen graph",
      "Semantic match & visual grounding",
      "Equivalent target grounded",
      "No brittle coordinate macros",
    ],
  },
  {
    tag: "GOVERNANCE",
    title: "Verified Self-Improvement",
    body: "Skills improve through verified adaptation: each change is checked against verification conditions before it becomes the new version, producing an auditable version history.",
    points: [
      "Adaptation requires verification",
      "Auditable version history",
      "Rollback to prior skill versions",
      "Change provenance recorded",
    ],
  },
  {
    tag: "PRIVACY",
    title: "Domain-Aware Privacy",
    body: "Privacy rules are attached to skills and enforced during execution: credentials, PII and mission data are detected and redacted before any context is used for reasoning.",
    points: [
      "OCR & visual detection",
      "Redaction before reasoning",
      "Privacy proof with each run",
      "Skill-level privacy constraints",
    ],
  },
  {
    tag: "DOCUMENTS",
    title: "Document → Browser",
    body: "Procedures documented in PDFs or manuals can seed skill creation — the Document Engine bridges written procedure to executable browser skills.",
    points: [
      "Document Engine ingestion",
      "Procedure extraction",
      "Document-to-browser grounding",
      "Human review before compile",
    ],
  },
  {
    tag: "PERCEPTION",
    title: "Canvas / Visual Grounding",
    body: "Beyond DOM, SyncNode grounds targets visually — canvas, images, and non-standard UI — using a Screen Graph built from captured states.",
    points: [
      "Screen Graph representation",
      "Canvas & image targets",
      "Local vision models",
      "Role & semantic descriptions",
    ],
  },
  {
    tag: "COMPLEX FLOWS",
    title: "Multi-Tab Reasoning",
    body: "Workflows that span multiple browser tabs are planned and executed coherently, with state tracked across the whole session.",
    points: [
      "Cross-tab plans",
      "Session-level state",
      "Context fusion across tabs",
      "Verified handoffs",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <PageShell
      eyebrow="Capabilities"
      title="A capability stack for trustworthy browser work."
      description="Each capability is designed for high-assurance environments: learned procedures, local privacy enforcement, verified execution, and reconstructable history."
    >
      <PageSection>
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((g) => (
            <Card key={g.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{g.tag}</Badge>
                </div>
                <CardTitle className="mt-2 text-lg">{g.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm leading-relaxed text-neutral-600">{g.body}</p>
                <ul className="mt-auto flex flex-col gap-1.5 border-t border-dashed border-neutral-200 pt-3">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-neutral-600">
                      <span className="h-1 w-1 rounded-full bg-neutral-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageSection>
    </PageShell>
  );
}
