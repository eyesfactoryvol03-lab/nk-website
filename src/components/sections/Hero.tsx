"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { STOCK_IMAGE_ALTS, STOCK_IMAGES } from "@/lib/stockImages";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src={STOCK_IMAGES.hero}
          alt={STOCK_IMAGE_ALTS.hero}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
      </div>

      {/* Glass card */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl lg:max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_8px_60px_rgba(0,0,0,0.12)] ring-1 ring-white/10 px-8 py-12 sm:px-12 sm:py-16">
            {/* Inner glass highlight */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" />

            <div className="relative text-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm sm:text-base text-white/80 tracking-[0.3em] mb-6 font-sans"
              >
                解体工事のプロフェッショナル
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
              >
                <span className="block">ご提案からお引渡しまで</span>
                <span className="block mt-2">
                  プロの仕事で応える
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="mt-8 text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed"
              >
                家屋解体・内装解体・残置物撤去まで、
                <br className="hidden sm:block" />
                一都三県の解体工事は{COMPANY.name}にお任せください。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary-dark text-white text-lg font-medium hover:bg-accent transition-all tracking-wide shadow-lg shadow-primary-dark/30 hover:shadow-xl hover:shadow-primary-dark/40 hover:-translate-y-0.5"
                >
                  無料お見積もり
                </Link>
                <a
                  href={`tel:${COMPANY.tel}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-primary-dark text-white text-lg font-sans font-medium hover:bg-accent transition-all shadow-lg shadow-primary-dark/30 hover:shadow-xl hover:shadow-primary-dark/40 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY.tel}
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="mt-6 text-xs text-white/60 font-sans"
              >
                お見積もり無料・お気軽にご相談ください
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
