// components/ProductGalleryCard.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/stores/useCart";
import type { BoxedProduct } from "@/app/data/saffronBoxed";

export default function ProductGalleryCard({ p }: { p: BoxedProduct }) {
  const [idx, setIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const add = useCart((s) => s.add);

  const images = p.images?.length ? p.images : ["/_next/static/media/placeholder.png"];
  const active = images[Math.min(idx, images.length - 1)];

  return (
    <article
      className="group relative h-full rounded-[26px] p-[1.5px]
      bg-[conic-gradient(from_210deg,rgba(212,175,55,.85),rgba(212,175,55,.25),transparent_70%)]
      shadow-[0_18px_60px_rgba(0,0,0,.45)]
      hover:shadow-[0_28px_90px_rgba(212,175,55,.25)] transition-shadow"
    >
      <div
        className="relative h-full rounded-[24px]
        overflow-hidden bg-gradient-to-b from-[#17100d] via-[#120d0b] to-[#0f0b0a]
        border border-white/10"
      >
        {/* Image */}
        <div className="relative p-4 pb-0">
          <div className="relative w-full">
            <Image
              src={active}
              alt={p.title}
              width={1200}
              height={900}
              className="w-full aspect-[16/10] object-cover rounded-[22px]
              [clip-path:polygon(0%_0%,100%_0%,100%_82%,50%_100%,0%_82%)]
              ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 p-2 text-white"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 p-2 text-white"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {images.map((src, i) => (
                <button
                  key={`${p.id}-${i}`}
                  onClick={() => setIdx(i)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border transition
                    ${i === idx ? "border-[#FFD700]" : "border-white/10"}`}
                  aria-label={`Image ${i + 1}`}
                >
                  <Image src={src} alt="" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="px-5 py-5">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold tracking-wide text-white">{p.title}</h3>
            {p.weight && (
              <span className="text-xs rounded-full bg-white/10 border border-white/10 px-2 py-0.5 text-white/90">
                {p.weight}
              </span>
            )}
          </div>

          <div className="mt-1 text-[#FFD700] font-medium">
            {p.price != null ? `€${p.price.toFixed(2)}` : "—"}
          </div>

          {/* Learn more / Read less */}
          <div className="mt-3 text-sm leading-relaxed text-white/85">
            {!expanded ? (
              <>
                {p.short}
                {p.long && (
                  <button
                    onClick={() => setExpanded(true)}
                    className="ml-1 text-[#FFD700] hover:underline underline-offset-4"
                  >
                    Learn more
                  </button>
                )}
              </>
            ) : (
              <>
                {p.short} {p.long}
                <button
                  onClick={() => setExpanded(false)}
                  className="ml-1 text-[#FFD700] hover:underline underline-offset-4"
                >
                  Read less
                </button>
              </>
            )}
          </div>

          {/* Add to cart */}
          <div className="mt-5 flex gap-2">
            <button
              onClick={() =>
                add(
                  { id: p.id, title: p.title, price: Number(p.price ?? 0), image: active },
                  1
                )
              }
              className="flex-1 rounded-full bg-[#FFD700] text-black font-semibold px-5 py-2
              hover:brightness-110 active:translate-y-[1px] transition"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
