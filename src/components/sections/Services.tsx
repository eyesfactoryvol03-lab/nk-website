"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { PRICING, WORKFLOW } from "@/lib/constants";
import { STOCK_IMAGE_ALTS, STOCK_IMAGES } from "@/lib/stockImages";

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#f5fafd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="サービス・料金" subtitle="Services & Pricing" />

        {/* Service Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              title: "家屋解体",
              description:
                "木造・鉄骨造・RC造など、あらゆる構造の建物解体に対応いたします。",
              image: STOCK_IMAGES.serviceHouse,
              imageAlt: STOCK_IMAGE_ALTS.serviceHouse,
            },
            {
              title: "内装解体",
              description:
                "店舗・オフィスの内装解体、原状回復工事を承ります。",
              image: STOCK_IMAGES.serviceInterior,
              imageAlt: STOCK_IMAGE_ALTS.serviceInterior,
            },
            {
              title: "残置物撤去",
              description:
                "建物内の残置物の撤去・処分も一括で対応いたします。",
              image: STOCK_IMAGES.serviceClearance,
              imageAlt: STOCK_IMAGE_ALTS.serviceClearance,
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
              <h3 className="text-xl font-semibold mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8 tracking-wide">
            料金目安
          </h3>
          <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#f0f7fc]">
                    <th className="px-6 py-4 text-left font-semibold text-text-primary tracking-wide">
                      工事種別
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-text-primary tracking-wide">
                      単価（税別）
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-text-primary tracking-wide">
                      単位
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-text-primary tracking-wide">
                      備考
                    </th>
                  </tr>
                </thead>
                <tbody className="font-sans">
                  {PRICING.map((item, index) => (
                    <tr
                      key={item.type}
                      className={
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="px-6 py-4 font-medium">{item.type}</td>
                      <td className="px-6 py-4 text-primary-dark font-semibold">
                        {item.price}
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        {item.unit}
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        {item.note || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="px-6 py-4 text-xs text-text-secondary border-t border-gray-100">
              ※ 上記は目安価格です。詳細は現地調査後のお見積もりにてご提示いたします。
            </p>
          </div>
        </motion.div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8 tracking-wide">
            工事の流れ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-sm shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 text-primary-dark font-bold text-sm rounded-full font-sans">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold mb-1 tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <CTAButton variant="outline" size="lg" />
        </div>
      </div>
    </section>
  );
}
