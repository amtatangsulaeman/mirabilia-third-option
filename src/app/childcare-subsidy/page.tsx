import type { Metadata } from "next";
import { Container, CtaStrip, LeafList, PageHero, SectionHead, TabCard, type Tone } from "@/components/ui";
import { SA_URL, contact, newPhotos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Child Care Subsidy (CCS) & How to Claim",
  description: "Everything about the Child Care Subsidy in one place: eligibility, how much you can receive, the activity test, and how to claim CCS through myGov.",
};

const who = [
  "Care for a child 13 or younger who isn’t attending secondary school, unless an exemption applies",
  "Use an approved child care service, like Mirabilia",
  "Be responsible for paying the child care fees",
  "Meet residency and immunisation requirements",
];
const activity = [
  "Paid work, including self-employment or paid and unpaid parental leave",
  "Unpaid work in the family business",
  "Training to improve work skills or job prospects",
  "An approved course of education or study",
  "Volunteering",
  "Unpaid work experience or internships",
  "Actively setting up a business",
  "Actively looking for work",
];
const receive: [string, string, Tone][] = [
  ["Combined family income", "Both partners’ combined income sets the percentage of the fee that is subsidised, up to the government’s hourly rate cap. The rate gradually decreases as income goes up.", "white"],
  ["Activity level", "An activity test sets how many hours of subsidised care you can access each fortnight. In two-parent families, the parent with fewer activity hours determines the hours.", "white"],
  ["Type of care", "The subsidy is based on the type of approved care you use, such as Centre Based Day Care, each with its own hourly rate cap.", "white"],
];
const claim: [string, string][] = [
  ["Apply online", "Apply through your Services Australia account via myGov."],
  ["Check eligibility", "Use the Services Australia eligibility tool if you’re unsure what you can receive."],
  ["Tell us", "Let us know when you enrol so we can link your CCS to your booking."],
];

export default function SubsidyPage() {
  return (
    <>
      <PageHero
        photo={newPhotos.educatorPuzzle}
        script="Child Care Subsidy (CCS)"
        title="Quality care, made more accessible"
        intro="The Australian Government’s Child Care Subsidy helps families with the cost of early learning, and our team is here to guide you through it. From understanding your eligibility to setting up your claim through myGov, we’ll help you get the support you’re entitled to, without the stress."
      >
        <a href="#claim" className="btn btn-sun">How to claim</a>
        <a href={SA_URL} className="btn btn-white" target="_blank" rel="noopener">Estimate your subsidy</a>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Eligibility" title="Who can get the CCS?" lead="The CCS is paid directly to us and comes off the fees you pay. To get it, you must:" />
          <div className="tab-card card-grape-soft p-7 text-lg sm:p-9">
            <LeafList items={who} />
          </div>
        </Container>
      </section>

      <section className="band band-sun py-20 sm:py-28">
        <Container>
          <SectionHead eyebrow="Your entitlement" title="How much can a family receive?" lead="Your subsidy depends on three things." />
          <div className="mt-4 grid items-start gap-x-7 md:grid-cols-3">
            {receive.map(([t, d, tone]) => (
              <TabCard key={t} as="article" tab="Your entitlement" tone={tone}>
                <h3 className="font-display text-[24px] leading-tight text-grape">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </div>
          <p className="mt-10 text-lg text-ink">
            <strong>Extra support</strong> is available for some families, such as grandparents and families experiencing temporary financial hardship.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow="Activity test"
            title="What counts as activity?"
            lead="A broad range of activities count, and they can be combined to reach the maximum number of subsidised hours. Travel time between care and your activity counts too."
          />
          <div className="tab-card card-white p-7 text-lg sm:p-9">
            <LeafList items={activity} />
          </div>
        </Container>
      </section>

      <section id="claim" className="band scroll-mt-32 py-20 sm:py-28">
        <Container>
          <SectionHead eyebrow="How to claim" title="Claiming your CCS in three steps" />
          <ol className="mt-4 grid items-start gap-x-7 md:grid-cols-3">
            {claim.map(([t, d], i) => (
              <TabCard key={t} as="li" tab={`Step ${i + 1}`} tone={(["white", "sun", "clay-soft"] as Tone[])[i]}>
                <h3 className="font-display text-[24px] leading-tight text-grape">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </ol>
          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-ink">
            Subsidy rates and hourly caps are set by the government and change each financial year. For current figures, use the{" "}
            <a href={SA_URL} target="_blank" rel="noopener" className="font-semibold text-grape underline">Services Australia estimator</a>. Having trouble with your CCS? Call Centrelink on{" "}
            <a href="tel:136150" className="font-semibold text-grape underline">136 150</a>, or ask our team on{" "}
            <a href={contact.phoneHref} className="font-semibold text-grape underline">{contact.phone}</a>.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <CtaStrip text="Speak with our team and we’ll help you through fees and CCS." />
        </Container>
      </section>
    </>
  );
}
