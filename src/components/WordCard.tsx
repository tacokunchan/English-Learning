import Link from "next/link";
import { CATEGORY_LABELS, type ProgrammingWord } from "@/types/word";

const DIFFICULTY_LABELS: Record<ProgrammingWord["difficulty"], string> = {
  1: "やさしい",
  2: "ふつう",
  3: "ちょっと難しい",
};

export default function WordCard({
  word,
  learned,
  onToggleLearned,
}: {
  word: ProgrammingWord;
  learned?: boolean;
  onToggleLearned?: () => void;
}) {
  return (
    <div className="relative">
      <Link
        href={`/words/${word.slug}`}
        className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-300 hover:shadow-md"
      >
        <div className="flex items-center justify-between gap-2 pr-16">
          <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
            {CATEGORY_LABELS[word.category]}
          </span>
          <span className="text-xs text-slate-400">
            {DIFFICULTY_LABELS[word.difficulty]}
          </span>
        </div>
        <p className="mt-3 font-mono text-xl font-bold text-slate-900">
          {word.term}
        </p>
        <p className="text-sm text-slate-400">{word.pronunciation}</p>
        <p className="mt-2 text-base font-semibold text-slate-700">
          {word.meaningJa}
        </p>
      </Link>

      {onToggleLearned && (
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onToggleLearned();
          }}
          aria-pressed={learned}
          className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-xs font-semibold transition ${
            learned
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
          }`}
        >
          {learned ? "✓ 覚えた" : "覚える"}
        </button>
      )}
    </div>
  );
}
