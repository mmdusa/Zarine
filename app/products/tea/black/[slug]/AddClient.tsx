// app/products/tea/black/[slug]/AddToCartClient.tsx
"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/lib/stores/useCart";

type Props = {
  id: string;
  title: string;
  image: string;        // you pass this from tea data
  priceNumber?: number; // if missing → defaults to 0
  meta?: Record<string, string | number>; // grams, brand, etc.
};

export default function AddToCartClient({
  id,
  title,
  image,
  priceNumber = 0,
  meta,
}: Props) {
  const add = useCart((s) => s.add);
  const router = useRouter();

  // convert meta object → "grams: 100 • brand: Bahraman"
  const metaText =
    meta && Object.keys(meta).length
      ? Object.entries(meta)
          .filter(([, v]) => v !== undefined && v !== "")
          .map(([k, v]) => `${k}: ${v}`)
          .join(" • ")
      : undefined;

  return (
    <button
      type="button"
      onClick={() => {
        add(
          {
            id,
            title,
            price: Number(priceNumber), // ✅ must be "price"
            img: image,                 // ✅ must be "img"
            meta: metaText,             // ✔ nice readable string
          },
          1
        );
        router.push("/cart");
      }}
      className="w-full rounded-full bg-[#FFD700] text-black font-semibold px-5 py-3 hover:brightness-95 transition"
    >
      Add to cart
    </button>
  );
}
