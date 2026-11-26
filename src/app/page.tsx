import type { Metadata } from "next";
import Link from "next/link";
import { StickyNote, Sunburst } from "@/components/Illustrations";
import { Testimonials } from "@/components/Testimonials";
import { Container, FadedBg, FeatureSplit, PageHero, PhotoFrame, SectionHead, TabCard, type Tone } from "@/components/ui";
import { centres, newPhotos, photos, type Photo } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Mirabilia | Early Learning Centre & Kindergarten in Perth" },
  description: "Explore Mirabilia, Perth’s trusted early learning centre and kindergarten, where innovative education meets a caring, homelike environment. Book a tour!",
};

// Four pillars. Their logos come from the parent handbook (still to be sent), so a coloured badge stands in.
const pillars: { prefix: string; word: string; tone: Tone; badge: string; text: string }[] = [
  { prefix: "A Place to", word: "Explore", tone: "sun", badge: "bg-sun text-grape-deep", text: "Opening up to new thoughts, knowledge and skills, as children learn alongside their peers and through intentional teaching. As they discover, investigate, imagine and create, children build a deeper understanding of the world around them." },
  { prefix: "A Place of", word: "Nurture", tone: "white", badge: "bg-grape text-white", text: "We help children grow into caring, responsible citizens by building trust, patience, responsibility, empathy and resilience from an early age. When their needs are met and their positive behaviours and talents are recognised, children flourish into confident, nurturing individuals." },
  { prefix: "A Place to", word: "Play", tone: "clay-soft", badge: "bg-clay-ink text-white", text: "We believe play is one of the most powerful ways children learn, and their right to play and to have a voice in their own lives is recognised by the United Nations Convention on the Rights of the Child. Through play, children bring their creativity to life, share their thoughts and build on what they know as they grow in every area of their development." },
  { prefix: "A Place to", word: "Learn and Share Learning", tone: "grape-soft", badge: "bg-grape-deep text-white", text: "Every day brings something new to discover, and at Mirabilia we encourage children to seek out fresh challenges as they gain new knowledge and skills. Each child also brings their own learning with them, which they share with their peers and educators as part of our centre community." },
];

const spaces: [Photo, string][] = [
  [photos.cavershamRoom, "Classrooms"],
  [newPhotos.homeCornerStory, "Homelike environments"],
  [photos.playground, "Outdoor & playground"],
  [newPhotos.educatorPuzzle, "Child safety"],
];

const journeys: { age: string; name: string; id: string; photo: Photo; text: string }[] = [
  { age: "0–2 years", name: "Nursery", id: "nursery", photo: photos.musicShaker, text: "A calm, homelike sanctuary where babies feel safe, cherished and unhurried, with warm bonds that form the foundation for early brain development." },
  { age: "2–3 years", name: "Toddlers", id: "toddlers", photo: newPhotos.waterPouring, text: "Channelling a growing sense of “I can do it myself!” into purposeful, hands-on play, language and friendship." },
  { age: "3–5 years", name: "Kindergarten", id: "kindergarten", photo: newPhotos.tablePlay, text: "Led by degree-qualified teachers: child-led inquiry, early literacy, numeracy and STEM, and a confident transition to school." },
];

const why: [string, string][] = [
  ["One fee, everything included", "Meals, nappies, sunscreen, incursions and excursions are all part of your daily fee."],
  ["Degree-qualified kindy teachers", "Our Kindergarten program is led by Early Childhood Teachers."],
  ["SQUAD enrichment every week", "Specialist sessions like Happy Feet, Planet Soccer and Yoganastics, at no extra cost."],
  ["Child safety, every day", "Vetted educators, active supervision and no personal phones in learning spaces."],
  ["Stay connected with Storypark", "Updates, photos and learning stories from your child’s day, wherever you are."],
  ["Four centres across Perth", "Caversham, Byford, Citiplace and Champion Lakes, each with its own warm community."],
];

