"use client";

import { useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/app/providers";

function SuccessContent() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const hasRun = useRef(false);

  // 1. Get the email from the URL
  const customerEmail = searchParams.get("email_to_send");

  useEffect(() => {
    if (!hasRun.current) {
      // Clear the cart
      clearCart();

      // 2. Send the confirmation email if we have an address
      if (customerEmail) {
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email: customerEmail 
          })
        }).then(() => console.log("Email request sent to:", customerEmail));
      }

      hasRun.current = true;
    }
  }, [clearCart, customerEmail]);

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="mb-6 h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
        <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Payment Successful!
      </h1>
      
      <p className="text-white/60 max-w-md mb-8">
        Thank you for your order. 
        {customerEmail && <span> A confirmation has been sent to <strong className="text-white">{customerEmail}</strong>.</span>}
      </p>

      <Link 
        href="/" 
        className="rounded-full bg-[#D4AF37] text-black px-8 py-3 font-semibold hover:brightness-110 transition"
      >
        Return to Home
      </Link>
    </main>
  );
}

// Next.js requires searchParams to be wrapped in Suspense
export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}