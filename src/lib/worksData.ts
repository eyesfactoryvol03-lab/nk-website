export type WorkData = {
  id: number;
  date: string;
  title: string;
  area: string;
  structure: string;
  description: string;
  images?: {
    before?: string;
    after: string[];
  };
};

export const WORKS_DATA: WorkData[] = [
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
  {
    id: 4,
    date: "2026年1月",
    title: "解体工事",
    area: "松戸市三矢小台",
    structure: "木造",
    description:
      "大きな建物でしたので期間はかかりましたが、近隣に配慮を忘れず作業します。",
    images: {
      before: "/images/works/miyakodai-before.png",
      after: ["/images/works/miyakodai-after.png"],
    },
  },
  {
    id: 5,
    date: "2026年1月",
    title: "解体工事",
    area: "川口市幸町",
    structure: "木造2階建て",
    description:
      "一都三県の解体工事を承っております。",
    images: {
      before: "/images/works/saiwaicho-before.png",
      after: ["/images/works/saiwaicho-after.png"],
    },
  },
  {
    id: 6,
    date: "2026年1月",
    title: "解体工事",
    area: "川崎市宮前区初山",
    structure: "木造2階建て",
    description:
      "隣地との距離がかなり狭い現場でしたが、手壊しと重機を併用して丁寧に作業しました。",
    images: {
      before: "/images/works/hatsuyama-before.png",
      after: ["/images/works/hatsuyama-after.png"],
    },
  },
  {
    id: 7,
    date: "2025年12月",
    title: "解体工事",
    area: "上尾市中妻",
    structure: "木造",
    description:
      "まずは土を道路に出さない。終了後はしっかり清掃を実施します。",
    images: {
      before: "/images/works/nakatsuma-before.png",
      after: ["/images/works/nakatsuma-after.png"],
    },
  },
  {
    id: 8,
    date: "2025年12月",
    title: "解体工事",
    area: "足立区中川",
    structure: "木造2階建て",
    description:
      "都内狭小建物も近隣に十分注意し作業を進めています。",
    images: {
      before: "/images/works/nakagawa-before.png",
      after: ["/images/works/nakagawa-after.png"],
    },
  },
  {
    id: 9,
    date: "2025年12月",
    title: "解体工事",
    area: "川崎市高津区子母口",
    structure: "木造",
    description:
      "建物未登記、増築あり。現地確認をしてお見積もりをお出しします。",
    images: {
      before: "/images/works/shimoguchi-before.png",
      after: ["/images/works/shimoguchi-after.png"],
    },
  },
  {
    id: 10,
    date: "2025年11月",
    title: "解体工事",
    area: "川口市南鳩ヶ谷",
    structure: "木造",
    description:
      "内装を手作業ではがし分別リサイクルを徹底しています。",
    images: {
      before: "/images/works/minamihatogaya-before.png",
      after: ["/images/works/minamihatogaya-after.png"],
    },
  },
  {
    id: 11,
    date: "2025年11月",
    title: "解体工事",
    area: "草加市新里町",
    structure: "木造",
    description:
      "作業後の清掃もしっかりとしてからお引き渡しをいたします。",
    images: {
      before: "/images/works/niisatomachi-before.png",
      after: ["/images/works/niisatomachi-after.png"],
    },
  },
  {
    id: 12,
    date: "2025年11月",
    title: "解体工事",
    area: "中野区上鷺宮",
    structure: "木造",
    description:
      "作業後の清掃もしっかりとしてからお引き渡しをいたします。",
    images: {
      before: "/images/works/kamisaginomiya-before.png",
      after: ["/images/works/kamisaginomiya-after.png"],
    },
  },
  {
    id: 13,
    date: "2025年10月",
    title: "解体工事",
    area: "江戸川区東小岩",
    structure: "木造",
    description:
      "隣地との距離が近く車も停まっているため裏までしっかり養生しております。",
    images: {
      before: "/images/works/higashikoiwa-before.png",
      after: ["/images/works/higashikoiwa-after.png"],
    },
  },
  {
    id: 14,
    date: "2025年10月",
    title: "解体工事",
    area: "上尾市愛宕",
    structure: "木造",
    description:
      "植栽もご相談ください。抜根から整地までお見積もりをお出しします。",
    images: {
      before: "/images/works/ageo-before.png",
      after: ["/images/works/ageo-after.png"],
    },
  },
  {
    id: 15,
    date: "2025年9月",
    title: "解体工事",
    area: "三鷹市中原",
    structure: "木造",
    description:
      "防護シートぐるりと巻いてからの作業開始。",
    images: {
      before: "/images/works/nakahara-before.png",
      after: ["/images/works/nakahara-after.png"],
    },
  },
  {
    id: 16,
    date: "2025年9月",
    title: "解体工事",
    area: "練馬区立野町",
    structure: "木造",
    description:
      "敷地延長の奥まった土地でもお任せください。",
    images: {
      after: [
        "/images/works/tatenomachi-after1.png",
        "/images/works/tatenomachi-after2.png",
      ],
    },
  },
  {
    id: 17,
    date: "2025年8月",
    title: "解体工事",
    area: "杉並区高井戸東",
    structure: "木造",
    description:
      "間口の狭い現場も手壊しで丁寧に作業いたします。",
    images: {
      before: "/images/works/takaido-before.png",
      after: ["/images/works/takaido-after.png"],
    },
  },
];
