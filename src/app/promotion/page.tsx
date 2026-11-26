import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Sunburst } from "@/components/Illustrations";
import { Testimonials } from "@/components/Testimonials";
import { Container, FaqList, PageHero, PersonCard, SectionTitle, TabCard, type Tone } from "@/components/ui";
import { contact, offerActive, people, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Save 25% on Childcare, Limited Time Offer",
  description: "New families save 25% on childcare at Mirabilia in Perth, plus up to 4 free playdates for babies. Offer ends 31 December.",
};


const deals: [string, string, string, string, Tone][] = [
  ["25%", "off for 25 weeks", "Citiplace, Perth CBD", "Our city centre near Perth Station.", "grape-soft"],
  ["25%", "off for 1 month", "Caversham, Byford & Champion Lakes", "Our suburban centres, including the brand new Champion Lakes.", "sun"],
  ["4", "free playdates", "For babies 0 to 2", "Let your little one get to know the room and educators before they start.", "white"],
];

const reasons: [string, string, Tone][] = [
  ["Tailored learning", "Personalised programs that nurture your child’s curiosity and growth.", "grape-soft"],
  ["Qualified educators", "Caring, professional staff dedicated to your child’s development.", "sun"],
  ["Safe & stimulating", "Purpose-built spaces designed to inspire learning through play.", "white"],
  ["Community-focused", "We partner with families so every child feels supported and valued.", "clay-soft"],
];

const faq: [string, React.ReactNode][] = [
  ["Who is eligible for this offer?", "This discount is available to new families who enrol their child at any Mirabilia centre. We care for children from 6 weeks to 5 years old, helping them thrive before starting school."],
  [
    "How do I claim it?",
    <>
      Fill out the form below and our team will guide you through enrolment and apply your discount. You can also{" "}
      <Link href="/book-a-tour" className="font-medium text-grape underline">book a tour</Link> at any centre and mention the 25% offer. We’ll handle the rest.
    </>,
  ],
  ["Why are you offering this?", "We believe every child deserves the best start in life. Finding the right childcare can feel overwhelming, so this offer is our way of letting families experience Mirabilia while making care more affordable."],
  [
    "Can I combine it with the Child Care Subsidy?",
    <>
      Please ask our team on <a href={contact.phoneHref} className="font-medium text-grape underline">{contact.phone}</a> how the discount works alongside your{" "}
      <Link href="/ccs-information" className="font-medium text-grape underline">CCS</Link>.
    </>,
  ],
];

export default function PromotionPage() {
  // Offer switched off or expired (lib/content.ts offer): send visitors to the fees page instead.
  if (!offerActive()) redirect("/childcare-subsidy");
  return (
    <>
      <PageHero
        photo={photos.smilingBoy}
        script="Limited Time Only!"
        title="Save 25% on childcare"
        intro="A limited-time offer for new families at every Mirabilia centre, including our new Champion Lakes centre. Spaces are limited, so secure your child’s spot today!"
      >
        <Link href="#claim" className="btn btn-sun">Claim the offer</Link>
        <Link href="/book-a-tour" className="btn btn-white">Or book a tour first</Link>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionTitle>What’s the offer?</SectionTitle>
          <p className="mt-5 text-lg text-ink-soft">25% off childcare fees for all new enrolments. Offer ends 31 December.</p>
          <div className="mt-4 grid items-start gap-x-6 md:grid-cols-3">
            {deals.map(([big, small, h, d, tone]) => (
              <TabCard key={h} as="article" tab={h} tone={tone}>
                <p className="font-display text-6xl font-black leading-none text-grape">
                  {big} <span className="text-xl text-ink">{small}</span>
                </p>
                <p className="mt-4 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="band py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle>About the promotion</SectionTitle>
            <p className="mt-5 text-lg text-ink-soft">Everything you need to know before you enrol.</p>
          </div>
          <FaqList items={faq} />
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Sunburst className="anim-drift absolute right-6 top-8 hidden w-24 sm:block" />
        <Container>
          <SectionTitle className="max-w-3xl">Why is Mirabilia the right choice?</SectionTitle>
          <div className="mt-4 grid items-start gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([t, d, tone], i) => (
              <TabCard key={t} as="article" tab={`0${i + 1}`} tone={tone}>
                <h3 className="font-display text-xl font-black">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials keys={["gigi", "claire", "shasta", "denisa", "sudarmani", "morwenna"]} title="What our families are saying" />

      <section className="band band-sun py-20 sm:py-28">
        <Container>
          <SectionTitle>Meet the team</SectionTitle>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-soft">
            Our passionate educators are the heart of Mirabilia, creating a safe, inspiring space where every child thrives.
          </p>
          <div className="mt-6 grid items-start gap-x-6 sm:grid-cols-3">
            {[people.jaclyn, people.naomi, people.abbie].map((p, i) => (
              <div key={p.name}>
                <PersonCard person={p} tone={(["grape-soft", "sun", "clay-soft"] as Tone[])[i]} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="claim" className="scroll-mt-6 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle>Secure your child’s spot today!</SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Fill out the form and our team will contact you to guide you through enrolment and apply your 25% discount.
            </p>
          </div>
          <div className="tab-card card-white p-6 sm:p-8">
            <EnquiryForm variant="promo" />
          </div>
        </Container>
      </section>
    </>
  );
}
