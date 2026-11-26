import type { Metadata } from "next";
import { Container, CtaStrip, FeatureSplit, PageHero } from "@/components/ui";
import { newPhotos, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Family Benefits: Sibling Discount & Flexible Care",
  description: "Sibling discounts and flexible care options that fit your family’s routine. Speak with the Mirabilia team to find out how our family benefits can support you.",
};

// Kept deliberately light on detail so families contact their centre (client brief).
export default function FamilyBenefitsPage() {
  return (
    <>
      <PageHero
        photo={photos.smilingBoy}
        script="Family Benefits"
        title="Because family matters to us"
        intro="We’re here to help make early learning work for your whole family."
      />
      <section className="py-20 sm:py-28">
        <Container>
          <FeatureSplit photo={newPhotos.educatorPuzzle} eyebrow="Sibling discount" title="Supporting you as your family grows">
            <p>Families with more than one child enrolled at Mirabilia enjoy our sibling discount, our way of supporting you as your family grows and making quality care more achievable.</p>
          </FeatureSplit>
        </Container>
      </section>
      <section className="band band-sun py-20 sm:py-28">
        <Container>
          <FeatureSplit flip photo={newPhotos.tablePlay} eyebrow="Flexi care" title="Flexible care that fits your life">
            <p>Family life doesn’t always follow a set timetable. That’s why we offer flexible care options designed around your family’s needs and routine. As your work, schedule or circumstances change, we’ll work with you to find care that suits, giving you confidence and peace of mind.</p>
          </FeatureSplit>
        </Container>
      </section>
      <section className="py-20 sm:py-28">
        <Container>
          <CtaStrip text={<em>Speak with our team to find out how our family benefits can support you.</em>} />
        </Container>
      </section>
    </>
  );
}
