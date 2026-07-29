"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getWordBySlug, words } from "@/data/words";
import { useCodeExecution } from "@/hooks/useCodeExecution";
import OutputPanel from "@/components/OutputPanel";
import { shuffle } from "@/lib/shuffle";
import { CATEGORY_LABELS } from "@/types/word";

const runnableSlugs = words
  .filter((word) => word.example.runnable !== false)
  .map((word) => word.slug);

type Phase = "guessing" | "revealed";

export default function QuizClient() {
  const [order, setOrder] = useState<string[]>(runnableSlugs);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("guessing");
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const { output, isRunning, run, reset, cleanup } = useCodeExecution();

  useEffect(() => {
    return () => cleanup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentSlug = order[index];
  const currentWord = currentSlug ? getWordBySlug(currentSlug) : undefined;

  function handleRunToCheck() {
    if (!currentWord) return;
    setPhase("revealed");
    run(currentWord.example.code);
  }

  function goNext() {
    reset();
    if (index + 1 >= order.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setPhase("guessing");
    }
  }

  function handleSelfReport(wasCorrect: boolean) {
    setAnsweredCount((c) => c + 1);
    if (wasCorrect) setCorrectCount((c) => c + 1);
    goNext();
  }

  function restart(shuffled: boolean) {
    reset();
    setOrder(shuffled ? shuffle(runnableSlugs) : runnableSlugs);
    setIndex(0);
    setPhase("guessing");
    setCorrectCount(0);
    setAnsweredCount(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900">お疲れさまでした！</h1>
        <p className="mt-4 text-lg text-slate-700">
          {order.length}問中 {correctCount}問 正解でした
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => restart(false)}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            同じ順番でもう一度
          </button>
          <button
            type="button"
            onClick={() => restart(true)}
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            シャッフルしてもう一度
          </button>
        </div>
        <Link
          href="/words"
          className="mt-6 inline-block text-sm text-indigo-600 hover:underline"
        >
          単語一覧に戻る
        </Link>
      </div>
    );
  }

  if (!currentWord) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Link href="/words" className="text-sm text-indigo-600 hover:underline">
        ← 単語一覧に戻る
      </Link>

      <div className="mt-4 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">出力あてクイズ</h1>
        <button
          type="button"
          onClick={() => restart(true)}
          className="shrink-0 text-xs font-medium text-slate-500 hover:text-indigo-600"
        >
          シャッフルして最初から
        </button>
      </div>
      <p className="mt-1 text-sm text-slate-500">
        {index + 1} / {order.length} 問目・自己採点 {correctCount}/{answeredCount}
      </p>
      <p className="mt-2 text-sm text-slate-600">
        コードを読んで、実行結果を頭の中で予想してみましょう。予想できたら「実行して確認する」を押します。
      </p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
          {CATEGORY_LABELS[currentWord.category]}
        </span>
        <p className="mt-2 font-mono text-2xl font-bold text-slate-900">
          {currentWord.term}
        </p>

        <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 font-mono text-sm leading-relaxed text-slate-100">
          <code>{currentWord.example.code}</code>
        </pre>

        {phase === "guessing" ? (
          <button
            type="button"
            onClick={handleRunToCheck}
            className="mt-4 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            実行して確認する
          </button>
        ) : (
          <div className="mt-4">
            <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
              <p className="mb-2 text-xs font-medium text-slate-500">実行結果</p>
              <OutputPanel
                output={output}
                isRunning={isRunning}
                idleMessage="実行結果がありません。"
              />
            </div>

            {!isRunning && (
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-700">
                  予想は当たっていましたか？
                </p>
                <div className="mt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleSelfReport(true)}
                    className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
                  >
                    当たった！
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelfReport(false)}
                    className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-300"
                  >
                    外れてしまった
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
