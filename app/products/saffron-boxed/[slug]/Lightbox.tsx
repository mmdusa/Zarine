"use client";

import Image from "next/image";
import { useState } from "react";

export default function Lightbox({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);

  if (!images?.length) return null;

  return (
    <>
      {/* Button to open Lightbox */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => {
            setI(0);
            setOpen(true);
          }}
          className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
        >
          View Fullscreen
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 rounded-full bg-white/10 px-3 py-1.5 text-white hover:bg-white/20"
          >
            ✕ Close
          </button>

          <button
            onClick={() => setI((i - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl"
          >
            ‹
          </button>

          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[i].src}
              alt={images[i].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={() => setI((i + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
