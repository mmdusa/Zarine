// app/checkout/payment/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/lib/stores/useCart";

export default function PaymentPage() {
  const router = useRouter();
  const { items, clear } = useCart();

  const total = items.reduce(
    (sum, i) => sum + Number(i.price ?? 0) * Number(i.qty ?? 1),
    0
  );

  if (!items.length) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-[#FFD700]">
          Your cart is empty
        </h1>
        <p className="mt-4 text-white/70">
          You need items in your cart before paying.
        </p>
      </div>
    );
  }

  const completeOrder = () => {
    // ❗ here you would call a real payment provider (Stripe, etc.)
    clear();
    router.push("/"); // or change to "/thank-you" if you create that page
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    completeOrder();
  };

  const handleExpressPay = (method: "apple" | "google") => {
    console.log(`Express pay with ${method}`); // just for debug
    completeOrder();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 space-y-8">
      <h1 className="text-3xl font-extrabold text-[#FFD700]">
        Payment
      </h1>

      {/* ⭐ EXPRESS CHECKOUT (Apple / Google Pay style) */}
      <section className="space-y-3">
        <h2 className="text-sm font-medium text-white/80">
          Express checkout
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Fake Apple Pay */}
          <button
            type="button"
            onClick={() => handleExpressPay("apple")}
            className="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-semibold text-white border border-white/20 hover:brightness-110"
          >
            <span className="text-lg"></span>
            <span>Pay</span>
          </button>

          {/* Fake Google Pay */}
          <button
            type="button"
            onClick={() => handleExpressPay("google")}
            className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black border border-white/20 hover:brightness-95"
          >
            <span className="text-base">G</span>
            <span>Pay</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-white/50">
          <div className="flex-1 h-px bg-white/15" />
          <span>or pay with card</span>
          <div className="flex-1 h-px bg-white/15" />
        </div>
      </section>

      {/* 💳 CARD FORM */}
      <section>
        <form onSubmit={handlePay} className="space-y-4 max-w-lg">
          <div>
            <label className="block text-sm text-white/70 mb-1">
              Card holder name
            </label>
            <input
              required
              className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-1">
              Card number
            </label>
            <input
              required
              inputMode="numeric"
              maxLength={19}
              className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm"
              placeholder="4242 4242 4242 4242"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">
                Expiry (MM/YY)
              </label>
              <input
                required
                placeholder="04/28"
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">
                CVC
              </label>
              <input
                required
                inputMode="numeric"
                maxLength={4}
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm"
              />
            </div>
            <div className="flex items-end">
              <div className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-sm text-white/70">
                Total:{" "}
                <span className="text-[#FFD700] font-semibold">
                  €{total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex justify-center rounded-full bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-black hover:brightness-110"
          >
            Place order & pay
          </button>
        </form>
      </section>
    </div>
  );
}
