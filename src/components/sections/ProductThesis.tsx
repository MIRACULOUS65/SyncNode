import * as React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  { title: "Human expertise", note: "An operator who knows the workflow." },
  { title: "Demonstrated procedure", note: "The expert performs the task once, in the browser." },
  { title: "Compiled skill", note: "SyncNode distills the session into structured procedure." },
  { title: "Persistent execution", note: "The skill runs across long multi-step workflows." },
  { title: "Verified result", note: "Every consequential step is checked against policy." },
  { title: "Adaptive reusable capability", note: "The skill survives interface change and is reused." },
];

export function ProductThesis() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product Thesis"
          title="From browser automation to reusable machine capability."
          description="Most automation repeats instructions. SyncNode converts demonstrated human expertise into a durable, verifiable capability that the system owns."
        />
        <ol className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative flex flex-col gap-3 rounded-md border border-neutral-200 bg-white p-5"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-semibold leading-snug text-neutral-900">
                {s.title}
              </p>
              <p className="text-xs leading-relaxed text-neutral-500">{s.note}</p>
              {i < steps.length - 1 && (
                <>
                  <ArrowRight className="absolute -right-[13px] top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-neutral-400 lg:block" />
                  <ArrowDown className="absolute -bottom-5 left-1/2 h-4 w-4 -translate-x-1/2 text-neutral-300 sm:hidden" />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
