// app/rosewater/page.tsx
import ScrollDots from "@/components/ScrollDots";
import SaffronSection from "@/components/SaffronSection"; // we reuse this generic section

export const metadata = {
  title: "ZARINÉ — Persian Rosewater (Golab)",
  description:
    "Persian rosewater: heritage & harvest, purity & quality, and ways to serve — in three immersive sections.",
};

export default function RosewaterPage() {
  return (
    <div className="relative h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <ScrollDots count={3} />

      {/* 1) Heritage & Harvest */}
      <section data-rosewater>
        <SaffronSection
          image="/rosewater/rose-picking.jpg"   // <-- make sure these image files exist
          title="Persian Rosewater — Fragrance of Heritage"
          subtitle="History & Harvest"
          body={
            <>
              <p>
                For centuries in <em>Kashan</em>, families rise before dawn during the
                short spring bloom to hand-pick <strong>Damask roses</strong>. The petals
                are gathered cool and fresh, then rushed to copper stills the very same
                morning.
              </p>
              <p className="mt-3">
                This practice, called <em>Golabgiri</em>, has been celebrated for generations:
                pure water, fresh petals, gentle heat — nothing else. The result is a
                crystal-clear distillate with a soft floral soul.
              </p>
            </>
          }
        />
      </section>

      {/* 2) Purity & Quality */}
      <section data-rosewater>
        <SaffronSection
          image="/rosewater/rose-distill.jpg"
          title="Clarity, Aroma, Balance"
          subtitle="Purity & Quality"
          body={
            <>
              <p>
                Fine rosewater is judged by <strong>clarity</strong>, a clean
                <strong> damask aroma</strong> (no sharpness), and a smooth taste with
                light sweetness. Traditional copper stills and slow distillation protect
                the delicate volatiles.
              </p>
              <p className="mt-3">
                We favor single-origin batches from Kashan with no added essences or
                sugar — just the flower, water, and time.
              </p>
            </>
          }
        />
      </section>

      {/* 3) Serving */}
      <section data-rosewater>
        <SaffronSection
          image="/rosewater/rose-bottle.jpg"
          title="Serving Ideas"
          subtitle="How to Use Rosewater"
          body={
            <>
              <p>
                Add a spoon to <strong>sholeh zard</strong>, <strong>faloodeh</strong>,
                or <strong>bastani sonnati</strong>. Mist over fresh fruit, fold into
                whipped cream, or brighten a cup of black tea. A little goes a long way —
                begin with a few drops.
              </p>
              <p className="mt-3">
                Store cool and dark; keep capped to preserve the bouquet.
              </p>
            </>
          }
        />
      </section>
    </div>
  );
}
