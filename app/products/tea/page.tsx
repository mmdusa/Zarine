// app/tea/page.tsx
import SaffronSection from "@/components/SaffronSection"; // generic full-bleed section
import ScrollDots from "@/components/ScrollDots";

export const metadata = {
  title: "ZARINÉ — Persian Tea",
  description:
    "Persian tea: history & gardens, quality & terroir, brewing & serving — in three immersive sections.",
};

export default function TeaPage() {
  return (
    <div className="relative h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <ScrollDots count={3} />

      {/* 1) History & Gardens */}
      <section data-tea>
        <SaffronSection
          image="/tea/cup-field.jpg"     // you said: public/tea/cup-field.jpg
          title="Persian Tea — Steam, Story, Hospitality"
          subtitle="History & Gardens"
          body={
            <>
              <p>
                From the misty slopes of <strong>Gilan and Lahijan</strong>, tea became
                Iran’s daily ritual—poured for guests, traded in bazaars, and
                stitched into poetry.
              </p>
              <p className="mt-3">
                Late-19th-century plantings took root by the Caspian. Today,
                Iranian households still favor a <em>samovar</em> and glass cups,
                a color like ruby amber and an aroma that says “you’re home.”
              </p>
            </>
          }
        />
      </section>

      {/* 2) Quality & Terroir */}
      <section data-tea>
        <SaffronSection
          image="/tea/leaf.jpg"          // public/tea/leaf.jpg
          title="Color, Aroma, Balance"
          subtitle="Quality & Terroir"
          body={
            <>
              <p>
                Good Persian tea is clean and vivid: <strong>bright color</strong>,{" "}
                <strong>smooth body</strong>, and a nose that hints of citrus peel,
                dried flowers, or honeyed grain.
              </p>
              <p className="mt-3">
                Blends may feature <strong>Assam</strong> depth, <strong>Darjeeling</strong> lift,
                or a whisper of <strong>bergamot</strong> or <strong>cardamom</strong>—but always with
                a gentle finish that welcomes a cube of sugar or a date.
              </p>
            </>
          }
        />
      </section>

      {/* 3) Brewing & Serving */}
      <section data-tea>
        <SaffronSection
          image="/tea/cup-carpet.jpg"    // public/tea/cup-carpet.jpg
          title="Brew with Heart"
          subtitle="Brewing & Serving"
          body={
            <>
              <p>
                Rinse the pot, add a spoon of tea per cup, and pour water just off
                the boil. <strong>Steep 5–7 minutes</strong> for a clear, fragrant liquor.
              </p>
              <p className="mt-3">
                Serve in thin glass cups; sweeten with rock sugar, or pair with
                <em> dates</em> and nuts. For milk tea, brew stronger—Persian tea
                stays elegant, never harsh.
              </p>
            </>
          }
        />
      </section>
    </div>
  );
}
