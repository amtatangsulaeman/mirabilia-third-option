import type { Metadata } from "next";
import { Container, FeatureSplit, PageHero, SectionHead, TabCard, type Tone } from "@/components/ui";
import { newPhotos, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description: "Grounded in developmental research and the EYLF V2.0, Mirabilia blends an emergent curriculum with a 12-month character building program and our CIRCLE values.",
};

const circle: [string, string][] = [
  ["C", "Caring"],
  ["I", "Integrity"],
  ["R", "Respect"],
  ["C", "Collaboration"],
  ["L", "Learn"],
  ["E", "Empower"],
];
const emergent: [string, string, Tone][] = [
  ["Led by children’s curiosity", "Whether a group becomes fascinated by native wildlife, construction, or storytelling, we use their real-time interests as a launchpad for literacy, STEM, and social connection.", "white"],
  ["Partnering with families", "You are your child’s first and most important teacher. We work closely with you to understand your child’s home life, cultural background, and developing strengths, creating genuine continuity between home and Mirabilia.", "sun"],
  ["Extended with intent", "We take what children already know and love, thoughtfully scaffolding their play to achieve EYLF learning outcomes and bring our monthly character traits to life.", "clay-soft"],
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        photo={photos.philosophyGarden}
        script="Philosophy"
        title="Building the foundation for a lifetime"
        intro="90% of a child’s brain growth happens before age five. At Mirabilia, we don’t just care for your child. We nurture the foundational brain architecture they will rely on for the rest of their lives."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <FeatureSplit photo={newPhotos.homeCornerStory} eyebrow="The science behind our approach" title="Warm relationships, purposeful play">
            <p>
              Grounded in the research of pioneering developmental theorists like <strong>Erik Erikson</strong> and <strong>John Bowlby</strong>, we know that warm, responsive relationships and purposeful play during these crucial years wire the brain for emotional security, language, and critical thinking.
            </p>
            <p>
              We bring this science to life by cultivating not only bright minds, but also kind, resilient, and capable hearts. Guided by the <strong>Early Years Learning Framework (EYLF V2.0)</strong>, our program blends a responsive <strong>Emergent Curriculum</strong> with our intentional <strong>12-Month Character Building Program</strong>.
            </p>
            <p>Rather than teaching skills or values in isolation, we weave early literacy, STEM, culture, and our core CIRCLE values naturally into your child’s daily play and discovery.</p>
          </FeatureSplit>
        </Container>
      </section>

      <section className="band band-sun py-20 sm:py-28">
        <Container>
          <SectionHead eyebrow="Our CIRCLE values" title="The values woven through every day" />
          <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {circle.map(([l, w]) => (
              <li key={w} className="flex flex-col items-center rounded-[28px] bg-white px-4 py-7 text-center">
                <span className="blob-2 grid h-20 w-20 place-items-center bg-grape font-display text-4xl text-white" aria-hidden="true">
                  {l}
                </span>
                <h3 className="mt-4 font-display text-2xl text-grape">{w}</h3>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            eyebrow="The heart of our program"
            title="An emergent curriculum"
            lead="An emergent curriculum moves beyond rigid, pre-planned lesson charts. Instead, our educators observe, listen, and co-construct learning alongside your child so every experience feels meaningful and alive."
          />
          <div className="mt-4 grid items-start gap-x-7 md:grid-cols-3">
            {emergent.map(([t, d, tone]) => (
              <TabCard key={t} as="article" tab="Emergent curriculum" tone={tone}>
                <h3 className="font-display text-[24px] leading-tight text-grape">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
