// app/checkout/page.tsx
"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// ✅ FIX: Importing from the store your product page uses
import { useCart } from "@/lib/stores/useCart"; 
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { items } = useCart();
  const [clientSecret, setClientSecret] = useState("");
  
  // This ensures we wait for the cart to load from memory before showing "Empty"
  const [isPageLoading, setIsPageLoading] = useState(true);

  // 1. Wait for hydration (prevents "Empty" flash)
  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  // 2. Calculate Total
  const total = items.reduce(
    (sum, i) => sum + Number(i.price ?? 0) * Number(i.qty ?? 1),
    0
  );

  // 3. Connect to Stripe
  useEffect(() => {
    if (items.length > 0) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .catch((err) => console.error("Stripe Error:", err));
    }
  }, [items]);

  // --- LOADING STATE ---
  // We show this briefly while checking your computer's memory for the cart
  if (isPageLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#FFD700]"></div>
      </div>
    );
  }

  // --- EMPTY STATE ---
  if (!items.length) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#FFD700]">Your cart is empty</h1>
        <p className="mt-4 text-white/70">
          Add some products to your cart before checking out.
        </p>
      </div>
    );
  }

  // --- CHECKOUT UI ---
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 grid gap-8 md:grid-cols-[2fr,1.4fr]">
      
      {/* LEFT: Forms + Payment */}
      <div className="space-y-8">
        
        {/* Shipping Form (Visual Only) */}
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold text-[#FFD700] mb-2">Checkout</h1>
          <div className="grid gap-4 sm:grid-cols-2">
            <input placeholder="First name" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white focus:border-[#FFD700] outline-none" />
            <input placeholder="Last name" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white focus:border-[#FFD700] outline-none" />
          </div>
          <input placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white focus:border-[#FFD700] outline-none" />
          <input placeholder="Address" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white focus:border-[#FFD700] outline-none" />
          <div className="grid gap-4 sm:grid-cols-3">
             <input placeholder="City" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white focus:border-[#FFD700] outline-none" />
             <input placeholder="Postal Code" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white focus:border-[#FFD700] outline-none" />
             <input placeholder="Country" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white focus:border-[#FFD700] outline-none" />
          </div>
        </div>

        {/* Stripe Payment Element */}
        <div className="pt-6 border-t border-white/10">
          <h2 className="text-xl font-semibold text-[#FFD700] mb-4">Payment Details</h2>
          
          {clientSecret ? (
            <Elements 
              options={{ 
                clientSecret, 
                theme: 'night', 
                appearance: { theme: 'night', variables: { colorPrimary: '#D4AF37' } } 
              }} 
              stripe={stripePromise}
            >
              <CheckoutForm amount={total} />
            </Elements>
          ) : (
             <div className="flex items-center gap-2 text-[#FFD700]">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-[#FFD700]"></div>
                <span>Preparing secure checkout...</span>
             </div>
          )}
        </div>
      </div>

      {/* RIGHT: Order Summary */}
      <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-lg font-semibold mb-3">Order summary</h2>
        <ul className="space-y-3 text-sm max-h-[60vh] overflow-auto pr-1">
          {items.map((i) => (
            <li key={i.id} className="flex justify-between gap-3 border-b border-white/5 pb-2 last:border-0">
              <span className="text-white/80">
                <span className="text-[#FFD700] font-bold">{i.qty}x</span> {i.title}
              </span>
              <span className="font-mono">
                €{(Number(i.price ?? 0) * Number(i.qty ?? 1)).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-white/10 pt-4 flex justify-between items-end">
          <span className="text-sm text-white/70">Total to pay</span>
          <span className="text-2xl font-bold text-[#FFD700]">
            €{total.toFixed(2)}
          </span>
        </div>
      </aside>
    </div>
  );
}