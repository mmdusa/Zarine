"use client";
import {useEffect, useMemo, useRef, useState} from "react";

type Props = { sections: React.ReactNode[] };

export default function Fullpage({sections}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const ids = useMemo(() => sections.map((_, i) => `sec-${i}`), [sections]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      entries => {
        const topMost = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (topMost) {
          const idx = ids.indexOf((topMost.target as HTMLElement).id);
          if (idx !== -1) setActive(idx);
        }
      },
      {root, threshold: [0.25, 0.5, 0.75]}
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  const scrollTo = (i: number) => {
    const root = containerRef.current;
    const el = document.getElementById(ids[i]);
    if (root && el) el.scrollIntoView({behavior: "smooth", block: "start"});
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      {/* sections */}
      {sections.map((node, i) => (
        <section
          id={ids[i]}
          key={ids[i]}
          className="snap-start min-h-screen flex items-center justify-center"
        >
          {node}
        </section>
      ))}

      {/* right-side dots */}
      <div className="pointer-events-none fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {ids.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to section ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`pointer-events-auto h-3 w-3 rounded-full transition-all 
              ${active === i ? "h-3.5 w-3.5 bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.35)]" : "bg-white/60 hover:bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}
