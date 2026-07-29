import type { OutputLine } from "@/lib/codeExecution";

export default function OutputPanel({
  output,
  isRunning,
  idleMessage,
}: {
  output: OutputLine[];
  isRunning: boolean;
  idleMessage: string;
}) {
  if (output.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        {isRunning ? "実行しています..." : idleMessage}
      </p>
    );
  }

  return (
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
  );
}
