import { useState, type FormEvent } from "react";
import { useReveal } from "~/hooks/use-reveal";
import itemWatch from "~/assets/item-watch.jpg";
import itemCamera from "~/assets/item-camera.jpg";
import itemBag from "~/assets/item-bag.jpg";
import itemFurniture from "~/assets/item-furniture.jpg";
import itemAudio from "~/assets/item-audio.jpg";
import itemJewelry from "~/assets/item-jewelry.jpg";
import featureDashboard from "~/assets/feature-dashboard.jpg";
import featureStorefront from "~/assets/feature-storefront.jpg";
import featureBrand from "~/assets/feature-brand.jpg";
import heroVault from "~/assets/hero-vault.jpg";

const FORMSPREE_ID = import.meta.env.PUBLIC_FORMSPREE_ID;

const Index = () => {
  useReveal();

  const scrollToRegister = (e?: React.MouseEvent) => {
    e?.preventDefault();
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Nav onCtaClick={scrollToRegister} />
      <Hero onCtaClick={scrollToRegister} />
      <ItemMarquee />
      <RiskSection />
      <CompetitiveTable />
      <Features />
      <RegisterForm />
      <Footer />
    </main>
  );
};

/* ---------------- NAV ---------------- */
const Nav = ({ onCtaClick }: { onCtaClick: (e?: React.MouseEvent) => void }) => (
  <header
    className="fixed top-0 left-0 right-0 z-50 border-b border-border"
    style={{ backgroundColor: "rgba(8,8,8,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
  >
    <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-10">
      <a href="#" className="font-display text-gold-deep" style={{ letterSpacing: "0.15em", fontSize: "20px" }}>
        RentRich
      </a>
      <a href="#register" onClick={onCtaClick} className="nav-link uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em" }}>
        無料で先行登録する
      </a>
    </div>
  </header>
);

