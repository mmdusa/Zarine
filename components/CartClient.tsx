"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { useCart } from "@/lib/stores/useCart";

/* ✅ Explicit cart item type (matches your store) */
type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  img?: string;
  meta?: string;
};

export default function CartClient() {
  const items = useCart((s) => s.items) as CartItem[];
  const add = useCart((s) => s.add);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  /* ✅ Typed increment */
  const handleIncrement = useCallback(
    (item: CartItem) => {
      add(
        {
          id: item.id,
          title: item.title,
          priceNumber: Number(item.price),
          img: item.img,
          meta: item.meta,
        },
        1
      );
    },
    [add]
  );

  /* ✅ Typed decrement */
  const handleDecrement = useCallback(
    (id: string) => {
      remove(id);
    },
    [remove]
  );

  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-2xl font-semibold">Your Cart</h1>
        <p className="mt-4 text-white/70">Your cart is empty.</p>
        <Link
          href="/products/saffron"
          className="mt-6 inline-block rounded-full bg-[#D4AF37] text-black px-5 py-2 font-semibold"
        >
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="text-2xl font-semibold">Your Cart</h1>

      <ul className="mt-6 divide-y divide-white/10">
        {items.map((i) => (
          <li key={i.id} className="flex flex-col sm:flex-row sm:items-center gap-4 py-6">
            {/* Image */}
            {i.img && (
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-white/5 border border-white/10">
                <Image src={i.img} alt={i.title} fill className="object-cover" />
              </div>
            )}

            {/* Info */}
            <div className="flex-1 space-y-1">
              <div className="font-medium text-lg">{i.title}</div>
              {i.meta && <div className="text-xs text-white/50">{i.meta}</div>}
              <div className="text-sm text-white/70">
                Unit: €{i.price.toFixed(2)}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-6 mt-2 sm:mt-0">
              <div className="flex items-center rounded-lg border border-white/20 bg-white/5">
                <button
                  onClick={() => handleDecrement(i.id)}
                  className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"
                  type="button"
                >
                  −
                </button>

                <div className="w-8 text-center text-sm font-medium">
                  {i.qty}
                </div>

                <button
                  onClick={() => handleIncrement(i)}
                  className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"
                  type="button"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <div className="text-right min-w-[80px]">
                <div className="text-sm text-white/50">Total</div>
                <div className="font-semibold text-[#FFD700]">
                  €{(i.price * i.qty).toFixed(2)}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
        <button
          onClick={() => clear()}
          className="text-sm text-white/50 hover:text-white transition"
        >
          Clear cart
        </button>

        <div className="text-xl">
          Total:{" "}
          <span className="text-[#FFD700] font-bold">
            €{total.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
        <Link
          href="/products/saffron"
          className="text-center rounded-full border border-white/20 px-6 py-3 text-sm hover:bg-white/10 transition"
        >
          Continue shopping
        </Link>

        <Link
          href="/checkout"
          className="text-center rounded-full bg-[#D4AF37] text-black px-8 py-3 text-sm font-bold hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition"
        >
          Checkout
        </Link>
      </div>
    </main>
  );
}
