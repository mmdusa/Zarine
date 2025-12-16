"use client";

import { BOXED_PRODUCTS } from "@/app/data/saffronBoxed";
import ProductCard from "@/components/shop/ProductCard";

export default function SaffronBoxedPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(60%_70%_at_50%_0%,#2a1510_0%,#120b09_55%,#0b0807_100%)] text-white">
      {/* Header – same style as Loose Saffron */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#FFD700] drop-shadow-[0_10px_30px_rgba(212,175,55,.25)]">
          Boxed Saffron Collection
        </h1>
        <p className="mt-4 text-white/85 max-w-3xl">
          Gift-ready Persian saffron in elegant presentation boxes — perfect for
          celebrations, hospitality and special occasions. Tap a box to see full
          details, price and tasting notes.
        </p>
      </section>

      {/* Grid – uses EXACT same card as Loose Saffron */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {BOXED_PRODUCTS.map((p) => (
            <ProductCard
              key={p.id}
              href={`/products/saffron-boxed/${p.id}`}
              image={p.images[0]}
              title={p.title}
              brand={p.brand ?? "Bahraman"}
              blurb={p.short}
              price={p.price}
              weightLabel={p.weight}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
