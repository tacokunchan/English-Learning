import type { ProgrammingWord } from "@/types/word";

export const words: ProgrammingWord[] = [
  {
    slug: "variable",
    term: "variable",
    pronunciation: "ヴェアリアブル",
    meaningJa: "変数",
    category: "type",
    difficulty: 1,
    explanationJa:
      "「変わることができるもの」という意味の単語です。プログラミングでは、数字や文字などのデータに名前をつけて、あとで使い回せるようにする箱のことを指します。",
    example: {
      language: "javascript",
      code: `let name = "Taro";\nlet age = 15;\n\nconsole.log(name);\nconsole.log(age);`,
      outputJa:
        "name という箱に \"Taro\"、age という箱に 15 を入れています。あとから console.log で中身を取り出して表示できます。",
    },
    relatedSlugs: ["string", "boolean"],
  },
  {
    slug: "function",
    term: "function",
    pronunciation: "ファンクション",
    meaningJa: "関数",
    category: "function",
    difficulty: 1,
    explanationJa:
      "「機能・働き」という意味の単語です。プログラミングでは、決まった処理をひとまとめにして、名前をつけて何度でも呼び出せるようにしたものを指します。",
    example: {
      language: "javascript",
      code: `function greet(name) {\n  return "こんにちは、" + name + "さん";\n}\n\nconsole.log(greet("花子"));`,
      outputJa:
        "greet という関数を作り、名前を渡すとあいさつ文を返すようにしています。呼び出すたびに同じ処理を再利用できます。",
    },
    relatedSlugs: ["return", "variable"],
  },
  {
    slug: "return",
    term: "return",
    pronunciation: "リターン",
    meaningJa: "返す",
    category: "function",
    difficulty: 1,
    explanationJa:
      "「戻る・返す」という意味の単語です。関数の中で計算した結果を、関数の呼び出し元に返すときに使います。",
    example: {
      language: "javascript",
      code: `function add(a, b) {\n  return a + b;\n}\n\nlet result = add(3, 5);\nconsole.log(result);`,
      outputJa:
        "add 関数は a + b の結果を return で返します。result にはその返された値 8 が入ります。",
    },
    relatedSlugs: ["function"],
  },
  {
    slug: "if",
    term: "if",
    pronunciation: "イフ",
    meaningJa: "もし〜ならば",
    category: "control",
    difficulty: 1,
    explanationJa:
      "「もし〜ならば」という意味の単語です。条件によって処理を分岐させたいときに使います。条件が true のときだけ中の処理が実行されます。",
    example: {
      language: "javascript",
      code: `let score = 80;\n\nif (score >= 60) {\n  console.log("合格です");\n} else {\n  console.log("不合格です");\n}`,
      outputJa:
        "score が 60 以上かどうかで表示するメッセージを変えています。この場合は「合格です」が表示されます。",
    },
    relatedSlugs: ["boolean", "for"],
  },
  {
    slug: "for",
    term: "for",
    pronunciation: "フォー",
    meaningJa: "〜の間、繰り返す",
    category: "control",
    difficulty: 2,
    explanationJa:
      "英語の前置詞 for（〜のために／〜の間）から来ています。プログラミングでは、決まった回数だけ処理を繰り返す「ループ」を作るときに使います。",
    example: {
      language: "javascript",
      code: `for (let i = 1; i <= 3; i++) {\n  console.log(i + "回目");\n}`,
      outputJa:
        "i を 1 から 3 まで増やしながら、中の処理を3回繰り返します。「1回目」「2回目」「3回目」と表示されます。",
    },
    relatedSlugs: ["if", "array"],
  },
  {
    slug: "while",
    term: "while",
    pronunciation: "ワイル",
    meaningJa: "〜している間",
    category: "control",
    difficulty: 2,
    explanationJa:
      "「〜している間」という意味の単語です。for と同じく繰り返し処理に使いますが、こちらは「回数」ではなく「条件」が true である間、ずっと繰り返します。",
    example: {
      language: "javascript",
      code: `let count = 0;\n\nwhile (count < 3) {\n  console.log("count: " + count);\n  count = count + 1;\n}`,
      outputJa:
        "count が 3 未満である間、繰り返し処理を続けます。count を1ずつ増やし、3になったら止まります。",
    },
    relatedSlugs: ["for", "if"],
  },
  {
    slug: "array",
    term: "array",
    pronunciation: "アレイ",
    meaningJa: "配列",
    category: "type",
    difficulty: 2,
    explanationJa:
      "「整列させたもの」という意味の単語です。プログラミングでは、複数のデータを順番に並べて1つの箱にまとめたものを指します。",
    example: {
      language: "javascript",
      code: `let fruits = ["りんご", "みかん", "ぶどう"];\n\nconsole.log(fruits[0]);\nconsole.log(fruits.length);`,
      outputJa:
        "fruits という配列に3つの果物を入れています。fruits[0] は先頭の「りんご」、length は要素数の3を表します。",
    },
    relatedSlugs: ["for", "variable"],
  },
  {
    slug: "string",
    term: "string",
    pronunciation: "ストリング",
    meaningJa: "文字列",
    category: "type",
    difficulty: 1,
    explanationJa:
      "「紐（ひも）」という意味の単語です。プログラミングでは、文字が紐のようにつながった「文字列」というデータの種類を指します。",
    example: {
      language: "javascript",
      code: `let message = "Hello, World!";\n\nconsole.log(message.length);\nconsole.log(message.toUpperCase());`,
      outputJa:
        "message は文字列です。length で文字数、toUpperCase() で大文字に変換した結果を確認できます。",
    },
    relatedSlugs: ["variable", "boolean"],
  },
  {
    slug: "boolean",
    term: "boolean",
    pronunciation: "ブーリアン",
    meaningJa: "真偽値",
    category: "type",
    difficulty: 2,
    explanationJa:
      "数学者ジョージ・ブール（Boole）の名前が由来です。true（正しい）か false（正しくない）のどちらかしか取らないデータの種類を指します。",
    example: {
      language: "javascript",
      code: `let isStudent = true;\nlet isAdult = false;\n\nconsole.log(isStudent);\nconsole.log(isAdult);`,
      outputJa:
        "isStudent と isAdult は true か false のどちらかだけを持つ変数です。if 文の条件判定などによく使われます。",
    },
    relatedSlugs: ["if", "variable"],
  },
  {
    slug: "class",
    term: "class",
    pronunciation: "クラス",
    meaningJa: "クラス（設計図）",
    category: "oop",
    difficulty: 3,
    explanationJa:
      "「分類・種類」という意味の単語です。プログラミングでは、似たデータや機能をまとめて持つ「もの」の設計図を作るときに使います。",
    example: {
      language: "javascript",
      code: `class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n\n  bark() {\n    console.log(this.name + ": ワン！");\n  }\n}\n\nlet pochi = new Dog("ポチ");\npochi.bark();`,
      outputJa:
        "Dog という設計図（クラス）から、new を使って「ポチ」という実際の犬（インスタンス）を作り、bark メソッドを呼び出しています。",
    },
    relatedSlugs: ["function", "variable"],
  },
  {
    slug: "import",
    term: "import",
    pronunciation: "インポート",
    meaningJa: "取り込む",
    category: "module",
    difficulty: 2,
    explanationJa:
      "「輸入する・取り込む」という意味の単語です。別のファイルで作った機能を、今のファイルで使えるように読み込むときに使います。",
    example: {
      language: "javascript",
      code: `// math.js というファイルに add 関数があるとする\nimport { add } from "./math.js";\n\nconsole.log(add(2, 3));`,
      outputJa:
        "math.js というファイルから add 関数を取り込んで、このファイルの中で使えるようにしています。",
    },
    relatedSlugs: ["function"],
  },
  {
    slug: "print",
    term: "print / console.log",
    pronunciation: "プリント / コンソール・ログ",
    meaningJa: "画面に表示する",
    category: "io",
    difficulty: 1,
    explanationJa:
      "「印刷する・出力する」という意味の単語です。プログラムの中の値を画面（コンソール）に表示して確認するときに使います。プログラミング学習で一番よく使う命令のひとつです。",
    example: {
      language: "javascript",
      code: `console.log("はじめまして！");\nconsole.log(1 + 1);`,
      outputJa:
        "console.log は括弧の中に書いたものを画面に表示します。「はじめまして！」と、1+1の計算結果である 2 が表示されます。",
    },
    relatedSlugs: ["variable", "string"],
  },
];

export function getWordBySlug(slug: string): ProgrammingWord | undefined {
  return words.find((word) => word.slug === slug);
}

export function getRelatedWords(word: ProgrammingWord): ProgrammingWord[] {
  if (!word.relatedSlugs) return [];
  return word.relatedSlugs
    .map((slug) => getWordBySlug(slug))
    .filter((w): w is ProgrammingWord => Boolean(w));
}
