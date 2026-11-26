import type { Metadata } from "next";
import { Container, CtaStrip, FeatureSplit, PageHero, PhotoFrame, SectionHead, TabCard, type Tone } from "@/components/ui";
import { centres, photos, type Photo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learning Spaces & Child Safety",
  description: "Indoor and outdoor spaces designed as the “third teacher”, and Mirabilia’s commitment to health and child safety under the NQS and the National Principles for Child Safe Organisations.",
};

const champion = centres.find((c) => c.slug === "champion-lakes")!;
const byford = centres.find((c) => c.slug === "byford")!;
const caversham = centres.find((c) => c.slug === "caversham")!;

// TODO: swap for photos of the Nursery, Toddler and Kindergarten rooms once the client sends them.
const spaces: [Photo, string][] = [
  [champion.gallery[0], "Nursery"],
  [byford.gallery[0], "Toddlers"],
  [caversham.gallery[1], "Kindergarten"],
  [photos.yardSandpit, "Outdoor areas"],
];

const health: [string, string][] = [
  ["Active supervision & safe design", "Open, unobstructed room layouts, rigorous daily safety checks, and attentive educator ratios ensure children are actively supervised across all play, rest, meal, and transition routines."],
  ["Vetted, child-safe educators", "Every team member undergoes comprehensive background screening (including current Working with Children Checks) and completes mandatory, ongoing child protection and child-safe training."],
  ["Strict digital & image privacy", "In line with national digital-safety reforms, personal mobile devices are strictly banned from all children’s learning spaces, and family consent controls govern every photo shared on secure platforms."],
  ["Empowering children’s voices & bodily autonomy", "From respectful nappy-change and toileting routines that protect dignity to teaching age-appropriate consent, boundaries, and protective behaviours, we empower children to know their voices matter and their bodies belong to them."],
  ["Transparent family partnership", "We maintain an open-door culture with clear, accessible feedback and complaints pathways so families always know how we keep children safe and how to raise any concern."],
];

const commitment: [string, string][] = [
  ["Leadership & culture of integrity", "Child safety guides every decision made by our Approved Provider, Centre Directors, and Educational Leaders. We maintain an open, accountable culture where safeguarding always comes first."],
  ["Empowering children’s voices & bodily autonomy", "We listen deeply to children and respect their right to say “yes” or “no.” Through gentle, narrated care routines and age-appropriate protective behaviours, we help children recognise their feelings, understand personal boundaries, and know how to seek help from trusted adults."],
  ["Partnering with families & communities", "You know your child best. We welcome your voice, share clear information about our safety practices, and actively involve families in shaping a safe, transparent centre community."],
  ["Cultural safety & inclusion for every child", "We celebrate diversity and create culturally safe environments where Aboriginal and Torres Strait Islander children, children from culturally and linguistically diverse (CALD) backgrounds, and children of all abilities feel proud of who they are and genuinely belong."],
  ["Vetted, supported & continuously trained educators", "Every member of the Mirabilia team undergoes thorough recruitment screening (including verified Working with Children Checks and reference checks) and participates in ongoing child-protection, mandatory-reporting, and trauma-informed training."],
  ["Safe physical & online spaces", "Clear sightlines, active supervision, and daily safety checks. Personal mobile phones and personal smart devices are strictly banned in all children’s learning spaces. Only secure, centre-owned devices are used for documentation, and your explicit consent governs how and where your child’s image is shared."],
  ["Clear, child-focused feedback & reporting pathways", "We take every concern seriously. Families, children, and educators have clear, accessible, and confidential ways to raise questions or report concerns, with prompt action and full compliance with Western Australian reporting obligations."],
];
const tones: Tone[] = ["white", "sun", "clay-soft", "grape-soft"];

export default function SpacesPage() {
  return (
    <>
      <PageHero
        photo={caversham.hero}
        script="Learning Spaces & Child Safety"
        title="Designed as the “third teacher”"
        intro="Our indoor and outdoor environments are thoughtfully designed to spark wonder, support independence, and invite safe exploration."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <FeatureSplit photo={photos.playground} eyebrow="Indoor & outdoor" title="Warm, homelike spaces that invite discovery">
            <p>Viewing the environment as the “third teacher,” we create warm, homelike spaces filled with natural materials, open-ended resources, and inviting nature-play areas that adapt to children’s evolving interests.</p>
            <p>Every room is intentionally laid out with clear sightlines and accessible learning zones, empowering children to take healthy, age-appropriate risks, build physical confidence, and connect deeply with the natural world.</p>
          </FeatureSplit>
          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {spaces.map(([p, label]) => (
              <li key={label}>
                <figure className="overflow-hidden rounded-[22px] bg-mist">
                  <PhotoFrame photo={p} className="aspect-[4/3] rounded-none" sizes="(min-width: 1024px) 25vw, 50vw" />
                  <figcaption className="px-5 py-4 text-[15px] font-bold uppercase tracking-wide text-grape">{label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="health-safety" className="band band-sun scroll-mt-32 py-20 sm:py-28">
        <Container>
          <SectionHead
            eyebrow="Commitment to Health & Safety"
            title="Our unwavering commitment to health & child safety"
            lead="Your child’s physical, emotional, and digital safety is the foundation of everything we do. Aligned with the National Quality Standard (Quality Area 2) and Australia’s strengthened National Principles for Child Safe Organisations, child safety at Mirabilia is never a tick-box exercise. It is embedded into our daily culture and CIRCLE values."
          />
          <ol className="mt-4 grid items-start gap-x-7 md:grid-cols-2 lg:grid-cols-3">
            {health.map(([t, d]) => (
              <TabCard as="li" key={t} tab="Health & safety" tone="white">
                <h3 className="font-display text-[24px] leading-tight text-grape">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </ol>
        </Container>
      </section>

      <section id="child-safe" className="scroll-mt-32 py-20 sm:py-28">
        <Container>
          <SectionHead
            eyebrow="Our Child Safe Commitment"
            title="A living promise we keep together"
            lead="At Mirabilia, every child has the right to feel safe, respected, heard, and valued, every single day. We uphold a zero-tolerance stance toward child abuse, harm, or neglect, and we actively embed the 10 National Principles for Child Safe Organisations and the National Quality Framework (NQF) into our daily culture, leadership, and CIRCLE values."
          />
          <ul className="mt-4 grid items-start gap-x-7 md:grid-cols-2">
            {commitment.map(([t, d], i) => (
              <TabCard as="li" key={t} tab="Child safe" tone={tones[i % tones.length]}>
                <h3 className="font-display text-[24px] leading-tight text-grape">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </ul>
          <div className="mt-16">
            <CtaStrip
              text={<><strong>Have a question or want to speak with us?</strong> Your Centre Director and Nominated Supervisor are always available for a confidential chat, or you can reach out directly to our Approved Provider and leadership team at any time.</>}
              cta={{ label: "Contact Us", href: "/contact" }}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
