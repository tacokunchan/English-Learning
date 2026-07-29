"use client";

import { useEffect, useRef, useState } from "react";

type OutputLine = { type: "log" | "error" | "system"; text: string };

const MAX_LINES = 100;
const TIMEOUT_MS = 3000;

function buildWorkerSource(userCode: string): string {
  return [
    "function __stringify(value) {",
    "  if (value === undefined) return 'undefined';",
    "  if (value === null) return 'null';",
    "  if (typeof value === 'object') {",
    "    try { return JSON.stringify(value); } catch (e) { return String(value); }",
    "  }",
    "  return String(value);",
    "}",
    "self.console = {",
    "  log: function () { self.postMessage({ type: 'log', text: Array.prototype.map.call(arguments, __stringify).join(' ') }); },",
    "  error: function () { self.postMessage({ type: 'log', text: Array.prototype.map.call(arguments, __stringify).join(' ') }); },",
    "  warn: function () { self.postMessage({ type: 'log', text: Array.prototype.map.call(arguments, __stringify).join(' ') }); },",
    "  info: function () { self.postMessage({ type: 'log', text: Array.prototype.map.call(arguments, __stringify).join(' ') }); }",
    "};",
    "try {",
    userCode,
    "  self.postMessage({ type: 'done' });",
    "} catch (err) {",
    "  self.postMessage({ type: 'error', text: err && err.message ? err.message : String(err) });",
    "  self.postMessage({ type: 'done' });",
    "}",
  ].join("\n");
}

export default function CodeRunner({
  code: initialCode,
  runnable = true,
}: {
  code: string;
  runnable?: boolean;
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<OutputLine[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const workerRef = useRef<Worker | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const urlRef = useRef<string | null>(null);
  const lineCountRef = useRef(0);

  function cleanupWorker() {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current);
      urlRef.current = null;
    }
  }

  function stop(extraLine?: OutputLine) {
    cleanupWorker();
    setIsRunning(false);
    if (extraLine) {
      setOutput((prev) => [...prev, extraLine]);
    }
  }

  function handleRun() {
    if (!runnable) return;

    cleanupWorker();
    setOutput([]);
    lineCountRef.current = 0;
    setIsRunning(true);

    const source = buildWorkerSource(code);
    const blob = new Blob([source], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    urlRef.current = url;

    const worker = new Worker(url);
    workerRef.current = worker;

    worker.onmessage = (event: MessageEvent<{ type: string; text?: string }>) => {
      const data = event.data;

      if (data.type === "done") {
        stop();
        return;
      }

      if (lineCountRef.current >= MAX_LINES) {
        return;
      }

      lineCountRef.current += 1;

      if (lineCountRef.current === MAX_LINES) {
        setOutput((prev) => [
          ...prev,
          { type: data.type === "error" ? "error" : "log", text: data.text ?? "" },
        ]);
        stop({
          type: "system",
          text: "出力が多すぎるため停止しました。",
        });
        return;
      }

      setOutput((prev) => [
        ...prev,
        { type: data.type === "error" ? "error" : "log", text: data.text ?? "" },
      ]);
    };

    worker.onerror = (event: ErrorEvent) => {
      stop({
        type: "error",
        text: event.message || "実行中にエラーが発生しました。",
      });
    };

    timeoutRef.current = setTimeout(() => {
      stop({
        type: "system",
        text: "処理に時間がかかりすぎたため停止しました（無限ループの可能性があります）。",
      });
    }, TIMEOUT_MS);
  }

  useEffect(() => {
    if (!runnable) return;
    const initialRunId = setTimeout(() => handleRun(), 0);
    return () => {
      clearTimeout(initialRunId);
      cleanupWorker();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleReset() {
    setCode(initialCode);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-800">
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2">
        <span className="text-xs font-medium text-slate-400">JavaScript</span>
        <div className="flex gap-2">
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
              onClick={handleRun}
              disabled={isRunning}
              className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white transition hover:bg-indigo-400 disabled:opacity-50"
            >
              {isRunning ? "実行中..." : "▶ 実行する"}
            </button>
          )}
        </div>
      </div>

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
        ) : output.length === 0 ? (
          <p className="text-sm text-slate-500">
            {isRunning
              ? "実行しています..."
              : "「実行する」ボタンを押すと結果が表示されます。"}
          </p>
        ) : (
          <div className="space-y-1 font-mono text-sm">
            {output.map((line, index) => (
              <p
                key={index}
                className={
                  line.type === "error"
                    ? "text-red-400"
                    : line.type === "system"
                      ? "text-amber-400"
                      : "text-emerald-300"
                }
              >
                {line.type === "error" ? "⚠ " : "› "}
                {line.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
