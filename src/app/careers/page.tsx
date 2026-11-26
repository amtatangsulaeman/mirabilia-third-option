import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SectionHead, TabCard, type Tone } from "@/components/ui";
import { newPhotos } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Careers in Early Childhood Education | Mirabilia" },
  description: "Inspire the next generation. Grow your career with Mirabilia, a supportive early learning team in Perth with ongoing training and room to grow.",
};

/**
 * Recruitment platform embed (Redy job portal, still to be confirmed by the client).
 * Paste the embed URL here once known; until then the area shows a clear placeholder.
 */
const JOBS_EMBED = "";

const reasons: [string, string, Tone][] = [
  ["A culture that cares", "We believe great care starts with a great team. Our supportive, positive workplace culture is built on respect, collaboration and genuine care for one another, so you’ll feel welcomed, valued and part of something special from day one.", "white"],
  ["Grow with us", "Your development matters to us. Through ongoing training, mentoring and professional learning opportunities, we help you build your skills, reach your goals and take your career further.", "sun"],
  ["Purpose in every day", "Few careers are as rewarding as shaping a child’s earliest years. At Mirabilia, you’ll help children discover, play, learn and thrive, and watch the difference you make unfold every day.", "clay-soft"],
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        photo={newPhotos.tablePlay}
        script="Careers"
        title="Inspire the next generation. Grow your career with Mirabilia."
        intro="At Mirabilia, our educators are at the heart of everything we do. We’re always looking for passionate, caring people who share our belief that every child deserves an extraordinary start in life. Join a team where your work is valued, your growth is supported and every day makes a difference."
      >
        <a href="#roles" className="btn btn-sun">View open roles</a>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead eyebrow="Why work with us" title="A place to grow, with purpose" />
          <div className="mt-4 grid items-start gap-x-7 md:grid-cols-3">
            {reasons.map(([t, d, tone]) => (
              <TabCard key={t} as="article" tab="Why work with us" tone={tone}>
                <h3 className="font-display text-[24px] leading-tight text-grape">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </TabCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="roles" className="band band-sun scroll-mt-32 py-20 sm:py-28">
        <Container>
          <SectionHead eyebrow="Open roles" title="Current opportunities" />
          <div className="mt-10">
            {JOBS_EMBED ? (
              <iframe src={JOBS_EMBED} title="Mirabilia job listings" className="min-h-[640px] w-full rounded-[28px] border-0 bg-white" loading="lazy" />
            ) : (
              <div className="grid min-h-[220px] place-items-center rounded-[28px] border-2 border-dashed border-grape/40 bg-white/70 px-6 text-center">
                <p>
                  <strong className="block font-display text-2xl text-grape">Job listings</strong>
                  <span className="text-ink-soft">The recruitment platform will be embedded here.</span>
                </p>
              </div>
            )}
          </div>
          <p className="mt-8 text-lg text-ink">
            Can&apos;t see the right role?{" "}
            <Link href="/contact" className="font-semibold text-grape underline">Contact us</Link> and tell us about yourself.
          </p>
        </Container>
      </section>
    </>
  );
}
