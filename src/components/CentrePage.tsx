import Link from "next/link";
import { bring, centreFaq, contact, directionsUrl, getCentre, reviewsFor, tourVideo } from "@/lib/content";
import { EnquiryForm } from "./EnquiryForm";
import { Gallery } from "./Gallery";
import { Sunburst } from "./Illustrations";
import { Testimonials } from "./Testimonials";
import { BlobPhoto, Container, CtaStrip, FaqList, LeafList, PageHero, SectionTitle, SubTitle, TabCard } from "./ui";
import { VideoTour } from "./VideoTour";

export function CentrePage({ slug }: { slug: string }) {
  const c = getCentre(slug);
  const [g1] = c.gallery;
  const videoTitle = `Video tour of Mirabilia ${c.name}`;

  return (
    <>
      <PageHero
        photo={c.hero}
        script={`Mirabilia ${c.name}`}
        title={c.welcome}
        intro={<>{c.isNew && <span className="mr-2 inline-block rounded-full bg-sun px-3 py-0.5 font-display text-base text-grape-deep">New!</span>}{c.intro}</>}
      >
        <Link href="#tour" className="btn btn-sun">Book a Tour</Link>
        <Link href="#video-tour" className="btn btn-white">Video Tour</Link>
        <a href={directionsUrl(c)} className="btn btn-white" target="_blank" rel="noopener">Get directions</a>
      </PageHero>

      {/* Video tour. The client is filming new tours; until they arrive, Mirabilia's existing tour video plays. */}
      <section id="video-tour" className="scroll-mt-32 pb-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:gap-14">
          <VideoTour src={c.video ?? tourVideo} poster={c.hero} title={videoTitle} caption={false} />
          <div>
            <Sunburst className="w-16 sm:w-20" />
            <SectionTitle className="mt-4 !text-[clamp(1.9rem,3vw,2.7rem)]">{`Mirabilia ${c.name} video tour`}</SectionTitle>
          </div>
        </Container>
      </section>

      {/* Key facts */}
      <section id="overview" className="band scroll-mt-32">
        <Container className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl text-grape">{c.street}</p>
            <p className="text-ink-soft">{c.suburb}</p>
          </div>
          <div>
            <p className="font-display text-xl text-grape">{contact.hours}</p>
            <p className="text-ink-soft">Monday to Friday</p>
          </div>
          <div>
            <p className="font-display text-xl text-grape">{contact.ages}</p>
            <p className="text-ink-soft">Long Day Care &amp; kindy</p>
          </div>
          <div>
            <a href={contact.phoneHref} className="font-display text-xl text-grape underline-offset-4 hover:underline">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="block text-ink-soft underline-offset-4 hover:text-grape hover:underline">{contact.email}</a>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <BlobPhoto photo={g1} className="mx-auto aspect-[5/4] w-full max-w-[600px]" />
          <div>
            <SubTitle>Our {c.name} educators</SubTitle>
            <div className="prose-mira mt-5 text-lg leading-relaxed text-ink">
              <p>Our team of educators are committed and passionate about making sure your child is safe, nurtured and cared for every day.</p>
              <p>Children are encouraged to engage in interest-led play that creates learning and meaningful experiences. Our educators seek out diverse learning opportunities and implement the curriculum as framed by the Early Years Learning Framework.</p>
            </div>
            <Link href="/our-curriculum" className="btn btn-sun mt-8">How our curriculum works</Link>
          </div>
        </Container>
      </section>

      <section className="band band-sun py-20 sm:py-28">
        <Container className="grid items-start gap-x-7 md:grid-cols-2">
          <TabCard as="article" tab="You and your child" tone="white">
            <div className="prose-mira text-[17px] leading-relaxed">
              <p>We use <strong>Storypark</strong>, a centre-to-family platform where you can follow your child’s day through photos, stories and learning outcomes.</p>
              <p>Every family gets a secure login to use on a computer, mobile or the app.</p>
            </div>
          </TabCard>
          <TabCard as="article" tab="What to bring" tone="white">
            <LeafList items={bring} />
          </TabCard>
        </Container>
      </section>

      {c.gallery.length > 2 && (
        <section className="py-20 sm:py-28">
          <Container>
            <SectionTitle>A peek inside</SectionTitle>
            <div className="mt-10">
              <Gallery photos={c.gallery} label={`Photos of Mirabilia ${c.name}`} />
            </div>
          </Container>
        </section>
      )}

      <section className={c.gallery.length > 2 ? "pb-20 sm:pb-28" : "py-20 sm:py-28"}>
        <Container>
          <CtaStrip
            text={`Squad Programs, meals, nappies and sunscreen are all included in your daily fee at Mirabilia ${c.name}.`}
            cta={{ label: "One fee, everything included", href: "/inclusive-care" }}
          />
        </Container>
      </section>

      <div className="band">
        <Testimonials keys={reviewsFor(c.slug)} />
      </div>

      <section id="faq" className="scroll-mt-32 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle>{c.name} questions</SectionTitle>
          <FaqList items={centreFaq(c)} />
        </Container>
      </section>

      <section id="tour" className="band scroll-mt-32 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle>{`Book a tour at Mirabilia ${c.name}`}</SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-ink">
              Discover the nurturing environment at Mirabilia {c.name}. Explore our facilities, meet our educators, and see how we inspire your child’s growth and development.
            </p>
            <p className="mt-6 text-lg">
              Prefer to talk now? Call{" "}
              <a href={contact.phoneHref} className="font-semibold text-grape underline">{contact.phone}</a>
            </p>
          </div>
          <div className="self-start tab-card card-white p-6 sm:p-8">
            <EnquiryForm variant="tour" defaultCentre={`Mirabilia ${c.name}`} />
          </div>
        </Container>
      </section>
    </>
  );
}
