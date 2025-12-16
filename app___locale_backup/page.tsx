"use client";

import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  return (
    <main className="relative text-white">
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('/backgrounds/ef3101ba-3616-45e9-837b-351df97e206d.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#D4AF37] tracking-widest mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            ZARINÉ
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            The golden pantry of Persia — saffron, tea, and rosewater — crafted
            in tradition for Europe.
          </p>
          <p className="mt-6 text-[#FFD700] italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            «روشنـیِ جان از طلاییِ عشق است» —{" "}
            <span className="text-[#f8e7a0]">
              The soul shines with the gold of love.
            </span>
          </p>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <ProductGrid />
    </main>
  );
}
