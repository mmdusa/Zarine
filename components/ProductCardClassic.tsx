// components/ProductCardClassic.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  price?: number | null;
  cover: string;           // <- image comes from product.cover
  href: string;            // details page
  blurb?: string | null;   // short description (optional)
};

const fmt = (p?: number | string | null) =>
  p == null || p === "" ? "—" : typeof p === "number" ? `€${p.toFixed(2)}` : String(p);

export default function ProductCardClassic({
  id, title, price, cover, href, blurb,
}: Props) {
  return (
    <article
      key={id}
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/10 p-4"
    >
      {/* square image, like before */}
      <Link href={href} className="block">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-black/10">
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width:1024px) 100vw, 33vw"
            className="object-contain"
            priority={false}
          />
        </div>
      </Link>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {blurb ? (
          <p className="mt-1 text-sm text-white/70 line-clamp-2">{blurb}</p>
        ) : null}
        <div className="mt-2 text-[#FFD700]">{fmt(price)}</div>
      </div>

      <div className="mt-4">
        <Link
          href={href}
          className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
