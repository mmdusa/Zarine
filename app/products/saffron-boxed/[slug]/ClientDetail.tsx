"use client";

import { useState } from "react";
import Image from "next/image";
import type { BoxedProduct } from "@/app/data/saffronBoxed";
import { useCart } from "@/lib/stores/useCart";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs">
      {children}
    </span>
  );
}

export default function ClientDetail({ product }: { product: BoxedProduct }) {
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false); // ⭐ animation
  const add = useCart((s) => s.add);

  const imgs = product.images?.length ? product.images : ["/fallback.jpg"];

  const metaParts = [
    product.origin && `origin: ${product.origin}`,
    product.weight && `weight: ${product.weight}`,
    product.grade && `grade: ${product.grade}`,
  ].filter(Boolean) as string[];

  const meta = metaParts.length ? metaParts.join(" • ") : undefined;

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    add(
      {
        id: product.id,
        title: product.title,
        price: Number(product.price ?? 0),
        img: imgs[active],
        meta,
      },
      1
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* LEFT: arch-cut hero + thumbnails */}
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
                           ${i === active ? "border-[#FFD700]" : "border-white/10 hover:border-white/20"}`}
                aria-label={`Image ${i + 1}`}
                type="button"
              >
                <Image src={src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* RIGHT: content */}
      <section className="pt-1">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          {product.origin && <Badge>{product.origin}</Badge>}
          {product.weight && <Badge>{product.weight}</Badge>}
          {product.grade && <Badge>{product.grade}</Badge>}
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
              className={`relative z-10 rounded-full px-6 py-2 text-black font-semibold
                         transition-all duration-300
                         ${
                           added
                             ? "bg-emerald-400 scale-105 shadow-[0_0_25px_rgba(52,211,153,0.85)] animate-[cart-pop_0.5s_ease-out]"
                             : "bg-[#FFD700] hover:brightness-110 active:translate-y-[1px]"
                         }`}
              aria-label="Add to cart"
            >
              {added ? "Added!" : "Add to cart"}
            </button>
          </div>
        </div>

        {/* copy */}
        <div className="mt-6 leading-relaxed text-white/90 space-y-4">
          {product.short && <p>{product.short}</p>}
          {product.long && <p>{product.long}</p>}
        </div>

        {/* tasting notes */}
        {product.notes?.length ? (
          <div className="mt-5">
            <div className="text-sm text-white/70 mb-2">Tasting & pairing</div>
            <div className="flex flex-wrap gap-2">
              {product.notes.map((n) => (
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

        {/* how-to tip */}
        <div className="mt-6 text-sm text-white/80">
          <strong className="text-white">Blooming tip:</strong>{" "}
          crush 8–12 strands per serving, then soak in hot (not boiling) liquid for
          10–15 minutes. Add both liquid and strands to your dish for the deepest color.
        </div>
      </section>

      <style jsx global>{`
        @keyframes cart-pop {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(52, 211, 153, 0);
          }
          40% {
            transform: scale(1.12);
            box-shadow: 0 0 25px rgba(52, 211, 153, 0.9);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(52, 211, 153, 0);
          }
        }
      `}</style>
    </div>
  );
}
