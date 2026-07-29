"use client";

import { useEffect, useState } from "react";
import { useCodeExecution } from "@/hooks/useCodeExecution";
import OutputPanel from "@/components/OutputPanel";

export default function CodeRunner({
  code: initialCode,
  runnable = true,
  pythonCode,
}: {
  code: string;
  runnable?: boolean;
  pythonCode?: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [activeLang, setActiveLang] = useState<"javascript" | "python">(
    "javascript",
  );
  const { output, isRunning, run, cleanup } = useCodeExecution();

  useEffect(() => {
    if (runnable) {
      const initialRunId = setTimeout(() => run(code), 0);
      return () => {
        clearTimeout(initialRunId);
        cleanup();
      };
    }
    return () => cleanup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleReset() {
    setCode(initialCode);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-800">
      <div className="flex items-center justify-between bg-slate-800 px-4 pt-2">
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setActiveLang("javascript")}
            className={`rounded-t px-3 py-1.5 text-xs font-medium ${
              activeLang === "javascript"
                ? "bg-slate-900 text-white"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            JavaScript
          </button>
          {pythonCode && (
            <button
              type="button"
              onClick={() => setActiveLang("python")}
              className={`rounded-t px-3 py-1.5 text-xs font-medium ${
                activeLang === "python"
                  ? "bg-slate-900 text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Python
            </button>
          )}
        </div>
        {activeLang === "javascript" && (
          <div className="flex gap-2 pb-2">
            <button
              type="button"
              onClick={handleReset}
              disabled={isRunning || code === initialCode}
              className="rounded px-2 py-1 text-xs font-medium text-slate-300 hover:text-white disabled:opacity-40"
            >
              元に戻す
            </button>
            {runnable && (
              <button
                type="button"
                onClick={() => run(code)}
                disabled={isRunning}
                className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white transition hover:bg-indigo-400 disabled:opacity-50"
              >
                {isRunning ? "実行中..." : "▶ 実行する"}
              </button>
            )}
          </div>
        )}
      </div>

      {activeLang === "javascript" ? (
        <>
          <textarea
            value={code}
            onChange={(event) => setCode(event.target.value)}
            spellCheck={false}
            rows={code.split("\n").length}
            aria-label="コード例（編集できます）"
            className="w-full resize-none bg-slate-900 p-4 font-mono text-sm leading-relaxed text-slate-100 focus:outline-none"
          />

          <div className="border-t border-slate-800 bg-slate-950 p-4">
            <p className="mb-2 text-xs font-medium text-slate-500">実行結果</p>
            {!runnable ? (
              <p className="text-sm text-slate-400">
                この例は別ファイルを読み込む想定のコードなので、このページでは実行できません。コードの雰囲気をつかむための例として読んでみてください。
              </p>
            ) : (
              <OutputPanel
                output={output}
                isRunning={isRunning}
                idleMessage="「実行する」ボタンを押すと結果が表示されます。"
              />
            )}
          </div>
        </>
      ) : (
        <>
          <pre className="overflow-x-auto bg-slate-900 p-4 font-mono text-sm leading-relaxed text-slate-100">
            <code>{pythonCode}</code>
          </pre>
          <div className="border-t border-slate-800 bg-slate-950 p-4">
            <p className="text-sm text-slate-400">
              Pythonでの書き方の例です。JavaScriptと見比べてみましょう（このページでは実行できません）。
            </p>
          </div>
        </>
      )}
    </div>
  );
}
