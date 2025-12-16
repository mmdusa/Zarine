"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCardSimple({
  title,
  href,
  imgSrc,
  blurb
}: {
  title: string;
  href: string;
  imgSrc: string; // e.g. "/images/saffron.jpg"
  blurb: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl overflow-hidden border border-white/12 bg-zinc-900/60 shadow-[0_15px_60px_rgba(0,0,0,.35)]"
    >
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#D4AF37]">{title}</h3>
        <p className="mt-2 text-sm text-white/85">{blurb}</p>
        <Link
          href={href}
          className="inline-block mt-4 text-[#D4AF37] font-medium hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </motion.article>
  );
}
