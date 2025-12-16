"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/stores/useCart";

type Props = {
  id: string;
  title: string;
  price: number;      // keep your current prop name
  image: string;
  meta?: Record<string, string | number>;
  goToCart?: boolean; // optional: default true
  className?: string;
};

export default function AddToCart({
  id,
  title,
  price,
  image,
  meta,
  goToCart = true,
  className = "",
}: Props) {
  const add = useCart((s) => s.add);
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // ✅ if the button sits inside a Link/card, don’t let the Link swallow the click
    e.preventDefault();
    e.stopPropagation();

    add({ id, title, price, image, meta });
    if (goToCart) router.push("/cart");
  };

  return (
    <button
      type="button"                  // ✅ never submit a form
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
