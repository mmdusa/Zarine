"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/stores/useCart"; // ✅ FIXED IMPORT

type TeaItem = {
  slug: string;
  title: string;
  subtitle?: string;
  img: string;
  priceEUR?: number;
};

const TEAS: TeaItem[] = [
  { slug: "shahrzad-earl-grey-450", title: "Shahrzad • Earl Grey", subtitle: "400–450 g box", img: "/tea/black/shahrzad-earl-grey-450.jpg", priceEUR: 12.9 },
  { slug: "shahrzad-cardamom-500", title: "Shahrzad • Cardamom", subtitle: "500 g box", img: "/tea/black/shahrzad-cardamom-500.jpg", priceEUR: 13.9 },
  { slug: "shahrzad-red-400", title: "Shahrzad • Classic Red", subtitle: "400 g box", img: "/tea/black/shahrzad-red-400.jpg", priceEUR: 11.9 },
  { slug: "refah-green-350", title: "Refah Lahijan • FBOP", subtitle: "Bergamot, 350 g", img: "/tea/black/refah-green-350.jpg", priceEUR: 10.9 },
  { slug: "refah-white-340", title: "Refah Lahijan • TGFBOP", subtitle: "340 g", img: "/tea/black/refah-white-340.jpg", priceEUR: 11.5 },
  { slug: "refah-black-300", title: "Refah Lahijan • Oolong Style", subtitle: "300 g", img: "/tea/black/refah-black-300.jpg", priceEUR: 10.5 },
  { slug: "shahrzad-earl-grey-plus-325", title: "Shahrzad • Earl Grey Plus", subtitle: "325 g tin", img: "/tea/black/shahrzad-earl-grey-plus-325.jpg", priceEUR: 14.5 },
  { slug: "shahrzad-assam-325", title: "Shahrzad • Assam Natural", subtitle: "325 g tin", img: "/tea/black/shahrzad-assam-325.jpg", priceEUR: 13.5 },
  { slug: "shahrzad-darjeeling-325", title: "Shahrzad • Darjeeling–Assam", subtitle: "325 g tin", img: "/tea/black/shahrzad-darjeeling-325.jpg", priceEUR: 14.9 },
];

export default function TeaBlackGrid() {
  // ✅ correct selector-based usage
  const add = useCart((s) => s.add);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] mb-2">
        Black Tea
      </h1>
      <p className="text-white/80 mb-6">
        Click a card to view details or use “Add to cart”.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAS.map((t) => (
          <li key={t.slug} className="group">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0b0a]">
              <Link href={`/products/tea/black/${t.slug}`} className="block relative">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 transition-transform group-hover:scale-[1.02]"
                  />
                </div>
                <div className="px-4 pb-3">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  {t.subtitle && (
                    <p className="text-white/70 text-sm mt-1">{t.subtitle}</p>
                  )}
                </div>
              </Link>

              <div className="px-4 pb-4 flex items-center justify-between">
                <span className="text-[#FFD700] font-semibold">
                  {t.priceEUR ? `€${t.priceEUR.toFixed(2)}` : ""}
                </span>

                <button
                  onClick={() =>
                    add(
                      {
                        id: `tea:${t.slug}`,
                        title: t.title,
                        priceNumber: t.priceEUR ?? 0,
                        img: t.img,
                        meta: t.subtitle,
                      },
                      1
                    )
                  }
                  className="rounded-full px-4 py-2 bg-[#D4AF37] text-black text-sm font-semibold hover:brightness-110"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
