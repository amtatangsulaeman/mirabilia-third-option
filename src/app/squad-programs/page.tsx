import type { Metadata } from "next";
import Link from "next/link";
import { Container, CtaStrip, FeatureSplit, PageHero, PhotoFrame, SectionHead, TabCard, type Tone } from "@/components/ui";
import { photos, programs, squadTopics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Squad Programs: All-Inclusive Enrichment",
  description: "Happy Feet Fitness, Planet Soccer, Yoganastics, Performing Arts, language classes and cooking lessons, plus weekly Program Officers. 100% included in your daily fees.",
};

const sessions: [string, string][] = [
  ["Happy Feet Fitness", "Energetic, imaginative movement and dance sessions that build coordination, rhythm, balance, and a joyful love of active play."],
  ["Planet Soccer", "Fun, non-competitive ball skills and teamwork games designed to develop gross-motor confidence, spatial awareness, and sportsmanship."],
  ["Yoganastics", "Mindful movement, stretching, breathing techniques, and emotional regulation skills that help children find calm, focus, and body awareness."],
  ["Performing Arts (Music, Drama & Visual Art)", "Led by our dedicated Performing Arts Teacher, children explore expressive storytelling, rhythm, instruments, dramatic play, and creative visual arts."],
  ["Language Classes", "Playful, interactive introductions to new languages and songs that spark cognitive flexibility, cultural curiosity, and respect for our diverse world."],
  ["Internal Cooking Lessons", "Hands-on culinary adventures where children measure, mix, taste, and learn practical nutrition and garden-to-plate skills alongside our educators."],
];
const tones: Tone[] = ["white", "sun", "clay-soft", "grape-soft", "white", "sun"];
const happyFeet = programs.find((p) => p.slug === "happy-feet")!;

export default function SquadProgramsPage() {
  return (
    <>
      <PageHero
        photo={photos.squadDance}
        script="Squad Programs"
        title="All-inclusive enrichment every week"
        intro="Every child deserves access to rich, inspiring specialist experiences, which is why our signature SQUAD Enrichment Program is 100% included in your daily fees, with no hidden extras or add-on costs."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <FeatureSplit photo={happyFeet.photos[0]} eyebrow="The Mirabilia SQUAD Program" title="Specialist partners & educator-led studios">
            <p>Working alongside our emergent curriculum and CIRCLE core values, our SQUAD sessions nurture physical confidence, creativity, cultural awareness, and lifelong curiosity through a weekly rotation of specialist partners and educator-led studios.</p>
          </FeatureSplit>
          <ul className="mt-14 grid items-start gap-x-7 md:grid-cols-2 lg:grid-cols-3">
            {sessions.map(([t, d], i) => (
              <TabCard as="li" key={t} tab="Squad session" tone={tones[i]}>
                <h3 className="font-display text-[24px] leading-tight text-grape">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </ul>
        </Container>
      </section>

      <section className="band band-sun py-20 sm:py-28">
        <Container>
          <SectionHead
            eyebrow="Our weekly Program Officers"
            title="Championing every area of growth"
            lead="We go beyond a “one-size-fits-all” approach by empowering passionate educators to serve as dedicated Program Officers. Every week, our officers weave specialised, purposeful experiences into each room’s program."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {squadTopics.map((t) => (
              <li key={t.slug}>
                <Link href={`/squad-programs/${t.slug}`} className="group block h-full overflow-hidden rounded-[22px] bg-clay-ink text-white transition-transform hover:-translate-y-1 motion-reduce:transition-none">
                  <PhotoFrame photo={t.photo} className="aspect-[4/3] rounded-none" sizes="(min-width: 1024px) 25vw, 50vw" />
                  <span className="block px-5 pb-5 pt-4">
                    <span className="block text-[16px] font-bold uppercase tracking-wide">{t.name}</span>
                    <span className="mt-1 block text-[13px] font-semibold text-sun">{t.officer}</span>
                    <span className="mt-2 block text-[14px] leading-snug text-white/90">{t.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <CtaStrip text="Squad Programs are part of every day at all four Mirabilia centres, with no extra cost." cta={{ label: "Book a Tour", href: "/book-a-tour" }} />
        </Container>
      </section>
    </>
  );
}
