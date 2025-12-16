"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ClientTeaDetail from "./ClientTeaDetail";
import { BLACK_TEA, type BlackTea } from "@/app/data/blackTea";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function TeaDetailPage({ params }: Props) {
  // ✅ Next.js 15: params MUST be unwrapped
  const { slug } = use(params);

  // Find tea by slug
  const tea: BlackTea | undefined = BLACK_TEA.find(
    (t) => t.slug === slug
  );

  if (!tea) {
    notFound();
  }

  return <ClientTeaDetail t={tea} />;
}
