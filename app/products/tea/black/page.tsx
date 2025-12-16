import Link from "next/link";
import { BLACK_TEA } from "@/app/data/blackTea";
import ProductCard from "@/components/shop/ProductCard";

export const metadata = {
  title: "ZARINÉ — Black Tea",
  description: "Persian black tea selection",
};

export default function BlackTeaPage() {
  const items = BLACK_TEA.filter((t) => t && t.slug && t.img);

  return (
    <main className="min-h-screen bg-[radial-gradient(60%_70%_at_50%_0%,#2a1510_0%,#120b09_55%,#0b0807_100%)] text-white">
      {/* ⭐ Breadcrumb */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-6">
        <nav className="mb-6 text-sm text-white/70 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#FFD700]">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Tea</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#FFD700] drop-shadow-[0_10px_30px_rgba(212,175,55,.25)]">
          Black Tea Collection
        </h1>

        <p className="mt-4 text-white/85 max-w-3xl">
          Hand-selected Persian black teas with rich aroma and deep reddish-gold
          liquor. Explore loose leaf and traditional blends.
        </p>
      </section>

      {/* ⭐ Grid using SAME card as Loose Saffron */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((t) => (
            <ProductCard
              key={t.slug}
              href={`/products/tea/black/${t.slug}`}
              image={t.img}
              title={t.name}
              brand={t.brand ?? "ZARINÉ"}
              blurb={t.short}
              price={t.price}
              weightLabel={t.weight}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
