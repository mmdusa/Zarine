"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  
  // Refs
  const lidRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const threadsRef = useRef<HTMLDivElement>(null);

  // --- ANIMATION LOGIC ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom bottom",
          // INCREASED SCRUB: Higher number = Slower, smoother "catch up"
          scrub: 2.5, 
        },
      });

      // --- STEP 1: LID FLIES AWAY ---
      tl.to(lidRef.current, { 
        y: -450,        
        x: 80,          
        rotation: 35,   
        opacity: 0,     
        duration: 4, // Increased duration relative to timeline
        ease: "power2.inOut"
      });

      // --- STEP 2: JAR BODY FALLS DOWN ---
      tl.to(bodyRef.current, {
        y: 600,         
        opacity: 0,     
        duration: 4,
        ease: "power2.in"
      }, "-=3"); // Start overlapping earlier so it feels fluid

      // --- STEP 3: SAFFRON REMAINS & GROWS ---
      tl.fromTo(threadsRef.current, 
        { y: 60, opacity: 0, scale: 0.8 }, 
        { 
          y: -50,       
          opacity: 1, 
          scale: 1.6,   
          duration: 5, // Takes longer to reach full size
          ease: "power1.out" 
        }, 
        "<" 
      );

      // --- TEXT ANIMATIONS ---
      tl.to(".text-step-1", { opacity: 0, y: -50, duration: 2 }, 0);
      
      tl.fromTo(".text-step-2", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2 }, 
        "-=3"
      );

    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainContainerRef} className="relative min-h-screen bg-[#050304] text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* ===================== HERO SECTION ===================== */}
      {/* INCREASED HEIGHT: h-[600vh] makes the animation last longer while scrolling */}
      <div className="hero-container relative h-[600vh]">
        
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#1a0b0b] via-[#2a0e0e] to-[#050304]">
          
          {/* HEADER */}
          <div className="absolute top-0 left-0 right-0 z-50 px-8 py-8 md:px-12 flex items-center justify-between">
            <span className="tracking-[0.3em] uppercase text-white/60 text-xs md:text-sm">
              ZARINÉ
            </span>
          </div>

          {/* JAR GROUP */}
          <div className="jar-group relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex justify-center items-end">
             
             {/* 1. SAFFRON (Remains) */}
             <div ref={threadsRef} className="absolute bottom-[20%] w-[80%] z-10 opacity-0 pointer-events-none">
               <img src="/saffron/threads.png" alt="Saffron Burst" className="w-full object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]" />
             </div>

             {/* 2. BODY (Falls) */}
             <div ref={bodyRef} className="absolute bottom-0 w-full z-20 pointer-events-none">
               <img src="/saffron/body.png" alt="Glass Jar" className="w-full object-contain" />
             </div>

             {/* 3. LID (Flies) */}
             <div ref={lidRef} className="absolute top-[-2%] w-full z-30 flex justify-center pointer-events-none">
               <img src="/saffron/lid.png" alt="Jar Lid" className="w-[98%] object-contain drop-shadow-2xl" />
             </div>

          </div>

          {/* TEXT */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center text-center z-40">
              <div className="text-step-1 absolute translate-y-[-240px]">
                  <p className="text-[#f8e7a0]/85 tracking-[0.2em] uppercase text-sm mb-2">Persian Fine Pantry</p>
                  <h1 className="text-5xl md:text-8xl font-bold text-[#D4AF37] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">Red Gold</h1>
              </div>

              <div className="text-step-2 absolute translate-y-[-240px] opacity-0">
                  <h1 className="text-5xl md:text-8xl font-bold text-[#D4AF37] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">Pure Essence</h1>
                  <p className="text-white/80 mt-4 text-xl font-light">The scent of home.</p>
              </div>
          </div>
        </div>
      </div>

      {/* ===================== REST OF CONTENT ===================== */}
      <section id="table" className="max-w-6xl mx-auto px-6 pb-20 pt-20 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5D87A]">
              A small Persian table
            </h2>
            <p className="text-white/75 mt-3 max-w-xl text-lg leading-relaxed">
              Imagine one tray in the middle of the room: saffron rice, a glass
              of strong tea, a handful of ruby barberry. Everything we sell is
              chosen for that moment.
            </p>
          </div>
          <div className="text-xs text-white/60 tracking-[0.2em] uppercase">
            Saffron • Tea • Zereshk
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/products/saffron" className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/50 bg-gradient-to-b from-[#24130d] to-[#120a07] p-6 hover:-translate-y-2 hover:border-[#FFD700] transition duration-500">
            <div className="absolute inset-0 opacity-25 group-hover:opacity-40 bg-[url('/images/saffron.jpg')] bg-cover bg-center mix-blend-soft-light transition duration-500" />
            <div className="relative z-10">
              <p className="text-[11px] text-white/60 tracking-[0.18em] uppercase mb-1">Saffron</p>
              <h3 className="text-xl font-semibold text-[#F6E3A0]">The golden thread</h3>
              <p className="text-sm text-white/80 mt-3 leading-relaxed">Threads only – no powder.</p>
              <p className="mt-6 text-sm text-[#FFD700] font-medium group-hover:translate-x-1 transition-transform">See saffron →</p>
            </div>
          </Link>

          <Link href="/products/tea/black" className="group relative overflow-hidden rounded-3xl border border-[#8fa7ff]/55 bg-gradient-to-b from-[#151827] to-[#0b0d16] p-6 hover:-translate-y-2 hover:border-[#c0d0ff] transition duration-500">
            <div className="absolute inset-0 opacity-30 group-hover:opacity-45 bg-[url('/images/tea.jpg')] bg-cover bg-center mix-blend-soft-light transition duration-500" />
            <div className="relative z-10">
              <p className="text-[11px] text-white/60 tracking-[0.18em] uppercase mb-1">Tea</p>
              <h3 className="text-xl font-semibold text-[#e3e8ff]">Glass in hand</h3>
              <p className="text-sm text-white/80 mt-3 leading-relaxed">Strong, clear black tea.</p>
              <p className="mt-6 text-sm text-[#d6dcff] font-medium group-hover:translate-x-1 transition-transform">Explore tea →</p>
            </div>
          </Link>

          <Link href="/products/barberry" className="group relative overflow-hidden rounded-3xl border border-red-400/65 bg-gradient-to-b from-[#260b0d] to-[#150506] p-6 hover:-translate-y-2 hover:border-red-300 transition duration-500">
            <div className="absolute inset-0 opacity-30 group-hover:opacity-45 bg-[url('/images/barberry.jpg')] bg-cover bg-center mix-blend-soft-light transition duration-500" />
            <div className="relative z-10">
              <p className="text-[11px] text-white/60 tracking-[0.18em] uppercase mb-1">Barberry</p>
              <h3 className="text-xl font-semibold text-[#ffe0e3]">Ruby on rice</h3>
              <p className="text-sm text-white/80 mt-3 leading-relaxed">Bright and tart Zereshk.</p>
              <p className="mt-6 text-sm text-red-200 font-medium group-hover:translate-x-1 transition-transform">Visit barberry →</p>
            </div>
          </Link>
        </div>
      </section>

      <section id="products" className="max-w-6xl mx-auto px-6 pb-20 pt-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">The Zariné Collection</h2>
        <p className="text-white/80 mb-8 max-w-2xl">Tap “Learn more” to discover the story.</p>
        <ProductGrid />
      </section>

      <section id="video" className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">The world of Zariné</h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-10 text-lg">A short glimpse into saffron fields.</p>
        <div className="relative w-full max-w-4xl mx-auto rounded-[32px] overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_40px_rgba(212,175,55,0.25)] aspect-video">
          <video src="/videos/zarine_video.mp4" controls className="w-full h-full object-cover" />
        </div>
      </section>

      <Footer />
    </main>
  );
}