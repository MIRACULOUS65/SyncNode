import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "solid" | "inverse";

const variantMap: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-700 border border-neutral-200",
  outline: "border border-neutral-300 text-neutral-600",
  solid: "bg-neutral-900 text-white",
  inverse: "border border-neutral-700 text-neutral-300",
};

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }
>(({ className, variant = "default", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.14em] uppercase",
      variantMap[variant],
      className
    )}
    {...props}
  />
));
Badge.displayName = "Badge";

export { Badge };