export default function Home() {
  return (
    <>
      {/* Hero: the client's video loop is still being filmed, so the poster photo stands in. */}
      <PageHero
        size="lg"
        photo={newPhotos.outdoorDiscover}
        title="Growing tomorrow's leaders together"
        intro="A wonderful journey of discovery, friendship and growing confidence, from their very first day to their first day of school."
      >
        <Link href="/book-a-tour" className="btn btn-sun">Book a Tour</Link>
        <Link href="/centres" className="btn btn-white">Find Your Centre</Link>
      </PageHero>

      {/* Why we are different: four pillars */}
      <section className="relative isolate py-20 sm:py-28">
        <FadedBg photo={photos.philosophyGarden} />
        <Container>
          <SectionHead
            eyebrow="Why We Are Different"
            title="A place of wonder, discovery and limitless potential"
            lead="At Mirabilia, we believe early childhood is a time of wonder, discovery and limitless potential. Our approach brings together exceptional educators, thoughtfully designed spaces and a genuine partnership with families, so every child feels known, valued and inspired to thrive."
          />
          <ul className="mt-6 grid items-start gap-x-7 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <TabCard as="li" key={p.word} tab={p.prefix} tone={p.tone}>
                <span className={`blob-2 grid h-16 w-16 place-items-center font-display text-2xl ${p.badge}`} aria-hidden="true">
                  {p.word.charAt(0)}
                </span>
                <h3 className="mt-4 font-display text-[26px] leading-tight text-grape">{p.word}</h3>
                <p className="mt-2 leading-relaxed">{p.text}</p>
              </TabCard>
            ))}
          </ul>
        </Container>
      </section>

      {/* Physical learning spaces */}
      <section className="band py-20 sm:py-28">
        <Container>
          <FeatureSplit
            photo={centres.find((c) => c.slug === "citiplace")!.hero}
            eyebrow="Physical Learning Spaces"
            title="Spaces designed to spark curiosity"
            cta={{ label: "Explore Our Spaces", href: "/our-spaces" }}
          >
            <p>
              Our learning environments are carefully created to inspire exploration, creativity and connection. From light-filled indoor rooms to natural outdoor play spaces, every area invites children to discover, imagine and learn through play, all within a safe, secure and nurturing setting.
            </p>
          </FeatureSplit>
          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {spaces.map(([p, label]) => (
              <li key={label}>
                <figure className="overflow-hidden rounded-[22px] bg-white">
                  <PhotoFrame photo={p} className="aspect-[4/3] rounded-none" sizes="(min-width: 1024px) 25vw, 50vw" />
                  <figcaption className="px-5 py-4 text-[15px] font-bold uppercase tracking-wide text-grape">{label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Learning journeys + squad + day */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            eyebrow="Learning Programs & Experiences"
            title="Growing with your child, every step of the way"
            lead="From their very first days with us to the exciting transition to school, every child’s learning journey at Mirabilia is unique. Our educators nurture each stage of development with programs tailored to every age group, building confidence, independence and a lifelong love of learning along the way."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {journeys.map((j) => (
              <li key={j.name}>
                <Link href={`/our-curriculum#${j.id}`} className="group block h-full overflow-hidden rounded-[24px] bg-clay-ink text-white transition-transform hover:-translate-y-1 motion-reduce:transition-none">
                  <PhotoFrame photo={j.photo} className="aspect-[4/3] rounded-none" sizes="(min-width: 768px) 33vw, 100vw" />
                  <span className="block px-6 pb-6 pt-5">
                    <span className="inline-block rounded-full bg-sun px-3 py-1 text-[13px] font-bold text-grape-deep">{j.age}</span>
                    <span className="mt-3 block font-display text-3xl">{j.name}</span>
                    <span className="mt-2 block leading-relaxed text-white/90">{j.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid items-start gap-x-7 md:grid-cols-2">
            <Link href="/squad-programs" className="block rounded-[28px]">
              <TabCard tab="Squad Programs" tone="sun">
                <h3 className="font-display text-[26px] leading-tight text-grape">All-inclusive enrichment every week</h3>
                <p className="mt-2 leading-relaxed">Happy Feet Fitness, Planet Soccer, Yoganastics, Performing Arts, language classes and cooking lessons, 100% included in your daily fees.</p>
              </TabCard>
            </Link>
            <Link href="/a-day-at-mirabilia" className="block rounded-[28px]">
              <TabCard tab="A Day at Mirabilia" tone="grape-soft">
                <h3 className="font-display text-[26px] leading-tight text-grape">A gentle, responsive rhythm</h3>
                <p className="mt-2 leading-relaxed">A predictable yet flexible day, from warm welcomes and morning gatherings to family-style lunches, rest and calm farewells.</p>
              </TabCard>
            </Link>
          </div>
          <div className="mt-12">
            <Link href="/our-curriculum" className="btn btn-grape">View Our Curriculum &amp; Programs</Link>
          </div>
        </Container>
      </section>

      <div className="band">
        <Testimonials keys={["gigi", "denisa", "morwenna"]} title="Loved by our families" intro="Hear from the parents and carers who have made Mirabilia part of their child’s story." />
      </div>

      {/* Why families choose Mirabilia */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-40">
            <div className="flex items-end gap-4">
              <StickyNote className="w-20 shrink-0 sm:w-24" />
              <Sunburst className="w-14" />
            </div>
            <SectionHead title="Why families choose Mirabilia" lead="Exceptional care, without the extras. Here is what every family gets, at every one of our centres." />
            <PhotoFrame photo={newPhotos.homeCornerStory} className="mt-8 aspect-[4/3]" />
            <Link href="/book-a-tour" className="btn btn-sun mt-8">Book a Tour</Link>
          </div>
          <ol className="grid gap-x-7 sm:grid-cols-2">
            {why.map(([t, d], i) => (
              <TabCard as="li" key={t} tab={String(i + 1).padStart(2, "0") + " ·"} tone={(["white", "sun", "clay-soft", "grape-soft", "white", "sun"] as Tone[])[i]}>
                <h3 className="font-display text-[24px] leading-tight text-grape">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
