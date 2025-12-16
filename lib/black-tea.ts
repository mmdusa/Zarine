// lib/black-tea.ts
export type BlackTea = {
  slug: string;
  title: string;
  notes: string;
  details: string;
  img: string;   // path in /public
  price?: number;
};

export const BLACK_TEA: BlackTea[] = [
  // ✅ New tins
  {
    slug: "shahrzad-darjeeling-assam-325",
    title: "Shahrzad — Darjeeling Assam Blend (325 g)",
    notes: "Premium black tea blend of Darjeeling & Assam in a golden tin; aromatic with bergamot nuance.",
    details: "Weight 325 g • Size 10×10×20 cm • Type: Darjeeling • License 645513 • Flavor: Bergamot",
    img: "/tea/black/shahrzad-darjeeling-assam-325.jpg",
  },
  {
    slug: "shahrzad-earlgrey-plus-325",
    title: "Shahrzad — Earl Grey Plus (325 g)",
    notes: "Elegant Earl Grey in matte black tin; deep, clean bergamot aroma.",
    details: "Weight 325 g • Size 10×10×20 cm • Type: Earl Grey • License 56/10776 • Flavor: Bergamot",
    img: "/tea/black/shahrzad-earlgrey-plus-325.jpg",
  },
  {
    slug: "shahrzad-assam-blend-325",
    title: "Shahrzad — Assam Natural Blend (325 g)",
    notes: "Full-bodied Kolkata/Assam profile; ruby liquor, red tin presentation.",
    details: "Weight 325 g • Size 10×10×20 cm • Type: Kolkata (Assam) • License 56/10776 • Flavor: Bergamot",
    img: "/tea/black/shahrzad-assam-blend-325.jpg",
  },

  // ✅ Earlier boxes you shared
  {
    slug: "shahrzad-earlgrey-400",
    title: "Shahrzad — Earl Grey (400 g)",
    notes: "Fragrant black tea with natural bergamot; smooth & balanced.",
    details: "Brew ~7 min • Pack wt 400 g (gross 450 g) • Type: Earl Grey • Origin: India",
    img: "/tea/black/shahrzad-earlgrey-400.jpg",
  },
  {
    slug: "shahrzad-cardamom-500",
    title: "Shahrzad — Cardamom (500 g)",
    notes: "Black tea with cardamom aroma; comforting Persian cup.",
    details: "Net 500 g (gross 545 g) • Size 12.5×8.5×18.5 cm • Type: Black (flavoured)",
    img: "/tea/black/shahrzad-cardamom-500.jpg",
  },
  {
    slug: "shahrzad-red-400",
    title: "Shahrzad — Classic (400 g)",
    notes: "Straight black tea, organic; clean body and deep color.",
    details: "Gross 400 g • Box size 18×13×7 cm • Brew ~12 min • Pack: Box",
    img: "/tea/black/shahrzad-classic-red-400.jpg",
  },

  {
    slug: "refah-green-350",
    title: "Refah Lahijan — FBOP Bergamot (350 g)",
    notes: "Export-grade Lahijan blend; broken leaf with bergamot scent.",
    details: "Gross 350 g • Size 12×16×8 cm • License 47/13220 • Type: Broken",
    img: "/tea/black/refah-green-350.jpg",
  },
  {
    slug: "refah-white-340",
    title: "Refah Lahijan — TGF BOP (340 g)",
    notes: "100% natural; strong color, persistent taste.",
    details: "Net 340 g (gross 400 g) • Size 12×8×16 cm • License 4850 • Pack: Box",
    img: "/tea/black/refah-white-340.jpg",
  },
  {
    slug: "refah-blue-340",
    title: "Refah Lahijan — Premium (340 g)",
    notes: "Natural aroma, clean taste; classic northern profile.",
    details: "Net 340 g (gross 355 g) • Size 11×8×15 cm • Pack: Box",
    img: "/tea/black/refah-blue-340.jpg",
  },
  {
    slug: "refah-black-300",
    title: "Refah — Traditional Oolong Style (300 g)",
    notes: "Semi-oxidized style with classic Iranian scent.",
    details: "Gross 300 g • Size 23×9×13 cm • Type: Oolong style • Origin: Iran",
    img: "/tea/black/refah-black-300.jpg",
  },
];
