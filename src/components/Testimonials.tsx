import { reviews, type Review, type ReviewKey } from "@/lib/content";
import { Sunburst } from "./Illustrations";
import { Container, SectionTitle, TabCard, type Tone } from "./ui";

const tones: Tone[] = ["white", "sun", "clay-soft", "grape-soft", "white", "sun"];

export function Testimonials({
  keys,
  title = "Hear from our families",
  intro = "A few words from happy parents about their experiences with us.",
}: {
  keys: ReviewKey[];
  title?: string;
  intro?: string;
}) {
  return (
    <section id="reviews" className="relative scroll-mt-6 overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Sunburst className="w-20 sm:w-24" />
          <SectionTitle className="mt-4">{title}</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">{intro}</p>
        </div>
        <ul className={`mt-6 grid items-start gap-x-8 sm:grid-cols-2 ${keys.length > 2 ? "lg:grid-cols-3" : ""}`}>
          {keys.map((k, i) => {
            const r: Review = reviews[k];
            return (
              <TabCard key={k} as="li" tab={`${r.name}, Parent`} tone={tones[i % tones.length]}>
                <blockquote className="text-[17px] leading-relaxed">“{r.text}”</blockquote>
              </TabCard>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
