import type { Metadata } from "next";
import { PageShell, PageSection } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About / Research Context"
      title="A research demonstrator for on-device visual perception."
      description="SyncNode began as a Smart India Hackathon project exploring how lightweight browser agents can perceive, learn and act without moving sensitive data off the device."
    >
      <PageSection title="SIH 26171" kicker="PROBLEM STATEMENT">
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-neutral-600">
          <p>
            <strong className="text-neutral-900">SIH 26171 — On-Device Visual Perception for
            Light-weight Browser Agents</strong> asks for browser agents that understand what
            they see directly on the device: no screenshots shipped to the cloud, no DOM
            dumps leaving the browser, and no dependence on external AI services.
          </p>
          <p>
            The problem class is real: high-assurance scientific and mission-support teams
            spend significant expert time on repetitive browser procedures — reviewing
            dashboards, exporting data, generating reports. Automating them safely requires
            perception that stays local, procedures that are verifiable, and execution that
            can be reconstructed.
          </p>
        </div>
      </PageSection>

      <PageSection title="Project vision" kicker="SYNCNODE" dark>
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-neutral-300">
          <p>
            SyncNode is our answer: a self-learning, privacy-preserving browser agent.
            &ldquo;Self-learning&rdquo; means procedural skill learning and verified adaptation — a
            human demonstrates a procedure once, the system compiles it into a governed
            skill, and the skill adapts when the interface changes. It does not mean
            autonomous foundation-model retraining.
          </p>
          <p>
            Three capabilities carry the product: the <strong className="text-white">Visual Skill
            Compiler</strong> turns demonstrations into structured skills; the{" "}
            <strong className="text-white">Long-Horizon Skill Runner</strong> executes them across
            extended workflows with checkpoints and recovery; and{" "}
            <strong className="text-white">Visual Mission Forensics</strong> reconstructs what
            changed around any event from a bounded, privacy-filtered memory.
          </p>
          <p>
            SyncNode does not control spacecraft or mission systems. It automates the
            browser-based workflows that surround such systems — always with verification,
            approval gates, and evidence.
          </p>
        </div>
      </PageSection>

      <PageSection title="What this website is" kicker="SCOPE">
        <div className="max-w-3xl rounded-md border border-neutral-200 bg-white p-6">
          <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-neutral-600">
            <li>· A frontend demonstration of the SyncNode product concept.</li>
            <li>· Every dashboard, telemetry value, timeline and log is synthetic and mocked.</li>
            <li>· A research demonstrator inspired by publicly documented scientific and mission-support workflow classes.</li>
            <li>· Not affiliated with, endorsed by, or connected to any space agency; no classified or internal system access is claimed or implied.</li>
          </ul>
        </div>
      </PageSection>
    </PageShell>
  );
}
