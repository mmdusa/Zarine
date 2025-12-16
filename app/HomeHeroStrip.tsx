"use client";

import Image from "next/image";
import { useState } from "react";

type Slide = {
  id: number;
  image: string;
  label: string;
  subtitle: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/home/hero-gold.jpg", // 🔁 put your image paths
    label: "01 • HOME",
    subtitle: "Colour, aroma and light — from Persian fields to your kitchen.",
  },
  {
    id: 2,
    image: "/home/hero-tea.jpg",
    label: "02 • TEA",
    subtitle: "Persian black and green tea, curated for slow mornings.",
  },
  {
    id: 3,
    image: "/home/hero-zereshk.jpg",
    label: "03 • ZERESHK",
    subtitle: "Ruby barberries that brighten every rice dish.",
  },
];

export default function HomeHeroStrip() {
  const [current, setCurrent] = useState(0);
  const active = SLIDES[current];

  const goPrev = () =>
    setCurrent((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () =>
    setCurrent((i) => (i + 1) % SLIDES.length);

  return (
    <section className="mt-10">
      <div className="relative max-w-6xl mx-auto">
        {/* IMAGE – bigger height now */}
        <div className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-black h-[260px] md:h-[340px] lg:h-[380px]">
          <Image
            src={active.image}
            alt={active.subtitle}
            fill
            priority
            className="object-cover"
            sizes="(min-width:1024px) 1120px, 100vw"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />

          {/* LEFT TEXT (button style like your design) */}
          <div className="absolute left-6 bottom-6 flex flex-col gap-3">
            <button className="inline-flex items-center rounded-full bg-[#f5dd9b] text-black text-xs font-semibold tracking-[0.3em] px-4 py-2 uppercase">
              {active.label}
            </button>
          </div>

          {/* RIGHT TEXT */}
          <div className="absolute right-6 bottom-6 text-right">
            <p className="text-xs tracking-[0.35em] uppercase text-[#f5dd9b]/80">
              ZARINÉ
            </p>
            <p className="mt-2 text-3xl md:text-4xl font-semibold text-[#fdf5cf]">
              Gold.
            </p>
            <p className="mt-1 max-w-xs text-[13px] md:text-sm text-white/85">
              {active.subtitle}
            </p>
          </div>

          {/* ARROWS */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/80 hover:bg-black/80"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/80 hover:bg-black/80"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        {/* DOTS – manual, not auto */}
        <div className="mt-3 flex justify-end gap-2 pr-1">
          {SLIDES.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === current
                  ? "bg-[#f5dd9b] w-4"
                  : "bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
