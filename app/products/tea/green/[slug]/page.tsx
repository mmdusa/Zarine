"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { useCart } from "@/lib/stores/useCart";
import { GREEN_TEA } from "../greenTeaData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function GreenTeaDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  const product = GREEN_TEA.find((p) => p.id === slug);

  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        Product not found.
      </main>
    );
  }

  const price = Number(product.price.replace(/[^\d.]/g, ""));

  const handleAdd = () => {
    add(
      `green-${product.id}`,
      product.name,
      price,
      product.image,
      `weight: ${product.weight} • brew: ${product.brew}`
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120906] via-[#0A0504] to-black text-white pb-20">
      <section className="max-w-7xl mx-auto px-6 pt-16 grid md:grid-cols-[minmax(0,2.4fr)_minmax(0,3fr)] gap-12">

        <div className="rounded-3xl border border-[#d4af37]/25 bg-black/60 p-6">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <Link href="/products/tea/green" className="text-[11px] uppercase opacity-60">
            ← Back to Green Tea
          </Link>

          <h1 className="mt-2 text-4xl font-bold text-[#7CFFB5]">{product.name}</h1>

          <div className="flex gap-2 flex-wrap mt-4 text-xs uppercase">
            <span className="pill">{product.weight}</span>
            <span className="pill">Loose Leaf</span>
            <span className="pill">Brew {product.brew}</span>
          </div>

          <div className="mt-8 rounded-3xl border border-[#d4af37]/40 p-6 flex justify-between">
            <p className="text-sm opacity-85 max-w-md">
              Classic Lahijan green tea — clean and refreshing.
            </p>

            <div className="text-right">
              <p className="text-3xl font-bold text-[#FFD56A] mb-3">
                {product.price}
              </p>

              <button
                onClick={handleAdd}
                className={`px-6 py-2 rounded-full text-xs font-bold ${
                  added ? "bg-emerald-400 text-black" : "bg-[#ffd600] text-black"
                }`}
              >
                {added ? "Added!" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </section>

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
