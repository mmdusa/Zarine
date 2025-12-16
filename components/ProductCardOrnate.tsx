"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  title,
  href,
  imgSrc,
  blurb,
}: {
  title: string;
  href: string;
  imgSrc: string;
  blurb: string;
}) {
  return (
    <article className="lux-card">
      {/* Image */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1280px) 33vw, 400px"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="lux-title text-lg md:text-xl">{title}</h3>
        <p className="lux-text mt-2 text-sm leading-relaxed">{blurb}</p>

        <Link href={href} className="lux-link mt-4 inline-block">
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 12h10m0 0l-4-4m4 4l-4 4" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
