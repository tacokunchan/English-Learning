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
    pythonCode: `name = "Taro"\nage = 15\n\nprint(name)\nprint(age)`,
    relatedSlugs: ["string", "boolean", "const"],
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
    pythonCode: `def greet(name):\n    return "こんにちは、" + name + "さん"\n\nprint(greet("花子"))`,
    relatedSlugs: ["return", "variable", "argument"],
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
    pythonCode: `def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)`,
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
    pythonCode: `score = 80\n\nif score >= 60:\n    print("合格です")\nelse:\n    print("不合格です")`,
    relatedSlugs: ["boolean", "for", "else"],
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
    pythonCode: `for i in range(1, 4):\n    print(str(i) + "回目")`,
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
    pythonCode: `count = 0\n\nwhile count < 3:\n    print("count: " + str(count))\n    count = count + 1`,
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
    pythonCode: `fruits = ["りんご", "みかん", "ぶどう"]\n\nprint(fruits[0])\nprint(len(fruits))`,
    relatedSlugs: ["for", "variable", "index"],
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
    pythonCode: `message = "Hello, World!"\n\nprint(len(message))\nprint(message.upper())`,
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
    pythonCode: `is_student = True\nis_adult = False\n\nprint(is_student)\nprint(is_adult)`,
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
    pythonCode: `class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        print(self.name + ": ワン！")\n\npochi = Dog("ポチ")\npochi.bark()`,
    relatedSlugs: ["function", "variable", "method"],
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
      runnable: false,
    },
    pythonCode: `# mymath.py というファイルに add 関数があるとする\nfrom mymath import add\n\nprint(add(2, 3))`,
    relatedSlugs: ["function", "export"],
  },
  {
    slug: "export",
    term: "export",
    pronunciation: "エクスポート",
    meaningJa: "外に出す",
    category: "module",
    difficulty: 2,
    explanationJa:
      "「輸出する・外に出す」という意味の単語です。import とペアで使い、あるファイルの中で作った関数や変数を、他のファイルからも使えるように公開するときに使います。",
    example: {
      language: "javascript",
      code: `// math.js というファイルの中身とする\nexport function add(a, b) {\n  return a + b;\n}`,
      outputJa:
        "add 関数の前に export をつけることで、この関数を他のファイルから import して使えるようになります。",
      runnable: false,
    },
    pythonCode: `# mymath.py というファイルの中身とする\ndef add(a, b):\n    return a + b\n\n# Python には export という単語はありません。\n# ファイルの中で定義しておくだけで、他のファイルから使えます。`,
    relatedSlugs: ["import", "function"],
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
    pythonCode: `print("はじめまして！")\nprint(1 + 1)`,
    relatedSlugs: ["variable", "string"],
  },
  {
    slug: "const",
    term: "const",
    pronunciation: "コンスト",
    meaningJa: "定数（変わらない値）",
    category: "type",
    difficulty: 1,
    explanationJa:
      "「constant（一定の）」を短くした単語です。let で作る変数とは違い、一度入れた値を後から変更できない変数を作るときに使います。",
    example: {
      language: "javascript",
      code: `const pi = 3.14;\n\nconsole.log(pi);\n\n// pi = 3.15; // ← コメントを外すとエラーになります`,
      outputJa:
        "const で作った pi の値は変更できません。コメントを外して2行目の代入を実行すると、エラーになる様子を確認できます。",
    },
    pythonCode: `PI = 3.14  # Python には const はありません。大文字の名前にして「定数のつもり」だと示す習慣があります\n\nprint(PI)\n\n# PI = 3.15  # 書き換えてもエラーにはなりません（あくまで人間どうしの約束ごとです）`,
    relatedSlugs: ["variable"],
  },
  {
    slug: "number",
    term: "number",
    pronunciation: "ナンバー",
    meaningJa: "数値",
    category: "type",
    difficulty: 1,
    explanationJa:
      "そのまま「数」という意味の単語です。プログラミングでは、整数や小数などの数字を表すデータの種類を指します。",
    example: {
      language: "javascript",
      code: `let price = 500;\nlet taxRate = 0.1;\n\nconsole.log(price * (1 + taxRate));`,
      outputJa:
        "price と taxRate はどちらも number（数値）です。数値どうしはそのまま計算に使うことができます。",
    },
    pythonCode: `price = 500\ntax_rate = 0.1\n\nprint(price * (1 + tax_rate))`,
    relatedSlugs: ["variable", "string"],
  },
  {
    slug: "object",
    term: "object",
    pronunciation: "オブジェクト",
    meaningJa: "オブジェクト（もの）",
    category: "type",
    difficulty: 2,
    explanationJa:
      "「もの・物体」という意味の単語です。プログラミングでは、名前(キー)と値をセットにして、複数のデータを1つにまとめて管理できるデータの種類を指します。",
    example: {
      language: "javascript",
      code: `let student = {\n  name: "太郎",\n  age: 15,\n};\n\nconsole.log(student.name);\nconsole.log(student.age);`,
      outputJa:
        "student というオブジェクトに name と age の2つの情報をまとめています。student.name のようにドットでつなげて値を取り出せます。",
    },
    pythonCode: `student = {\n    "name": "太郎",\n    "age": 15,\n}\n\nprint(student["name"])\nprint(student["age"])`,
    relatedSlugs: ["array", "class"],
  },
  {
    slug: "else",
    term: "else",
    pronunciation: "エルス",
    meaningJa: "そうでなければ",
    category: "control",
    difficulty: 1,
    explanationJa:
      "「それ以外は」という意味の単語です。if とセットで使い、条件が false だったときに実行する処理を書くために使います。",
    example: {
      language: "javascript",
      code: `let weather = "rain";\n\nif (weather === "sunny") {\n  console.log("公園に行こう");\n} else {\n  console.log("家で本を読もう");\n}`,
      outputJa:
        "weather は \"sunny\" ではないので if の中は実行されず、else の中の「家で本を読もう」が表示されます。",
    },
    pythonCode: `weather = "rain"\n\nif weather == "sunny":\n    print("公園に行こう")\nelse:\n    print("家で本を読もう")`,
    relatedSlugs: ["if"],
  },
  {
    slug: "argument",
    term: "argument",
    pronunciation: "アーギュメント",
    meaningJa: "引数",
    category: "function",
    difficulty: 2,
    explanationJa:
      "「主張・論点」という意味も持つ単語ですが、プログラミングでは関数を呼び出すときに渡す値のことを指します。関数はこの値を受け取って処理を行います。",
    example: {
      language: "javascript",
      code: `function multiply(a, b) {\n  return a * b;\n}\n\nconsole.log(multiply(4, 5));`,
      outputJa:
        "4 と 5 が multiply 関数の引数（argument）として渡されています。関数の中では a と b という名前でこの値を使えます。",
    },
    pythonCode: `def multiply(a, b):\n    return a * b\n\nprint(multiply(4, 5))`,
    relatedSlugs: ["function", "return"],
  },
  {
    slug: "method",
    term: "method",
    pronunciation: "メソッド",
    meaningJa: "メソッド（オブジェクトの中の関数）",
    category: "oop",
    difficulty: 2,
    explanationJa:
      "「方法・手段」という意味の単語です。プログラミングでは、オブジェクトやクラスの中に定義された関数のことを指します。",
    example: {
      language: "javascript",
      code: `let dog = {\n  name: "ポチ",\n  bark() {\n    console.log(this.name + ": ワン！");\n  },\n};\n\ndog.bark();`,
      outputJa:
        "bark は dog オブジェクトが持つメソッドです。dog.bark() のように呼び出すと、そのオブジェクトに関する処理を実行できます。",
    },
    pythonCode: `class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        print(self.name + ": ワン！")\n\ndog = Dog("ポチ")\ndog.bark()`,
    relatedSlugs: ["class", "function"],
  },
  {
    slug: "index",
    term: "index",
    pronunciation: "インデックス",
    meaningJa: "添字（番号）",
    category: "type",
    difficulty: 2,
    explanationJa:
      "「索引・目印」という意味の単語です。配列の中で、それぞれのデータが何番目にあるかを表す番号のことを指します。多くのプログラミング言語では0番目から数え始めます。",
    example: {
      language: "javascript",
      code: `let colors = ["赤", "青", "緑"];\n\nconsole.log(colors[0]);\nconsole.log(colors[1]);\nconsole.log(colors[2]);`,
      outputJa:
        "colors[0] は先頭の「赤」を指します。0から数え始めるので、colors[2] は3番目の「緑」になります。",
    },
    pythonCode: `colors = ["赤", "青", "緑"]\n\nprint(colors[0])\nprint(colors[1])\nprint(colors[2])`,
    relatedSlugs: ["array", "for"],
  },
  {
    slug: "comment",
    term: "comment",
    pronunciation: "コメント",
    meaningJa: "コメント（説明書き）",
    category: "syntax",
    difficulty: 1,
    explanationJa:
      "「注釈・説明」という意味の単語です。プログラムの中にメモを書き残す機能で、// から始めた部分はプログラムとして実行されず、人間が読むためだけの説明文になります。",
    example: {
      language: "javascript",
      code: `// これはコメントです。実行はされません。\nlet score = 100;\n\nconsole.log(score); // ここにもコメントを書けます`,
      outputJa:
        "// で始まる部分はプログラムとして無視されます。score の値である 100 だけが表示されます。",
    },
    pythonCode: `# これはコメントです。実行はされません。\nscore = 100\n\nprint(score)  # ここにもコメントを書けます`,
    relatedSlugs: ["variable"],
  },
  {
    slug: "try-catch",
    term: "try / catch",
    pronunciation: "トライ / キャッチ",
    meaningJa: "エラーに備える",
    category: "error",
    difficulty: 3,
    explanationJa:
      "try は「試す」、catch は「捕まえる」という意味です。エラー(error)が起きそうな処理を try の中に書いておくと、実際にエラーが起きたときに catch がそれを受け止めて、プログラム全体が止まってしまうのを防げます。",
    example: {
      language: "javascript",
      code: `try {\n  console.log("計算をはじめます");\n  JSON.parse("これはJSONではありません");\n  console.log("ここには届きません");\n} catch (error) {\n  console.log("エラーが発生しました: " + error.message);\n}`,
      outputJa:
        "JSON.parse の行でエラーが発生すると、try の中の残りの処理は飛ばされ、catch の中の処理が実行されます。プログラム自体は止まらずに続きます。",
    },
    relatedSlugs: ["if"],
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
