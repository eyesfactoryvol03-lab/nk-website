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
        className={`inline-flex items-center justify-center border-2 border-primary text-primary font-medium rounded-sm hover:bg-primary hover:text-white transition-colors tracking-wide ${sizeClasses[size]} ${className}`}
      >
        無料お見積もり
      </Link>
    );
  }

  return (
    <Link
      href="/contact"
      className={`inline-flex items-center justify-center bg-primary text-white font-medium rounded-sm hover:bg-primary-dark transition-colors tracking-wide ${sizeClasses[size]} ${className}`}
    >
      お問い合わせはこちら
    </Link>
  );
}
