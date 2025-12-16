"use client";

import { useMemo } from "react";
import { LOOSE_SAFFRON } from "@/app/data/Saffronloose";
import ProductCard from "@/components/shop/ProductCard";

export default function LooseSaffronPage() {
  const items = useMemo(() => LOOSE_SAFFRON, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(60%_70%_at_50%_0%,#2a1510_0%,#120b09_55%,#0b0807_100%)] text-white">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#FFD700] drop-shadow-[0_10px_30px_rgba(212,175,55,.25)]">
          Loose Saffron Collection
        </h1>
        <p className="mt-4 text-white/85 max-w-3xl">
          Explore our selection of{" "}
          <span className="text-[#FFD700]">Grade-1 Sargol</span> and{" "}
          <span className="text-[#FFD700]">Negin</span> saffron — packaged in
          classic <em>Khatam</em> tins and modern <em>Ghoti</em> sleeves. Tap a
          pack to see full details, price and tasting notes.
        </p>
      </section>

      {/* Grid of cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((p) => (
            <ProductCard
              key={p.id}
              href={`/products/saffron/${p.id}`}
              image={p.images[0]}
              title={p.title}
              brand={p.brand}
              blurb={p.blurb}
              price={p.price}
              weightLabel={`${p.weightGrams} g`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
