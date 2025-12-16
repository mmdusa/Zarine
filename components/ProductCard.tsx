"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, basePath }: any) {
  const { addToCart } = useCart();

  return (
    <article className="bg-zar-parchment text-zar-ink rounded-2xl overflow-hidden frame shadow-tile">
      
      {/* IMAGE */}
      <Image
        src={product.image}
        alt={product.name}
        width={900}
        height={600}
        className="w-full h-56 object-cover"
      />

      {/* PRODUCT INFO  */}
      <div className="p-5 flex flex-col gap-3">

        <h3 className="font-display text-2xl text-zar-rose">{product.name}</h3>
        <p className="text-sm/6 opacity-80">{product.description}</p>

        {/* PRICE */}
        <span className="font-semibold text-zar-midnight bg-zar-saffron px-3 py-1 rounded-md w-fit">
          €{product.price}
        </span>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 pt-2">
          <Link
            href={`${basePath}/${product.id}`}     // 🔥 Detail Page Link
            className="bg-zar-rose text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
          >
            Details
          </Link>

          <button
            onClick={() => addToCart(product)}      // 🔥 Add to Cart Works Now
            className="bg-zar-saffron text-black font-semibold px-4 py-2 rounded-lg text-sm hover:brightness-95 transition"
          >
            Add to Cart 🛒
          </button>
        </div>

      </div>
    </article>
  );
}
