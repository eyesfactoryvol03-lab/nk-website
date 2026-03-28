"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f7fc] via-white to-[#f5f5f5] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base text-text-secondary tracking-[0.3em] mb-6 font-sans"
          >
            解体工事のプロフェッショナル
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight"
          >
            <span className="block">ご提案からお引渡しまで</span>
            <span className="block mt-2 text-primary-dark">
              プロの仕事で応える
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            家屋解体・内装解体・残置物撤去まで、
            <br className="hidden sm:block" />
            一都三県の解体工事は{COMPANY.name}にお任せください。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-primary text-white text-lg font-medium rounded-sm hover:bg-primary-dark transition-colors tracking-wide shadow-lg shadow-primary/20"
            >
              無料お見積もり
            </Link>
            <a
              href={`tel:${COMPANY.tel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-gray-200 text-text-primary text-lg font-sans font-medium rounded-sm hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.tel}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 text-xs text-text-secondary font-sans"
          >
            お見積もり無料・お気軽にご相談ください
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
