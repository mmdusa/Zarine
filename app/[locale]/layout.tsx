// app/[locale]/layout.tsx
// SERVER LAYOUT — wraps the site in providers and shared UI

import "@/app/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

// Your existing components/providers
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { FavoritesProvider } from "@/components/FavoritesContext";
import BackButton from "./BackButton"; // ⬅️ correct path

export const metadata: Metadata = {
  title: "Zarine — Premium Saffron",
  description: "Gift boxes and premium loose saffron.",
};

// Only build the locales you want (English only)
const SUPPORTED_LOCALES = ["en"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((l) => ({ locale: l }));
}

export const dynamicParams = false;

// 🔴 IMPORTANT: params MUST be a Promise in Next.js 15 layouts
type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // ✅ await params
  const { locale: rawLocale } = await params;

  // Validate locale (fallback to en)
  const locale: Locale = SUPPORTED_LOCALES.includes(rawLocale as Locale)
    ? (rawLocale as Locale)
    : "en";

  return (
    <html lang={locale}>
      <body className="min-h-dvh bg-[#17110f] text-white antialiased">
        <FavoritesProvider>
          {/* 🔙 Global back button */}
          <BackButton />

          {/* Header */}
          <header className="sticky top-0 z-40 bg-black/30 backdrop-blur-md border-b border-white/10">
            <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
              <Nav />
            </div>
          </header>

          {/* Main content */}
          <main className="pt-16">{children}</main>

          {/* Global cart drawer + footer */}
          <CartDrawer />
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
