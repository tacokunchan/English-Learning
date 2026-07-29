"use client";

import { useRef, useState } from "react";
import {
  buildWorkerSource,
  EXECUTION_TIMEOUT_MS,
  MAX_OUTPUT_LINES,
  type OutputLine,
} from "@/lib/codeExecution";

export function useCodeExecution() {
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

  function run(code: string) {
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

      if (lineCountRef.current >= MAX_OUTPUT_LINES) {
        return;
      }

      lineCountRef.current += 1;

      const line: OutputLine = {
        type: data.type === "error" ? "error" : "log",
        text: data.text ?? "",
      };

      if (lineCountRef.current === MAX_OUTPUT_LINES) {
        setOutput((prev) => [...prev, line]);
        stop({ type: "system", text: "出力が多すぎるため停止しました。" });
        return;
      }

      setOutput((prev) => [...prev, line]);
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
    }, EXECUTION_TIMEOUT_MS);
  }

  function reset() {
    cleanupWorker();
    setOutput([]);
    setIsRunning(false);
  }

  return { output, isRunning, run, reset, cleanup: cleanupWorker };
}
