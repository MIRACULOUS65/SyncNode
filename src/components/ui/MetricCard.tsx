import * as React from "react";
import { cn } from "@/lib/utils";
import { StatusBadge, type Status } from "./StatusBadge";

export interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  status?: Status;
  series?: number[];
  className?: string;
}

function Sparkline({ series, className }: { series: number[]; className?: string }) {
  if (series.length < 2) return null;
  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = max - min || 1;
  const w = 100;
  const h = 24;
  const pts = series.map((v, i) => {
    const x = (i / (series.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={cn("h-6 w-full text-neutral-400", className)}
      aria-hidden="true"
    >
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  status = "ok",
  series,
  className,
}) => (
  <div
    className={cn(
      "rounded-md border border-neutral-200 bg-white p-4 flex flex-col gap-2",
      className
    )}
  >
    <div className="flex items-center justify-between gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
        {label}
      </span>
      <StatusBadge status={status} />
    </div>
    <div className="font-mono text-2xl font-medium tabular-nums tracking-tight">
      {value}
      {unit && <span className="ml-1 text-sm text-neutral-400">{unit}</span>}
    </div>
    {series && <Sparkline series={series} />}
  </div>
);
