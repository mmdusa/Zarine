import { LOOSE_SAFFRON, type LooseProduct } from "@/app/data/Saffronloose";
import ClientDetail from "./ClientDetail";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = { params: { slug: string } };

export default function LooseSaffronDetailPage({ params }: Props) {
  const product: LooseProduct | undefined = LOOSE_SAFFRON.find(
    (p) => p.id === params.slug
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-white/70">Product not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(60%_70%_at_50%_0%,#2a1510_0%,#120b09_55%,#0b0807_100%)] text-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products/saffron" },
            { label: "Saffron (Loose)", href: "/products/saffron" },
            { label: product.title },
          ]}
        />

        <ClientDetail product={product} />
      </div>
    </main>
  );
}
