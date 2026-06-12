import type { Metadata } from "next";
import Link from "next/link";
import { WORKS_DATA } from "@/lib/worksData";

export const metadata: Metadata = {
  title: "ブログ・お知らせ",
  description:
    "N.K株式会社のブログ・お知らせページです。解体工事に関する情報やお知らせを掲載しています。",
};

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  sortKey: string;
  category: string;
  excerpt: string;
};

const MANUAL_POSTS: BlogPost[] = [
  {
    slug: "greeting",
    title: "ホームページをリニューアルしました",
    date: "2026.03.28",
    sortKey: "2026-03-28",
    category: "お知らせ",
    excerpt:
      "N.K株式会社のホームページをリニューアルいたしました。解体工事に関する情報を発信してまいります。今後ともよろしくお願いいたします。",
  },
];

function parseWorksDate(date: string): { display: string; sortKey: string } {
  const match = date.match(/(\d{4})年(\d{1,2})月/);
  if (!match) return { display: date, sortKey: "0000-00-00" };
  const [, year, month] = match;
  return {
    display: `${year}.${month.padStart(2, "0")}.01`,
    sortKey: `${year}-${month.padStart(2, "0")}-01`,
  };
}

function generateWorksPosts(): BlogPost[] {
  return WORKS_DATA.map((work) => {
    const { display, sortKey } = parseWorksDate(work.date);
    return {
      slug: `works-${work.id}`,
      title: `実績を追加しました — ${work.area}`,
      date: display,
      sortKey,
      category: "実績紹介",
      excerpt: `${work.area}にて${work.title}が完了いたしました。${work.description}`,
    };
  });
}

function getAllPosts(): BlogPost[] {
  const worksPosts = generateWorksPosts();
  const allPosts = [...MANUAL_POSTS, ...worksPosts];
  return allPosts.sort((a, b) => b.sortKey.localeCompare(a.sortKey));
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-28 pb-24 bg-background-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold tracking-wide mb-3">
            ブログ・お知らせ
          </h1>
          <p className="text-sm text-text-secondary tracking-widest uppercase font-sans">
            Blog & News
          </p>
          <div className="mt-4 w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
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
      </div>
    </div>
  );
}
