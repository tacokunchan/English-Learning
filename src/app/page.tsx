import Link from "next/link";
import WordCard from "@/components/WordCard";
import { words } from "@/data/words";

// aaa
export default function Home() {
  const featuredWords = words.slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          プログラミング英単語を
          <br className="sm:hidden" />
          意味から使い方まで
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          if, for, function, array...
          プログラミングでよく出てくる英単語を、日本語の意味とやさしい解説、
          実際のコード例つきで学べるサイトです。プログラミング初心者の方向けに作りました。
        </p>
        <Link
          href="/words"
          className="mt-8 inline-block rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          単語一覧を見る
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-bold text-slate-900">こんな単語が学べます</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {featuredWords.map((word) => (
            <WordCard key={word.slug} word={word} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">このサイトの使い方</h2>
        <ol className="mt-4 space-y-3 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-indigo-600">1. 単語一覧</span>
            から気になる英単語を選びます。
          </li>
          <li>
            <span className="font-semibold text-indigo-600">2. 意味と解説</span>
            を読んで、単語がどんな役割を持つのか理解します。
          </li>
          <li>
            <span className="font-semibold text-indigo-600">3. コード例</span>
            を見て、実際にその単語がプログラムの中でどう使われ、何ができるのかを確認します。
          </li>
        </ol>
      </section>
    </div>
  );
}
