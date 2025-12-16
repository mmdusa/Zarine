// components/FloatingCartButton.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/app/providers";

export default function FloatingCartButton() {
  const { items } = useCart();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => setCount(items.reduce((n, i) => n + i.qty, 0));
    update();
  }, [items]);

  return (
    <Link
      href="/cart"
      className="fixed right-4 bottom-4 z-50 rounded-full bg-[#D4AF37] text-black px-4 py-2 font-semibold shadow-[0_10px_30px_rgba(212,175,55,.35)] hover:brightness-110"
    >
      🛒 Cart {count > 0 ? `(${count})` : ""}
    </Link>
  );
}