/* ---------------- HERO ---------------- */
const CornerMark = ({ className = "", pos }: { className?: string; pos: "tl" | "tr" | "bl" | "br" }) => {
  const borders: Record<string, string> = {
    tl: "border-t border-l",
    tr: "border-t border-r",
    bl: "border-b border-l",
    br: "border-b border-r",
  };
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute h-5 w-5 md:h-6 md:w-6 border-gold-deep/70 ${borders[pos]} ${className}`}
    />
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: (e?: React.MouseEvent) => void }) => (
  <section className="relative overflow-hidden bg-bg-primary pt-32 pb-28 md:pt-44 md:pb-36">
    <div
      className="pointer-events-none absolute inset-0 bg-center bg-no-repeat hero-vault-bg"
      style={{
        backgroundImage: `url(${heroVault.src})`,
        backgroundSize: "110% auto",
        backgroundPosition: "center 55%",
      }}
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 50% 50%, hsl(var(--bg-primary) / 0.35) 0%, hsl(var(--bg-primary) / 0.7) 45%, hsl(var(--bg-primary)) 75%)",
      }}
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "linear-gradient(to bottom, hsl(var(--bg-primary)) 0%, transparent 18%, transparent 82%, hsl(var(--bg-primary)) 100%)",
      }}
      aria-hidden
    />
    <div className="pointer-events-none absolute inset-0 vault-engraving-faint opacity-60" />
    <div className="pointer-events-none absolute inset-0 hero-grain opacity-[0.12]" aria-hidden />

    <div className="pointer-events-none absolute left-6 md:left-10 top-[10%] h-[80%] w-px bg-border-gold opacity-50" />
    <div className="pointer-events-none absolute right-6 md:right-10 top-[10%] h-[80%] w-px bg-border-gold opacity-50" />

    <CornerMark className="top-6 left-6 md:top-10 md:left-10" pos="tl" />
    <CornerMark className="top-6 right-6 md:top-10 md:right-10" pos="tr" />
    <CornerMark className="bottom-6 left-6 md:bottom-10 md:left-10" pos="bl" />
    <CornerMark className="bottom-6 right-6 md:bottom-10 md:right-10" pos="br" />

    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-24 md:top-32 font-mono-num text-gold-deep/60" style={{ fontSize: 9, letterSpacing: "0.4em" }}>
      N 35°40′ · E 139°41′ · VAULT 001
    </div>
    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 md:bottom-14 font-mono-num text-text-secondary/60" style={{ fontSize: 9, letterSpacing: "0.4em" }}>
      EST · MMXXVI · TOKYO — JAPAN
    </div>

    <div className="relative mx-auto max-w-[920px] px-6 text-center hero-stagger">
      <div className="label-eyebrow text-gold-deep">── JAPAN'S FIRST · HIGH-VALUE RENTAL PLATFORM ──</div>

      <h1 className="font-display text-text-primary mt-8" style={{ fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.05 }}>
        最短<span className="num-cjk">1</span>日で開設できる、
      </h1>
      <h1 className="font-display text-text-primary" style={{ fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.05 }}>
        <span className="text-gold-deep">本格的な</span>レンタルEC。
      </h1>

      <p className="mx-auto mt-10 text-text-secondary" style={{ maxWidth: 460, fontSize: 15, lineHeight: 1.9 }}>
        盗難・紛失リスクまで管理できる、高価格帯商材向けレンタルECプラットフォーム。家電・時計・ブランド品・家具など、あらゆる商材に対応。
      </p>

      <div className="mt-10">
        <button
          onClick={onCtaClick}
          className="bg-gold-deep text-bg-primary uppercase transition-colors duration-[400ms] ease-out hover:bg-gold-light"
          style={{ padding: "18px 48px", fontSize: 11, letterSpacing: "0.2em", fontWeight: 500 }}
        >
          先行登録する(無料)
        </button>
      </div>

      <p className="mt-4 text-text-secondary" style={{ fontSize: 11 }}>
        メールアドレスだけで完了 · リリース時に真っ先にご連絡します · 先着順で初期費用3ヶ月無料
      </p>
    </div>
  </section>
);

/* ---------------- ITEM MARQUEE ---------------- */
const ItemMarquee = () => {
  const items: Array<{ src: string; label: string; cat: string }> = [
    { src: itemWatch.src, label: "高級時計", cat: "WATCHES" },
    { src: itemCamera.src, label: "カメラ機材", cat: "CAMERAS" },
    { src: itemBag.src, label: "ブランドバッグ", cat: "LEATHER" },
    { src: itemFurniture.src, label: "デザイナーズ家具", cat: "FURNITURE" },
    { src: itemAudio.src, label: "オーディオ機器", cat: "AUDIO" },
    { src: itemJewelry.src, label: "万年筆 / ステーショナリー", cat: "STATIONERY" },
  ];
  const loop = [...items, ...items];

  return (
    <section className="bg-bg-primary border-t border-b border-border py-20 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10 mb-10 flex items-end justify-between gap-6">
        <div>
          <div className="label-eyebrow text-gold-deep">── COVERED CATEGORIES ──</div>
          <h2 className="font-display text-text-primary mt-4" style={{ fontSize: "clamp(22px, 3vw, 28px)", lineHeight: 1.25 }}>
            ジャンルを問わず、高価格帯商材すべてに対応。
          </h2>
        </div>
        <div className="hidden md:block font-mono-num text-text-secondary" style={{ fontSize: 11, letterSpacing: "0.15em" }}>
          06 / CATEGORIES
        </div>
      </div>

      <div className="marquee-mask">
        <div className="marquee-track">
          {loop.map((it, i) => (
            <figure
              key={`${it.label}-${i}`}
              className="relative shrink-0 mr-4 md:mr-6 border border-border-gold bg-bg-surface"
              style={{ width: 280, height: 360 }}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                width={280}
                height={360}
                className="block h-full w-full object-cover opacity-90"
              />
              <span className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-gold-deep" />
              <span className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t border-r border-gold-deep" />
              <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-gold-deep" />
              <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-gold-deep" />
              <figcaption className="absolute left-0 right-0 bottom-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent">
                <span className="text-text-primary font-display" style={{ fontSize: 15 }}>{it.label}</span>
                <span className="font-mono-num text-gold-deep" style={{ fontSize: 9, letterSpacing: "0.2em" }}>{it.cat}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- RISK SECTION ---------------- */
const RiskSection = () => (
  <section className="bg-bg-secondary border-t border-b border-border py-24 md:py-32">
    <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
      <div className="reveal-left">
        <div className="label-eyebrow text-risk-accent">THE PROBLEM</div>
        <h2 className="font-display text-text-primary mt-6" style={{ fontSize: 28, lineHeight: 1.25 }}>
          高価格帯レンタルには、固有のリスクがある。
        </h2>
        <ul className="mt-8 space-y-5">
          {[
            "盗難・紛失が発生しても回収手段がない",
            "高額商品ほど、一度の損害が事業継続を脅かす",
            "既存のレンタルASPはこのリスクに対応していない",
          ].map((t) => (
            <li key={t} className="flex gap-4 text-text-secondary" style={{ fontSize: 13, lineHeight: 2 }}>
              <span className="text-risk-accent select-none" aria-hidden>×</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="reveal-right">
        <div className="label-eyebrow text-gold-deep">THE SOLUTION</div>
        <h2 className="font-display text-text-primary mt-6" style={{ fontSize: 28, lineHeight: 1.25 }}>
          デポジット保護機能を、標準搭載。
        </h2>
        <p className="mt-8 text-text-secondary" style={{ fontSize: 13, lineHeight: 1.9 }}>
          レンタル注文と同時に、通常の決済とは別枠でデポジット(保証金)の与信枠を自動確保。与信取得には3Dセキュア認証を採用しており、不正利用・なりすましのリスクも排除します。商材ジャンルを問わず、高価格帯のレンタル事業に安心して参入できます。国内の競合サービスにはない、RentRich独自の仕組みです。
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {["既存サービス A:非対応", "既存サービス B:非対応", "RentRich:✓ 標準搭載"].map((b) => (
            <span key={b} className="font-mono-num bg-gold-muted text-gold-light" style={{ fontSize: 10, padding: "8px 12px" }}>
              {b}
            </span>
          ))}
        </div>
        <p className="font-display text-text-secondary" style={{ fontSize: 12, padding: "8px 12px 0" }}>
          導入事業者より「システム開発費300〜500万円が丸ごと不要になった」
        </p>
      </div>
    </div>
  </section>
);

/* ---------------- COMPETITIVE TABLE ---------------- */
const CompetitiveTable = () => {
  const rows: Array<[string, string, string, string]> = [
    ["初期費用", "20,000円〜", "110,000円〜", "0円"],
    ["月額費用", "29,800円〜", "22,000円〜", "15,000円"],
    ["決済手数料", "2.59%〜", "別途", "5%のみ"],
    ["デポジット保護", "✗", "✗", "✓ 標準搭載"],
    ["3Dセキュア認証", "✗", "✗", "✓ 標準搭載"],
    ["高価格帯商材への対応", "✗", "✗", "✓"],
    ["運営ノウハウの提供", "✗", "✗", "✓ 付帯"],
  ];

  return (
    <section className="bg-bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="reveal text-center">
          <div className="label-eyebrow text-gold-deep">COMPETITIVE ADVANTAGE</div>
          <h2 className="font-display text-text-primary mt-6" style={{ fontSize: "clamp(28px, 4vw, 36px)", lineHeight: 1.2 }}>
            国内唯一の、高価格帯対応プラットフォーム。
          </h2>
        </div>

        <div className="reveal mt-14 overflow-x-auto" data-reveal-delay="0.1s">
          <table className="w-full min-w-[720px] border border-border border-collapse">
            <thead>
              <tr className="bg-bg-surface">
                <th className="text-left p-4 label-eyebrow text-text-secondary" style={{ letterSpacing: "0.2em", fontSize: 10 }}>比較項目</th>
                <th className="p-4 label-eyebrow text-text-secondary" style={{ letterSpacing: "0.2em", fontSize: 10 }}>レンタルASP A</th>
                <th className="p-4 label-eyebrow text-text-secondary" style={{ letterSpacing: "0.2em", fontSize: 10 }}>レンタルASP B</th>
                <th className="p-4 text-center" style={{ borderLeft: "1px solid hsl(var(--gold-deep))", borderRight: "1px solid hsl(var(--gold-deep))" }}>
                  <div className="label-eyebrow text-text-primary" style={{ letterSpacing: "0.2em", fontSize: 10 }}>RentRich</div>
                  <div className="mt-2 inline-block bg-gold-muted text-gold-light font-sans-ui" style={{ fontSize: 9, padding: "3px 8px", letterSpacing: "0.1em" }}>▲ 推奨</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, b, r]) => (
                <tr key={label} className="border-t border-border">
                  <td className="p-4 text-text-primary" style={{ fontSize: 13 }}>{label}</td>
                  <td className="p-4 text-center text-text-primary" style={{ fontSize: 13 }}>
                    <span className={a === "✗" ? "text-text-secondary opacity-40" : ""}>{a}</span>
                  </td>
                  <td className="p-4 text-center text-text-primary" style={{ fontSize: 13 }}>
                    <span className={b === "✗" ? "text-text-secondary opacity-40" : ""}>{b}</span>
                  </td>
                  <td className="p-4 text-center" style={{ borderLeft: "1px solid hsl(var(--gold-deep))", borderRight: "1px solid hsl(var(--gold-deep))" }}>
                    {label === "月額費用" ? (
                      <span className="inline-flex flex-col items-center gap-1">
                        <span className="inline-flex items-baseline gap-2">
                          <span className="text-text-secondary line-through opacity-50" style={{ fontSize: 13 }}>{r}</span>
                          <span className="font-mono-num text-gold-deep" style={{ fontSize: 13 }}>0円</span>
                        </span>
                        <span className="font-sans-ui text-gold-light bg-gold-muted" style={{ fontSize: 9, letterSpacing: "0.15em", padding: "2px 6px" }}>キャンペーン中</span>
                      </span>
                    ) : r.startsWith("✓") ? (
                      <span className="font-mono-num text-gold-deep" style={{ fontSize: 13 }}>{r}</span>
                    ) : (
                      <span className="text-text-primary" style={{ fontSize: 13 }}>{r}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2 inline-block bg-gold-muted text-gold-light font-sans-ui" style={{ fontSize: 12, padding: "10px 16px" }}>
          ★ 先行登録いただいた方は、キャンペーン期間中は月額費用が0円になります。
        </div>
        <p className="reveal mt-4 text-text-secondary opacity-40" style={{ fontSize: 10 }}>
          ※ 2022年8月時点の公開情報をもとに当社調査
        </p>
      </div>
    </section>
  );
};

/* ---------------- FEATURES ---------------- */
const Features = () => {
  const cards: Array<{ n: string; h: string; d: string; img: string; alt: string }> = [
    { n: "01", h: "最短1日でショップ開設", d: "扱う商材を問わず、テンプレートを選んで商品を登録するだけ。技術知識は不要。システム開発費300〜500万円を削減できます。", img: featureStorefront.src, alt: "ダークテーマのレンタルECストアフロント例" },
    { n: "02", h: "決済・在庫・予約をワンストップ管理", d: "複雑なレンタル業務を一つの管理画面に集約。顧客管理・レンタル延長・クーポン発行まで対応。運営コストを大幅に削減できます。", img: featureDashboard.src, alt: "RentRich管理ダッシュボードのイメージ" },
    { n: "03", h: "ブランドらしいショップデザイン", d: "カラー・フォント・ロゴを自由にカスタマイズ。あなたのビジネスの世界観をそのまま表現できます。", img: featureBrand.src, alt: "ブランドアイデンティティ表現の例" },
  ];

  return (
    <section className="bg-bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="reveal text-center">
          <div className="label-eyebrow text-gold-deep">FEATURES</div>
          <h2 className="font-display text-text-primary mt-6" style={{ fontSize: "clamp(28px, 4vw, 36px)", lineHeight: 1.2 }}>
            レンタルECに必要なすべてを、ひとつに。
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-gold-deep" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {cards.map((c, i) => (
            <div key={c.n} className="reveal" data-reveal-delay={`${i * 0.12}s`}>
              <div className="h-px w-full bg-gold-deep" />
              <div className="relative mt-6 overflow-hidden border border-border-gold bg-bg-surface" style={{ aspectRatio: "4 / 3" }}>
                <img src={c.img} alt={c.alt} loading="lazy" width={1024} height={768} className="block h-full w-full object-cover opacity-85" />
                <span className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-gold-deep" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-gold-deep" />
              </div>
              <div className="pt-4">
                <div className="font-mono-num text-gold-deep" style={{ fontSize: 11, letterSpacing: "0.3em" }}>{c.n}</div>
                <h3 className="font-display text-text-primary mt-5" style={{ fontSize: 20, lineHeight: 1.35 }}>{c.h}</h3>
                <p className="mt-4 text-text-secondary" style={{ fontSize: 13, lineHeight: 1.85 }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- REGISTER FORM ---------------- */
const RegisterForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ company: "", name: "", email: "", phone: "", message: "" });

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          company: form.company,
          name: form.name,
          email: form.email,
          ...(form.phone ? { phone: form.phone } : {}),
          ...(form.message ? { message: form.message } : {}),
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ company: "", name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-bg-surface border border-border text-text-primary px-4 py-4 outline-none transition-colors duration-300 focus:border-gold-deep placeholder:text-text-secondary";

  return (
    <section id="register" className="relative overflow-hidden bg-bg-secondary py-28 md:py-36 border-t border-border">
      <div className="pointer-events-none absolute inset-0 vault-engraving-faint" />
      <div className="relative mx-auto max-w-[560px] px-6 text-center">
        <div className="reveal label-eyebrow text-gold-deep">── 先行登録受付中 ──</div>
        <h2 className="reveal font-display text-text-primary mt-8" style={{ fontSize: "clamp(32px, 5vw, 44px)", lineHeight: 1.2 }} data-reveal-delay="0.05s">
          今登録すると、初期費用が <span className="text-gold-deep"><span className="num-cjk">3</span>ヶ月無料</span> になります。
        </h2>
        <p className="reveal mt-8 text-text-secondary text-left" style={{ fontSize: 13, lineHeight: 1.9 }} data-reveal-delay="0.1s">
          RentRichは現在、正式リリースに向けて準備中です。家電・時計・ブランド品・家具・おもちゃなど、あらゆる商材のレンタルEC開設に対応します。ご登録いただくと、リリース時に真っ先にお知らせします。登録いただいた方には、初期費用3ヶ月分を無料でご提供します(先着順)。
        </p>

        <form onSubmit={onSubmit} className="reveal mt-10 flex flex-col gap-3 text-left" data-reveal-delay="0.15s">
          <div className="flex flex-col gap-1">
            <label className="label-eyebrow text-text-secondary" style={{ fontSize: 9 }}>
              会社名・屋号 <span className="text-risk-accent">*</span>
            </label>
            <input
              type="text"
              required
              value={form.company}
              onChange={set("company")}
              placeholder="例：株式会社〇〇 / 〇〇ショップ"
              className={inputClass}
              style={{ fontSize: 13 }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="label-eyebrow text-text-secondary" style={{ fontSize: 9 }}>
              ご担当者名 <span className="text-risk-accent">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={set("name")}
              placeholder="例：山田 太郎"
              className={inputClass}
              style={{ fontSize: 13 }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="label-eyebrow text-text-secondary" style={{ fontSize: 9 }}>
              メールアドレス <span className="text-risk-accent">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={set("email")}
              placeholder="例：info@example.com"
              className={inputClass}
              style={{ fontSize: 13 }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="label-eyebrow text-text-secondary" style={{ fontSize: 9 }}>
              連絡先電話番号 <span className="text-text-secondary opacity-50">(任意)</span>
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="例：03-1234-5678"
              className={inputClass}
              style={{ fontSize: 13 }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="label-eyebrow text-text-secondary" style={{ fontSize: 9 }}>
              連絡事項 <span className="text-text-secondary opacity-50">(任意)</span>
            </label>
            <textarea
              value={form.message}
              onChange={set("message")}
              placeholder="質問したい点などございましたらご連絡ください。"
              rows={4}
              className="w-full bg-bg-surface border border-border text-text-primary px-4 py-4 outline-none transition-colors duration-300 focus:border-gold-deep placeholder:text-text-secondary resize-none"
              style={{ fontSize: 13 }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 bg-gold-deep text-bg-primary uppercase transition-colors duration-[400ms] ease-out hover:bg-gold-light disabled:opacity-60"
            style={{ padding: "18px 28px", fontSize: 11, letterSpacing: "0.2em", fontWeight: 500 }}
          >
            {status === "loading" ? "送信中..." : "無料で先行登録する"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-6 font-mono-num text-gold-deep" style={{ fontSize: 13 }}>
            ✓ 登録が完了しました。リリース時に真っ先にご連絡します。しばらくお待ちください。
          </p>
        )}
        {status === "error" && (
          <p className="mt-6 text-risk-accent" style={{ fontSize: 13 }}>
            送信に失敗しました。しばらくしてから再度お試しください。
          </p>
        )}

        <p className="mt-5 text-text-secondary" style={{ fontSize: 10 }}>
          <span className="text-gold-deep">✓</span> 無料・登録のみ &nbsp; <span className="text-gold-deep">✓</span> サービス提供後、即ご連絡します
        </p>
      </div>
    </section>
  );
};

/* ---------------- FOOTER ---------------- */
const Footer = () => (
  <footer className="border-t border-border py-14" style={{ backgroundColor: "#050505" }}>
    <div className="mx-auto max-w-[1180px] px-6 md:px-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-gold-deep" style={{ fontSize: 18, letterSpacing: "0.15em" }}>RentRich</p>
          <p className="mt-3 text-text-secondary" style={{ fontSize: 12, lineHeight: 1.8 }}>
            高価格帯商材向けレンタルECプラットフォーム<br />
            運営：Shareris株式会社
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="label-eyebrow text-text-secondary mb-1" style={{ fontSize: 9 }}>COMPANY</p>
          <a
            href="https://www.shareris.com/others/bussinessoverview"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-text-secondary hover:text-gold-deep transition-colors"
            style={{ fontSize: 12 }}
          >
            会社概要
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center">
        <p className="text-text-secondary opacity-40" style={{ fontSize: 10, letterSpacing: "0.25em" }}>
          © 2026 RENTRICH / SHARERIS INC. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  </footer>
);

export default Index;
