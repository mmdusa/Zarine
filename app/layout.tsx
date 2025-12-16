import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Providers from "./providers";           // your theme/i18n
import Nav from "@/components/Nav";
import { CartProvider } from "@/context/CartContext";  // <—— IMPORTANT

export const metadata: Metadata = {
  title: "Zariné – Persian Treasures",
  description: "Persian saffron, tea, rosewater and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        
        {/* 🛒 Cart must wrap whole app */}
        <CartProvider>   
          <Providers>
            <Nav />
            {children}
          </Providers>
        </CartProvider>

      </body>
    </html>
  );
}
