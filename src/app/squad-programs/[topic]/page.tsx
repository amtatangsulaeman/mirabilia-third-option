import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, CtaStrip, PageHero, SubTitle } from "@/components/ui";
import { getSquadTopic, squadTopics } from "@/lib/content";

// SEO-only pages: linked from /squad-programs, kept out of the main menu (client brief).
export function generateStaticParams() {
  return squadTopics.map(({ slug }) => ({ topic: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const t = getSquadTopic((await params).topic);
  if (!t) return {};
  return { title: `${t.name} | Squad Programs`, description: `${t.name} at Mirabilia Early Learning: ${t.summary}`.slice(0, 158) };
}

export default async function SquadTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const t = getSquadTopic((await params).topic);
  if (!t) notFound();
  return (
    <>
      <PageHero photo={t.photo} script="Squad Programs" title={t.name} intro={t.summary} />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <SubTitle>{t.officer}</SubTitle>
            <div className="prose-mira mt-5 text-lg leading-relaxed text-ink">
              {t.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link href="/squad-programs" className="btn btn-white mt-8">
              See all Squad Programs
            </Link>
          </div>
          <div className="mt-16">
            <CtaStrip text="Included in your daily fees at every Mirabilia centre." cta={{ label: "Book a Tour", href: "/book-a-tour" }} />
          </div>
        </Container>
      </section>
    </>
  );
}
