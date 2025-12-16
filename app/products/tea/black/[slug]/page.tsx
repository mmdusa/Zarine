import Image from "next/image";
import { notFound } from "next/navigation";
import { BLACK_TEA } from "@/app/data/blackTea";
import AddToCart from "./AddToCart"; // ← ONLY ADD THIS

export function generateStaticParams() {
  return BLACK_TEA.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = true;

type Props = { params: { slug: string } };

export default function BlackTeaDetailPage({ params }: Props) {
  const product = BLACK_TEA.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-24 text-white">
      <div className="grid md:grid-cols-2 gap-8">

        {/* IMAGE */}
        <section>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black/20">
            <Image
              src={product.img}
              alt={product.title}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain p-6"
              priority
            />
          </div>
        </section>

        {/* INFO */}
        <section>
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="mt-2 flex flex-wrap gap-2 text-xs text-black">
            <span className="px-2 py-1 rounded-full bg-white/80 text-black">{product.weight}</span>
            {product.flavor && <span className="px-2 py-1 rounded-full bg-white/80">{product.flavor}</span>}
            {product.origin && <span className="px-2 py-1 rounded-full bg-white/80">{product.origin}</span>}
          </div>

          {/* PRICE + BUTTON ADDED HERE */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-6">
            <p className="text-white/70">
              {product.brew ? `${product.brew}. ` : ""}Enjoy plain or with lemon, Persian-style.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-3xl font-semibold text-[#FFD700]">€{product.price.toFixed(2)}</div>

              {/* ADD TO CART BUTTON HERE */}
              <AddToCart tea={product} />
            </div>
          </div>

          {product.description && (
            <div
              className="prose prose-invert mt-8 max-w-none leading-relaxed text-white/85"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}
        </section>
      </div>
    </main>
  );
}
