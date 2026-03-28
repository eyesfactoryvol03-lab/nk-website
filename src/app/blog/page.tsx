import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ブログ・お知らせ",
  description:
    "N.K株式会社のブログ・お知らせページです。解体工事に関する情報やお知らせを掲載しています。",
};

const BLOG_POSTS = [
  {
    slug: "greeting",
    title: "ホームページを開設しました",
    date: "2026.03.28",
    category: "お知らせ",
    excerpt:
      "N.K株式会社のホームページを開設いたしました。解体工事に関する情報を発信してまいります。今後ともよろしくお願いいたします。",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28 pb-24 bg-background-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold tracking-wide mb-3">
            ブログ・お知らせ
          </h1>
          <p className="text-sm text-text-secondary tracking-widest uppercase font-sans">
            Blog & News
          </p>
          <div className="mt-4 w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <time className="text-xs text-text-secondary font-sans">
                  {post.date}
                </time>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary-dark rounded-full font-sans">
                  {post.category}
                </span>
              </div>
              <h2 className="text-lg font-semibold tracking-wide mb-2 hover:text-primary-dark transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {BLOG_POSTS.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary">
              現在、記事の準備中です。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
