"use client";
import { useEffect, useState } from "react";

export default function ScrollDots({ count }: { count: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const secs = Array.from(document.querySelectorAll("section[data-saffron]"));
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) {
          const idx = secs.findIndex((s) => s === top.target);
          if (idx !== -1) setActive(idx);
        }
      },
      { threshold: [0.35, 0.6] }
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (i: number) => {
    document
      .querySelectorAll("section[data-saffron]")[i]
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => go(i)}
          className={`pointer-events-auto h-3 w-3 rounded-full transition-all ${
            active === i
              ? "h-3.5 w-3.5 bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.35)]"
              : "bg-white/70 hover:bg-white"
          }`}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </div>
  );
}
