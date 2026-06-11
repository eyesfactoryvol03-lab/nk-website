export const COMPANY = {
  name: "N.K株式会社",
  nameEn: "N.K Co., Ltd.",
  representative: "池田 一輝",
  established: "2023年10月5日",
  business: "解体業（家屋解体・内装解体・残置物撤去）",
  address: "東京都武蔵野市境1-4-12 エミールシティ102",
  tel: "0422-38-4622",
  domain: "nk-00.com",
  url: "https://nk-00.com",
  area: "一都三県（東京都・神奈川県・千葉県・埼玉県）",
} as const;

export const NAV_ITEMS = [
  { label: "強み", href: "#strengths" },
  { label: "サービス", href: "#services" },
  { label: "実績紹介", href: "#works" },
  { label: "会社概要", href: "#company" },
  { label: "ブログ", href: "/blog" },
] as const;

export const PRICING = [
  {
    type: "木造",
    price: "27,000円〜",
    unit: "延べ床面積1坪あたり",
    note: "",
  },
  {
    type: "鉄骨造",
    price: "50,000円〜",
    unit: "延べ床面積1坪あたり",
    note: "",
  },
  {
    type: "RC造",
    price: "70,000円〜",
    unit: "延べ床面積1坪あたり",
    note: "",
  },
  {
    type: "内装解体",
    price: "15,000円〜",
    unit: "延べ床面積1坪あたり",
    note: "内容により変動",
  },
] as const;

export const STRENGTHS = [
  {
    title: "確かな技術力",
    description:
      "豊富な経験を持つ専門スタッフが、安全かつ丁寧な施工をお約束します。",
    icon: "shield-check",
  },
  {
    title: "明朗な料金体系",
    description:
      "事前の現地調査に基づく詳細なお見積もりで、追加費用の心配がありません。",
    icon: "receipt",
  },
  {
    title: "一都三県対応",
    description:
      "東京・神奈川・千葉・埼玉の幅広いエリアに対応いたします。",
    icon: "map-pin",
  },
  {
    title: "ワンストップ対応",
    description:
      "ご提案からお引渡しまで、すべての工程を一貫して対応いたします。",
    icon: "handshake",
  },
] as const;

export const WORKFLOW = [
  { step: 1, title: "お問い合わせ", description: "お電話またはフォームからお気軽にご連絡ください。" },
  { step: 2, title: "現地調査・お見積もり", description: "現場を確認し、無料でお見積もりをご提示いたします。" },
  { step: 3, title: "ご契約", description: "お見積もり内容にご納得いただけましたらご契約となります。" },
  { step: 4, title: "近隣挨拶・届出", description: "近隣への挨拶回りと必要な届出を代行いたします。" },
  { step: 5, title: "解体工事", description: "安全管理を徹底し、丁寧に施工いたします。" },
  { step: 6, title: "整地・お引渡し", description: "整地後、きれいな状態でお引渡しいたします。" },
] as const;
