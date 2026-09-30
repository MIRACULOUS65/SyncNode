import * as React from "react";
import { cn } from "@/lib/utils";

export const SectionHeader: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}> = ({ eyebrow, title, description, align = "left", dark, className }) => (
  <div
    className={cn(
      "flex flex-col gap-3",
      align === "center" && "items-center text-center",
      className
    )}
  >
    {eyebrow && (
      <span
        className={cn(
          "font-mono text-[11px] uppercase tracking-[0.22em]",
          dark ? "text-neutral-400" : "text-neutral-500"
        )}
      >
        {eyebrow}
      </span>
    )}
    <h2
      className={cn(
        "max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
        dark ? "text-white" : "text-neutral-900"
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "max-w-2xl text-base leading-relaxed",
          dark ? "text-neutral-400" : "text-neutral-600"
        )}
      >
        {description}
      </p>
    )}
  </div>
);
