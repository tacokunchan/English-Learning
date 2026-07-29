export type OutputLine = { type: "log" | "error" | "system"; text: string };

export const MAX_OUTPUT_LINES = 100;
export const EXECUTION_TIMEOUT_MS = 3000;

export function buildWorkerSource(userCode: string): string {
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
