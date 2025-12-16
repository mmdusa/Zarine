// app/products/saffron/[id]/ClientDetail.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/stores/useCart";
import type { LooseProduct } from "@/app/data/Saffronloose";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs">
      {children}
    </span>
  );
}

export default function ClientDetail({ product }: { product: LooseProduct }) {
  const [active, setActive] = useState(0);
  // 1. New state to track the "Added" status
  const [isAdded, setIsAdded] = useState(false);
  
  const add = useCart((s) => s.add);

  const imgs = product.images?.length ? product.images : ["/images/placeholder.jpg"];

  const handleAdd = () => {
    const img = imgs[active];
    const price = Number(product.price ?? 0);
    const meta = [
      `grams: ${product.weightGrams}`,
      `brand: ${product.brand}`,
      "Saffron (Loose)",
    ].join(" • ");

    add(`loose-${product.id}`, product.title, price, img, meta);

    // 2. Set Added state to true, then revert back after 2 seconds
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000); 
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* LEFT: hero + thumbnails */}
      <section>
        <Image
          src={imgs[active]}
          alt={product.title}
          width={1400}
          height={1100}
          priority
          className="w-full aspect-[16/10] object-cover rounded-[24px]
                     [clip-path:polygon(0%_0%,100%_0%,100%_82%,50%_100%,0%_82%)]
                     ring-1 ring-white/10"
        />
        {imgs.length > 1 && (
          <div className="mt-4 grid grid-cols-4 gap-3">
            {imgs.slice(0, 4).map((src, i) => (
              <button
                key={`${product.id}-${i}`}
                onClick={(ev) => {
                  ev.preventDefault();
                  ev.stopPropagation();
                  setActive(i);
                }}
                className={`relative h-20 rounded-xl overflow-hidden border transition
                           ${
                             i === active
                               ? "border-[#FFD700]"
                               : "border-white/10 hover:border-white/20"
                           }`}
                aria-label={`Image ${i + 1}`}
                type="button"
              >
                <Image src={src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* RIGHT: info */}
      <section className="pt-1">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Badge>{product.brand}</Badge>
          <Badge>{product.weightGrams} g</Badge>
          <Badge>Loose saffron</Badge>
        </div>

        <div className="mt-4 rounded-xl border border-white/10 p-4 bg-[#120c08]/60">
          <div className="text-sm text-white/60">Price</div>
          <div className="mt-1 text-2xl text-[#FFD700] font-semibold">
            {product.price != null ? `€${product.price.toFixed(2)}` : "—"}
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={handleAdd}
              // 3. Conditional Styling based on 'isAdded' state
              className={`relative z-10 rounded-full px-6 py-2 text-black font-semibold transition-all duration-300 ease-out
                         ${
                           isAdded
                             ? "bg-[#22c55e]" // Green color when added
                             : "bg-[#FFD700] hover:brightness-110 active:translate-y-[1px]" // Gold color normally
                         }`}
              aria-label="Add to cart"
            >
              {isAdded ? "Added!" : "Add to cart"}
            </button>
          </div>
        </div>

        <div className="mt-6 leading-relaxed text-white/90 space-y-4">
          {product.description && <p>{product.description}</p>}
        </div>

        {product.highlights?.length ? (
          <div className="mt-5">
            <div className="text-sm text-white/70 mb-2">Tasting &amp; pairing</div>
            <div className="flex flex-wrap gap-2">
              {product.highlights.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-6 text-sm text-white/80">
          <strong className="text-white">Blooming tip:</strong>{" "}
          crush 8–12 strands per serving, then soak in hot (not boiling) liquid
          for 10–15 minutes. Add both liquid and strands to your dish for the deepest color.
        </div>
      </section>
    </div>
  );
}