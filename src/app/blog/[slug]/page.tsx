import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BLOG_POSTS: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    content: string;
  }
> = {
  greeting: {
    title: "ホームページを開設しました",
    date: "2026.03.28",
    category: "お知らせ",
    content: `N.K株式会社のホームページをご覧いただきありがとうございます。

この度、弊社のホームページを新たに開設いたしました。

弊社は東京都武蔵野市を拠点に、一都三県（東京都・神奈川県・千葉県・埼玉県）で家屋解体・内装解体・残置物撤去を承っております。

今後はこちらのブログにて、解体工事に関する豆知識や施工事例、お知らせなどを随時発信してまいります。

解体工事のご相談・お見積もりは無料で承っておりますので、お気軽にお問い合わせください。

今後とも N.K株式会社 をよろしくお願いいたします。`,
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return { title: "記事が見つかりません" };
  return {
    title: post.title,
    description: post.content.slice(0, 120),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-semibold mb-4">
          記事が見つかりません
        </h1>
        <Link
          href="/blog"
          className="text-primary hover:text-primary-dark transition-colors"
        >
          ブログ一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-background-alt">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          ブログ一覧に戻る
        </Link>

        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-xs text-text-secondary font-sans">
              {post.date}
            </time>
            <span className="text-xs px-3 py-1 bg-primary/10 text-primary-dark rounded-full font-sans">
              {post.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide mb-8 pb-6 border-b border-gray-100">
            {post.title}
          </h1>

          <div className="prose prose-sm max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-text-secondary leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
