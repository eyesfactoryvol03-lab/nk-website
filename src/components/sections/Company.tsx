"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { COMPANY } from "@/lib/constants";
import { STOCK_IMAGE_ALTS, STOCK_IMAGES } from "@/lib/stockImages";

const COMPANY_INFO = [
  { label: "会社名", value: COMPANY.name },
  { label: "代表者", value: COMPANY.representative },
  { label: "所在地", value: COMPANY.address },
  { label: "設立", value: COMPANY.established },
  { label: "事業内容", value: COMPANY.business },
  { label: "対応エリア", value: COMPANY.area },
  { label: "電話番号", value: COMPANY.tel, isPhone: true },
] as const;

export function Company() {
  return (
    <section id="company" className="py-24 bg-[#f0f7fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="会社概要" subtitle="Company" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[16/9] mb-8 rounded-sm overflow-hidden shadow-md">
              <Image
                src={STOCK_IMAGES.company}
                alt={STOCK_IMAGE_ALTS.company}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent pointer-events-none" />
            </div>
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {COMPANY_INFO.map((item, index) => (
                    <tr
                      key={item.label}
                      className={
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <th className="px-6 py-4 text-left font-semibold text-text-primary w-1/3 tracking-wide">
                        {item.label}
                      </th>
                      <td className="px-6 py-4 text-text-secondary">
                        {"isPhone" in item && item.isPhone ? (
                          <a
                            href={`tel:${item.value}`}
                            className="font-sans hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="font-semibold">アクセス：</span>
                JR中央線 武蔵境駅より徒歩約5分
              </p>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-sm overflow-hidden shadow-sm"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.543!3d35.703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5p2x5Lqs6YO95q2m6JW96YeO5biC5aKD!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="N.K株式会社 所在地"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
