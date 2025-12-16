"use client";

import Image from "next/image";
import Link from "next/link";
import { TEA_BAGS } from "./teaBagsData";

export default function TeaBagsListPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(60%_70%_at_50%_0%,#2a1510_0%,#120b09_55%,#0b0807_100%)] text-white pb-24">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#FFD700] drop-shadow-[0_10px_30px_rgba(212,175,55,.25)]">
          Tea Bag Collection
        </h1>
        <p className="mt-4 text-white/85 max-w-3xl">
          Explore our premium{" "}
          <span className="text-[#FFD700]">Persian-inspired tea bags</span> —
          aromatic blends designed for fast brewing, deep flavor and everyday
          comfort.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {TEA_BAGS.map((t) => (
          <article
            key={t.id}
            className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <span className="absolute left-3 top-3 rounded-full bg-white/90 text-black text-sm font-semibold px-3 py-1">
                {t.price}
              </span>
            </div>

            <div className="p-5">
              <div className="text-xs uppercase tracking-widest text-white/60">
                {t.weight} • {t.pieces}
              </div>
              <h3 className="mt-1 text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-white/70">{t.notes}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[13px] text-white/70">
                  Brew: <span className="text-white/90">{t.brew}</span>
                </span>

                <Link
                  href={`/products/tea/tea-bags/${t.id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#FFD700] text-black text-sm font-semibold px-4 py-2 hover:brightness-95 transition"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
