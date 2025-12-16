import "../globals.css"; // go up one folder to find the global CSS
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ZARINÉ — The Golden Pantry of Persia",
  description: "Persian saffron, tea, and rosewater — crafted in tradition for Europe.",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className="bg-black text-white font-serif">
        <Nav />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
