"use client";

import { useState } from "react";
import WordCard from "@/components/WordCard";
import { CATEGORY_LABELS, type ProgrammingWord, type WordCategory } from "@/types/word";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as WordCategory[];

export default function WordListClient({ words }: { words: ProgrammingWord[] }) {
  const [activeCategory, setActiveCategory] = useState<WordCategory | "all">("all");

  const filteredWords =
    activeCategory === "all"
      ? words
      : words.filter((word) => word.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filteredWords.map((word) => (
          <WordCard key={word.slug} word={word} />
        ))}
      </div>
    </div>
  );
}
