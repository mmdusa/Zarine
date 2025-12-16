"use client";

import Image from "next/image";
import Link from "next/link";
import { ZERESHK_PRODUCTS } from "./zereshkData";

export default function ZereshkListPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(60%_70%_at_50%_0%,#2a1510_0%,#120b09_55%,#0b0807_100%)] text-white pb-24">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#FF6B6B] drop-shadow-[0_10px_30px_rgba(255,107,107,.25)]">
          Zereshk · Iranian Barberry
        </h1>
        <p className="mt-4 text-white/85 max-w-3xl">
          Sweet–sour ruby barberries for{" "}
          <span className="text-[#FF6B6B] font-semibold">Zereshk Polo, Tahchin & desserts</span>.
        </p>
      </section>

      {/* PRODUCT GRID — NO ADD TO CART HERE */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {ZERESHK_PRODUCTS.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl"
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <span className="absolute left-3 top-3 bg-white/90 text-black text-sm font-semibold px-3 py-1">
                €{p.price}
              </span>
            </div>

            {/* INFO */}
            <div className="p-5">
              <div className="text-xs uppercase tracking-widest text-white/60">{p.weight}</div>

              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70 line-clamp-2">{p.description}</p>

              {/* ONLY LEARN MORE BUTTON → CART REMOVED */}
              <div className="mt-4 flex justify-end">
                <Link
                  href={`/products/barberry/${p.id}`}
                  className="rounded-xl bg-[#FF6B6B] text-black text-sm font-semibold px-4 py-2 hover:brightness-95 transition"
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
