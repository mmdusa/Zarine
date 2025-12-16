export const metadata = { title: "Credits — ZARINÉ" };

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 leading-relaxed text-white/80">
      <h1 className="text-4xl font-semibold mb-4 text-white">Credits</h1>

      <p className="mb-6">
        ZARINÉ would like to thank everyone who contributed to the creation of this
        project — a digital homage to the art, aroma, and culture of Persia.
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-3">
        <li><b>Concept & Design:</b> ZARINÉ Creative Studio, Torino</li>
        <li><b>Web Development:</b> Next.js + Tailwind + Framer Motion</li>
        <li><b>Photography:</b> Original imagery captured in Persia and Italy, along with
            selected licensed stock.</li>
        <li><b>Typography:</b> Cinzel & Lora — free Google Fonts blending elegance and readability.</li>
        <li><b>UI Framework:</b> Tailwind CSS + ShadCN Components.</li>
        <li><b>Hosting:</b> Deployed on Netlify for fast, secure delivery worldwide.</li>
        <li><b>Inspiration:</b> The beauty of Persian craftsmanship, color, and hospitality.</li>
      </ul>

      <p className="mt-6 italic">
        “The gold of Persia shines not only in metal but in art, flavor, and soul.”
      </p>
    </div>
  );
}
