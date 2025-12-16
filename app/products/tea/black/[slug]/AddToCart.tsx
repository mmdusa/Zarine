"use client";

import { useCart } from "@/lib/stores/useCart";
import { useState } from "react";

export default function AddToCart({ tea }) {
  const add = useCart(s => s.add);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(
      `black-${tea.slug}`,
      tea.title,
      Number(tea.price),
      tea.img,
      `${tea.weight} • ${tea.flavor ?? ""} • ${tea.origin ?? ""}`
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  return (
    <button
      onClick={handleAdd}
      className={`rounded-full px-5 py-2.5 font-semibold text-sm transition ${
        added
          ? "bg-emerald-400 text-black scale-105"
          : "bg-[#FFD700] text-black hover:bg-yellow-300"
      }`}
    >
      {added ? "Added!" : "Add to Cart"}
    </button>
  );
}
