import type { Metadata } from "next";
import QuizClient from "@/components/QuizClient";

export const metadata: Metadata = {
  title: "出力あてクイズ | コード英単語ラボ",
  description:
    "コードを読んで実行結果を予想し、実際に実行して確認するクイズです。",
};

export default function QuizPage() {
  return <QuizClient />;
}
