import type { Metadata } from "next";
import WordListClient from "@/components/WordListClient";
import { words } from "@/data/words";

export const metadata: Metadata = {
  title: "単語一覧 | コード英単語ラボ",
  description: "プログラミングでよく使う英単語の一覧です。カテゴリで絞り込めます。",
};

export default function WordsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">単語一覧</h1>
      <p className="mt-2 text-sm text-slate-600">
        気になる単語をクリックすると、意味と使い方を確認できます。
      </p>

      <div className="mt-6">
        <WordListClient words={words} />
      </div>
    </div>
  );
}
