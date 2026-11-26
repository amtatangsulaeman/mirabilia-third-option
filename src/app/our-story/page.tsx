import type { Metadata } from "next";
import { Container, CtaStrip, LeaderCard, PageHero, SectionHead } from "@/components/ui";
import { leadership, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story: Leadership Team",
  description: "Meet the people behind Mirabilia: our Senior Management Team, Centre Managers and Shared Services Team.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        photo={photos.philosophyGarden}
        script="Our Story"
        title="The people behind our purpose"
        intro="Behind every Mirabilia centre is a dedicated leadership team who bring experience, vision and heart to everything we do. Together, they guide our philosophy, support our educators and make sure every family receives the exceptional care and education we’re known for."
      />

      {leadership.map((g, i) => (
        <section key={g.key} className={`py-16 sm:py-20 ${i % 2 ? "band" : ""}`}>
          <Container>
            <SectionHead title={g.title} lead={g.text} />
            <div className="mt-4 grid items-start gap-x-7 sm:grid-cols-2 lg:grid-cols-3">
              {g.people.map((p) => (
                <LeaderCard key={p.name} name={p.name} role={p.role} photo={p.photo} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="py-16 sm:py-20">
        <Container>
          <CtaStrip text="Want to be part of the team behind Mirabilia?" cta={{ label: "View Careers", href: "/careers" }} />
        </Container>
      </section>
    </>
  );
}
