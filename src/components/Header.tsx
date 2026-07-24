import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold text-slate-900 hover:text-indigo-600"
        >
          コード英単語ラボ
        </Link>
        <nav className="flex gap-4 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-indigo-600">
            ホーム
          </Link>
          <Link href="/words" className="hover:text-indigo-600">
            単語一覧
          </Link>
        </nav>
      </div>
    </header>
  );
}
