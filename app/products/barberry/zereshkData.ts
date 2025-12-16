export type ZereshkProduct = {
  id: string;
  name: string;
  image: string;
  weight: string;
  price: string;
  notes: string;        // short text (used in cards)
  description: string;  // long description
  pieces: string;
  brew: string;         // “how to use” short
};

export const ZERESHK_PRODUCTS: ZereshkProduct[] = [
  {
    id: "zereshk-premium-mix",
    name: "Premium Zereshk Mix – 150g | 300g | 500g",
    image: "/zereshk/zereshk-1.jpg",
    weight: "150g • 300g • 500g",
    price: "€7.50 – €22.50",
    notes: "Multi-size premium Iranian barberries for both home and professional kitchens.",
    description:
      "A versatile multi-size barberry selection, ideal for both home cooking and professional kitchens. This premium mix contains carefully dried Iranian Zereshk with bright colour, balanced acidity and a fresh aroma. Best for zereshk polo, stews and tahchin, but you can also soak the berries and add them to salads, appetisers or cold dishes.\n\nHow to use: rinse quickly under cold water, soak for 5–10 minutes, then sauté with a little oil or butter and saffron before mixing with rice or other dishes.",
    pieces: "Assorted boxed sizes",
    brew: "Rinse, soak 5–10 min, then sauté with oil/butter & saffron."
  },
  {
    id: "zereshk-150",
    name: "Zereshk 150g",
    image: "/zereshk/zereshk-2.jpg",
    weight: "150g",
    price: "€7.50",
    notes: "Small everyday pack with bright, tart and aromatic berries.",
    description:
      "A perfect everyday pack for small families and light cooking. Fresh tart berries with a bright red tone, easy to soak and quick to cook. Ideal when you want the flavour of Zereshk without storing large quantities.\n\nHow to use: rinse lightly, soak for 5–10 minutes, then sauté in a small pan with butter or oil and saffron. Sweeten lightly with a pinch of sugar if you prefer a softer taste. Add on top of rice, salads or warm dishes just before serving.",
    pieces: "Box",
    brew: "Rinse, soak 5–10 min, then sauté briefly with butter/oil."
  },
  {
    id: "zereshk-500",
    name: "Zereshk Premium 500g",
    image: "/zereshk/zereshk-3.jpg",
    weight: "500g",
    price: "€22.50",
    notes: "Large family & restaurant size with rich colour and aroma.",
    description:
      "A large premium pack designed for frequent home cooking, catering and restaurant kitchens. Hand-picked berries with high shine, low moisture and intense aroma make this Zereshk ideal for big family gatherings and professional dishes.\n\nHow to use: rinse, soak 10 minutes and sauté with oil or butter, saffron and a little sugar to create a glossy topping for rice, tahchin, salads and roasted meats.",
    pieces: "Bulk kitchen pack",
    brew: "Rinse, soak 10 min, then sauté with saffron & a pinch of sugar."
  },
  {
    id: "zereshk-200-a",
    name: "Zereshk Select 200g",
    image: "/zereshk/zereshk-4.jpg",
    weight: "200g",
    price: "€9.00",
    notes: "Select-grade berries with uniform size for premium dishes.",
    description:
      "Fine-grade barberries with a uniform grain size – ideal for premium home cooking and presentation. The sweet-tart balance makes this Zereshk suitable for both savoury and sweet recipes, from classic zereshk polo to cheesecakes and desserts.\n\nHow to use: rinse, soak for about 8 minutes and then sauté gently with oil or butter. Mix with saffron and optionally a little sugar, then add on top of rice, koofteh, salads, yogurt or baked dishes.",
    pieces: "Box",
    brew: "Rinse, soak 8 min, sauté gently with oil/butter and saffron."
  },
  {
    id: "zereshk-250",
    name: "Zereshk 250g",
    image: "/zereshk/zereshk-5.jpg",
    weight: "250g",
    price: "€10.50",
    notes: "Most popular size – enough for several dishes without waste.",
    description:
      "The most popular size for everyday cooking. This 250g pack offers the perfect balance between quantity and freshness, making it ideal for small families who cook Persian dishes regularly.\n\nHow to use: rinse, soak 8–10 minutes, then sauté with butter, oil and saffron. Serve on top of rice, salads or mix with nuts and dried fruits for a beautiful, colourful blend.",
    pieces: "Box",
    brew: "Rinse, soak 8–10 min, sauté with butter/oil & saffron."
  },
  {
    id: "zereshk-200-b",
    name: "Zereshk 200g (Kitchen Pack)",
    image: "/zereshk/zereshk-6.jpg",
    weight: "200g",
    price: "€8.50",
    notes: "Everyday kitchen Zereshk with rich flavour for family meals.",
    description:
      "An everyday kitchen pack for those who love cooking with Zereshk often. Slightly richer flavour profile and deep red colour make it perfect for daily meals and creative recipes.\n\nHow to use: rinse, soak briefly (5–8 minutes), then mix directly into cooked dishes or sauté quickly. Ideal for tahchin, chicken stew, yogurt appetizers and warm salads.",
    pieces: "Kitchen pack",
    brew: "Rinse, soak 5–8 min, then sauté or mix into hot dishes."
  },
  {
    id: "zereshk-200-c",
    name: "Zereshk Natural 200g",
    image: "/zereshk/zereshk-7.jpg",
    weight: "200g",
    price: "€8.80",
    notes: "Sun-dried natural barberries with intense sour flavour.",
    description:
      "Sun-dried and minimally processed, this natural Zereshk keeps its full sourness and deep ruby colour. Perfect for health-focused and vegan recipes, where clean, natural ingredients are essential.\n\nHow to use: rinse, soak shortly and use in grain bowls, salads, breakfast porridges, granola, trail mixes or as a topping for yogurt and smoothie bowls.",
    pieces: "Pack",
    brew: "Rinse, quick soak, then add to salads, bowls or breakfast."
  },
  {
    id: "zereshk-200-d",
    name: "Organic Zereshk 200g",
    image: "/zereshk/zereshk-8.jpg",
    weight: "200g",
    price: "€9.80",
    notes: "Organic certified Iranian barberries from eco-friendly farms.",
    description:
      "Certified organic Iranian barberries sourced from eco-friendly farms. Free from chemical treatments, with a gentle tartness and clean aftertaste. Ideal for those who choose organic ingredients for their daily cooking.\n\nHow to use: rinse, soak for 8–10 minutes and add to rice, salads, detox meals or herbal tea infusions with honey.",
    pieces: "Organic pack",
    brew: "Rinse, soak 8–10 min, use in rice, salads or teas."
  },
  {
    id: "zereshk-250-premium",
    name: "Zereshk Gold Select 250g",
    image: "/zereshk/zereshk-9.jpg",
    weight: "250g",
    price: "€11.50",
    notes: "Export-grade berries – glossy, uniform and highly aromatic.",
    description:
      "Export-grade Gold Select Zereshk with glossy appearance, uniform grain and intense aroma. Perfect for gifting, restaurants and special occasions such as weddings or Nowruz dinners.\n\nHow to use: rinse, soak 10 minutes, then sauté with butter, saffron and a touch of sugar to create a luxurious topping with golden shine. Ideal for wedding rice, gourmet dishes, pastries and dessert decoration.",
    pieces: "Premium foil pack",
    brew: "Rinse, soak 10 min, sauté with butter, saffron & a little sugar."
  }
];
