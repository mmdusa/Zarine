// app/saffron/page.tsx  (UNCHANGED)

import SaffronSection from "@/components/SaffronSection";
import ScrollDots from "@/components/ScrollDots";

export const metadata = {
  title: "ZARINÉ — Persian Saffron",
  description:
    "Persian saffron: history & harvest, quality, and value — revealed in three immersive sections.",
};

export default function SaffronPage() {
  return (
    <div className="relative h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <ScrollDots count={3} />

      <section data-saffron>
        <SaffronSection
          image="/saffron/flower.jpg"
          title="Persian Saffron — A Legacy of Light"
          subtitle="History & Harvest"
          body={
            <>
              <p>
                For over <strong>three millennia</strong>, saffron has colored the Persian
                story—offered in temples, perfumed royal kitchens, and stitched into
                poetry. Each autumn across Iran’s high plateaus, <em>Crocus sativus</em>{" "}
                blooms for only a few precious weeks.
              </p>
              <p className="mt-3">
                At <strong>dawn</strong>, before sunlight warms the petals, farmers hand-pick
                the blossoms to protect the volatile aromas. Inside every flower lie
                three crimson stigmas—the threads we call saffron—gently plucked and
                dried the same day to lock in color, fragrance, and flavor.
              </p>
            </>
          }
        />
      </section>

      <section data-saffron>
        <SaffronSection
          image="/saffron/threads.jpg"
          title="Depth of Color. Aroma of Memory."
          subtitle="Quality of Iranian Saffron"
          body={
            <>
              <p>
                Iranian saffron is prized for its high levels of{" "}
                <strong>crocin</strong> (color), <strong>safranal</strong> (aroma), and{" "}
                <strong>picrocrocin</strong> (taste).
              </p>
              <p className="mt-3">
                Master graders select long, unbroken <strong>Negin</strong> and{" "}
                <strong>Sargol</strong> strands with a deep red hue, minimal yellow style,
                and a vivid honey-floral aroma.
              </p>
            </>
          }
        />
      </section>

      <section data-saffron>
        <SaffronSection
          image="/saffron/tin.jpg"
          title="A Treasure Worth More Than Gold"
          subtitle="Packaging & Value"
          body={
            <>
              <p>
                Hundreds of flowers yield just a single gram—hours of careful labor
                distilled into red filaments. That is why saffron has long been cherished
                as a <strong>gift of prosperity</strong>.
              </p>
              <p className="mt-3">
                We seal our saffron in <strong>airtight, handcrafted tins</strong> that shield
                it from light and air, preserving its character from field to kitchen.
              </p>
            </>
          }
        />
      </section>
    </div>
  );
}
