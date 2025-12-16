"use client";

import Link from "next/link";
import { useState } from "react";

interface ComingSoonProps {
  category: string;
  subtitle: string;
}

export default function ComingSoon({ category, subtitle }: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setStatus("success"), 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* --- 1. Background Effects (The Unique "Glow") --- */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[180px] opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#D4AF37]/5 to-transparent" />

      {/* --- 2. Main Content Card --- */}
      <div className="relative z-10 mx-4 max-w-lg w-full">
        <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-[#D4AF37]/30">
          
          {/* Badge */}
          <div className="flex justify-center">
            <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#D4AF37]">
              Coming Soon
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-center text-4xl md:text-5xl font-bold text-white tracking-tight font-serif">
            {category}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-center text-lg leading-relaxed text-white/60">
            {subtitle}
          </p>

          {/* --- 3. Interactive Notify Form --- */}
          <div className="mt-10">
            {status === "success" ? (
              <div className="rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 p-4 text-center text-[#22c55e] animate-fade-in">
                <span className="font-medium">Thank you!</span> We'll notify you when it arrives.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder-white/40 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#D4AF37] py-4 text-sm font-bold text-black hover:bg-[#ffe14f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                >
                  Notify Me When Available
                </button>
              </form>
            )}
          </div>

          {/* Footer Link */}
          <div className="mt-8 text-center">
            <Link
              href="/products/saffron"
              className="text-sm text-white/40 hover:text-white transition underline underline-offset-4 decoration-transparent hover:decoration-white/40"
            >
              &larr; Return to Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}