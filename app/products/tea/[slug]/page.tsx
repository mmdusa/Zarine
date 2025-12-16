// app/products/tea/[slug]/page.tsx
import { notFound } from "next/navigation";
import ClientTeaDetail from "./ClientTeaDetail";
import { BLACK_TEA, type BlackTea } from "@/app/data/blackTea";

// If later you have green / bags, you can merge arrays here
// const ALL_TEA: BlackTea[] = [...BLACK_TEA, ...GREEN_TEA, ...BAG_TEA];

type Props = {
  params: { slug: string };
};

export default function TeaDetailPage({ params }: Props) {
  // Find tea by slug from your data
  const tea: BlackTea | undefined = BLACK_TEA.find(
    (t) => t.slug === params.slug
  );

  if (!tea) {
    notFound();
  }

  return <ClientTeaDetail t={tea} />;
}
