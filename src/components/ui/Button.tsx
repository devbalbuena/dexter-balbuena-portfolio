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
      "bg-[#8c532b] text-white shadow-xs hover:bg-[#734320] active:bg-[#5c3519] focus-visible:ring-[#8c532b]",
    secondary:
      "bg-[#f7f2ec] text-[#2c1d12] border border-[#e8ded3] shadow-2xs hover:bg-[#efe7dc] active:opacity-90",
    outline:
      "border border-[#dcd1c4] bg-white text-[#2c1d12] shadow-2xs hover:bg-[#f7f2ec]",
    ghost:
      "text-[#2c1d12] hover:bg-[#f7f2ec]",
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
