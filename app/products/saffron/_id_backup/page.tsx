// app/products/saffron/[id]/page.tsx
import { LOOSE_SAFFRON, type LooseProduct } from "@/app/data/Saffronloose";
import ClientDetail from "./ClientDetail";

type Props = {
  params: { id: string };
};

export default function LooseSaffronDetailPage({ params }: Props) {
  // params.id comes from the URL: /products/saffron/<id>
  const product: LooseProduct | undefined = LOOSE_SAFFRON.find(
    (p) => p.id === params.id
  );

  if (!product) {
    // if ID is wrong, show a simple message instead of crashing
    return (
      <main className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-2 text-white/70">
            The saffron pack you’re looking for doesn’t exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(60%_70%_at_50%_0%,#2a1510_0%,#120b09_55%,#0b0807_100%)] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <ClientDetail product={product} />
      </div>
    </main>
  );
}
