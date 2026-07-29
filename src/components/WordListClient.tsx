"use client";

import { useState } from "react";
import WordCard from "@/components/WordCard";
import ProgressMeter from "@/components/ProgressMeter";
import { useLearnedWords } from "@/hooks/useLearnedWords";
import { CATEGORY_LABELS, type ProgrammingWord, type WordCategory } from "@/types/word";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as WordCategory[];

export default function WordListClient({ words }: { words: ProgrammingWord[] }) {
  const [activeCategory, setActiveCategory] = useState<WordCategory | "all">("all");
  const [query, setQuery] = useState("");
  const { learned, isLearned, toggle } = useLearnedWords();

  const normalizedQuery = query.trim().toLowerCase();

  const filteredWords = words.filter((word) => {
    const matchesCategory =
      activeCategory === "all" || word.category === activeCategory;

    const matchesQuery =
      normalizedQuery === "" ||
      word.term.toLowerCase().includes(normalizedQuery) ||
      word.meaningJa.includes(normalizedQuery) ||
      word.pronunciation.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <ProgressMeter
        value={learned.size}
        max={words.length}
        label="覚えた単語"
      />

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="単語や意味で検索（例: 配列、if）"
        className="mt-6 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
            activeCategory === "all"
              ? "bg-indigo-600 text-white"
              : "bg-white text-slate-600 hover:bg-slate-100"
          }`}
        >
          すべて
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>

      {filteredWords.length === 0 ? (
        <p className="mt-8 text-sm text-slate-500">
          「{query}」に一致する単語は見つかりませんでした。
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {filteredWords.map((word) => (
            <WordCard
              key={word.slug}
              word={word}
              learned={isLearned(word.slug)}
              onToggleLearned={() => toggle(word.slug)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
