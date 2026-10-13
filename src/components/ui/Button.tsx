import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "alt" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "primary"
      : variant === "alt"
        ? "alt"
        : variant === "ghost"
          ? "ghost"
          : "outline";
  const sizeClass = size === "sm" ? "sm" : size === "lg" ? "lg" : "";

  const cls = `btn ${variantClass}${sizeClass}${disabled ? " disabled" : ""}${className ? ` ${className}` : ""}`;

  if (href) {
    return (
      <Link className={cls} href={href} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}
