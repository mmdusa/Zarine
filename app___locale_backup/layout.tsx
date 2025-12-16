import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "ZARINÉ — The Golden Pantry of Persia",
  description:
    "Authentic Persian saffron, tea, and rosewater — crafted in tradition and shared with love across Europe.",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body className="bg-[#0b0807] text-white antialiased">
        {/* ===== Navbar ===== */}
        <Nav />

        {/* ===== Page Content ===== */}
        <main className="pt-16 min-h-screen">{children}</main>

        {/* ===== Footer ===== */}
        <Footer />
      </body>
    </html>
  );
}
