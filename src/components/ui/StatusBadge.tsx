import * as React from "react";
import { cn } from "@/lib/utils";

export type Status = "ok" | "warn" | "error" | "idle" | "active";

const map: Record<Status, { label: string; cls: string }> = {
  ok: { label: "OK", cls: "border-neutral-400 text-neutral-700 bg-neutral-50" },
  warn: { label: "WARN", cls: "border-neutral-500 text-neutral-900 bg-neutral-200" },
  error: { label: "FAULT", cls: "bg-neutral-900 text-white" },
  idle: { label: "IDLE", cls: "border border-dashed border-neutral-300 text-neutral-400" },
  active: { label: "ACTIVE", cls: "bg-neutral-900 text-white" },
};

export const StatusBadge: React.FC<{
  status?: Status;
  label?: string;
  className?: string;
}> = ({ status = "idle", label, className }) => {
  const s = map[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.14em] uppercase",
        s.cls,
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "error" || status === "active"
            ? "bg-white"
            : status === "warn"
              ? "bg-neutral-900"
              : "bg-neutral-400"
        )}
      />
      {label ?? s.label}
    </span>
  );
};
