export type BlackTea = {
  slug: string;
  title: string;
  weight: string;
  price: number;
  img: string;
  flavor?: string;
  brew?: string;
  origin?: string;
  blurb?: string;
  description: string;
};

export const BLACK_TEA: BlackTea[] = [
  {
    slug: "shahrzad-earlgrey-400",
    title: "Shahrzad Earl Grey — 400 g",
    weight: "400 g",
    price: 14.9,
    img: "/tea/black/shahrzad-earlgrey-400.jpg",
    flavor: "Bergamot",
    brew: "7 min",
    origin: "India",
    blurb: "Classic Earl Grey aroma; bright, brisk liquor.",
    description: `
      <strong>Elegant & Timeless.</strong>  
      A refined Earl Grey blend that marries full-bodied Indian black tea with the fragrant essence of Mediterranean bergamot.  
      Its golden-amber liquor releases a delicate aroma of citrus peel, honey, and spring blossoms. Perfect for mornings when you want clarity and calm, or for late afternoons served with lemon or a touch of milk.  

      <em>Tasting Notes:</em> Bright • Citrusy • Aromatic  
      <em>Pairing:</em> Perfect with pastries, dark chocolate, and light desserts.
    `,
  },
  {
    slug: "shahrzad-cardamom-500",
    title: "Shahrzad — Cardamom Blend 500 g",
    weight: "500 g",
    price: 16.9,
    img: "/tea/black/shahrzad-cardamom-500.jpg",
    flavor: "Cardamom",
    brew: "7–8 min",
    origin: "India",
    blurb: "Black tea scented with green cardamom.",
    description: `
      <strong>Spiced with Tradition.</strong>  
      This exquisite blend unites hand-picked black tea leaves with crushed green cardamom pods, offering a warm and nostalgic aroma.  
      The first sip greets you with spicy sweetness followed by smooth, comforting depth — the very essence of Persian hospitality.  
      Brew it slowly and let your kitchen fill with its enchanting fragrance.  

      <em>Tasting Notes:</em> Spicy • Sweet • Floral  
      <em>Pairing:</em> Perfect with saffron cake, dates, or rosewater sweets.
    `,
  },
  {
    slug: "shahrzad-assam-400",
    title: "Shahrzad Assam Blend — 400 g",
    weight: "400 g",
    price: 13.9,
    img: "/tea/black/shahrzad-red-400.jpg",
    brew: "12 min",
    origin: "Assam, India",
    blurb: "Full-bodied Assam style; deep color, strong cup.",
    description: `
      <strong>Bold & Comforting.</strong>  
      A powerful, malty Assam tea from India’s lush plains. Deep red in cup and full in body, it carries natural hints of cocoa and toasted grain.  
      Traditionally served with milk or sugar, this tea has long been a favorite in Persian households for its bold yet comforting character.  

      <em>Tasting Notes:</em> Malty • Cocoa • Strong body  
      <em>Pairing:</em> Great with milk, breakfast dishes, or rich desserts.
    `,
  },
  {
    slug: "shahrzad-darjeeling-assam-325",
    title: "Shahrzad Darjeeling–Assam Blend — 325 g (Tin)",
    weight: "325 g",
    price: 15.5,
    img: "/tea/black/shahrzad-darjeeling-assam-325.jpg",
    brew: "9 min",
    origin: "Darjeeling & Assam, India",
    blurb: "Fragrant Darjeeling shimmer on an Assam backbone.",
    description: `
      <strong>Delicate Harmony.</strong>  
      An elegant composition of Darjeeling’s floral brightness and Assam’s round, malty base.  
      The result is a complex yet balanced cup with notes of muscatel grapes, wood, and sweet spice.  
      A tea for both contemplation and daily enjoyment — aromatic, amber-colored, and luxuriously smooth.  

      <em>Tasting Notes:</em> Floral • Muscatel • Balanced  
      <em>Pairing:</em> Beautiful with biscuits, honey, or light cream cakes.
    `,
  },
  {
    slug: "shahrzad-earlgrey-plus-325",
    title: "Shahrzad Earl Grey Plus — 325 g (Tin)",
    weight: "325 g",
    price: 15.9,
    img: "/tea/black/shahrzad-earlgrey-plus-325.jpg",
    flavor: "Bergamot",
    brew: "7 min",
    origin: "India",
    blurb: "Enhanced Earl Grey in a gift tin.",
    description: `
      <strong>Refined & Radiant.</strong>  
      A richer and more fragrant version of the classic Earl Grey. Premium-grade black tea infused with extra bergamot oil gives this blend a vivid aroma and smooth citrus aftertaste.  
      Packed in an elegant metallic tin to preserve freshness and flavor — a refined gift for any tea lover.  

      <em>Tasting Notes:</em> Lively • Citrus • Fragrant  
      <em>Pairing:</em> Excellent with lemon tart, croissants, or vanilla desserts.
    `,
  },
  {
    slug: "shahrzad-assam-tin-325",
    title: "Shahrzad Assam Natural Blend — 325 g (Tin)",
    weight: "325 g",
    price: 14.5,
    img: "/tea/black/shahrzad-assam-blend-325.jpg",
    brew: "11 min",
    origin: "Assam, India",
    blurb: "Assam natural blend; smooth and round.",
    description: `
      <strong>Pure Strength.</strong>  
      Pure Assam leaves presented in a decorative golden tin. This tea brews into a deep amber cup with a thick, velvety mouthfeel.  
      Its bold flavor and sweet malt finish make it a perfect morning or afternoon pick-me-up.  
      The tin seals in the tea’s warmth and freshness for months.  

      <em>Tasting Notes:</em> Malty • Sweet • Bold  
      <em>Pairing:</em> Ideal with breakfast breads, cream, or sugar cubes.
    `,
  },
  {
    slug: "refah-fbop-bergamot-350",
    title: "Lahijan Refah — FBOP Bergamot 350 g",
    weight: "350 g",
    price: 13.5,
    img: "/tea/black/refah-green-350.jpg",
    flavor: "Bergamot",
    brew: "8 min",
    origin: "Lahijan, Iran",
    blurb: "Lahijan selection with gentle bergamot aroma.",
    description: `
      <strong>Persian Freshness.</strong>  
      An Iranian black tea from the fertile gardens of Lahijan, delicately scented with bergamot.  
      The tea reveals a clear copper liquor with a light citrus aroma and smooth, balanced taste — a fine expression of Persian craftsmanship.  

      <em>Tasting Notes:</em> Light • Citrus • Smooth  
      <em>Pairing:</em> Pairs beautifully with dried fruits or nut cookies.
    `,
  },
  {
    slug: "refah-black-340",
    title: "Lahijan Refah — Black 340 g",
    weight: "340 g",
    price: 12.9,
    img: "/tea/black/refah-black-300.jpg",
    brew: "9–10 min",
    origin: "Gilan, Iran",
    blurb: "Natural Lahijan black tea; clear, ruby liquor.",
    description: `
      <strong>Authentic & Earthy.</strong>  
      Harvested in the misty highlands of Gilan Province, this tea offers a naturally rich and earthy aroma with a hint of roasted chestnut.  
      It’s a pure, unflavored black tea — perfect for those who appreciate authenticity and simplicity in every cup.  

      <em>Tasting Notes:</em> Earthy • Nutty • Full-bodied  
      <em>Pairing:</em> Enjoy plain, or with rock sugar and lemon.
    `,
  },
  {
    slug: "refah-white-340",
    title: "Lahijan Refah — Black 340 g (White Box)",
    weight: "340 g",
    price: 13.2,
    img: "/tea/black/refah-white-340.jpg",
    brew: "8–9 min",
    origin: "Gilan, Iran",
    blurb: "Premium broken-leaf Lahijan black tea.",
    description: `
      <strong>Bright & Clean.</strong>  
      A premium Lahijan blend packaged for export, featuring finely rolled leaves that brew to a clear ruby-red color.  
      The aroma is bright and slightly floral, with a crisp finish that lingers gently — a tea to start your day or unwind after meals.  

      <em>Tasting Notes:</em> Bright • Floral • Clean finish  
      <em>Pairing:</em> Excellent with honey, dates, or Persian sweets.
    `,
  },
];
