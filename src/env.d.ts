// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

/** クライアントに公開される環境変数（`PUBLIC_` プレフィックス） */
interface ImportMetaEnv {
  /** Formspree フォーム ID（`https://formspree.io/f/{id}` の `{id}` 部分） */
  readonly PUBLIC_FORMSPREE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
