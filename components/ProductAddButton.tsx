"use client";
import { useCart } from "@/lib/stores/useCart";

export default function ProductAddButton(props: {
  id: string;
  title: string;
  price: number;
  image?: string;
  className?: string;
}) {
  const addToCart = useCart((s) => s.add);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(
          { id: String(props.id), title: props.title, price: Number(props.price), image: props.image },
          1
        );
      }}
      className={
        props.className ??
        "relative z-20 pointer-events-auto rounded-full px-4 py-2 border border-white/20 hover:bg-white/10"
      }
      style={{ cursor: "pointer" }}
    >
      Add to cart
    </button>
  );
}
