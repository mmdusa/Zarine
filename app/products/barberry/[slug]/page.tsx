"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/stores/useCart";
import { ZERESHK_PRODUCTS } from "../zereshkData";

export default function BarberryProductPage({ params }: { params: { slug: string } }) {
  const product = ZERESHK_PRODUCTS.find((p) => p.id === params.slug);

  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        Product not found.
      </main>
    );
  }

  // Convert "€8.50" → 8.5
  const numericPrice = Number(product.price.replace(/[^\d.]/g, ""));

  const handleAdd = () => {
    add(
      `zereshk-${product.id}`,
      product.name,
      numericPrice,
      product.image,
      `weight: ${product.weight} • packaging: ${product.pieces}`
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120906] via-[#090304] to-black text-white pb-20">

      <section className="max-w-7xl mx-auto px-6 pt-16 grid md:grid-cols-[minmax(0,2.4fr)_minmax(0,3fr)] gap-12">

        {/* LEFT - identical to Tea Bag large image card */}
        <div className="rounded-3xl border border-[#d4af37]/25 bg-black/60 p-6 shadow-[0_20px_90px_rgba(0,0,0,.7)]">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain drop-shadow-[0_0_40px_rgba(0,0,0,.9)]"
            />
          </div>
        </div>

        {/* RIGHT — EXACT TEA BAG STYLE */}
        <div>

          <Link href="/products/barberry" className="text-[11px] uppercase opacity-60 hover:opacity-100">
            ← Back to Zereshk
          </Link>

          <h1 className="mt-2 text-4xl font-bold text-[#FF6B6B]">{product.name}</h1>

          {/* Pills identical look */}
          <div className="flex gap-2 flex-wrap mt-4 text-xs tracking-wide uppercase">
            <span className="pill">{product.weight}</span>
            <span className="pill">{product.pieces}</span>
            <span className="pill">Use: {product.brew}</span>
            <span className="pill">Category: Zereshk</span>
          </div>

          {/* PRICE CARD SAME UI */}
          <div className="mt-8 rounded-3xl border border-[#d4af37]/40 bg-gradient-to-r from-[#24130d] via-[#2f1810] to-[#3c2213] p-6 flex items-center justify-between">
            <p className="text-sm opacity-85 max-w-md">
              Rich, tangy Persian barberries — perfect for rice, desserts & drinks.
            </p>

            <div className="text-right">
              <p className="text-3xl font-bold text-[#FFD56A] mb-3">{product.price}</p>

              <button
                onClick={handleAdd}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                  added
                    ? "bg-emerald-400 text-black scale-105 shadow-[0_0_25px_rgba(52,211,153,1)]"
                    : "bg-[#ffd600] text-black hover:bg-[#ffe680]"
                }`}
              >
                {added ? "Added!" : "Add to Cart"}
              </button>
            </div>
          </div>

          {/* DESCRIPTION LIKE TEA BAGS */}
          <div className="mt-10 space-y-6 text-white/85 leading-relaxed">
            <div>
              <p className="font-bold text-[#FF6B6B] mb-1">Story</p>
              <p>{product.description}</p>
            </div>

            <div>
              <p className="font-bold text-[#FF6B6B] mb-1">Serving Ideas</p>
              <p>
                Add to rice (zereshk polo), salads, tea, jam, desserts or brew in warm
                water with saffron + honey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL COPY - do not remove */}
      <style jsx global>{`
        .pill {
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.2);
        }
      `}</style>
    </main>
  );
}
