"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo-dark.png"
              alt={COMPANY.name}
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-primary-dark transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.tel}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-dark text-white text-sm font-sans font-medium rounded-sm hover:bg-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="tracking-wider">{COMPANY.tel}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-sm hover:bg-primary-dark transition-colors tracking-wide"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40">
          <nav className="flex flex-col p-6 gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 px-4 text-base font-medium text-text-primary hover:bg-secondary rounded-sm transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-4 border-gray-100" />
            <a
              href={`tel:${COMPANY.tel}`}
              className="flex items-center gap-3 py-3 px-4 text-base font-sans font-medium text-text-primary"
            >
              <Phone className="w-5 h-5 text-primary" />
              {COMPANY.tel}
            </a>
            <Link
              href="/contact"
              className="mt-2 flex items-center justify-center px-6 py-3 bg-primary text-white text-base font-medium rounded-sm hover:bg-primary-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
