"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useCart } from "@/lib/stores/useCart"; // same store as saffron

type TeaBagDetail = {
  id: string;
  name: string;
  image: string;
  weight: string;
  pieces: string;
  brew: string;
  origin: string;
  flavor: string;
  heroLine: string;
  price: string; // "€3.90"
  story: string;
  tastingNotes: string;
  pairing: string;
};

const TEA_BAG_DETAILS: Record<string, TeaBagDetail> = {
  "earl-grey-25": {
    id: "earl-grey-25",
    name: "Earl Grey Tea Bag — 25 pcs",
    image: "/tea/tea-bags/earl-grey-25.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    origin: "India",
    flavor: "Bergamot",
    heroLine: "Classic Earl Grey in small box for every day.",
    price: "€3.90",
    story:
      "A gentle Earl Grey made with Indian black tea and natural bergamot aroma. Light enough for everyday sipping, yet fragrant enough to feel special even on a busy weekday.",
    tastingNotes:
      "Bright amber cup with notes of citrus peel, white flowers and a hint of honey.",
    pairing:
      "Perfect with simple butter biscuits, lemon cake or a piece of dark chocolate after dinner.",
  },
  "earl-grey-ceremonial": {
    id: "earl-grey-ceremonial",
    name: "Earl Grey Ceremonial — 25 pcs",
    image: "/tea/tea-bags/earl-grey-ceremonial.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    origin: "India · London Blend",
    flavor: "Elegant Bergamot",
    heroLine: "Ceremonial London-style Earl Grey for slow evenings.",
    price: "€4.50",
    story:
      "A refined Earl Grey blend that marries full-bodied Indian black tea with a smoother Mediterranean bergamot. Designed for small teapots, porcelain cups and quiet, golden-hour tea breaks.",
    tastingNotes:
      "Soft, rounded liquor with citrus zest, orange blossom and a whisper of vanilla.",
    pairing:
      "Serve with butter cookies, tea cakes, madeleines or light fruit tarts.",
  },
  "indian-ceremonial": {
    id: "indian-ceremonial",
    name: "Premium Indian Ceremonial — 25 pcs",
    image: "/tea/tea-bags/indian-ceremonial.jpg",
    weight: "89 g",
    pieces: "25 tea bags",
    brew: "4 minutes",
    origin: "India",
    flavor: "Rich Black Tea",
    heroLine: "Deep, strong Indian tea in ceremonial box.",
    price: "€4.20",
    story:
      "Inspired by traditional Indian chai bases, this blend gives a rich, copper-coloured liquor with enough strength to handle milk and sugar. Ideal for breakfast or long study nights.",
    tastingNotes:
      "Malty body, toasted grain, gentle spice and a clean, brisk finish.",
    pairing:
      "Beautiful with milk and sugar, or with sweet pastries, buttered toast and simple breakfasts.",
  },
  "royal-black": {
    id: "royal-black",
    name: "Royal Black Line — Tea Bag",
    image: "/tea/tea-bags/royal-black.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    origin: "Select Origins",
    flavor: "Smooth Black",
    heroLine: "Everyday royal black tea for any moment of the day.",
    price: "€3.70",
    story:
      "A smooth, easy-drinking black tea created for everyday use. Enough character to drink plain, yet gentle enough to enjoy several cups in a row.",
    tastingNotes:
      "Clear, medium-bodied liquor with notes of dried fruit, light caramel and baked bread.",
    pairing:
      "Pair with simple cakes, biscuits, dates or nuts — a flexible tea for guests and daily use.",
  },
  "royal-earl-grey": {
    id: "royal-earl-grey",
    name: "Royal Earl Grey — Tea Bag",
    image: "/tea/tea-bags/royal-earl-grey.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    origin: "India",
    flavor: "Citrusy Bergamot",
    heroLine: "Royal Earl Grey with bright citrus and floral notes.",
    price: "€4.60",
    story:
      "A vibrant Earl Grey with a slightly stronger base tea and a bright, modern bergamot aroma. Designed for those who love a perfumed, uplifting cup.",
    tastingNotes:
      "Lively citrus peel, blossom honey and light floral notes over a smooth black tea base.",
    pairing:
      "Serve with citrus desserts, vanilla pastries, macarons or light cheesecakes.",
  },
  cinnamon: {
    id: "cinnamon",
    name: "Cinnamon Black Line — Tea Bag",
    image: "/tea/tea-bags/cinnamon.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    origin: "Blend",
    flavor: "Cinnamon",
    heroLine: "Warm cinnamon-scented black tea for cosy evenings.",
    price: "€4.10",
    story:
      "This blend layers sweet cinnamon over a smooth black tea to create a comforting, dessert-like cup. Perfect for cold days, rainy evenings and winter gatherings.",
    tastingNotes:
      "Notes of baked cinnamon rolls, brown sugar and gentle spice over a soft tea base.",
    pairing:
      "Fantastic with apple pie, cinnamon biscuits, walnut cakes or simply a square of dark chocolate.",
  },
  cardamom: {
    id: "cardamom",
    name: "Cardamom Black Line — Tea Bag",
    image: "/tea/tea-bags/cardamom.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    origin: "India",
    flavor: "Cardamom",
    heroLine: "Persian-style cardamom tea in sachets.",
    price: "€4.30",
    story:
      "Inspired by traditional Persian cardamom tea, this blend brings together smooth black tea and aromatic green cardamom pods. Designed for sharing with friends and family.",
    tastingNotes:
      "Fragrant notes of cardamom pods, warm spice and a light sweetness in the finish.",
    pairing:
      "Perfect with Persian sweets, baklava, dates, saffron cakes or simple butter biscuits.",
  },
  saffron: {
    id: "saffron",
    name: "Saffron Black Tea Bag",
    image: "/tea/tea-bags/saffron.jpg",
    weight: "500 g (box)",
    pieces: "Saffron-scented tea bags",
    brew: "3–5 minutes",
    origin: "Blend",
    flavor: "Saffron",
    heroLine: "Golden, saffron-scented black tea for celebrations.",
    price: "€9.90",
    story:
      "A festive black tea infused with the aroma of saffron — the Persian flower of light. Ideal for special dinners, New Year tables and moments when you want something different.",
    tastingNotes:
      "Warm, golden notes of saffron, honey and dried fruit over a gentle black tea base.",
    pairing:
      "Serve with saffron cakes, pistachio sweets, gaz, or even alongside rice dishes at lunch.",
  },
  "earl-grey-100": {
    id: "earl-grey-100",
    name: "Earl Grey Tea Bag — 100 pcs",
    image: "/tea/tea-bags/earl-grey-100.jpg",
    weight: "270 g",
    pieces: "100 tea bags",
    brew: "3 minutes",
    origin: "India",
    flavor: "Bergamot",
    heroLine: "Family-size Earl Grey box for real tea lovers.",
    price: "€9.40",
    story:
      "The same classic Earl Grey profile in a generous 100-bag box. Great for offices, shared flats and families who drink Earl Grey every day.",
    tastingNotes:
      "Bright citrus, light floral notes and a clean, refreshing finish.",
    pairing:
      "Keep on the counter for all-day tea: great with breakfast, cake, or a simple afternoon snack.",
  },
  "indian-100": {
    id: "indian-100",
    name: "Premium Indian Tea Bag — 100 pcs",
    image: "/tea/tea-bags/indian-100.jpg",
    weight: "311 g",
    pieces: "100 tea bags",
    brew: "4 minutes",
    origin: "India",
    flavor: "Strong Black",
    heroLine: "Strong Indian black tea in a large, generous box.",
    price: "€9.90",
    story:
      "A bold Indian black tea designed for big kettles, samovars and shared tables. Strong enough for milk, sugar and long conversations.",
    tastingNotes:
      "Deep colour, malty depth and a satisfying, robust finish that stands up to milk.",
    pairing:
      "Serve at breakfast or with rich desserts, halva, chocolate cakes or heavy pastries.",
  },
};

