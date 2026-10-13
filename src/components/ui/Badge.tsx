import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "accent" | "warning";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[#f7efe6] text-[#8c532b] border-[#ebdccb] dark:bg-[#231d17] dark:text-[#d9a36f] dark:border-[#3d3126]",
    secondary:
      "bg-[#f0ebe3] text-[#5c5247] border-[#e3dacd] dark:bg-[#1e1a16] dark:text-[#b8aba0] dark:border-[#302821]",
    outline:
      "bg-transparent text-[#6e6356] border-[#ded4c5] dark:text-[#a89d91] dark:border-[#362e26]",
    success:
      "bg-emerald-50 text-emerald-800 border-emerald-200/70 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40",
    accent:
      "bg-[#eedfce] text-[#7a4621] border-[#e2cbaf] dark:bg-[#2e2319] dark:text-[#e2b07e] dark:border-[#4e3825]",
    warning:
      "bg-amber-50 text-amber-800 border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-medium rounded-md",
    md: "px-2.5 py-1 text-xs font-semibold rounded-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border font-mono tracking-tight transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}
