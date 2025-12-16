import { notFound } from "next/navigation";
import { BLACK_TEA, type BlackTea } from "@/app/data/blackTea";
import ClientTeaDetail from "./ClientTeaDetail";

type Props = {
  params: { slug: string };
};

export default function BlackTeaDetailPage({ params }: Props) {
  const tea: BlackTea | undefined = BLACK_TEA.find(
    (t) => t.slug === params.slug
  );

  if (!tea) {
    notFound();
  }

  return <ClientTeaDetail t={tea} />;
}
