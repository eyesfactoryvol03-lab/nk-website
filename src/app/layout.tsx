import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | 解体工事のプロフェッショナル`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "東京都武蔵野市を拠点に、一都三県で家屋解体・内装解体・残置物撤去を行うN.K株式会社。確かな技術力と明朗な料金体系で、ご提案からお引渡しまでプロの仕事で応えます。",
  keywords: [
    "解体工事",
    "家屋解体",
    "内装解体",
    "残置物撤去",
    "武蔵野市",
    "三鷹市",
    "東京",
    "一都三県",
    "N.K株式会社",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | 解体工事のプロフェッショナル`,
    description:
      "ご提案からお引渡しまでプロの仕事で応える。一都三県対応の解体工事はN.K株式会社にお任せください。",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | 解体工事のプロフェッショナル`,
    description:
      "ご提案からお引渡しまでプロの仕事で応える。一都三県対応の解体工事はN.K株式会社にお任せください。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: COMPANY.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: COMPANY.name,
              description:
                "家屋解体・内装解体・残置物撤去を行う解体工事会社",
              url: COMPANY.url,
              telephone: COMPANY.tel,
              address: {
                "@type": "PostalAddress",
                streetAddress: "境1-4-12 エミールシティ102",
                addressLocality: "武蔵野市",
                addressRegion: "東京都",
                addressCountry: "JP",
              },
              areaServed: [
                { "@type": "State", name: "東京都" },
                { "@type": "State", name: "神奈川県" },
                { "@type": "State", name: "千葉県" },
                { "@type": "State", name: "埼玉県" },
              ],
              founder: {
                "@type": "Person",
                name: COMPANY.representative,
              },
              foundingDate: "2023-10-05",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
