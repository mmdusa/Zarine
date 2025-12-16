"use client";

import Image from "next/image";

export type ProductCardProps = {
  href: string;          // link to detail page
  image: string;         // image src
  title: string;         // product title
  brand: string;         // brand name
  blurb: string;         // short description
  price?: number | null; // price in €
  weightLabel?: string;  // e.g. "1 g", "100 g", "25 tea bags"
};

export default function ProductCard({
  href,
  image,
  title,
  brand,
  blurb,
  price,
  weightLabel,
}: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {price != null && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 text-black text-sm font-semibold px-3 py-1">
            €{price.toFixed(2)}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="text-xs uppercase tracking-widest text-white/60">
          {brand}
        </div>

        <h3 className="mt-1 text-lg font-semibold">{title}</h3>

        <p className="mt-1 text-sm text-white/70">{blurb}</p>

        <div className="mt-4 flex items-center justify-between">
          {weightLabel ? (
            <span className="text-[13px] text-white/70">
              Net weight:{" "}
              <span className="text-white/90 font-medium">{weightLabel}</span>
            </span>
          ) : (
            <span />
          )}

          <a
            href={href}
            className="inline-flex items-center gap-2 rounded-xl bg-[#FFD700] text-black text-sm font-semibold px-4 py-2 hover:brightness-95 transition"
          >
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9 6l6 6-6 6V6z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
