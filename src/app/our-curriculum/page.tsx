import type { Metadata } from "next";
import Link from "next/link";
import { Container, CtaStrip, FeatureSplit, PageHero, SectionHead, TabCard } from "@/components/ui";
import { newPhotos, photos, type Photo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learning Journeys: Nursery, Toddlers & Kindergarten",
  description: "Growing heart, mind and character. Mirabilia’s EYLF V2.0 program for Nursery (0–2), Toddlers (2–3) and Kindergarten (3–5), with incursions, excursions and character building.",
};

const stages: { id: string; age: string; title: string; photo: Photo; text: string; focus: string }[] = [
  {
    id: "nursery",
    age: "Nursery · 0–2 years",
    title: "Nurturing trust, wonder & secure beginnings",
    photo: photos.musicShaker,
    text: "Our Nursery is a calm, homelike sanctuary where babies and young toddlers feel deeply safe, cherished, and unhurried. Guided by primary caregiving principles and individual home sleep and feeding routines, our educators build warm, trusting bonds that form the foundation for early brain development. Through gentle, respectful care routines, sensory exploration, music, tummy time, and responsive “serve-and-return” interactions, we nurture your baby’s curiosity, early communication, and physical confidence at their own pace.",
    focus: "Secure attachment, sensory play, early language, gross-motor milestones, and gentle, consent-led care routines.",
  },
  {
    id: "toddlers",
    age: "Toddlers · 2–3 years",
    title: "Growing independence, language & big emotions",
    photo: newPhotos.waterPouring,
    text: "Bursting with energy and discovery, our Toddler program channels your child’s growing sense of “I can do it myself!” into purposeful, hands-on play. As toddlers test boundaries, build friendships, and find their voice, our educators scaffold emerging language, turn-taking, and emotional regulation through stories, creative arts, outdoor nature play, and collaborative projects. Anchored in our CIRCLE values, children learn to make meaningful choices, care for one another, and build confidence in a safe, supportive space.",
    focus: "Growing independence, social connection, expressive language, emotional coaching, and active physical play.",
  },
  {
    id: "kindergarten",
    age: "Kindergarten · 3–5 years",
    title: "Curious thinkers, kind hearts & school readiness",
    photo: newPhotos.tablePlay,
    text: "Led by degree-qualified Early Childhood Teachers, our Kindergarten program prepares children not just for the first day of school, but for a lifelong love of learning. Through deep, child-led inquiry projects, hands-on STEM, early literacy and numeracy, physical literacy, and our 12-Month Character Building Program, children develop critical thinking, resilience, and leadership. We foster a strong sense of active citizenship and cultural pride, empowering confident, empathetic learners ready to take on primary school and the wider world.",
    focus: "Child-led inquiry, literacy and numeracy foundations, STEM, character leadership, protective behaviours, and holistic transition to school.",
  },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        photo={photos.curriculumOutdoor}
        script="Learning Journeys"
        title="Growing heart, mind & character"
        intro="At Mirabilia Early Learning, we believe early childhood is the foundation for nurturing not just bright minds, but also kind, resilient, and capable hearts."
      >
        {stages.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="btn btn-white">
            {s.age.split(" · ")[0]}
          </a>
        ))}
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="prose-mira max-w-4xl text-lg leading-relaxed text-ink sm:text-xl">
            <p>
              Guided by the <strong>Early Years Learning Framework (EYLF V2.0)</strong> and anchored in our <strong>CIRCLE</strong> core values (<em>Caring, Integrity, Respect, Collaboration, Learn, Empower</em>), our program is a dynamic blend of a responsive <strong>Emergent Curriculum</strong> and our intentional <strong>12-Month Character Building Program</strong>. Rather than teaching skills or values in isolation, we weave literacy, STEM, culture, and active citizenship naturally into your child’s daily play and discovery.
            </p>
            <p>
              Read more about the thinking behind it in <Link href="/our-philosophy" className="font-semibold text-grape underline">our philosophy</Link>.
            </p>
          </div>
        </Container>
      </section>

      <section className="band py-20 sm:py-28">
        <Container>
          <SectionHead eyebrow="Our learning environments" title="Tailored for every stage" />
          <div className="mt-14 space-y-20 sm:space-y-24">
            {stages.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-36">
                <FeatureSplit photo={s.photo} eyebrow={s.age} title={s.title} flip={i % 2 === 1}>
                  <p>{s.text}</p>
                  <p>
                    <strong className="text-clay-ink">Program focus:</strong> {s.focus}
                  </p>
                </FeatureSplit>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-start gap-x-7 md:grid-cols-2">
          <TabCard as="article" tab="Calendar of Events" tone="sun">
            <h3 className="font-display text-[26px] leading-tight text-grape">Active citizenship &amp; living in Australia</h3>
            <p className="mt-2 leading-relaxed">Our Calendar of Events is far more than a list of special days. It is how we nurture active citizenship and help children understand what it means to belong to a caring, connected Australian community.</p>
            <ul className="mt-4 space-y-2 leading-relaxed">
              <li><strong>Honouring First Nations heritage:</strong> daily Acknowledgement of Country, Dreaming stories, NAIDOC Week, and National Reconciliation Week.</li>
              <li><strong>Embracing Australian life &amp; traditions:</strong> ANZAC Day, Book Week, Harmony Week, and local community initiatives.</li>
              <li><strong>Celebrating multicultural diversity:</strong> family traditions, festivals, and languages from around the world.</li>
            </ul>
          </TabCard>
          <TabCard as="article" tab="Character building" tone="grape-soft">
            <h3 className="font-display text-[26px] leading-tight text-grape">How we interweave character across the year</h3>
            <p className="mt-2 leading-relaxed">
              As children follow their curiosity and take part in community life, our educators intentionally weave our CIRCLE values and EYLF learning outcomes through <strong>12 monthly character focuses</strong>, helping children practise kindness, courage, honesty, and responsibility every single day.
            </p>
            {/* TODO: character-building diagram from the client deck */}
            <div className="mt-5 grid min-h-[160px] place-items-center rounded-[22px] border-2 border-dashed border-grape/30 bg-white/60 px-4 text-center text-[14px] font-semibold text-ink-soft">
              Diagram coming soon: 12-month character building wheel
            </div>
          </TabCard>
        </Container>
      </section>

      <section className="band band-sun py-20 sm:py-28">
        <Container>
          <SectionHead
            eyebrow="Incursions & Excursions"
            title="Bringing the community in & exploring beyond our doors"
            lead="Learning comes alive when children connect what they discover in our rooms with the wider world around them."
          />
          <div className="mt-4 grid items-start gap-x-7 md:grid-cols-2">
            <TabCard as="article" tab="Monthly incursions" tone="white">
              <h3 className="font-display text-[24px] leading-tight text-grape">Monthly incursions, with families warmly invited</h3>
              <p className="mt-2 leading-relaxed">Every month, we welcome inspiring educators, artists, wildlife handlers, storytellers, and community helpers into our centres for hands-on learning experiences. Best of all, we warmly invite all Mirabilia families to come along and join in, turning each monthly incursion into a shared celebration of curiosity, connection, and learning side by side with your child.</p>
            </TabCard>
            <TabCard as="article" tab="Local excursions" tone="white">
              <h3 className="font-display text-[24px] leading-tight text-grape">Local excursions &amp; community exploration</h3>
              <p className="mt-2 leading-relaxed">When children’s interests lead beyond our gates, we venture out on carefully planned, risk-assessed excursions across our local Western Australian neighbourhoods and cultural landmarks. Whether exploring nearby parks, libraries, museums, or community spaces, children practise road safety, active citizenship, and genuine belonging in their community.</p>
            </TabCard>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <ul className="grid gap-5 md:grid-cols-3">
            {[
              ["/squad-programs", "Squad Programs", "All-inclusive enrichment every week"],
              ["/a-day-at-mirabilia", "A Day at Mirabilia", "Daily rhythm & mealtimes"],
              ["/our-spaces", "Learning Spaces", "Designed as the “third teacher”"],
            ].map(([href, meta, title]) => (
              <li key={href}>
                <Link href={href} className="group block h-full rounded-[24px] bg-grape px-6 py-6 text-white transition-transform hover:-translate-y-1 motion-reduce:transition-none">
                  <span className="block text-[13px] font-bold uppercase tracking-wide text-sun">{meta}</span>
                  <span className="mt-2 block font-display text-2xl leading-tight">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <CtaStrip text="See our learning journeys in action. Come and visit one of our centres." cta={{ label: "Book a Tour", href: "/book-a-tour" }} />
          </div>
        </Container>
      </section>
    </>
  );
}
