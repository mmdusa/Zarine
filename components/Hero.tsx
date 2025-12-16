"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Fullscreen Background */}
      <div className="absolute inset-0">
        <Image
          src="/backgrounds/ef3101ba-3616-45e9-837b-351df97e206d.jpg"
          alt="Nasir al-Mulk Mosque, Shiraz"
          fill
          priority
          className="object-cover object-center w-full h-full brightness-[0.6]"
        />
      </div>

      {/* Overlay for dark fade */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#D4AF37] drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] tracking-wide">
          ZARINÉ
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-relaxed">
          The golden pantry of Persia — saffron, tea, and rosewater — crafted in
          tradition for Europe.
        </p>

        <p className="mt-4 text-[#D4AF37] italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-lg md:text-xl">
          «روشنـیِ جان از طلاییِ عشق است» — The soul shines with the gold of
          love.
        </p>
      </div>
    </section>
  );
}
