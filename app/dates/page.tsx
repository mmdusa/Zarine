// app/dates/page.tsx
// Same “story” layout as saffron/tea: 3 full-screen sections + ScrollDots

import ScrollDots from "@/components/ScrollDots";
import SaffronSection from "@/components/SaffronSection";

export const metadata = {
  title: "ZARINÉ — Persian Dates",
  description:
    "Persian dates — history & harvest, varieties & quality, and serving ideas — presented in three immersive sections.",
};

export default function DatesPage() {
  return (
    <div className="relative h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <ScrollDots count={3} />

      {/* 1) History & Harvest */}
      <section data-dates>
        <SaffronSection
          image="/dates/palm.jpg"
          title="Persian Dates — Sweetness of the Oasis"
          subtitle="History & Harvest"
          body={
            <>
              <p>
                From the southern oases of Iran—Hormozgan, Kerman, and
                Khuzestan—date palms have offered shade, fruit, and trade for{" "}
                <strong>millennia</strong>. Persian poetry calls the palm
                “the mother of the desert,” a tree that nourishes body and
                spirit.
              </p>
              <p className="mt-3">
                Dates ripen in stages ({" "}
                <em>kimri → khalal → rutab → tamr</em> ), moving from crisp and
                honeyed to soft, dark, and caramel-rich. Farmers climb the
                towering trunks to hand-cut heavy clusters, then sort and cool
                them the same day to protect texture and natural sugars.
              </p>
            </>
          }
        />
      </section>

      {/* 2) Varieties & Quality */}
      <section data-dates>
        <SaffronSection
          image="/dates/bowl.jpg"
          title="Varieties & Quality"
          subtitle="Mazafati, Kabkab, Piarom & More"
          body={
            <>
              <p>
                Iran cultivates many prized varieties.{" "}
                <strong>Mazafati (Rutab)</strong> from Bam is luscious and
                soft—almost jammy—with glossy skin and a melt-in-mouth bite.{" "}
                <strong>Piarom</strong> (the “chocolate date”) is elongated,
                semi-dry, and naturally elegant: thin skin, deep toffee notes,
                and a clean finish. <strong>Kabkab</strong> offers generous
                sweetness and a tender, fibrous body—perfect for cooking.
              </p>
              <p className="mt-3">
                Quality shows in the <strong>skin integrity</strong> (minimal
                cracking), <strong>moisture balance</strong> (not sticky or
                overly dry), and a <strong>pure aroma</strong>—ripe caramel,
                cocoa, and warm fruit with no fermentation notes. We select
                graded lots with consistent size and careful cold storage.
              </p>
            </>
          }
        />
      </section>

      {/* 3) Serving & Pairing */}
      <section data-dates>
        <SaffronSection
          image="/dates/gift-box.jpg"
          title="Serving & Pairing"
          subtitle="How to Enjoy"
          body={
            <>
              <p>
                Serve slightly chilled for the best texture. Split, pit, and
                fill with <strong>walnuts</strong> or <strong>almonds</strong>;
                drizzle with a thread of <strong>saffron-honey</strong>; or pair
                with aged cheeses. For breakfast, chop into warm{" "}
                <strong>sholeh-zard</strong> (saffron rice pudding) or fold into
                yogurt with cardamom.
              </p>
              <p className="mt-3">
                In cooking, dates bring body to{" "}
                <strong>khoresht-e beh</strong> and pilafs; blitz them into
                smoothies or energy bites; or bake into cakes with{" "}
                <strong>rosewater</strong> and pistachio. For gifting, our
                curated boxes celebrate the classic Persian way—simple, generous,
                and golden.
              </p>
            </>
          }
        />
      </section>
    </div>
  );
}
