"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Product = {
  id: string;
  title: string;
  img: string;
  short: string;
  long: string;
};

function ReadMore({ short, long }: { short: string; long: string }) {
  const [open, setOpen] = useState(false);
  return (
    <p className="text-sm leading-relaxed text-white/85">
      {short}
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="ml-1 text-[#FFD700] hover:underline underline-offset-4"
        >
          Read more
        </button>
      ) : (
        <>
          {" "}
          {long}
          <button
            onClick={() => setOpen(false)}
            className="ml-1 text-[#FFD700] hover:underline underline-offset-4"
          >
            Read less
          </button>
        </>
      )}
    </p>
  );
}

const products: Product[] = [
  {
    id: "aghele-tin-1",
    title: "Aghele Tin — Classic Gift",
    img: "/products/boxed/aghele-tin-1.jpg",
    short: "Elegant Persian tin filled with premium Khorasan saffron.",
    long: "Rich aroma of honey and hay, long crimson filaments and intense color. A timeless gift symbolizing purity and luxury.",
  },
  {
    id: "aghele-tin-2",
    title: "Aghele Tin — Deluxe Edition",
    img: "/products/boxed/aghele-tin-2.jpg",
    short: "Hand-crafted tin with airtight seal and traditional Persian motif.",
    long: "Protects delicate threads from light and moisture while offering an authentic Persian presentation.",
  },
  {
    id: "aghele-vial-1",
    title: "Aghele Vial — Glass Collector",
    img: "/products/boxed/aghele-vial-1.jpg",
    short: "Crystal vial preserving saffron’s vibrant color and perfume.",
    long: "Ideal for culinary display or gifting; sealed for long-lasting freshness and brilliance.",
  },
  {
    id: "aghele-vial-2",
    title: "Aghele Vial — Travel Size",
    img: "/products/boxed/aghele-vial-2.jpg",
    short: "Compact glass tube for easy use in cooking or tea blends.",
    long: "Each strand unfurls with golden hue and sweet floral aroma — portable luxury for every kitchen.",
  },
  {
    id: "bahraman-iran-1",
    title: "Bahraman Iran — Signature Box",
    img: "/products/boxed/bahraman-iran-1.jpg",
    short: "Classic Bahraman box featuring deep Iranian saffron tones.",
    long: "Long filaments harvested from Mashhad fields — full-bodied flavor and rich fragrance.",
  },
  {
    id: "bahraman-iran-2",
    title: "Bahraman Iran — Collectors Tin",
    img: "/products/boxed/bahraman-iran-2.jpg",
    short: "Durable metallic tin retaining saffron’s natural aroma.",
    long: "Perfect for long-term storage and elegant kitchen display.",
  },
  {
    id: "bahraman-mortar-1",
    title: "Bahraman Mortar Gift Set",
    img: "/products/boxed/bahraman-mortar-1.jpg",
    short: "Decorative set featuring a brass mortar & pestle.",
    long: "Crush just before use to release peak aroma and brilliant golden color — ideal for food connoisseurs.",
  },
  {
    id: "bahraman-mortar-2",
    title: "Bahraman Mortar Set — Deluxe",
    img: "/products/boxed/bahraman-mortar-2.jpg",
    short: "Hand-polished brass mortar packed with saffron tin.",
    long: "A symbol of heritage and taste — perfect for gourmet gifting.",
  },
  {
    id: "bahraman-noor-1",
    title: "Bahraman Noor — Bright Edition",
    img: "/products/boxed/bahraman-noor-1.jpg",
    short: "Light saffron blend with refreshing floral tones.",
    long: "Produces a clean golden infusion, ideal for light dishes and warm beverages.",
  },
  {
    id: "bahraman-violet-1",
    title: "Bahraman Violet — Premium Box",
    img: "/products/boxed/bahraman-violet-1.jpg",
    short: "Deep violet packaging holding intense saffron aroma.",
    long: "Soft cocoa-like notes balanced with smooth sweetness — an elegant addition to your collection.",
  },
  {
    id: "crystal-duo-1",
    title: "Crystal Duo — Twin Tubes",
    img: "/products/boxed/crystal-duo-1.jpg",
    short: "Twin glass tubes for gifting or sharing.",
    long: "Two premium doses sealed for perfection; a refined duo for home chefs and collectors.",
  },
  {
    id: "luxe-tin-4g-1",
    title: "Luxe Tin — 4g Celebration Pack",
    img: "/products/boxed/luxe-tin-4g-1.jpg",
    short: "Generous 4-gram tin ideal for festive dishes and events.",
    long: "Delivers pure coloring power and bold taste — a chef’s dream saffron pack.",
  },
  {
    id: "velvet-tubes-1",
    title: "Velvet Tubes — Royal Gift",
    img: "/products/boxed/velvet-tubes-1.jpg",
    short: "Velvet-lined box holding glass tubes of saffron.",
    long: "A presentation of true Persian luxury, blending craft and culinary beauty.",
  },
  {
    id: "velvet-tubes-2",
    title: "Velvet Tubes — Deluxe Edition",
    img: "/products/boxed/velvet-tubes-2.jpg",
    short: "Elegant velvet-covered case with magnetic closure.",
    long: "Each tube holds a perfect dose; a gift that delights both eyes and palate.",
  },
];

function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <article
      className="
        group relative h-full rounded-[26px] p-[1.5px]
        bg-[conic-gradient(from_210deg,rgba(212,175,55,.85),rgba(212,175,55,.25),transparent_70%)]
        shadow-[0_18px_60px_rgba(0,0,0,.45)]
        hover:shadow-[0_28px_90px_rgba(212,175,55,.25)]
        transition-all duration-300
      "
    >
      <div
        className="
          relative h-full rounded-[24px]
          bg-gradient-to-b from-[#17100d] via-[#120d0b] to-[#0f0b0a]
          border border-white/10 overflow-hidden
        "
      >
        <div className="relative p-4 pb-0">
          <Image
            src={p.img}
            alt={p.title}
            width={1100}
            height={1375}
            className="
              w-full aspect-[4/5] object-cover rounded-[20px]
              [clip-path:polygon(0%_0%,100%_0%,100%_82%,50%_100%,0%_82%)]
              ring-1 ring-white/10
              transition-transform duration-500 group-hover:scale-[1.03]
            "
          />
        </div>

        <div className="px-5 py-5">
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <div className="mt-2">
            <ReadMore short={p.short} long={p.long} />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Link
              href={`/products/saffron-boxed/${encodeURIComponent(p.id)}`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold bg-[#D4AF37] text-black border border-[#d4af37]/80 shadow-[0_8px_24px_rgba(212,175,55,.22)] hover:brightness-110 active:translate-y-[1px] transition"
            >
              View details
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 6l6 6-6 6" />
              </svg>
            </Link>
            <span className="text-[#FFD700]/90 text-xs italic tracking-wide">
              زَرّینِه
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BoxedProductsGrid() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {products.map((p, i) => (
        <li key={p.id} className="min-h-[26rem]">
          <ProductCard p={p} i={i} />
        </li>
      ))}
    </ul>
  );
}
