"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const TESTIMONIALS = [
  {
    id: 1,
    name: "T.S 様",
    area: "東京都武蔵野市",
    type: "木造住宅解体",
    rating: 5,
    comment:
      "見積もりの段階からとても丁寧にご説明いただき、安心してお任せできました。工期も予定通りで、近隣への配慮も万全でした。",
  },
  {
    id: 2,
    name: "K.M 様",
    area: "東京都三鷹市",
    type: "内装解体",
    rating: 5,
    comment:
      "他社と比較して見積もりが明朗で、追加費用もありませんでした。作業員の方々も礼儀正しく、信頼できる会社です。",
  },
  {
    id: 3,
    name: "Y.H 様",
    area: "埼玉県所沢市",
    type: "家屋解体",
    rating: 5,
    comment:
      "初めての解体工事で不安でしたが、工事の流れや注意点を事前にしっかり教えていただきました。仕上がりも大変満足しています。",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#fafcfe] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="お客様の声" subtitle="Voice" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-alt p-8 rounded-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                「{item.comment}」
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-text-secondary font-sans mt-1">
                  {item.area} / {item.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-secondary font-sans">
          ※ お客様の声は順次追加してまいります。
        </p>
      </div>
    </section>
  );
}
