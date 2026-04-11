import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface CTAButtonProps {
  variant?: "primary" | "outline" | "phone";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CTAButton({
  variant = "primary",
  size = "md",
  className = "",
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  if (variant === "phone") {
    return (
      <a
        href={`tel:${COMPANY.tel}`}
        className={`inline-flex items-center gap-2 font-sans font-medium text-text-primary hover:text-primary-dark transition-colors ${sizeClasses[size]} ${className}`}
      >
        <Phone className="w-5 h-5 text-primary" />
        <span className="tracking-wider">{COMPANY.tel}</span>
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <Link
        href="/contact"
        className={`inline-flex items-center justify-center bg-primary-dark text-white font-medium rounded-lg hover:bg-accent transition-all shadow-lg shadow-primary-dark/30 hover:shadow-xl hover:shadow-primary-dark/40 hover:-translate-y-0.5 tracking-wide ${sizeClasses[size]} ${className}`}
      >
        無料お見積もり
      </Link>
    );
  }

  return (
    <Link
      href="/contact"
      className={`inline-flex items-center justify-center bg-primary-dark text-white font-medium rounded-lg hover:bg-accent transition-all shadow-lg shadow-primary-dark/30 hover:shadow-xl hover:shadow-primary-dark/40 hover:-translate-y-0.5 tracking-wide ${sizeClasses[size]} ${className}`}
    >
      お問い合わせはこちら
    </Link>
  );
}
