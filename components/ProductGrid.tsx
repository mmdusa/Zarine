"use client";

import Image from "next/image";
import Link from "next/link";

/* -------------------------- DATA (edit as needed) -------------------------- */
type Item = {
  title: string;
  blurb: string;
  href: string; // destination when clicking "Learn more"
  img: string;  // e.g. /images/saffron.jpg
};

const items: Item[] = [
  {
    title: "Saffron",
    blurb: "Hand-picked threads from Khorasan — vivid color, deep aroma.",
    href: "/learn/saffron", // ← go to the history/scroll page
    img: "/images/saffron.jpg",
  },
  {
    title: "Persian Tea",
    blurb: "Gilan highland tea — bright, brisk, naturally aromatic.",
    href: "/products/tea",
    img: "/images/tea.jpg",
  },
  {
    title: "Rosewater (Golab)",
    blurb: "Kashan Damask roses — cool, floral, crystal-clear distillate.",
    href: "/rosewater",        // ⬅️ history page
    img: "/images/rosewater.jpg",
  },
  {
    title: "Barberry (Zereshk)",
    blurb: "Ruby-tart berries — a pantry jewel for rice & stews.",
    href: "/barberry",
    img: "/images/barberry.jpg",
  },
  {
    title: "Dates",
    blurb: "Soft, caramel-sweet, sun-ripened desert fruit.",
    href: "/dates",
    img: "/images/dates.jpg",
  },
];

/* ------------------------ TILE (same size for all) ------------------------- */
function ProductTile({ it, i }: { it: Item; i: number }) {
  return (
    <article
      className="
        group relative h-full
        rounded-[24px] p-[1px]
        bg-gradient-to-br from-[#d4af37]/60 via-[#a7732a]/40 to-transparent
        shadow-[0_18px_60px_rgba(0,0,0,.45)]
        hover:shadow-[0_26px_80px_rgba(212,175,55,.25)]
        transition-shadow duration-300
      "
    >
      <div
        className="
          relative h-full rounded-[23px]
          bg-gradient-to-b from-[#140e0c] via-[#120d0b] to-[#0f0b0a]
          border border-white/8 overflow-hidden
        "
      >
        {/* Subtle golden rosettes */}
        <svg
          className="pointer-events-none absolute -left-2 -top-2 h-9 w-9 opacity-60"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 2l2 4 4 1-3 3 .7 4-3.7-1.8L8.3 14l.7-4-3-3 4-1 2-4z"
            fill="rgba(212,175,55,.35)"
          />
        </svg>
        <svg
          className="pointer-events-none absolute -right-2 -top-2 h-9 w-9 rotate-90 opacity-60"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 2l2 4 4 1-3 3 .7 4-3.7-1.8L8.3 14l.7-4-3-3 4-1 2-4z"
            fill="rgba(212,175,55,.35)"
          />
        </svg>

        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          <Image
            src={it.img}
            alt={it.title}
            width={1200}
            height={800}
            priority={i < 2}
            className="
              w-full aspect-[16/10]
              object-cover
              [clip-path:polygon(0%_0%,100%_0%,100%_80%,50%_100%,0%_80%)]
              transition-transform duration-500 group-hover:scale-[1.03]
            "
          />
        </div>

        {/* Text content */}
        <div className="relative -mt-6 mx-4 mb-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4">
          <h3 className="text-lg sm:text-xl font-semibold tracking-wide text-white">
            {it.title}
          </h3>
          <p className="mt-2 text-sm text-white/80 leading-relaxed">{it.blurb}</p>

          <div className="mt-4 flex items-center justify-between">
            <Link
              href={it.href}
              aria-label={`Learn more about ${it.title}`}
              className="
                inline-flex items-center gap-2 rounded-full
                px-4 py-2 text-sm font-semibold
                bg-[#D4AF37] text-black border border-[#d4af37]/70
                shadow-[0_8px_24px_rgba(212,175,55,.22)]
                hover:brightness-110 active:translate-y-[1px] transition
              "
            >
              Learn more
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M9 6l6 6-6 6" />
              </svg>
            </Link>

            <span className="text-[#FFD700]/90 text-xs italic tracking-wide">
              زَرّینِه
            </span>
          </div>
        </div>

        {/* Glow at bottom */}
        <div
          className="
            pointer-events-none absolute inset-x-0 bottom-0 h-14
            bg-[radial-gradient(60%_80%_at_50%_100%,rgba(212,175,55,.18),transparent)]
          "
        />
      </div>
    </article>
  );
}

/* ------------------------------- GRID WRAPPER ------------------------------ */
export default function ProductGrid() {
  return (
    <section
      id="explore-products"
      className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-10"
      aria-label="Zariné products"
    >
      <div className="max-w-6xl mx-auto">
        {/* responsive, consistent height tiles */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <li key={it.href} className="min-h-[22rem]">
              <ProductTile it={it} i={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
