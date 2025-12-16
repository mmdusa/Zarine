"use client"; // This is crucial for animations

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const jarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate the Jar (Spin and Scale)
      gsap.to(jarRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        rotation: 360,
        scale: 1.2,
      });

      // 2. Animate Floating Elements (Parallax)
      gsap.to(".floater-1", {
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom bottom", scrub: 2 },
        y: 500, opacity: 1, rotation: 100
      });
      gsap.to(".floater-2", {
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom bottom", scrub: 3 },
        y: -300, opacity: 1, rotation: -50
      });

      // 3. Text Animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Text 1: In then Out
      tl.to(".step-1", { opacity: 1, y: 0, duration: 1 })
        .to(".step-1", { opacity: 0, y: -50, duration: 1, delay: 1 });

      // Text 2: In then Out
      tl.to(".step-2", { opacity: 1, y: 0, duration: 1 })
        .to(".step-2", { opacity: 0, y: -50, duration: 1, delay: 1 });

      // Text 3: In (Stays a bit longer)
      tl.to(".step-3", { opacity: 1, y: 0, duration: 1 });

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* The Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-b from-[#1a0b0b] via-[#2a0e0e] to-[#0b0d16] flex justify-center items-center">
        
        {/* --- THE JAR --- */}
        {/* Replace the 'src' below with your local '/images/saffron-jar.png' */}
        <div ref={jarRef} className="relative z-20 w-64 h-80 md:w-80 md:h-[450px]">
           {/* Placeholder Image used for demo */}
           <img 
             src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-dried-saffron-in-a-glass-jar-png-image_11572459.png" 
             alt="Zariné Saffron Jar"
             className="w-full h-full object-contain drop-shadow-2xl"
           />
        </div>

        {/* --- FLOATING ELEMENTS --- */}
        <div className="floater-1 absolute top-[10%] right-[10%] opacity-0 z-10 w-24">
             <img src="https://static.vecteezy.com/system/resources/previews/027/254/723/original/saffron-flower-isolated-on-transparent-background-png.png" alt="Flower" />
        </div>
        <div className="floater-2 absolute bottom-[20%] left-[10%] opacity-0 z-10 w-32 blur-[1px]">
             <img src="https://static.vecteezy.com/system/resources/previews/027/254/723/original/saffron-flower-isolated-on-transparent-background-png.png" alt="Flower" />
        </div>

        {/* --- TEXT OVERLAYS --- */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center text-center px-4">
            
            <div className="step-1 absolute opacity-0 translate-y-12">
                <h2 className="text-5xl md:text-7xl font-bold text-[#D4AF37] mb-4 drop-shadow-lg">Red Gold</h2>
                <p className="text-white/90 text-xl md:text-2xl font-light">The ancient aroma of Persia.</p>
            </div>

            <div className="step-2 absolute opacity-0 translate-y-12">
                <h2 className="text-5xl md:text-7xl font-bold text-[#D4AF37] mb-4 drop-shadow-lg">Hand Picked</h2>
                <p className="text-white/90 text-xl md:text-2xl font-light">Harvested at dawn for peak potency.</p>
            </div>

            <div className="step-3 absolute opacity-0 translate-y-12">
                <h2 className="text-5xl md:text-7xl font-bold text-[#D4AF37] mb-4 drop-shadow-lg">Pure Zariné</h2>
                <p className="text-white/90 text-xl md:text-2xl font-light">Grade A Sargol Saffron.</p>
            </div>

        </div>
      </div>
    </div>
  );
}