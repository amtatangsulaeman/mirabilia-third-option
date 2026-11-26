import Link from "next/link";
import { getProgram, programs } from "@/lib/content";
import { Gallery } from "./Gallery";
import { PaperPlane } from "./Illustrations";
import { BlobPhoto, Container, CourseCard, CtaBand, PageHero, SectionTitle, TabCard, type Tone } from "./ui";

const tones: Tone[] = ["grape-soft", "sun", "white", "clay-soft"];

export function ProgramPage({ slug }: { slug: string }) {
  const p = getProgram(slug);
  const others = programs.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHero photo={p.photos[0]} script={p.name} title={p.tagline}>
        <Link href="/enquire-now" className="btn btn-sun">Enquire about {p.name}</Link>
        <Link href="/squad-programs" className="btn btn-white">All Squad Programs</Link>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <BlobPhoto photo={p.photos[1]} className="mx-auto aspect-[5/4] w-full max-w-[600px]" />
            <PaperPlane className="anim-drift absolute -top-12 right-0 w-24 sm:-right-3 sm:w-28" />
          </div>
          <div className="prose-mira text-lg leading-relaxed">
            <p className="font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-bold leading-snug">{p.intro[0]}</p>
            {p.intro.slice(1).map((t) => (
              <p key={t} className="text-ink-soft">{t}</p>
            ))}
          </div>
        </Container>
        <Container className="mt-6 grid items-start gap-x-6 md:grid-cols-3">
          {p.blocks.map(([h, t], i) => (
            <TabCard key={h} as="article" tab={`0${i + 1}`} tone={tones[i]}>
              <h2 className="font-display text-2xl font-black leading-tight">{h}</h2>
              <p className="mt-3 leading-relaxed">{t}</p>
            </TabCard>
          ))}
        </Container>
      </section>

      <section className="band band-sun py-20 sm:py-28">
        <Container>
          <SectionTitle className="max-w-3xl">Why families love {p.name}</SectionTitle>
          <div className="mt-4 grid items-start gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.why.map(([t, d], i) => (
              <TabCard key={t} as="article" tab={`0${i + 1}`} tone={tones[(i + 1) % tones.length]}>
                <h3 className="font-display text-xl font-black leading-tight">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionTitle>Moments from {p.name}</SectionTitle>
          <div className="mt-10">
            <Gallery photos={p.gallery} label={`Photos from ${p.name}`} />
          </div>
        </Container>
      </section>

      <CtaBand
        photo={p.gallery[0]}
        title="Join us!"
        text={p.join}
        primary={{ label: "Enquire now", href: "/enquire-now" }}
        secondary={{ label: "Book a tour", href: "/book-a-tour" }}
      />

      <section className="band py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-black">More Squad Programs</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <CourseCard program={o} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
