"use client";

import React from "react";

export default function HeroVideo() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
          
          {/* LEFT — UNIQUE SHAPED VIDEO */}
          <div className="relative">
            {/* Soft gold glow behind */}
            <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-[#FFD70022] via-[#8b5cf633] to-transparent blur-3xl" />

            {/* Video container with special shape */}
            <div
              className="
                relative z-10 overflow-hidden 
                rounded-[3rem]
                border border-white/15 
                bg-black/60 
                shadow-[0_22px_60px_rgba(0,0,0,0.6)]
                [clip-path:polygon(0%_10%,10%_0,90%_0,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]
                h-[55vh] md:h-[65vh]
              "
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/zarine.mp4" type="video/mp4" />
              </video>

              {/* Dark gradient for readable text */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050304e6] via-transparent to-[#00000055]" />

              {/* Text on top of video */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  PERSIAN HERITAGE · MODERN TABLE
                </p>
                <p className="text-lg md:text-2xl font-semibold text-[#FFD700]">
                  Saffron & Tea from the heart of Iran, curated for Europe.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — TITLE + BUTTONS */}
          <div className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              ZARINÉ —{" "}
              <span className="text-[#FFD700]">Persian Treasures</span>
            </h1>

            <p className="text-white/75 text-sm md:text-base">
              Bring <span className="text-[#FFD700]">saffron, tea, and dates</span>{" "}
              directly from Persian farms to your kitchen. Each product is selected
              for color, aroma, and authenticity.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/products/saffron-boxed"
                className="inline-flex items-center justify-center rounded-full bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-black hover:brightness-110"
              >
                Explore Saffron
              </a>

              <a
                href="/products/tea/black"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Browse Teas
              </a>
            </div>

            <p className="text-xs text-white/50">
              Hand-picked in Iran · Packed for EU standards · Ships from Italy
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
