"use client";

import Image from "next/image";
import Link from "next/link";
// ❌ remove useRouter, we don't need it anymore
// import { useRouter } from "next/navigation";
import { type BlackTea } from "@/app/data/blackTea";
import { useCart } from "@/lib/stores/useCart";

const FALLBACK_IMG = "/images/placeholder-tea.jpg";

export default function ClientTeaDetail({ t }: { t: BlackTea }) {
  const add = useCart((s) => s.add);
  // const router = useRouter(); // ❌ not used anymore

  const handleAdd = () => {
    const price =
      typeof t.price === "number" ? t.price : Number(t.price ?? 0);
    const img = t.img && t.img.length > 0 ? t.img : FALLBACK_IMG;

    const metaParts = [t.weight, t.flavor, t.origin].filter(Boolean);
    const meta = metaParts.length ? metaParts.join(" • ") : undefined;

    // ✅ only add to cart, do NOT redirect
    add(`black-${t.slug}`, t.title, price, img, meta);

    // ❌ removed:
    // router.push("/cart");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* ⭐ Breadcrumbs */}
      <nav className="mb-6 text-sm text-white/70 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-[#FFD700]">
          Home
        </Link>
        <span>/</span>
        <span className="text-white/80">Products</span>
        <span>/</span>
        <Link href="/products/tea" className="hover:text-[#FFD700]">
          Tea
        </Link>
        <span>/</span>
        <span className="text-white font-semibold">{t.title}</span>
      </nav>

      {/* Image card */}
      <div className="flex justify-center mt-2">
        <div className="relative w-full max-w-md aspect-[3/4] bg:white rounded-2xl shadow-lg border border-white/10 overflow-hidden">
          <Image
            src={t.img && t.img.length > 0 ? t.img : FALLBACK_IMG}
            alt={t.title}
            fill
            className="object-contain p-6"
            sizes="(min-width:768px) 320px, 80vw"
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-[#D4AF37]">
        {t.title}
      </h1>

      {/* Tags & price */}
      <div className="mt-4 rounded-2xl border border-white/10 p-4 bg-white/5">
        <div className="text-sm text:white/70 flex flex-wrap gap-2">
          {t.weight && (
            <span className="rounded-full bg-white/5 px-2 py-1">
              {t.weight}
            </span>
          )}
          {t.flavor && (
            <span className="rounded-full bg-white/5 px-2 py-1">
              {t.flavor}
            </span>
          )}
          {t.brew && (
            <span className="rounded-full bg-white/5 px-2 py-1">
              Brew {t.brew}
            </span>
          )}
          {t.origin && (
            <span className="rounded-full bg-white/5 px-2 py-1">
              {t.origin}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="text-2xl font-semibold text-[#FFD700]">
            €
            {(
              typeof t.price === "number" ? t.price : Number(t.price ?? 0)
            ).toFixed(2)}
          </div>
          <button
            onClick={handleAdd}
            className="rounded-full px-5 py-2.5 bg-[#D4AF37] text-black font-semibold hover:brightness-110"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Description */}
      {t.description && (
        <div className="mt-6 prose prose-invert max-w-none">
          <p>{t.description}</p>
        </div>
      )}
    </div>
  );
}
