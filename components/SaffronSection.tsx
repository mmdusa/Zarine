"use client";
import Image from "next/image";
import Reveal from "./Reveal";

export default function SaffronSection({
  image, title, subtitle, body
}: {
  image: string; title: string; subtitle?: string; body: React.ReactNode;
}) {
  return (
    <section data-saffron className="relative h-screen w-screen snap-start overflow-hidden">
      <Image src={image} alt={title} fill priority className="object-cover object-center" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal><h2 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">{title}</h2></Reveal>
          {subtitle && <Reveal delay={120}><p className="mt-3 text-white/95 text-lg md:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{subtitle}</p></Reveal>}
          <Reveal delay={240}><div className="mt-6 text-white/95 text-base md:text-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{body}</div></Reveal>
        </div>
      </div>
    </section>
  );
}
