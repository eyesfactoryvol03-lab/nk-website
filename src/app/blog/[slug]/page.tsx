import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { WORKS_DATA, type WorkData } from "@/lib/worksData";

type ManualPost = {
  title: string;
  date: string;
  category: string;
  content: string;
};

const MANUAL_POSTS: Record<string, ManualPost> = {
  greeting: {
    title: "ホームページをリニューアルしました",
    date: "2026.03.28",
    category: "お知らせ",
    content: `N.K株式会社のホームページをご覧いただきありがとうございます。

この度、弊社のホームページをリニューアルいたしました。

弊社は東京都武蔵野市を拠点に、一都三県（東京都・神奈川県・千葉県・埼玉県）で家屋解体・内装解体・残置物撤去を承っております。

今後はこちらのブログにて、解体工事に関する豆知識や施工事例、お知らせなどを随時発信してまいります。

解体工事のご相談・お見積もりは無料で承っておりますので、お気軽にお問い合わせください。

今後とも N.K株式会社 をよろしくお願いいたします。`,
  },
};

function parseWorksDate(date: string): string {
  const match = date.match(/(\d{4})年(\d{1,2})月/);
  if (!match) return date;
  const [, year, month] = match;
  return `${year}.${month.padStart(2, "0")}.01`;
}

function getWorkById(id: number): WorkData | undefined {
  return WORKS_DATA.find((w) => w.id === id);
}

function parseWorksSlug(slug: string): number | null {
  const match = slug.match(/^works-(\d+)$/);
  return match ? parseInt(match[1], 10) : null;
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const manualSlugs = Object.keys(MANUAL_POSTS).map((slug) => ({ slug }));
  const worksSlugs = WORKS_DATA.map((w) => ({ slug: `works-${w.id}` }));
  return [...manualSlugs, ...worksSlugs];
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const manual = MANUAL_POSTS[slug];
  if (manual) return { title: manual.title, description: manual.content.slice(0, 120) };

  const workId = parseWorksSlug(slug);
  if (workId !== null) {
    const work = getWorkById(workId);
    if (work) {
      return {
        title: `実績を追加しました — ${work.area}`,
        description: `${work.area}にて${work.title}が完了いたしました。${work.description}`,
      };
    }
  }

  return { title: "記事が見つかりません" };
}

function WorksPostContent({ work }: { work: WorkData }) {
  return (
    <>
      <p className="text-text-secondary leading-relaxed mb-6">
        {work.area}にて{work.title}が完了いたしました。
      </p>
      <p className="text-text-secondary leading-relaxed mb-8">
        {work.description}
      </p>

      <div className="mb-4">
        <span className="text-xs px-3 py-1 bg-gray-100 text-text-secondary rounded-full font-sans">
          {work.area}
        </span>
        <span className="text-xs px-3 py-1 bg-gray-100 text-text-secondary rounded-full font-sans ml-2">
          {work.structure}
        </span>
      </div>

      {work.images && (
        <div className="space-y-6 mt-8">
          <div className={`grid grid-cols-1 ${work.images.before ? "sm:grid-cols-2" : ""} gap-6`}>
            {work.images.before && (
              <div>
                <p className="text-xs font-semibold text-text-secondary mb-2 tracking-wider font-sans">
                  ▼ 施工前
                </p>
                <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src={work.images.before}
                    alt={`${work.title} 施工前`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            )}
            <div>
              <p className="text-xs font-semibold text-text-secondary mb-2 tracking-wider font-sans">
                ▼ 施工後
              </p>
              <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-gray-100">
                <Image
                  src={work.images.after[0]}
                  alt={`${work.title} 施工後`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {work.images.after.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {work.images.after.slice(1).map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-md overflow-hidden bg-gray-100"
                >
                  <Image
                    src={src}
                    alt={`${work.title} 施工後 ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-10 pt-6 border-t border-gray-100">
        <p className="text-sm text-text-secondary leading-relaxed">
          解体工事のご相談・お見積もりは無料で承っております。お気軽にお問い合わせください。
        </p>
      </div>
    </>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const manualPost = MANUAL_POSTS[slug];
  const workId = parseWorksSlug(slug);
  const work = workId !== null ? getWorkById(workId) : undefined;

  if (!manualPost && !work) {
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

  const title = manualPost
    ? manualPost.title
    : `実績を追加しました — ${work!.area}`;
  const date = manualPost ? manualPost.date : parseWorksDate(work!.date);
  const category = manualPost ? manualPost.category : "実績紹介";

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
              {date}
            </time>
            <span className="text-xs px-3 py-1 bg-primary/10 text-primary-dark rounded-full font-sans">
              {category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide mb-8 pb-6 border-b border-gray-100">
            {title}
          </h1>

          {manualPost ? (
            <div className="prose prose-sm max-w-none">
              {manualPost.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-text-secondary leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <WorksPostContent work={work!} />
          )}
        </div>
      </article>
    </div>
  );
}
