import TeaShowcase from "@/components/TeaShowcase";

export const metadata = {
  title: "Tea Bags • ZARINÉ",
  description: "Convenience without compromise — pyramid sachets.",
};

export default function Page() {
  return (
    <TeaShowcase
      heroImage="/tea/cup-field.jpg"
      title="Tea Bags"
      subtitle="Silky pyramid sachets packed with full-leaf blends for real flavor."
      intro="For busy days and offices — our sachets use cut whole leaves (not dust) so you still get genuine aroma and body in two minutes."
      cards={[
        {
          title: "Black Breakfast • 20 sachets",
          blurb: "Bold and brisk. Steeps clean, never murky.",
          price: "€6.90",
          img: "/tea/cup-field.jpg",
        },
        {
          title: "Green & Mint • 20 sachets",
          blurb: "Cooling, gentle sweetness — late night friendly.",
          price: "€6.50",
          img: "/tea/leaf.jpg",
        },
        {
          title: "Saffron Chai • 15 sachets",
          blurb: "Warm spice with Persian saffron notes.",
          price: "€8.90",
          img: "/tea/cup-carpet.jpg",
        },
      ]}
    />
  );
}
