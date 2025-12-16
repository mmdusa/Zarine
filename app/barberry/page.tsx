// app/barberry/page.tsx
// Server component (no "use client")
import SaffronSection from "@/components/SaffronSection";
import ScrollDots from "@/components/ScrollDots";

export const metadata = {
  title: "ZARINÉ — Persian Barberry (Zereshk)",
  description:
    "Persian barberry (Zereshk): heritage, quality, and serving ideas — told in three immersive sections.",
};

export default function BarberryStoryPage() {
  return (
    <div className="relative h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* Right-side dots */}
      <ScrollDots count={3} />

      {/* 1) History & Heritage */}
      <section data-saffron>
        <SaffronSection
          image="/barberry/field.jpg"    // save your orchard photo as /public/barberry/field.jpg
          title="Zereshk — A Ruby Thread in Persian Cuisine"
          subtitle="Heritage & Harvest"
          body={
            <>
              <p>
                In Iran’s eastern highlands, thorny <em>Berberis integerrima</em> bushes
                ripen to a deep crimson each summer. For centuries, families have
                harvested these jewel-like berries, drying them gently in shade to
                preserve their color and bright, tart perfume.
              </p>
              <p className="mt-3">
                From caravan trade routes to royal kitchens, <strong>zereshk</strong> has
                brought sparkle to rice dishes and stews — a balance of acidity and
                sweetness that defines many classic Persian plates.
              </p>
            </>
          }
        />
      </section>

      {/* 2) Quality */}
      <section data-saffron>
        <SaffronSection
          image="/barberry/bowl.jpg"     // save your gold-bowl photo as /public/barberry/bowl.jpg
          title="Bright Color, Clean Shine"
          subtitle="Quality Markers"
          body={
            <>
              <p>
                Premium Persian barberries are small, even, and <strong>vivid ruby</strong>
                with a glossy skin. They’re <strong>seedless</strong> (zereshk-e pufaki),
                naturally tart, and never sticky or oily. The best lots are shade-dried,
                free of stems and grit, and carry a fresh, wine-red aroma.
              </p>
              <p className="mt-3">
                At ZARINÉ we source carefully graded berries with low moisture for longer
                shelf life and a <strong>clean, crisp pop</strong> of acidity in the pan.
              </p>
            </>
          }
        />
      </section>

      {/* 3) Serving & Use */}
      <section data-saffron>
        <SaffronSection
          image="/barberry/tin.jpg"      // save your enamel tin / scatter photo as /public/barberry/tin.jpg
          title="A Tart Spark — From Pantry to Plate"
          subtitle="Serving Ideas"
          body={
            <>
              <p>
                For <strong>Zereshk Polo</strong>, rinse briefly and soak 5–10 minutes.
                Sauté a knob of butter with a spoon of sugar (or honey), then toss the
                berries just until plump and glossy. Finish saffron rice with this ruby
                topping and toasted pistachios.
              </p>
              <p className="mt-3">
                Try barberries in <em>kuku sabzi</em>, chicken glazes, jeweled pilafs,
                grain salads, yogurt dips (<em>mast-o-zereshk</em>), and even brownies
                for a lively sour-cherry note. Store airtight, cool and dark.
              </p>
            </>
          }
        />
      </section>
    </div>
  );
}
