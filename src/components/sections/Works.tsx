"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";

const WORKS_DATA = [
  {
    id: 1,
    date: "2026年5月",
    title: "木造2階建て住宅 解体工事",
    area: "大和市桜森",
    structure: "木造2階建て",
    description:
      "境界線上に伸びたブロックも丁寧にカットし仕上げます。",
    images: {
      before: "/images/works/yamato-before.png",
      after: ["/images/works/yamato-after.png"],
    },
  },
  {
    id: 2,
    date: "2026年4月",
    title: "木造2階建て住宅 解体工事",
    area: "横浜市磯子区杉田",
    structure: "木造2階建て",
    description:
      "重機の入れない敷地内段差の上部も手作業にて仕上げました。",
    images: {
      before: "/images/works/sugita-before.png",
      after: [
        "/images/works/sugita-after-front.png",
        "/images/works/sugita-after-upper.png",
      ],
    },
  },
  {
    id: 3,
    date: "2026年3月",
    title: "木造住宅 解体工事",
    area: "清瀬市元町",
    structure: "木造",
    description:
      "増築や未登記部分があっても現地調査にて事前にお見積もりをお出しします。",
    images: {
      before: "/images/works/kiyose-before.png",
      after: ["/images/works/kiyose-after.png"],
    },
  },
];

function WorkItem({ work, index }: { work: (typeof WORKS_DATA)[number]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-6 sm:p-8 text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
      >
        <span className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 text-primary-dark font-bold text-sm rounded-full font-sans">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {work.date && (
              <span className="px-2.5 py-0.5 bg-primary-dark text-white text-[11px] font-sans rounded-full">
                {work.date}
              </span>
            )}
            <h3 className="text-lg font-semibold tracking-wide">
              {work.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 text-xs font-sans text-text-secondary">
            <span>{work.area}</span>
            <span>／</span>
            <span>{work.structure}</span>
          </div>
        </div>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-text-secondary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-8 border-t border-gray-100 pt-6">
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {work.description}
              </p>

              {work.images && (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-text-secondary mb-2 tracking-wider font-sans">
                        ▼ 施工前
                      </p>
                      <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={work.images.before}
                          alt={`${work.title} 施工前`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          loading="eager"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-secondary mb-2 tracking-wider font-sans">
                        ▼ 施工後
                      </p>
                      <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={work.images.after[0]}
                          alt={`${work.title} 施工後`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>

                  {work.images.after.length > 1 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {work.images.after.slice(1).map((src, i) => (
                        <div
                          key={i}
                          className="relative aspect-[4/3] rounded-md overflow-hidden bg-gray-100"
                        >
                          <Image
                            src={src}
                            alt={`${work.title} 施工後 ${i + 2}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, 33vw"
                            loading="eager"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Works() {
  return (
    <section
      id="works"
      className="py-24 bg-gradient-to-b from-white to-[#fafcfe]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="実績紹介" subtitle="Works" />

        <div className="flex flex-col gap-4">
          {WORKS_DATA.map((work, index) => (
            <WorkItem key={work.id} work={work} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton size="lg" />
        </div>
      </div>
    </section>
  );
}
