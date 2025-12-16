"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/stores/useCart";
import type { BlackTea } from "@/app/data/blackTea";

type Props = {
  tea: BlackTea; // ✅ THIS WAS MISSING
};

export default function ClientTeaDetail({ tea }: Props) {
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(
      `tea-${tea.slug}`,
      tea.title,
      tea.price,
      tea.img,
      `${tea.weight}${tea.origin ? ` • ${tea.origin}` : ""}`
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-24 text-white">
      <div className="grid md:grid-cols-2 gap-8">

        {/* IMAGE */}
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black/20">
          <Image
            src={tea.img}
            alt={tea.title}
            fill
            priority
            className="object-contain p-6"
          />
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-3xl font-bold">{tea.title}</h1>

          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-white/80 text-black">
              {tea.weight}
            </span>
            {tea.origin && (
              <span className="px-2 py-1 rounded-full bg-white/80 text-black">
                {tea.origin}
              </span>
            )}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-6">
            <p className="text-white/70 mb-4">
              {tea.brew ? `${tea.brew}. ` : ""}Enjoy plain or with lemon.
            </p>

            <div className="flex items-center justify-between">
              <div className="text-3xl font-semibold text-[#FFD700]">
                €{tea.price.toFixed(2)}
              </div>

              <button
                onClick={handleAdd}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                  added
                    ? "bg-emerald-400 text-black scale-105"
                    : "bg-[#FFD700] text-black hover:bg-[#FFE680]"
                }`}
              >
                {added ? "Added!" : "Add to cart"}
              </button>
            </div>
          </div>

          {tea.description && (
            <div
              className="prose prose-invert mt-8 max-w-none"
              dangerouslySetInnerHTML={{ __html: tea.description }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
