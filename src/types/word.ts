export type WordCategory =
  | "type"
  | "control"
  | "function"
  | "oop"
  | "io"
  | "module";

export interface CodeExample {
  language: "javascript";
  code: string;
  outputJa: string;
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
};
