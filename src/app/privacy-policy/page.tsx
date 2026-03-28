import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${COMPANY.name}のプライバシーポリシーです。個人情報の取り扱いについてご案内しています。`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-24 bg-background-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold tracking-wide mb-3">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-text-secondary tracking-widest uppercase font-sans">
            Privacy Policy
          </p>
          <div className="mt-4 w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm">
          <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
            <p>
              {COMPANY.name}（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定め、個人情報の適切な取り扱いに努めます。
            </p>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3 tracking-wide">
                1. 個人情報の定義
              </h2>
              <p>
                本プライバシーポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報を指し、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報を指します。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3 tracking-wide">
                2. 個人情報の収集
              </h2>
              <p>
                当社は、お問い合わせフォームを通じて、以下の個人情報を収集することがあります。
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>お名前</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>お問い合わせ内容</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3 tracking-wide">
                3. 個人情報の利用目的
              </h2>
              <p>
                当社が収集した個人情報は、以下の目的で利用いたします。
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>お問い合わせへの対応・ご連絡</li>
                <li>お見積もりの作成・ご提示</li>
                <li>工事に関するご案内・ご連絡</li>
                <li>サービスの改善・向上</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3 tracking-wide">
                4. 個人情報の第三者提供
              </h2>
              <p>
                当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>お客様の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>
                  人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難である場合
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3 tracking-wide">
                5. 個人情報の管理
              </h2>
              <p>
                当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、紛失、破損、改ざん、漏洩などを防止するため、適切なセキュリティ対策を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3 tracking-wide">
                6. 個人情報の開示・訂正・削除
              </h2>
              <p>
                お客様からの個人情報の開示・訂正・削除のご請求があった場合、本人確認の上、速やかに対応いたします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3 tracking-wide">
                7. プライバシーポリシーの変更
              </h2>
              <p>
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-3 tracking-wide">
                8. お問い合わせ先
              </h2>
              <p>
                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <div className="mt-3 p-4 bg-background-alt rounded-sm">
                <p className="font-semibold text-text-primary">
                  {COMPANY.name}
                </p>
                <p className="mt-1">{COMPANY.address}</p>
                <p className="mt-1 font-sans">TEL: {COMPANY.tel}</p>
              </div>
            </section>

            <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
              制定日：2026年3月28日
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