type PageProps = {
  params: { slug: string };
};

export default function TeaBagDetailPage({ params }: PageProps) {
  const product = TEA_BAG_DETAILS[params.slug];
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false); // ⭐ state for animation

  if (!product) {
    notFound();
  }

  const handleAdd = () => {
    // "€3.90" -> 3.9
    const numericPrice = Number(product.price.replace(/[^\d.]/g, ""));

    const meta = [
      `weight: ${product.weight}`,
      `pieces: ${product.pieces}`,
      `brew: ${product.brew}`,
      `origin: ${product.origin}`,
      `flavour: ${product.flavor}`,
    ].join(" • ");

    add(
      `teabag-${product.id}`,
      product.name,
      numericPrice,
      product.image,
      meta
    );

    // ⭐ trigger "Added!" animation
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120906] via-[#090304] to-black text-white pb-16">
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-16">
        {/* breadcrumb */}
        <p className="text-[11px] tracking-[0.28em] uppercase text-[#f6e3a0]/80 mb-4">
          PERSIAN PANTRY · TEA BAGS
        </p>

        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,2.4fr)_minmax(0,3fr)] items-start">
          {/* LEFT – big product card */}
          <div className="rounded-[32px] border border-[#d4af37]/30 bg-gradient-to-b from-black/90 via-black/70 to-black/95 shadow-[0_30px_80px_rgba(0,0,0,.9)] p-4 sm:p-6 flex flex-col items-center">
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-black overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-contain drop-shadow-[0_0_40px_rgba(0,0,0,.75)]"
              />
            </div>
          </div>

          {/* RIGHT – title, chips, price, description */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F4D27F] leading-tight">
              {product.name}
            </h1>

            {/* chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/90">
                {product.weight}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/90">
                {product.pieces}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/90">
                Brew {product.brew}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/90">
                {product.origin}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/90">
                {product.flavor}
              </span>
            </div>

            {/* price card */}
            <div className="mt-6 rounded-3xl border border-[#d4af37]/45 bg-gradient-to-r from-[#24130d] via-[#2f1810] to-[#3c2213] px-5 py-5 sm:px-6 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6e3a0]/80">
                  Price
                </p>
                <p className="mt-2 text-sm sm:text-base text-white/92 max-w-xl">
                  {product.heroLine}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-3">
                <p className="text-2xl sm:text-3xl font-semibold text-[#FFD56A]">
                  {product.price}
                </p>
                <button
                  className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300
                    ${
                      added
                        ? "bg-emerald-400 text-black scale-105 shadow-[0_0_25px_rgba(52,211,153,0.85)] animate-[cart-pop_0.5s_ease-out]"
                        : "bg-[#ffd600] text-black hover:bg-[#ffe670]"
                    }
                  `}
                  onClick={handleAdd}
                >
                  {added ? "Added!" : "Add to cart"}
                </button>
              </div>
            </div>

            {/* story & tasting & pairing */}
            <div className="mt-8 space-y-6 text-sm sm:text-base leading-relaxed text-white/85">
              <p>
                <span className="font-semibold text-[#F6E3A0]">Story. </span>
                {product.story}
              </p>
              <div>
                <p className="font-semibold text-[#F6E3A0] mb-1">
                  Tasting & pairing
                </p>
                <p className="text-white/85">{product.tastingNotes}</p>
                <p className="mt-2 text-white/80">{product.pairing}</p>
              </div>
              <p className="text-[13px] text-white/65">
                Brewing tip: use freshly boiled water, let the tea rest for{" "}
                {product.brew.toLowerCase()} and adjust to your taste.
              </p>
            </div>

            {/* back link */}
            <div className="mt-10">
              <a
                href="/products/tea/tea-bags"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-white/70 hover:text-[#F6E3A0]"
              >
                ← Back to Tea Bags
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 Global keyframes for the pop animation */}
      <style jsx global>{`
        @keyframes cart-pop {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(52, 211, 153, 0.0);
          }
          40% {
            transform: scale(1.12);
            box-shadow: 0 0 25px rgba(52, 211, 153, 0.9);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(52, 211, 153, 0.0);
          }
        }
      `}</style>
    </main>
  );
}
