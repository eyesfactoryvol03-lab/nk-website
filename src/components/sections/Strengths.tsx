"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Receipt, MapPin, Handshake } from "lucide-react";
import { STRENGTHS } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shield-check": ShieldCheck,
  receipt: Receipt,
  "map-pin": MapPin,
  handshake: Handshake,
};

export function Strengths() {
  return (
    <section id="strengths" className="py-24 bg-gradient-to-b from-white to-[#f7fbfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="選ばれる理由" subtitle="Our Strengths" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STRENGTHS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-sm bg-background-alt hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  {Icon && <Icon className="w-7 h-7 text-primary-dark" />}
                </div>
                <h3 className="text-lg font-semibold mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
