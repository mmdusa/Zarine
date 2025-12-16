export type BoxedProduct = {
  id: string;            // slug
  title: string;
  price: number;
  weight?: string;
  images: string[];      // gallery
  short: string;         // teaser shown on cards
  long?: string;         // full description
  notes?: string[];      // tasting/usage chips
  origin?: string;       // shown as a badge
  grade?: string;        // optional badge
};

const P = (name: string) => `/products/boxed/${name}.jpg`;

export const BOXED_PRODUCTS: BoxedProduct[] = [
  {
    id: "aghele-tin",
    title: "Aghele Tin",
    price: 14.9,
    weight: "1 g",
    origin: "Khorasan, Iran",
    grade: "Premium",
    images: [P("aghele-tin-1"), P("aghele-tin-2")],
    short:
      "Elegant Persian tin filled with premium Khorasan saffron.",
    long:
      "A compact, gift-ready tin made to keep light and moisture away from the delicate red filaments. Inside is premium Khorasan saffron with a warm hay-and-honey bouquet and a clean, golden extraction. The even strand length makes blooming fast and reliable—just soak in hot (not boiling) water, milk, or stock for 10–15 minutes, or crush in a mortar with a pinch of sugar and dissolve. Ideal for tahdig, paella, risotto, sholeh-zard, ice-cream bases, and syrups.",
    notes: ["Honeyed", "Warm hay", "Bright gold color", "Everyday cooking"],
  },
  {
    id: "aghele-vial",
    title: "Aghele Vial",
    price: 18.9,
    weight: "1 g",
    origin: "Khorasan, Iran",
    grade: "Select",
    images: [P("aghele-vial-1"), P("aghele-vial-2")],
    short:
      "Crystal glass vial keeps strands pristine — shake, pinch, sprinkle.",
    long:
      "A clear, display-worthy vial for cooks who use a pinch often and want clean dosing. The seal minimizes air exchange so aroma stays bright. The flavor profile leans slightly floral with delicate honey and meadow notes, making it beautiful for desserts and tea. Spoon out 8–12 strands per serving, crush lightly, and bloom in warm liquid; for desserts, infuse in cream or milk and strain before using.",
    notes: ["Floral top notes", "Clean dosing", "Great for desserts", "Giftable"],
  },
  {
    id: "bahraman-iran",
    title: "Bahraman — Iran",
    price: 22.9,
    weight: "1 g",
    origin: "Khorasan, Iran",
    grade: "Premium",
    images: [P("bahraman-iran-1"), P("bahraman-iran-2")],
    short:
      "Single-origin Iranian saffron with a round, elegant perfume.",
    long:
      "Balanced, graceful saffron that colors deeply without overt bitterness. Expect a smooth amber liquor and long, elastic filaments that grind easily. Its rounded profile pairs with butter, seafood, and poultry; use for tahchin, bouillabaisse, or light broths. For best results, grind just before use and bloom 15 minutes in warm stock or water; add the liquid and strands together to your dish.",
    notes: ["Balanced", "Amber liquor", "Versatile", "Seafood friendly"],
  },
  {
    id: "bahraman-mortar",
    title: "Bahraman Mortar Gift Box",
    price: 39.9,
    weight: "1 g",
    origin: "Khorasan, Iran",
    grade: "Premium",
    images: [P("bahraman-mortar-1"), P("bahraman-mortar-2")],
    short:
      "Khatam-decorated gift set with a brass mortar & pestle.",
    long:
      "A collectible set for true saffron lovers: a Khatam-decorated presentation with a solid brass mortar & pestle. Grinding seconds before blooming releases the most vivid color and the full citrus-honey bouquet. Ideal when you want maximum impact—holiday rice, celebratory paella, custards, and syrups. Tip: add a pinch of sugar to the mortar; it helps the filaments powder quickly and dissolves evenly.",
    notes: ["Collector set", "Full aroma release", "Vivid color", "Best for feasts"],
  },
  {
    id: "bahraman-noor",
    title: "Bahraman Noor",
    price: 19.9,
    weight: "1 g",
    origin: "Khorasan, Iran",
    images: [P("bahraman-noor-1"), P("bahraman-noor-2")],
    short:
      "“Noor” brings a bright, floral lift with a clean finish.",
    long:
      "A lighter, high-tone expression that keeps sauces and broths fragrant without heaviness. Great for seafood, tahchin, and clear soups. Bloom gently in warm water or stock and add early in the cook for a perfume-forward result; or add near the end for a fresher, brighter top note.",
    notes: ["Bright & floral", "Clean finish", "Light broths", "Seafood"],
  },
  {
    id: "bahraman-violet",
    title: "Bahraman Violet",
    price: 21.9,
    weight: "1 g",
    origin: "Khorasan, Iran",
    images: [P("bahraman-violet-1"), P("bahraman-violet-2")],
    short:
      "Deeper color payoff with a gentle cocoa-like warmth.",
    long:
      "Richer, darker coloring power with a comforting aroma that hints at cocoa and sun-dried hay. It rounds buttery sauces and custards beautifully and brings depth to rice dishes. Crush and bloom; for sauces, whisk the infusion into warm butter or cream and finish with salt.",
    notes: ["Deep color", "Comforting warmth", "Butter sauces", "Desserts"],
  },
  {
    id: "crystal-duo",
    title: "Crystal Duo",
    price: 24.9,
    weight: "2 × 1 g",
    origin: "Khorasan, Iran",
    images: [P("crystal-duo-1"), P("crystal-duo-2")],
    short:
      "Twin crystal tubes — share one, keep one; sparkle and clarity.",
    long:
      "Two airtight crystal tubes that protect aroma and make dosing simple—ideal for couples, roommates, or a split gift. Keep one in the spice rack and one in your travel kit. Each tube covers 6–8 generous servings depending on the dish.",
    notes: ["Two-pack", "Airtight", "Gift friendly", "Neat dosing"],
  },
  {
    id: "luxe-tin-4g",
    title: "Luxe Tin 4 g",
    price: 29.9,
    weight: "4 g",
    origin: "Khorasan, Iran",
    grade: "Premium",
    images: [P("luxe-tin-4g-1"), P("luxe-tin-4g-2")],
    short:
      "Generous 4-gram tin — enough for festive rice nights.",
    long:
      "A kitchen-ready format for frequent cooks. Strong coloring power and a buttery-floral nose; the gold-edged tin stacks neatly and keeps freshness high. Wonderful for hosting: paella for a crowd, risotto alla Milanese, or multiple rounds of tahdig.",
    notes: ["Great value", "Entertaining size", "Strong color", "Stacks neatly"],
  },
  {
    id: "velvet-tubes",
    title: "Velvet Tubes",
    price: 34.9,
    weight: "2 × 1 g",
    origin: "Khorasan, Iran",
    images: [P("velvet-tubes-1"), P("velvet-tubes-2")],
    short:
      "Soft-touch velvet case with glass tubes — pure gift energy.",
    long:
      "A keepsake presentation with magnetic closure and snug inserts. Each tube is a tidy dose for 3–4 servings. Perfect as a wedding favor, host gift, or for anyone who appreciates little luxuries that cook beautifully.",
    notes: ["Gift set", "Magnetic case", "Ready doses", "Memorable"],
  },
];
