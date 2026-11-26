import type { Metadata } from "next";
import { Container, CtaStrip, FeatureSplit, PageHero, SectionHead, TabCard } from "@/components/ui";
import { newPhotos, photos, storypark } from "@/lib/content";

export const metadata: Metadata = {
  title: "A Day at Mirabilia: Daily Rhythm & Mealtimes",
  description: "A predictable yet flexible daily rhythm, chef-prepared family-style meals, and Storypark updates from your child’s day at Mirabilia Early Learning.",
};

const rhythm: [string, [string, string][]][] = [
  ["Morning arrival & warm welcomes", [
    ["Settling in", "Educators greet every child and family by name at the door, connecting with you about your child’s morning, sleep, and home news."],
    ["Self-directed discovery", "Children transition gently into calm, inviting indoor learning zones: building with blocks, exploring sensory trays, sharing books, or continuing yesterday’s emergent inquiry projects."],
  ]],
  ["Morning gathering & Acknowledgement of Country", [
    ["Coming together", "Rooms gather for a joyful, age-appropriate morning yarning circle featuring our daily Acknowledgement of Country, songs, storytelling, and intentional conversations around our monthly CIRCLE character trait."],
    ["Progressive morning tea", "Children wash their hands and enjoy a nutritious, freshly prepared morning tea together, practising self-help skills, social conversation, and healthy eating habits."],
  ]],
  ["Uninterrupted play, outdoor exploration & intentional learning", [
    ["Indoor–outdoor flow", "Weather permitting, children move freely between indoor studios and nature-rich outdoor play spaces: digging, climbing, gardening, balancing, and collaborating with friends."],
    ["Emergent small-group projects", "Guided by children’s real-time interests, educators scaffold hands-on literacy, numeracy, STEM, physical literacy, and creative arts experiences, while Nursery babies follow their own individual sleep, bottle, and sensory play rhythms."],
  ]],
  ["Nourishing lunch & mindful rest", [
    ["Shared family-style lunch", "Educators sit alongside children during wholesome, chef-prepared lunches, modelling gratitude, conversation, and respect for individual appetites and dietary needs."],
    ["Rest, sleep & quiet recharge", "Following lunch, younger children settle into peaceful, monitored sleep rooms with familiar comfort items, while older children enjoy quiet rest, mindfulness, yoga, or calm independent reading."],
  ]],
  ["Afternoon adventures & calm farewells", [
    ["Afternoon tea & re-engagement", "After waking and enjoying a healthy afternoon snack, children dive back into open-ended play, music, construction, or outdoor games."],
    ["Partnering at pick-up", "As families arrive, educators share warm verbal handovers alongside secure daily updates, celebrating the friendships, discoveries, and small acts of kindness that shaped your child’s day."],
  ]],
];

const meals: [string, string][] = [
  ["Fresh, balanced meals made with care", "Our seasonal menus are crafted in alignment with the Australian Dietary Guidelines and Get Up & Grow nutrition standards. Colourful fresh fruit and vegetables, whole grains, lean proteins, and nourishing snacks, without added sugars or unnecessary processed ingredients."],
  ["Family-style dining & self-help skills", "Educators sit alongside children during meals, modelling table manners, gratitude, and relaxed conversation. Children are gently encouraged to serve themselves, pour their own water, and listen to their body’s hunger and fullness cues."],
  ["Strict allergy & dietary safety", "All Mirabilia centres operate as allergy-aware environments with rigorous colour-coded meal protocols, documented medical management plans, and continuous educator training in anaphylaxis and food-safety management. We gladly cater to medical allergies, intolerances, and cultural or religious dietary requirements."],
  ["Seed-to-plate sustainability", "Through our outdoor veggie gardens and sustainability experiences, children help plant, water, and harvest herbs and produce, discovering where real food comes from and developing genuine pride in caring for our environment."],
];

export default function DayPage() {
  return (
    <>
      <PageHero
        photo={photos.snackTime}
        script="A Day at Mirabilia"
        title="A gentle, responsive rhythm"
        intro="We follow a predictable yet flexible daily rhythm rather than a rigid timetable. A familiar flow helps children feel emotionally secure and confident, while leaving plenty of unhurried space for deep play, individual sleep and feeding cues, and spontaneous curiosity."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <ol className="space-y-6">
            {rhythm.map(([title, items], i) => (
              <li key={title} className="tab-card card-white grid gap-6 p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                <div className="flex items-start gap-4">
                  <span className="blob-2 grid h-12 w-12 shrink-0 place-items-center bg-sun font-display text-xl text-grape-deep" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h2 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-tight text-grape">{title}</h2>
                </div>
                <ul className="space-y-4">
                  {items.map(([t, d]) => (
                    <li key={t} className="leading-relaxed">
                      <strong className="text-clay-ink">{t}:</strong> {d}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="tab-card card-grape-soft mt-10 p-7 sm:p-9">
            <span className="tab text-[18px]">A note for Nursery families</span>
            <p className="text-lg leading-relaxed">
              For our youngest learners (0–2 years), your baby’s unique home routine always comes first. Feeds, bottles, cuddles, and sleeps happen whenever your child needs them, supported by dedicated primary educators.
            </p>
          </div>
        </Container>
      </section>

      <section id="mealtime" className="band band-sun scroll-mt-32 py-20 sm:py-28">
        <Container>
          <FeatureSplit photo={newPhotos.waterPouring} eyebrow="Mealtime" title="Nourishing growing bodies & minds">
            <p>At Mirabilia, mealtimes are about far more than healthy food. They are joyful moments of connection, independence, and belonging. Guided by our CIRCLE values, we turn every meal into a warm, unhurried social experience that builds positive lifelong relationships with food.</p>
          </FeatureSplit>
          <div className="mt-10 grid items-start gap-x-7 md:grid-cols-2">
            {meals.map(([t, d]) => (
              <TabCard key={t} as="article" tab="Mealtime" tone="white">
                <h3 className="font-display text-[24px] leading-tight text-grape">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="storypark" className="scroll-mt-32 py-20 sm:py-28">
        <Container>
          <SectionHead eyebrow="Storypark" title="Stay connected with Storypark" lead={storypark} />
          <div className="mt-10">
            <CtaStrip text="Come and see a day at Mirabilia for yourself." cta={{ label: "Book a Tour", href: "/book-a-tour" }} />
          </div>
        </Container>
      </section>
    </>
  );
}
