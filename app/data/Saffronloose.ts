// app/data/saffronLoose.ts
export type LooseProduct = {
  id: string;
  brand: string;
  title: string;
  weightGrams: number;
  price?: number | null;
  images: string[];
  blurb: string;
  description: string;
  highlights?: string[];
};

export const LOOSE_SAFFRON: LooseProduct[] = [
  {
    id: "bahraman-khatam-1g",
    brand: "Bahraman",
    title: "Khatam Tin — 1 g (Sargol)",
    weightGrams: 1.0,
    price: 12.90,
    images: [
      "/products/loose/bahraman-khatam-1g-1.jpg",
      "/products/loose/bahraman-khatam-1g-2.jpg",
    ],
    blurb:
      "Grade-1 Sargol in a classic Khatam tin — vivid color and perfume.",
    description:
      "Grade-1 all-red saffron (Sargol) packed in a traditional Khatam tin.",
    highlights: [
      "Pure Sargol threads, fully red",
      "Airtight tin with window",
      "Ideal for daily cooking and gifting",
    ],
  },
  {
    id: "bahraman-ghoti-9-216g",
    brand: "Bahraman",
    title: "Ghoti Pack — 9.216 g (2 mithqal)",
    weightGrams: 9.216,
    price: 84.00,
    images: [
      "/products/loose/bahraman-ghoti-9.216g-1.jpg",
      "/products/loose/bahraman-ghoti-9.216g-2.jpg",
    ],
    blurb: "‘Ghoti’ pack — clear lid reveals ruby threads.",
    description:
      "Ghoti presentation with visible saffron stigmas in a clear-dish sleeve.",
  },
  {
    id: "bahraman-ghoti-23-04g",
    brand: "Bahraman",
    title: "Ghoti Pack — 23.04 g (5 mithqal)",
    weightGrams: 23.04,
    price: 189.00,
    images: [
      "/products/loose/bahraman-ghoti-23.04g-1.jpg",
      "/products/loose/bahraman-ghoti-23.04g-2.jpg",
    ],
    blurb: "Large family size — vivid color, generous supply.",
    description:
      "A large Ghoti format with top-grade Sargol saffron.",
  },
  {
    id: "bahraman-ghoti-13-824g",
    brand: "Bahraman",
    title: "Ghoti Pack — 13.824 g (3 mithqal)",
    weightGrams: 13.824,
    price: 115.00,
    images: [
      "/products/loose/bahraman-ghoti-13.824g-1.jpg",
      "/products/loose/bahraman-ghoti-13.824g-2.jpg",
    ],
    blurb: "Classic size with premium threads.",
    description:
      "Grade-1 all-red Sargol, hand-picked and dried.",
  },
  {
    id: "bahraman-khatam-4g",
    brand: "Bahraman",
    title: "Khatam Tin — 4 g (Sargol)",
    weightGrams: 4.0,
    price: 42.00,
    images: [
      "/products/loose/bahraman-khatam-4g-1.jpg",
      "/products/loose/bahraman-khatam-4g-2.jpg",
    ],
    blurb:
      "Elegant Khatam tin with rich, evenly cut Sargol strands.",
    description:
      "Traditional Khatam tin with high-grade Sargol.",
  },
  {
    id: "bahraman-white-2g",
    brand: "Bahraman",
    title: "White Floral Pack — 2 g (Sargol)",
    weightGrams: 2.0,
    price: 19.00,
    images: [
      "/products/loose/bahraman-white-2g-1.jpg",
      "/products/loose/bahraman-white-2g-2.jpg",
    ],
    blurb:
      "Clean two-gram pack with window — perfect for home cooks.",
    description:
      "Bright sleeve design with premium Sargol saffron.",
  },
  {
    id: "qaenat-4-62g",
    brand: "Qaenat",
    title: "Premium Saffron — 4.62 g (All-Red)",
    weightGrams: 4.62,
    price: 48.00,
    images: ["/products/loose/qaenat-4.62g-1.jpg"],
    blurb: "Bold color payoff; classic red sleeve.",
    description:
      "Cluster-picked saffron with strong aroma.",
  },
  {
    id: "saharkhiz-1-5g-gift",
    brand: "Saharkhiz",
    title: "Sargol Gift — 1.5 g",
    weightGrams: 1.5,
    price: 17.50,
    images: ["/products/loose/saharkhiz-1.5g-1.jpg"],
    blurb: "Elegant small gift box.",
    description:
      "All-red Sargol saffron with clean, uniform threads.",
  },
  {
    id: "saharkhiz-negin-4g-jar",
    brand: "Saharkhiz",
    title: "Negin Jar — 4 g (Boxed)",
    weightGrams: 4.0,
    price: 39.00,
    images: [
      "/products/loose/saharkhiz-negin-4g-1.jpg",
      "/products/loose/saharkhiz-negin-4g-2.jpg",
    ],
    blurb: "Thick, long Negin filaments in a gift jar.",
    description:
      "Top-grade Negin saffron in a durable clear jar.",
  },
];
