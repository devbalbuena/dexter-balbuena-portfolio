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
      "bg-[#f7efe6] text-[#8c532b] border-[#ebdccb]",
    secondary:
      "bg-[#f0ebe3] text-[#5c5247] border-[#e3dacd]",
    outline:
      "bg-transparent text-[#6e6356] border-[#ded4c5]",
    success:
      "bg-emerald-50 text-emerald-800 border-emerald-200/70",
    accent:
      "bg-[#eedfce] text-[#7a4621] border-[#e2cbaf]",
    warning:
      "bg-amber-50 text-amber-800 border-amber-200/60",
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
