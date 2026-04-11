"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7CBCE0] via-[#8EC8E8] to-[#B3D9EE]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-10">
            お見積もりは無料です。
            <br className="hidden sm:block" />
            解体工事に関するご質問やご相談も承っております。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-lg bg-white/85 backdrop-blur-sm text-primary-dark text-lg font-semibold hover:bg-white/95 transition-all tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              お問い合わせフォーム
            </Link>
            <a
              href={`tel:${COMPANY.tel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-white/85 backdrop-blur-sm text-primary-dark text-lg font-sans font-semibold hover:bg-white/95 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.tel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
