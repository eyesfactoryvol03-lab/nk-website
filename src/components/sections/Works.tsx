"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";

const WORKS_DATA = [
  {
    id: 1,
    title: "木造2階建て住宅 解体工事",
    area: "東京都武蔵野市",
    structure: "木造2階建て",
    period: "約2週間",
    description: "老朽化した木造住宅の解体工事。近隣への配慮を徹底し、安全に施工いたしました。",
  },
  {
    id: 2,
    title: "店舗内装解体工事",
    area: "東京都三鷹市",
    structure: "内装解体",
    period: "約1週間",
    description: "飲食店の原状回復に伴う内装解体工事。営業時間外の作業で対応いたしました。",
  },
  {
    id: 3,
    title: "鉄骨造倉庫 解体工事",
    area: "埼玉県さいたま市",
    structure: "鉄骨造",
    period: "約3週間",
    description: "老朽化した鉄骨造倉庫の解体工事。廃材の適切な分別処理も実施いたしました。",
  },
];

export function Works() {
  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="実績紹介" subtitle="Works" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKS_DATA.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-alt rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Placeholder for Before/After photos */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-text-secondary font-sans">
                    施工写真
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-sans">
                    準備中
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 tracking-wide">
                  {work.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-sans text-text-secondary">
                  <span className="px-3 py-1 bg-white rounded-full">
                    {work.area}
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full">
                    {work.structure}
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full">
                    工期: {work.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton size="lg" />
        </div>
      </div>
    </section>
  );
}
