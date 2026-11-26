import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Container, PageHero, SectionTitle, TabCard, type Tone } from "@/components/ui";
import { centres, contact, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Tour",
  description: "Book a tour at one of our Mirabilia childcare centres in Perth: Caversham, Byford, Citiplace or Champion Lakes.",
};

const steps: [string, string, Tone][] = [
  ["Look around", "Walk through the rooms, outdoor spaces and kitchen at your own pace.", "grape-soft"],
  ["Meet the team", "Say hello to the Centre Director and the educators in your child’s room.", "sun"],
  ["Ask anything", "Routines, meals, fees, CCS, settling in. No question is too small.", "white"],
  ["No pressure", "Take your time to decide. We’re happy to answer follow-up questions.", "clay-soft"],
];

export default function BookTourPage() {
  return (
    <>
      <PageHero
        photo={photos.outdoorSandpit}
        script="Book a tour!"
        title="Come and see the rooms"
        intro="Book a tour at one of our Mirabilia centres in Perth. Come and see the rooms, meet the educators and bring your little one along."
      >
        <Link href="#tour" className="btn btn-sun">Pick a centre and a time</Link>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionTitle>What happens on a tour?</SectionTitle>
          <div className="mt-4 grid items-start gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d, tone], i) => (
              <TabCard key={t} as="article" tab={`0${i + 1}`} tone={tone}>
                <h3 className="font-display text-xl font-black leading-tight">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="tour" className="scroll-mt-6 band py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle>Pick a centre and a time</SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Send us your details and we’ll call you to find a time that suits. Prefer to talk now? Give us a ring on{" "}
              <a href={contact.phoneHref} className="font-semibold text-grape underline">{contact.phone}</a>.
            </p>
            <ul className="mt-8 space-y-2">
              {centres.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="group block rounded-[10px] bg-paper px-5 py-3 hover:bg-grape-soft">
                    <span className="block font-display font-extrabold group-hover:text-grape">Mirabilia {c.name}</span>
                    <span className="block text-[15px] text-ink-soft">{c.street}, {c.suburb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start tab-card card-white p-6 sm:p-8">
            <EnquiryForm variant="tour" />
          </div>
        </Container>
      </section>
    </>
  );
}
