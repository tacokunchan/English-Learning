import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CodeBlock from "@/components/CodeBlock";
import WordCard from "@/components/WordCard";
import { getRelatedWords, getWordBySlug, words } from "@/data/words";
import { CATEGORY_LABELS } from "@/types/word";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return words.map((word) => ({ slug: word.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const word = getWordBySlug(slug);

  if (!word) {
    return { title: "単語が見つかりません | コード英単語ラボ" };
  }

  return {
    title: `${word.term}（${word.meaningJa}） | コード英単語ラボ`,
    description: word.explanationJa,
  };
}

export default async function WordDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const word = getWordBySlug(slug);

  if (!word) {
    notFound();
  }

  const relatedWords = getRelatedWords(word);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/words" className="text-sm text-indigo-600 hover:underline">
        ← 単語一覧に戻る
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
          {CATEGORY_LABELS[word.category]}
        </span>
      </div>

      <h1 className="mt-3 font-mono text-4xl font-bold text-slate-900">
        {word.term}
      </h1>
      <p className="mt-1 text-slate-400">{word.pronunciation}</p>
      <p className="mt-4 text-2xl font-semibold text-slate-800">
        {word.meaningJa}
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">どういう意味？</h2>
        <p className="mt-2 leading-relaxed text-slate-700">
          {word.explanationJa}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">
          実際に使ってみると？
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          このコードを実行すると、どんなことができるのか見てみましょう。
        </p>
        <div className="mt-3">
          <CodeBlock code={word.example.code} />
        </div>
        <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm leading-relaxed text-amber-900">
          {word.example.outputJa}
        </p>
      </section>

      {relatedWords.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold text-slate-900">関連する単語</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedWords.map((related) => (
              <WordCard key={related.slug} word={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
