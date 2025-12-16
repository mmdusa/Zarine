"use client";

import Image from "next/image";
import Link from "next/link";
import { GREEN_TEA } from "./greenTeaData";

export default function GreenTeaListPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(60%_70%_at_50%_0%,#2a1510_0%,#120b09_55%,#0b0807_100%)] text-white pb-24">
      {/* TITLE */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#7CFFB5] drop-shadow-[0_10px_30px_rgba(124,255,181,.25)]">
          Green Tea Collection
        </h1>
        <p className="mt-4 text-white/85 max-w-3xl">
          Smooth Persian green teas — fresh, herbal and light for daily drinking.
        </p>
      </section>

      {/* LIST — NO ADD TO CART */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {GREEN_TEA.map((p) => {
          const price = Number(p.price.replace(/[^\d.]/g, ""));

          return (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl"
            >
              {/* IMAGE + PRICE */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <span className="absolute left-3 top-3 bg-white/90 text-black font-semibold px-3 py-1 text-sm">
                  €{price.toFixed(2)}
                </span>
              </div>

              {/* TEXT */}
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-white/60">
                  {p.weight}
                </div>

                <h2 className="mt-1 text-lg font-semibold">{p.name}</h2>
                <p className="mt-1 text-sm text-white/70">{p.notes}</p>

                <p className="mt-3 text-[13px] text-white/60">
                  Brew: <span className="text-white/90">{p.brew}</span>
                </p>

                {/* ONLY LEARN MORE */}
                <div className="mt-4 flex justify-end">
                  <Link
                    href={`/products/tea/green/${p.id}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#7CFFB5] text-black text-sm font-semibold px-4 py-2 hover:brightness-95 transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
