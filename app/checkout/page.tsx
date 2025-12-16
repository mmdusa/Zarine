"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCart } from "@/lib/stores/useCart";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutPage() {
  const { items } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isPageLoading, setIsPageLoading] = useState(true);

  // Prevent hydration flash
  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  const total = items.reduce(
    (sum, i) => sum + Number(i.price ?? 0) * Number(i.qty ?? 1),
    0
  );

  // Create PaymentIntent
  useEffect(() => {
    if (!items.length) return;

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error("Stripe error:", err));
  }, [items]);

  /* ---------------- LOADING ---------------- */
  if (isPageLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#FFD700]" />
      </div>
    );
  }

  /* ---------------- EMPTY CART ---------------- */
  if (!items.length) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#FFD700]">
          Your cart is empty
        </h1>
        <p className="mt-4 text-white/70">
          Add some products before checking out.
        </p>
      </div>
    );
  }

  /* ---------------- CHECKOUT ---------------- */
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 grid gap-8 md:grid-cols-[2fr,1.4fr]">

      {/* LEFT: FORMS + PAYMENT */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold text-[#FFD700]">
            Checkout
          </h1>

          <div className="grid gap-4 sm:grid-cols-2">
            <input className="input" placeholder="First name" />
            <input className="input" placeholder="Last name" />
          </div>

          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Address" />

          <div className="grid gap-4 sm:grid-cols-3">
            <input className="input" placeholder="City" />
            <input className="input" placeholder="Postal Code" />
            <input className="input" placeholder="Country" />
          </div>
        </div>

        {/* STRIPE */}
        <div className="pt-6 border-t border-white/10">
          <h2 className="text-xl font-semibold text-[#FFD700] mb-4">
            Payment details
          </h2>

          {clientSecret ? (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: "night",
                  variables: {
                    colorPrimary: "#D4AF37",
                  },
                },
              }}
            >
              <CheckoutForm amount={total} />
            </Elements>
          ) : (
            <div className="flex items-center gap-2 text-[#FFD700]">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-[#FFD700]" />
              <span>Preparing secure checkout…</span>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: ORDER SUMMARY */}
      <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-lg font-semibold mb-3">
          Order summary
        </h2>

        <ul className="space-y-3 text-sm max-h-[60vh] overflow-auto">
          {items.map((i) => (
            <li
              key={i.id}
              className="flex justify-between border-b border-white/5 pb-2"
            >
              <span>
                <span className="text-[#FFD700] font-bold">{i.qty}×</span>{" "}
                {i.title}
              </span>
              <span className="font-mono">
                €
                {(Number(i.price ?? 0) * Number(i.qty ?? 1)).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 border-t border-white/10 pt-4 flex justify-between">
          <span className="text-white/70">Total</span>
          <span className="text-2xl font-bold text-[#FFD700]">
            €{total.toFixed(2)}
          </span>
        </div>
      </aside>
    </div>
  );
}

/* ---------- shared input styling ---------- */
const input =
  "w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white focus:border-[#FFD700] outline-none";

declare module "react" {
  interface HTMLAttributes<T> {
    className?: string;
  }
}
