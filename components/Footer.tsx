// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-28 bg-[#050407] text-white/90 border-t border-[#d4af37]/20">
      {/* TOP STRIP */}
      <div className="bg-gradient-to-r from-[#1a0c0a] via-[#0e0707] to-[#1a0c0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-[#d4af37]/60 shadow-[0_0_28px_rgba(212,175,55,0.45)]">
              <Image
                src="/logo/zarinelogo-clear.png"
                alt="ZARINÉ"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#f8e7a0]/80">
                ZARINÉ
              </p>
              <p className="text-xs mt-1 text-white/70">
                The Golden Pantry of Persia · Torino, Italy
              </p>
            </div>
          </div>

          {/* Persian quote */}
          <div className="text-right">
            <p className="text-[#FFD700] italic text-sm">
              «روشنـیِ جان از طلاییِ عشق است»
            </p>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/60 mt-1">
              Saffron • Tea • Zereshk
            </p>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-14 md:grid-cols-3">
        {/* COLUMN 1 */}
        <div>
          <h3 className="text-sm font-semibold text-white">About</h3>
          <p className="mt-3 text-sm text-white/75 max-w-xs">
            Saffron threads, Persian teas and ruby barberry — sourced in tiny
            batches from Iran and hand-packed in Italy.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-[#FFD700]">Home</Link></li>
            <li><Link href="/#categories" className="hover:text-[#FFD700]">Shop by Category</Link></li>
            <li><Link href="/#products" className="hover:text-[#FFD700]">Zariné Collection</Link></li>
            <li><Link href="/#video" className="hover:text-[#FFD700]">Brand Film</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-3 space-y-1 text-sm text-white/80">
            <li>
              <a
                href="tel:+393342896512"
                className="hover:text-[#FFD700] transition"
              >
                +39 334 2896512
              </a>
            </li>
            <li>
              <a
                href="mailto:info@zarine.com"
                className="hover:text-[#FFD700] transition"
              >
                info@zarine.com
              </a>
            </li>
          </ul>

          {/* payments */}
          <h3 className="mt-6 text-sm font-semibold text-white">We accept</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <span className="px-3 py-1.5 bg-white/5 border border-white/15 text-[12px] rounded-xl">
              Visa
            </span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/15 text-[12px] rounded-xl">
              Mastercard
            </span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/15 text-[12px] rounded-xl">
              PayPal
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {year} ZARINÉ — The Golden Pantry of Persia.</p>

          <div className="flex gap-6">
            <Link href="/conditions" className="hover:text-[#FFD700]">Conditions</Link>
            <Link href="/privacy" className="hover:text-[#FFD700]">Privacy</Link>
            <Link href="/cookies" className="hover:text-[#FFD700]">Cookies</Link>
            <Link href="/credits" className="hover:text-[#FFD700]">Credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
