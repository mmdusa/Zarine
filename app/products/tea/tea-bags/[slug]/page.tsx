"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useCart } from "@/lib/stores/useCart";

type TeaBagDetail = {
  id: string;
  name: string;
  image: string;
  weight: string;
  pieces: string;
  brew: string;
  origin: string;
  flavor: string;
  heroLine: string;
  price: string;
  story: string;
  tastingNotes: string;
  pairing: string;
};

const TEA_BAG_DETAILS: Record<string, TeaBagDetail> = {
  /* 🔴 NO CHANGES HERE – keep your data exactly as-is */
  // ... your existing object
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TeaBagDetailPage({ params }: PageProps) {
  const { slug } = await params; // ✅ THIS IS THE FIX

  const product = TEA_BAG_DETAILS[slug];
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAdd = () => {
    const numericPrice = Number(product.price.replace(/[^\d.]/g, ""));

    const meta = [
      `weight: ${product.weight}`,
      `pieces: ${product.pieces}`,
      `brew: ${product.brew}`,
      `origin: ${product.origin}`,
      `flavour: ${product.flavor}`,
    ].join(" • ");

    add(
      `teabag-${product.id}`,
      product.name,
      numericPrice,
      product.image,
      meta
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120906] via-[#090304] to-black text-white pb-16">
      <section className="max-w-6xl mx-auto px-5 pt-16">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,2.4fr)_minmax(0,3fr)]">

          {/* IMAGE */}
          <div className="rounded-[32px] border border-[#d4af37]/30 bg-black/80 p-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* INFO */}
          <div>
            <h1 className="text-4xl font-semibold text-[#F4D27F]">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="pill">{product.weight}</span>
              <span className="pill">{product.pieces}</span>
              <span className="pill">Brew {product.brew}</span>
              <span className="pill">{product.origin}</span>
              <span className="pill">{product.flavor}</span>
            </div>

            <div className="mt-6 rounded-3xl border border-[#d4af37]/40 bg-gradient-to-r from-[#24130d] via-[#2f1810] to-[#3c2213] p-6 flex justify-between items-center">
              <p className="text-sm text-white/80 max-w-md">
                {product.heroLine}
              </p>

              <div className="text-right">
                <p className="text-3xl font-semibold text-[#FFD56A]">
                  {product.price}
                </p>

                <button
                  onClick={handleAdd}
                  className={`mt-3 px-6 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                    added
                      ? "bg-emerald-400 text-black scale-105 shadow-lg"
                      : "bg-[#ffd600] text-black hover:bg-[#ffe670]"
                  }`}
                >
                  {added ? "Added!" : "Add to cart"}
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-6 text-white/85">
              <p>
                <strong className="text-[#F6E3A0]">Story.</strong>{" "}
                {product.story}
              </p>

              <div>
                <p className="font-semibold text-[#F6E3A0] mb-1">
                  Tasting & pairing
                </p>
                <p>{product.tastingNotes}</p>
                <p className="mt-2">{product.pairing}</p>
              </div>
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
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }
      `}</style>
    </main>
  );
}
