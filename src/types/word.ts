export type WordCategory =
  | "type"
  | "control"
  | "function"
  | "oop"
  | "io"
  | "module"
  | "syntax"
  | "error";

export interface CodeExample {
  language: "javascript";
  code: string;
  outputJa: string;
  /** false の場合、ブラウザ上では実行できない例（別ファイル参照など）であることを示す */
  runnable?: boolean;
}

export interface ProgrammingWord {
  slug: string;
  term: string;
  pronunciation: string;
  meaningJa: string;
  category: WordCategory;
  difficulty: 1 | 2 | 3;
  explanationJa: string;
  example: CodeExample;
  relatedSlugs?: string[];
}

export const CATEGORY_LABELS: Record<WordCategory, string> = {
  type: "データの型",
  control: "処理の流れ",
  function: "関数",
  oop: "オブジェクト指向",
  io: "入出力",
  module: "モジュール",
  syntax: "書き方の基本",
  error: "エラー処理",
};
