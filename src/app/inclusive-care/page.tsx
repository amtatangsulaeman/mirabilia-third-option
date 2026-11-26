import type { Metadata } from "next";
import { Container, CtaStrip, FeatureSplit, LeafList, PageHero, SectionHead } from "@/components/ui";
import { newPhotos, photos, storypark } from "@/lib/content";

export const metadata: Metadata = {
  title: "Inclusive Care: One Fee, Everything Included",
  description: "Mirabilia’s all-inclusive daily fee covers meals, nappies, sunscreen, incursions, excursions and every learning experience. No hidden extras.",
};

const includes = [
  "Freshly prepared, nutritious meals and snacks",
  "Nappies",
  "Sunscreen",
  "Engaging incursions that bring new experiences into the centre",
  "Excursions that extend learning into the wider community",
  "Every learning resource and experience in our program",
];

export default function InclusiveCarePage() {
  return (
    <>
      <PageHero
        photo={photos.outdoorSandpit}
        script="Inclusive Care"
        title="One fee. Everything included."
        intro="We believe exceptional care should come without hidden extras. Our all-inclusive fee covers everything your child needs for a full, enriching day, so there are no surprise costs and no lists to pack."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Your fee includes" title="Nothing extra to pay, nothing extra to pack" />
          <div className="tab-card card-sun p-7 text-lg sm:p-9">
            <LeafList items={includes} />
          </div>
        </Container>
      </section>

      <section className="band py-20 sm:py-28">
        <Container>
          <FeatureSplit photo={newPhotos.outdoorDiscover} eyebrow="Care that fits your life" title="Flexible care options">
            <p>Family life doesn’t always run to a set timetable. That’s why we offer flexible care options designed around your family’s needs, giving you confidence and peace of mind as your routine changes.</p>
          </FeatureSplit>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead eyebrow="Storypark" title="Stay connected with Storypark" lead={storypark} />
          <div className="mt-10">
            <CtaStrip text={<em>Speak with our team to find out how our family benefits can support you.</em>} />
          </div>
        </Container>
      </section>
    </>
  );
}
