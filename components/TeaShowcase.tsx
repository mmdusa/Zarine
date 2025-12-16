// components/TeaShowcase.tsx
import Image from "next/image";
import Link from "next/link";

type Card = {
  title: string;
  blurb: string;
  price?: string;
  img: string;
  href?: string;
};

export default function TeaShowcase({
  heroImage,
  title,
  subtitle,
  intro,
  cards,
}: {
  heroImage: string;
  title: string;
  subtitle: string;
  intro: string;
  cards: Card[];
}) {
  return (
    <main className="text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          width={2000}
          height={1200}
          priority
          className="w-full h-[52vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] drop-shadow">
              {title}
            </h1>
            <p className="mt-2 text-white/90">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#0e0a08] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <p className="text-white/85 leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Product grid (placeholders; swap with your real products later) */}
      <section className="bg-[#0e0a08]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden">
              <div className="relative">
                <Image src={c.img} alt={c.title} width={1000} height={700} className="w-full aspect-[16/10] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/75">{c.blurb}</p>
                <div className="mt-4 flex items-center justify-between">
                  {c.price ? <span className="text-[#FFD700] font-semibold">{c.price}</span> : <span />}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold bg-[#D4AF37] text-black hover:brightness-110"
                    >
                      View
                      <svg width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M9 6l6 6-6 6"/></svg>
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
