import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  { k: "SEE", d: "Understand the current browser state." },
  { k: "PROTECT", d: "Detect and remove sensitive context before reasoning." },
  { k: "LEARN", d: "Convert human demonstrations into semantic skills." },
  { k: "PLAN", d: "Decompose the goal into a safe, ordered action plan." },
  { k: "EXECUTE", d: "Perform validated structured actions in the browser." },
  { k: "VERIFY", d: "Check outcomes against expected conditions and policy." },
  { k: "RECOVER", d: "Re-ground and retry when the interface changes or fails." },
  { k: "REMEMBER", d: "Persist skill state, versions and evidence locally." },
  { k: "ADAPT", d: "Re-ground skills to equivalent targets after UI change." },
];

export function HowItWorks() {
  return (
    <section className="bg-neutral-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How SyncNode Works"
          title="SEE LOCALLY. PROTECT LOCALLY. ACT WITH PROOF."
          description="A single operating loop: perceive the browser locally, protect sensitive context, learn procedures, and act only with verification."
        />
        <ol className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.k} className="relative">
              <div className="flex h-full items-start gap-4 rounded-md border border-neutral-200 bg-white p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-neutral-300 bg-neutral-50 font-mono text-[11px] font-semibold text-neutral-900">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-semibold tracking-[0.2em] text-neutral-900">
                    {s.k}
                  </span>
                  <span className="text-sm leading-relaxed text-neutral-600">
                    {s.d}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
