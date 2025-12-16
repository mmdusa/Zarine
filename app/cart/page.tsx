// app/cart/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/stores/useCart";

export default function CartPage() {
  const router = useRouter();
  const { items, remove, clear } = useCart();

  const total = items.reduce((sum, i) => {
    const price = Number(i.price ?? 0);
    const qty = Number(i.qty ?? 1);
    return sum + price * qty;
  }, 0);

  if (!items.length) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-[#FFD700]">
          Your cart is empty
        </h1>
        <p className="mt-4 text-white/70">Find something you love:</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            className="px-4 py-2 rounded-full bg-white/10 border border-white/15"
            href="/products/saffron"
          >
            Saffron
          </Link>
          <Link
            className="px-4 py-2 rounded-full bg-white/10 border border-white/15"
            href="/products/tea/black"
          >
            Persian Tea
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-[#FFD700]">Cart</h1>

      <ul className="mt-8 space-y-4">
        {items.map((i) => {
          const price = Number(i.price ?? 0);
          const qty = Number(i.qty ?? 1) || 1;
          const line = price * qty;
          const imgSrc = i.img || "/images/placeholder.jpg";

          return (
            <li
              key={i.id}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src={imgSrc}
                  alt={i.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex-1">
                <div className="font-semibold">{i.title}</div>

                {i.meta && (
                  <div className="text-sm text-white/70">
                    {typeof i.meta === "string"
                      ? i.meta
                      : Object.entries(i.meta)
                          .filter(([, v]) => v != null && v !== "")
                          .map(([k, v]) => `${k}: ${v}`)
                          .join(" • ")}
                  </div>
                )}

                <div className="text-sm text-white/70">Qty: {qty}</div>
              </div>

              {/* PRICE BLOCK – unit + total */}
              <div className="w-32 text-right text-sm">
                <div>€{price.toFixed(2)}</div>
                {qty > 1 && (
                  <div className="text-xs text-white/70">
                    Total: €{line.toFixed(2)}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                {/* – button (remove one / item) */}
                <button
                  onClick={() => remove(i.id)}
                  className="px-3 py-2 rounded-md bg-white/10 border border-white/15"
                >
                  −
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-6">
        <div>
          <div className="text-sm text-white/70">Total</div>
          <div className="text-2xl font-extrabold text-[#FFD700]">
            €{total.toFixed(2)}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={clear}
            className="px-4 py-2 rounded-full bg-white/10 border border-white/15"
          >
            Clear
          </button>
          <button
            onClick={() => router.push("/checkout")}
            className="px-5 py-2 rounded-full bg-[#FFD700] text-black font-semibold hover:brightness-110"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
