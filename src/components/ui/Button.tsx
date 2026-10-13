import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer hover:-translate-y-0.5 active:translate-y-0";

  const variantStyles = {
    primary:
      "bg-[#a86e3b] text-white shadow-sm hover:bg-[#935d2d] active:bg-[#7e4f25] focus-visible:ring-[#c28b58] dark:bg-[#c28b58] dark:text-[#110f0d] dark:font-semibold dark:hover:bg-[#d49b6a]",
    secondary:
      "bg-muted text-foreground shadow-2xs hover:opacity-90 active:opacity-80",
    outline:
      "border border-border bg-card text-foreground shadow-2xs hover:bg-muted",
    ghost:
      "text-foreground hover:bg-muted",
  };

  const sizeStyles = {
    sm: "h-8 px-3 text-xs rounded-lg gap-1.5",
    md: "h-10 px-4 py-2 text-sm rounded-lg gap-2",
    lg: "h-12 px-6 text-base rounded-xl gap-2.5",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
