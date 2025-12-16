// app/products/saffron/[id]/ClientDetail.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
// ✅ IMPORT 1: Use the correct provider (Basket B)
import { useCart } from "@/app/providers";
import type { LooseProduct } from "@/app/data/Saffronloose";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs">
      {children}
    </span>
  );
}

export default function ClientDetail({ product }: { product: LooseProduct }) {
  const [active, setActive] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  
  // ✅ IMPORT 2: Get the function from the provider
  const { addToCart } = useCart();

  const imgs = product.images?.length ? product.images : ["/images/placeholder.jpg"];

  const handleAdd = () => {
    // ✅ USE THE PROVIDER FUNCTION
    // The provider expects: addToCart(productObject, quantity)
    addToCart({
      id: `loose-${product.id}`,
      title: product.title,
      price: Number(product.price ?? 0),
      image: imgs[0], // Note: provider uses 'image', not 'img'
    }, 1);

    // Visual feedback
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000); 
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* LEFT: Images */}
      <section>
        <Image
          src={imgs[active]}
          alt={product.title}
          width={1400}
          height={1100}
          priority
          className="w-full aspect-[16/10] object-cover rounded-[24px] ring-1 ring-white/10"
        />
        {imgs.length > 1 && (
          <div className="mt-4 grid grid-cols-4 gap-3">
            {imgs.slice(0, 4).map((src, i) => (
              <button
                key={`${product.id}-${i}`}
                onClick={() => setActive(i)}
                className={`relative h-20 rounded-xl overflow-hidden border transition ${i === active ? "border-[#FFD700]" : "border-white/10"}`}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* RIGHT: Info */}
      <section className="pt-1">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <div className="mt-2 flex flex-wrap gap-2">
          <Badge>{product.brand}</Badge>
          <Badge>{product.weightGrams} g</Badge>
        </div>

        <div className="mt-4 rounded-xl border border-white/10 p-4 bg-[#120c08]/60">
          <div className="text-sm text-white/60">Price</div>
          <div className="mt-1 text-2xl text-[#FFD700] font-semibold">
            {product.price != null ? `€${product.price.toFixed(2)}` : "—"}
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={handleAdd}
              className={`relative z-10 w-full md:w-auto rounded-full px-8 py-3 text-black font-semibold transition-all duration-300
                         ${isAdded ? "bg-[#22c55e]" : "bg-[#FFD700] hover:brightness-110"}`}
            >
              {isAdded ? "Added to Cart!" : "Add to cart"}
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-white/90">
            {product.description}
        </div>
      </section>
    </div>
  );
}