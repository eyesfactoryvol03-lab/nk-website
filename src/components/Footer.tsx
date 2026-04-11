import Link from "next/link";
import Image from "next/image";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/logo-white.png"
            alt=""
            width={480}
            height={480}
            className="w-[320px] sm:w-[420px] h-auto opacity-30 select-none"
            aria-hidden="true"
          />
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/logo-white.png"
              alt={COMPANY.name}
              width={120}
              height={60}
              className="h-16 w-auto"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              {COMPANY.address}
            </p>
            <p className="text-sm font-sans text-gray-400">
              TEL:{" "}
              <a
                href={`tel:${COMPANY.tel}`}
                className="hover:text-primary-light transition-colors"
              >
                {COMPANY.tel}
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider mb-4">
              サイトマップ
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-primary-light transition-colors"
              >
                お問い合わせ
              </Link>
            </nav>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider mb-4">
              その他
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-primary-light transition-colors"
              >
                プライバシーポリシー
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-xs text-gray-500 font-sans space-y-1">
            <span className="block">
              掲載写真の一部は{" "}
              <a
                href="https://unsplash.com"
                className="text-gray-400 hover:text-primary-light underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
              のフリー素材を使用しています。
            </span>
            <span className="block mt-2">
              &copy; {new Date().getFullYear()} {COMPANY.name} All Rights
              Reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
