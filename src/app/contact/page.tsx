"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  tel: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xqeodyzb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          tel: formData.tel,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch {
      setError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-2xl font-semibold mb-4 tracking-wide">
            お問い合わせありがとうございます
          </h1>
          <p className="text-text-secondary leading-relaxed mb-8">
            お問い合わせ内容を確認の上、担当者より折り返しご連絡いたします。
            <br />
            通常2営業日以内にご返信いたします。
          </p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary-dark transition-colors"
          >
            トップページに戻る
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold tracking-wide mb-3">
            お問い合わせ
          </h1>
          <p className="text-sm text-text-secondary tracking-widest uppercase font-sans">
            Contact
          </p>
          <div className="mt-4 w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4 tracking-wide">
                お問い合わせ方法
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                お電話またはフォームからお気軽にお問い合わせください。
                お見積もりは無料です。
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`tel:${COMPANY.tel}`}
                className="flex items-center gap-4 p-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-sans">
                    お電話でのお問い合わせ
                  </p>
                  <p className="font-semibold font-sans tracking-wider">
                    {COMPANY.tel}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-sm shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-sans">
                    メールでのお問い合わせ
                  </p>
                  <p className="text-sm text-text-secondary">
                    下記フォームよりお送りください
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-sm shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-sans">
                    所在地
                  </p>
                  <p className="text-sm">{COMPANY.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 sm:p-10 rounded-sm shadow-sm"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 tracking-wide"
                  >
                    お名前
                    <span className="text-red-500 ml-1 text-xs font-sans">
                      必須
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm font-sans"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 tracking-wide"
                  >
                    メールアドレス
                    <span className="text-red-500 ml-1 text-xs font-sans">
                      必須
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm font-sans"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tel"
                    className="block text-sm font-semibold mb-2 tracking-wide"
                  >
                    電話番号
                    <span className="text-red-500 ml-1 text-xs font-sans">
                      必須
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    required
                    value={formData.tel}
                    onChange={(e) =>
                      setFormData({ ...formData, tel: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm font-sans"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 tracking-wide"
                  >
                    お問い合わせ内容
                    <span className="text-red-500 ml-1 text-xs font-sans">
                      必須
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm font-sans resize-vertical"
                    placeholder="ご質問やお見積もりのご依頼など、お気軽にご記入ください。"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-600 text-sm rounded-sm">
                    {error}
                  </div>
                )}

                <div className="text-xs text-text-secondary leading-relaxed">
                  <p>
                    ご入力いただいた個人情報は、お問い合わせへの対応にのみ使用いたします。
                    詳細は
                    <a
                      href="/privacy-policy"
                      className="text-primary hover:text-primary-dark underline"
                    >
                      プライバシーポリシー
                    </a>
                    をご確認ください。
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-base font-medium rounded-sm hover:bg-primary-dark transition-colors tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "送信中..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      送信する
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
