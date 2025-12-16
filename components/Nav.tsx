"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useCart } from "@/app/providers";

const OTHER_PRODUCTS = [
  { href: "/products/barberry", label: "Barberry (Zereshk)" },
  { href: "/products/dates", label: "Dates" },
  { href: "/products/cardamom", label: "Cardamom (Hel)" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSaffronOpen, setMobileSaffronOpen] = useState(false);
  const [mobileTeaOpen, setMobileTeaOpen] = useState(false);

  const { data: session, status } = useSession();
  const { items } = useCart();
  const cartCount = items.reduce((n, i) => n + i.qty, 0);

  const productsRef = useRef<HTMLDivElement | null>(null);

  const displayName =
    session?.user?.name ||
    (session?.user?.email
      ? session.user.email.split("@")[0]
      : undefined);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!productsRef.current) return;
      if (!productsRef.current.contains(e.target as Node)) setProductsOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setProductsOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-16">
        {/* Brand */}
        <Link
          href="/"
          className="text-[#FFD700] font-semibold tracking-[0.25em] text-lg drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]"
        >
          ZARINÉ
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/90 hover:text-[#FFD700]">
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative" ref={productsRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen(v => !v)}
              className="text-white/90 hover:text-[#FFD700] inline-flex items-center gap-1"
            >
              Products
              <svg width="14" height="14" viewBox="0 0 20 20" className="opacity-80" aria-hidden>
                <path fill="currentColor" d="M5 7l5 6 5-6H5z" />
              </svg>
            </button>

            {productsOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-72 rounded-xl border border-white/10 bg-[#120c08]/95 backdrop-blur p-3 shadow-2xl"
              >
                {/* Saffron */}
                <div className="px-2 pb-2">
                  <div className="text-[11px] uppercase tracking-widest text-white/50 mb-1">
                    Saffron
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/products/saffron-boxed"
                      className="rounded-lg px-3 py-2 text-sm text-white/90 hover:text-[#FFD700] hover:bg-white/5"
                      onClick={() => setProductsOpen(false)}
                    >
                      Boxed Gift Sets
                    </Link>
                    <Link
                      href="/products/saffron"
                      className="rounded-lg px-3 py-2 text-sm text-white/90 hover:text-[#FFD700] hover:bg-white/5"
                      onClick={() => setProductsOpen(false)}
                    >
                      Loose Saffron
                    </Link>
                  </div>
                </div>

                {/* Tea */}
                <div className="px-2 pb-2">
                  <div className="text-[11px] uppercase tracking-widest text-white/50 mb-1">
                    Tea
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/products/tea/black"
                      className="rounded-lg px-3 py-2 text-sm text-white/90 hover:text-[#FFD700] hover:bg-white/5"
                      onClick={() => setProductsOpen(false)}
                    >
                      Black Tea
                    </Link>
                    <Link
                      href="/products/tea/green"
                      className="rounded-lg px-3 py-2 text-sm text-white/90 hover:text-[#FFD700] hover:bg-white/5"
                      onClick={() => setProductsOpen(false)}
                    >
                      Green Tea
                    </Link>
                    <Link
                      href="/products/tea/tea-bags"
                      className="rounded-lg px-3 py-2 text-sm text-white/90 hover:text-[#FFD700] hover:bg-white/5"
                      onClick={() => setProductsOpen(false)}
                    >
                      Tea Bags
                    </Link>
                  </div>
                </div>

                <div className="my-2 h-px w-full bg-white/10" />

                {/* Other Products */}
                <div className="px-2">
                  <div className="text-[11px] uppercase tracking-widest text-white/50 mb-1">
                    More
                  </div>
                  <div className="flex flex-col">
                    {OTHER_PRODUCTS.map(p => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="rounded-lg px-3 py-2 text-sm text-white/90 hover:text-[#FFD700] hover:bg-white/5"
                        onClick={() => setProductsOpen(false)}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-white/90 hover:text-[#FFD700]">
            Contact
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative text-white/90 hover:text-[#FFD700]">
            Cart
            {cartCount > 0 && (
              <span className="ml-2 inline-flex min-w-5 h-5 items-center justify-center rounded-full bg-[#FFD700] px-1.5 text-black text-xs font-semibold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth */}
          {status === "loading" ? null : session ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/80">
                Hey{" "}
                <span className="font-semibold text-[#FFD700]">{displayName}</span>
              </span>
              <button
                onClick={() => signOut()}
                className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-[#FFD700] text-black text-sm font-semibold px-4 py-1.5 hover:brightness-110 transition flex items-center"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Burger */}
        <button
          onClick={() => {
            setMobileOpen(v => !v);
            setProductsOpen(false);
          }}
          className="md:hidden text-white/90 hover:text-[#FFD700]"
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d={
                mobileOpen
                  ? "M18.3 5.71L12 12l6.3 6.29-1.41 1.41L10.59 13.4 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.3 10.59 10.6l6.3-6.3z"
                  : "M4 7h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#120c08]/95 border-t border-white/10 backdrop-blur-lg py-4 px-5 animate-[slideDown_.25s_ease-out]">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2 text-white/90 hover:text-[#FFD700]">
            Home
          </Link>

          {/* Products Accordion */}
          <button
            className="w-full text-left py-2 text-white/90 hover:text-[#FFD700]"
            onClick={() => setMobileProductsOpen(v => !v)}
            aria-expanded={mobileProductsOpen}
            aria-controls="mobile-products"
          >
            Products {mobileProductsOpen ? "▲" : "▼"}
          </button>

          {mobileProductsOpen && (
            <div id="mobile-products" className="pl-2">
              {/* Saffron */}
              <button
                className="w-full text-left py-2 text-white/90 hover:text-[#FFD700]"
                onClick={() => setMobileSaffronOpen(v => !v)}
              >
                Saffron {mobileSaffronOpen ? "▲" : "▼"}
              </button>
              {mobileSaffronOpen && (
                <div className="pl-4">
                  <Link href="/products/saffron-boxed" onClick={() => setMobileOpen(false)} className="block py-1 text-white/80 hover:text-[#FFD700]">
                    Boxed Gift Sets
                  </Link>
                  <Link href="/products/saffron" onClick={() => setMobileOpen(false)} className="block py-1 text-white/80 hover:text-[#FFD700]">
                    Loose Saffron
                  </Link>
                </div>
              )}

              {/* Tea */}
              <button
                className="w-full text-left py-2 text-white/90 hover:text-[#FFD700]"
                onClick={() => setMobileTeaOpen(v => !v)}
              >
                Tea {mobileTeaOpen ? "▲" : "▼"}
              </button>

              {mobileTeaOpen && (
                <div className="pl-4">
                  <Link href="/products/tea/black" onClick={() => setMobileOpen(false)} className="block py-1 text-white/80 hover:text-[#FFD700]">
                    Black Tea
                  </Link>
                  <Link href="/products/tea/green" onClick={() => setMobileOpen(false)} className="block py-1 text-white/80 hover:text-[#FFD700]">
                    Green Tea
                  </Link>

                  {/* ✅ FIXED Tea Bags link for mobile */}
                  <Link
                    href="/products/tea/tea-bags"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 text-white/80 hover:text-[#FFD700]"
                  >
                    Tea Bags
                  </Link>
                </div>
              )}

              {/* Other Products */}
              <div className="pl-2 mt-1">
                {OTHER_PRODUCTS.map(p => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 text-white/80 hover:text-[#FFD700]"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-white/90 hover:text-[#FFD700]">
            Contact
          </Link>

          {/* Cart */}
          <Link href="/cart" onClick={() => setMobileOpen(false)} className="block py-2 text-white/90 hover:text-[#FFD700]">
            Cart{cartCount > 0 ? ` (${cartCount})` : ""}
          </Link>

          {/* Auth */}
          {status === "loading" ? null : session ? (
            <>
              <p className="mt-2 text-sm text-white/80">
                Hey{" "}
                <span className="font-semibold text-[#FFD700]">{displayName}</span>
              </p>
              <button
                onClick={() => {
                  signOut();
                  setMobileOpen(false);
                }}
                className="mt-2 w-full rounded-lg border border-white/20 px-3 py-2 text-white/90 hover:bg.white/10"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 w-full inline-block text-center rounded-lg bg-[#FFD700] text-black font-semibold px-3 py-2 hover:brightness-110"
            >
              Login
            </Link>
          )}
        </div>
      )}

      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}
