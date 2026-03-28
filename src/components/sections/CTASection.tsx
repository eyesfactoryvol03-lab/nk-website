"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#5A9BC2] to-[#7EB8D8] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-white text-primary-dark text-lg font-semibold rounded-sm hover:bg-gray-100 transition-colors tracking-wide shadow-lg"
            >
              お問い合わせフォーム
            </Link>
            <a
              href={`tel:${COMPANY.tel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white text-lg font-sans font-medium rounded-sm hover:bg-white/10 transition-colors"
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
