import type { Metadata } from "next";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { PaintBlob } from "@/components/Illustrations";
import { Testimonials } from "@/components/Testimonials";
import { CentreCards, Container, CtaBand, PageHero, SectionHead } from "@/components/ui";
import { contact, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Childcare Centres in Perth",
  description: "Explore Mirabilia childcare centres in Caversham, Byford, Citiplace (Perth CBD) and Champion Lakes. Open 6:30am to 6:30pm. Book a tour.",
};

export default function CentresPage() {
  return (
    <>
      <PageHero
        photo={photos.yardSlide}
        script="Our Centres"
        title="Four homes across Perth"
        intro="Each Mirabilia centre offers a safe, nurturing environment for your child’s growth. With unique programs and dedicated staff, every location provides exceptional care and learning opportunities."
      />

      <section>
        <Container className="grid gap-6 py-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl text-grape">Open {contact.hours}</p>
            <p className="text-ink-soft">Same hours at every centre</p>
          </div>
          <div>
            <a href={contact.phoneHref} className="font-display text-xl text-grape underline-offset-4 hover:underline">{contact.phone}</a>
            <p className="text-ink-soft">One number for all centres</p>
          </div>
          <div>
            <Link href="/book-a-tour" className="font-display text-xl text-grape underline-offset-4 hover:underline">Book a tour</Link>
            <p className="text-ink-soft">See the rooms and meet the team</p>
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-6 sm:pb-28">
        <Container>
          <CentreCards />
        </Container>
      </section>

      <section className="band relative overflow-hidden py-20 sm:py-28">
        <PaintBlob className="absolute right-6 top-8 hidden w-28 sm:block" />
        <Container>
          <SectionHead title="Spaces made for playing" lead="Sandpits, cubby houses, shady decks and calm indoor rooms, all designed to feel like a second home." />
          <div className="mt-10">
            <Gallery label="Mirabilia play spaces" photos={[photos.yardSandpit, photos.playground, photos.cavershamRoom, photos.byfordPergola]} />
          </div>
        </Container>
      </section>

      <Testimonials keys={["claire", "gigi", "shasta"]} />
      <CtaBand photo={photos.outdoorSandpit} />
    </>
  );
}
