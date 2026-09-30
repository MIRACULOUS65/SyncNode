import type { Metadata } from "next";
import { PageShell, PageSection } from "@/components/layout/PageShell";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "Privacy & Security" };

const pillars = [
  {
    title: "Local Secret Vault",
    body: "Credentials and secrets stay in a local vault. Skills reference them indirectly through capability references, never inline.",
    claim: "Architecture",
  },
  {
    title: "Capability References",
    body: "Instead of handling raw secrets, skills hold scoped capability tokens that grant exactly the access a procedure needs — and nothing more.",
    claim: "Architecture",
  },
  {
    title: "Privacy Firewall",
    body: "Raw screen and DOM content are reduced to sanitized context before reasoning. Sensitive regions are detected and redacted on-device.",
    claim: "Architecture",
  },
  {
    title: "Instruction Trust Boundary",
    body: "Content observed in the browser is treated as untrusted data, never as instructions. Skill behavior cannot be rewritten by page content.",
    claim: "Architecture",
  },
  {
    title: "Risk-Adaptive Execution",
    body: "Actions are classified by risk. Low-risk steps proceed automatically; consequential steps trigger stricter verification or approval.",
    claim: "Architecture",
  },
  {
    title: "Human Approval Gate",
    body: "Irreversible or high-impact actions pause the run and request explicit human approval before proceeding.",
    claim: "Architecture",
  },
  {
    title: "Verification Engine",
    body: "Every consequential outcome is checked against the skill's verification conditions, producing pass/fail evidence per step.",
    claim: "Architecture",
  },
  {
    title: "Evidence Governance",
    body: "Evidence is bounded, privacy-filtered, and versioned — enough to reconstruct events, without retaining raw sensitive state.",
    claim: "Architecture",
  },
];

export default function SecurityPage() {
  return (
    <PageShell
      eyebrow="Privacy & Security"
      title="Trust is an architecture, not a marketing claim."
      description="SyncNode's security posture is defined by structure: local secrets, sanitized context, untrusted page content, risk-aware execution, and verified evidence. This page describes architecture — runtime measurements will come from the implementation, not this website."
    >
      <PageSection>
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>{p.title}</CardTitle>
                  <Badge variant="outline">{p.claim}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-neutral-600">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection title="What this page does not claim" kicker="HONEST BOUNDARIES" dark>
        <div className="max-w-3xl rounded-md border border-neutral-800 bg-neutral-900 p-6">
          <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-neutral-300">
            <li>· No benchmark numbers, threat-model results, or penetration tests are presented here.</li>
            <li>· No claims of zero network traffic, zero vulnerabilities, or total privacy are made.</li>
            <li>· This website is a frontend demonstration of a product concept — not proof of an implemented system.</li>
            <li>· Runtime measurements will be published only with a real, tested implementation.</li>
          </ul>
        </div>
      </PageSection>
    </PageShell>
  );
}
