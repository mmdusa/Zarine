"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/lib/stores/useCart";

type Props = {
  id: string;
  title: string;
  priceNumber: number;
  image: string;
  meta?: Record<string, string | number>;
  goToCart?: boolean;  // set true on saffron pages if you want to jump to cart
  className?: string;
};

export default function AddToCartClient({
  id,
  title,
  priceNumber,
  image,
  meta,
  goToCart = true,
  className = "",
}: Props) {
  const add = useCart((s) => s.add);
  const router = useRouter();

  // turn meta object into a nice string like "grams: 1 • brand: Bahraman"
  const metaText =
    meta && Object.keys(meta).length
      ? Object.entries(meta)
          .filter(([, v]) => v !== undefined && v !== null && v !== "")
          .map(([k, v]) => `${k}: ${v}`)
          .join(" • ")
      : undefined;

  const onClick = () => {
    add(
      {
        id,
        title,
        price: Number(priceNumber), // ✅ what store expects
        img: image,                 // ✅ what store expects
        meta: metaText,             // ✅ string, safe for rendering
      },
      1 // one item per click; you can change this if you want
    );

    if (goToCart) router.push("/cart");
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "relative z-10 inline-flex items-center justify-center rounded-2xl px-6 py-3 " +
        "bg-[#FFD700] text-black font-semibold shadow-lg hover:brightness-95 active:scale-[.99] " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/60 " +
        className
      }
    >
      Add to cart
    </button>
  );
}
