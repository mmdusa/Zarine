"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BLACK_TEA, type BlackTea } from "@/app/data/blackTea";
import { useCart } from "@/lib/stores/useCart";

export default function BlackTeaCard({ t }: { t: BlackTea }) {
  const add = useCart((s) => s.add);
  const router = useRouter();

  const addQuick = () => {
    // ✅ same fix — string instead of object
    add(`black-${t.slug}`, t.title, t.price, t.img, `${t.weight} • Black Tea`);
    router.push("/cart");
  };

  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a0f08] to-[#0c0805] overflow-hidden hover:border-[#FFD700]/40 transition">
      <div className="relative aspect-square overflow-hidden bg-black/20">
        <Image
          src={t.img}
          alt={t.title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white/90 group-hover:text-[#FFD700] transition">
          {t.title}
        </h3>
        <p className="mt-1 text-sm text-white/60">{t.brew}</p>
        <p className="mt-2 text-white/80 font-medium">€{t.price.toFixed(2)}</p>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/products/tea/black/${t.slug}`}
            className="text-sm text-[#FFD700] hover:underline"
          >
            View details
          </Link>

          <button
            onClick={addQuick}
            className="text-sm bg-[#FFD700] text-black font-semibold rounded-full px-4 py-2 hover:brightness-110 active:translate-y-px transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
