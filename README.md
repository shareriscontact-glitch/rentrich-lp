# RentRich Landing Page

RentRich のウェイトリスト登録用ランディングページ。

## 技術スタック

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [motion](https://motion.dev/)
- [Formspree](https://formspree.io/)

## ローカル起動

```bash
# リポジトリをクローン
git clone <repository-url>
cd rentrich-lp

# パッケージインストール
npm install

# 環境変数を設定
cp .env.example .env
# .env を開き PUBLIC_FORMSPREE_ID を設定する

# 開発サーバー起動
npm run dev
```

ブラウザで `http://localhost:4321` を開く。

## Formspree の設定

1. [Formspree](https://formspree.io/) にアクセスしてアカウントを作成する
2. 新しいフォームを作成し、Form ID（例：`xabc1234`）を取得する
3. `.env` ファイルの `PUBLIC_FORMSPREE_ID` に取得した ID を設定する

```
PUBLIC_FORMSPREE_ID=xabc1234
```

## Vercel へのデプロイ

1. [Vercel](https://vercel.com/) にアクセスし、このリポジトリをインポートする
2. Framework Preset は **Astro** を選択する
3. Environment Variables に `PUBLIC_FORMSPREE_ID` を追加する
4. Deploy ボタンをクリックする

> **注意：** `.env` ファイルは `.gitignore` により Git 管理対象外となっています。
> Vercel のダッシュボードで環境変数を必ず設定してください。

## ビルド

```bash
npm run build
```

生成された `dist/` ディレクトリが静的ファイルの出力先となる。
