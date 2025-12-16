"use client";

import { useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // 1. State to track the email the user types
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // 2. We pass the email to the success page via the URL
        return_url: `${window.location.origin}/checkout/success?email_to_send=${email}`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message ?? "An unexpected error occurred.");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-2xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4 text-[#FFD700]">Payment Details</h2>
      
      <div className="mb-4">
        <label className="block text-sm text-white/70 mb-1">Email for Receipt</label>
        {/* 3. Capture the email when the user types it */}
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={(e) => setEmail(e.value.email)}
        />
      </div>

      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="mt-6 w-full rounded-full bg-[#D4AF37] text-black font-bold py-3 hover:brightness-110 transition disabled:opacity-50"
      >
        {isLoading ? "Processing..." : `Pay €${amount.toFixed(2)}`}
      </button>
      
      {message && <div className="mt-4 text-red-400 text-sm">{message}</div>}
    </form>
  );
}