"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "code-vocab-lab:learned-words";

export function useLearnedWords() {
  const [learned, setLearned] = useState<Set<string>>(new Set());

  useEffect(() => {
    const id = setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          setLearned(new Set(JSON.parse(raw) as string[]));
        }
      } catch {
        // localStorage が使えない環境では進捗を保存しないだけにする
      }
    }, 0);
    return () => clearTimeout(id);
  }, []);

  const toggle = useCallback((slug: string) => {
    setLearned((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // 保存できなくても表示上のトグルは機能させる
      }
      return next;
    });
  }, []);

  return {
    learned,
    isLearned: (slug: string) => learned.has(slug),
    toggle,
  };
}
