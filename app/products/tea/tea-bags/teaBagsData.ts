export type TeaBag = {
  id: string;
  name: string;
  image: string;
  weight: string;
  pieces: string;
  brew: string;
  notes: string;        // short subtitle
  description: string;  // long text for detail page
  origin: string;
  flavour: string;
  price: string;        // e.g. "€3.20"
};

export const TEA_BAGS: TeaBag[] = [
  {
    id: "earl-grey-25",
    name: "Earl Grey Tea Bag – 25 pcs",
    image: "/tea/tea-bags/earl-grey-25.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    notes: "Classic Earl Grey with soft citrus bergamot for everyday cups.",
    description:
      "Light and fragrant Earl Grey made with Indian and Ceylon black teas. Perfect for your afternoon break with a slice of lemon or a splash of milk. Gentle enough for every day, aromatic enough to feel like a small treat.",
    origin: "India · Sri Lanka",
    flavour: "Bergamot · Citrus peel",
    price: "€3.20",
  },
  {
    id: "earl-grey-ceremonial",
    name: "Earl Grey Ceremonial Tea Bag",
    image: "/tea/tea-bags/earl-grey-ceremonial.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    notes: "More aromatic Earl Grey for when you want something special.",
    description:
      "A refined London-style Earl Grey with deeper colour and a rounder bergamot note. Ideal for slow mornings, book evenings and tea trays with biscuits or dark chocolate.",
    origin: "India",
    flavour: "Intense bergamot · Honeyed finish",
    price: "€3.60",
  },
  {
    id: "indian-ceremonial",
    name: "Premium Indian Ceremonial Tea Bag",
    image: "/tea/tea-bags/indian-ceremonial.jpg",
    weight: "89 g",
    pieces: "25 tea bags",
    brew: "4 minutes",
    notes: "Rich Indian black tea with strong colour and body.",
    description:
      "Bold, malty Indian black tea that gives a deep amber cup. Designed to stay strong even with milk and sugar. Great for breakfast, office breaks and samovars.",
    origin: "India",
    flavour: "Malty · Warm spices",
    price: "€3.40",
  },
  {
    id: "royal-black",
    name: "Royal Black Line Tea Bag",
    image: "/tea/tea-bags/royal-black.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    notes: "Smooth daily black tea from the Royal Black Line.",
    description:
      "Balanced and smooth, with gentle tannins and a clean finish. A safe choice for every guest and every moment of the day – from breakfast to late-night tea.",
    origin: "Blend",
    flavour: "Soft tannins · Light caramel",
    price: "€3.30",
  },
  {
    id: "royal-earl-grey",
    name: "Royal Earl Grey Black Line Tea Bag",
    image: "/tea/tea-bags/royal-earl-grey.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    notes: "Earl Grey with a brighter, slightly floral profile.",
    description:
      "Royal Black Line tea scented with sunny bergamot and a hint of floral orange blossom. Beautiful on its own or with a slice of orange for a more Persian touch.",
    origin: "India · Sri Lanka",
    flavour: "Bright citrus · Floral",
    price: "€3.50",
  },
  {
    id: "cinnamon",
    name: "Cinnamon Black Line Tea Bag",
    image: "/tea/tea-bags/cinnamon.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    notes: "Cosy black tea flavoured with warm cinnamon.",
    description:
      "Comfort-in-a-cup: black tea wrapped in sweet, bakery-style cinnamon. Ideal for autumn and winter afternoons, or after dinner instead of dessert.",
    origin: "Blend",
    flavour: "Cinnamon · Brown sugar",
    price: "€3.60",
  },
  {
    id: "cardamom",
    name: "Cardamom Black Line Tea Bag",
    image: "/tea/tea-bags/cardamom.jpg",
    weight: "50 g",
    pieces: "25 tea bags",
    brew: "3–5 minutes",
    notes: "Persian-style black tea scented with green cardamom.",
    description:
      "The classic flavour of Persian family gatherings: strong tea lifted with fresh, green cardamom. Perfect with dates, baklava, Persian sweets or just a sugar cube.",
    origin: "India",
    flavour: "Cardamom · Herbal spice",
    price: "€3.80",
  },
  {
    id: "saffron",
    name: "Saffron Black Tea Bag",
    image: "/tea/tea-bags/saffron.jpg",
    weight: "500 g (box)",
    pieces: "Saffron-scented tea bags",
    brew: "3–5 minutes",
    notes: "Black tea kissed with Persian saffron aroma.",
    description:
      "Golden, fragrant and a little luxurious. Black tea infused with the floral, honeyed note of saffron. Beautiful for guests, celebrations and night conversations.",
    origin: "Iran · India",
    flavour: "Saffron · Floral honey",
    price: "€4.90",
  },
  {
    id: "earl-grey-100",
    name: "Earl Grey Tea Bag – 100 pcs",
    image: "/tea/tea-bags/earl-grey-100.jpg",
    weight: "270 g",
    pieces: "100 tea bags",
    brew: "3 minutes",
    notes: "Family pack Earl Grey for big tea lovers and offices.",
    description:
      "The same aromatic Earl Grey as the 25-pack, in a generous 100-bag box. Ideal for offices, shared kitchens and Earl Grey addicts.",
    origin: "India · Sri Lanka",
    flavour: "Citrus bergamot",
    price: "€7.90",
  },
  {
    id: "indian-100",
    name: "Premium Indian Tea Bag – 100 pcs",
    image: "/tea/tea-bags/indian-100.jpg",
    weight: "311 g",
    pieces: "100 tea bags",
    brew: "4 minutes",
    notes: "Strong Indian black tea for samovars and large families.",
    description:
      "Full-bodied Indian black tea with plenty of colour. Designed for big kettles and all-day drinking, with or without milk.",
    origin: "India",
    flavour: "Strong · Malty",
    price: "€8.40",
  },
];
