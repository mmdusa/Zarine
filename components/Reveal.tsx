"use client";
import {useEffect, useRef, useState} from "react";

type Props = { children: React.ReactNode; from?: "up"|"down"; delay?: number };

export default function Reveal({children, from="up", delay=0}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShow(true), {threshold: .35});
    io.observe(el); return () => io.disconnect();
  }, []);

  const cls = show ? "translate-y-0 opacity-100" : from==="up" ? "translate-y-5 opacity-0" : "-translate-y-5 opacity-0";

  return (
    <div ref={ref} style={{transitionDelay: `${delay}ms`}}
         className={`transition-all duration-700 ${cls}`}>
      {children}
    </div>
  );
}
