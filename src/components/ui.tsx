import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { centres, type Centre, type Person, type Photo, type Program } from "@/lib/content";
import { Leaf, PaperPlane, Squiggle, Sunburst } from "./Illustrations";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[2200px] px-4 sm:px-8 lg:px-[3vw] ${className}`}>{children}</div>;
}

/**
 * Two-tone Chewy heading, as in the reference ("NOSSA / ESTRUTURA"): the first half of the
 * words in grape, the rest in clay. Non-string titles render in grape as given.
 */
export function TwoTone({ children, light = false }: { children: ReactNode; light?: boolean }) {
  const first = light ? "text-white" : "text-grape";
  const second = light ? "text-sun" : "text-clay-ink";
  // JSX like {`Squad Programs at ${name}`} arrives as an array of strings: join it first.
  const text =
    typeof children === "string"
      ? children
      : Array.isArray(children) && children.every((c) => typeof c === "string" || typeof c === "number")
        ? children.join("")
        : null;
  if (text === null) return <span className={first}>{children}</span>;
  const words = text.split(" ");
  const cut = Math.ceil(words.length / 2);
  return (
    <>
      <span className={`block ${first}`}>{words.slice(0, cut).join(" ")}</span>
      <span className={`block ${second}`}>{words.slice(cut).join(" ")}</span>
    </>
  );
}

/**
 * Small label above a heading with a dashed wave under it. Uppercase with wide tracking is
 * deliberate here: it is the reference's section marker ("UMA ESCOLHA COM SIGNIFICADO").
 */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex flex-col gap-1 text-[13px] font-bold uppercase tracking-[0.18em] ${light ? "text-sun" : "text-grape"}`}>
      {children}
      <Squiggle className="h-3 w-36" color={light ? "#F9C91F" : "#812990"} />
    </span>
  );
}

/** Title split like the reference's inner pages: first word in rust, the rest stacked in grape beside it. */
function StaggerTitle({ children }: { children: ReactNode }) {
  const text =
    typeof children === "string"
      ? children
      : Array.isArray(children) && children.every((c) => typeof c === "string" || typeof c === "number")
        ? children.join("")
        : null;
  if (text === null) return <span className="text-grape">{children}</span>;
  const words = text.split(" ");
  // The rust lead must carry some weight: take words until it is at least 4 letters ("A second").
  let cut = 1;
  while (cut < words.length - 1 && words.slice(0, cut).join("").length < 4) cut++;
  const lead = words.slice(0, cut).join(" ");
  const rest = words.slice(cut).join(" ");
  if (!rest) return <span className="text-grape">{lead}</span>;
  return (
    // One natural line flow: the rust lead runs straight into the grape rest (no stacked column).
    <>
      <span className="text-clay-ink">{lead}</span> <span className="text-grape">{rest}</span>
    </>
  );
}

/**
 * Page hero.
 * size "lg" (home): the reference's rounded slider card, here a photo with a pale-yellow
 * speech bubble carrying the heading.
 * size "md" (inner pages): the reference's inner hero, a light panel with a big rounded
 * top-right corner, breadcrumb, staggered two-tone title and a blob photo.
 */
export function PageHero({
  photo,
  script,
  title,
  intro,
  children,
  size = "md",
  badge,
}: {
  photo: Photo;
  script?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  size?: "md" | "lg";
  /** Optional rust sticker on the photo (the reference's orange speech bubble). */
  badge?: ReactNode;
}) {
  if (size === "md") {
    return (
      <section className="relative pb-10 pt-[112px] sm:pt-[136px] lg:pt-[156px]">
        <Container>
          <div className="band relative grid items-center gap-10 overflow-hidden rounded-[32px] px-5 py-9 sm:rounded-[40px] sm:rounded-tr-[110px] sm:px-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-14">
            <div>
              {script && (
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-ink">
                    <li>
                      <Link href="/" className="underline underline-offset-2 hover:text-grape">Home</Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page">{script}</li>
                  </ol>
                </nav>
              )}
              <h1 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.9rem)] uppercase leading-[0.98]">
                <StaggerTitle>{title}</StaggerTitle>
              </h1>
              {intro && <div className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-clay-ink sm:text-lg">{intro}</div>}
              {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
            </div>
            <BlobPhoto photo={photo} className="mx-auto aspect-[5/4] w-full max-w-[560px]" sizes="(min-width: 1024px) 40vw, 100vw" priority />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative pb-14 pt-[112px] sm:pt-[136px] lg:pt-[156px]">
      <Container>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-mist sm:aspect-[16/9] sm:rounded-[56px] lg:aspect-auto lg:h-[min(72vh,640px)]">
            <Image src={photo.src} alt={photo.alt} fill priority fetchPriority="high" sizes="100vw" className="object-cover" />
            {badge && <div className="absolute right-4 top-4 sm:right-8 sm:top-8">{badge}</div>}
          </div>
          <div className="relative z-10 mx-2 -mt-16 sm:mx-6 lg:absolute lg:inset-y-0 lg:left-10 lg:m-0 lg:flex lg:items-center">
            <div className="relative rounded-[40px] bg-sun-soft p-6 sm:p-9 lg:max-w-[600px]">
              <span aria-hidden="true" className="absolute -right-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 rotate-45 rounded-[6px] bg-sun-soft lg:block" />
              {script && <Eyebrow>{script}</Eyebrow>}
              <h1 className={`font-display text-[clamp(2.4rem,5.4vw,4.6rem)] uppercase leading-[0.98] ${script ? "mt-4" : ""}`}>
                <TwoTone>{title}</TwoTone>
              </h1>
              {intro && <div className="mt-4 text-[17px] leading-relaxed text-ink">{intro}</div>}
              {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
            </div>
          </div>
          <PaperPlane className="anim-drift absolute -bottom-14 right-4 hidden w-44 lg:block" />
        </div>
      </Container>
    </section>
  );
}

/** Signika subheading used beside blob photos ("Infância como fundação"). */
export function SubTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold leading-tight text-grape ${className}`}>{children}</h2>;
}

export function SectionTitle({ children, className = "", light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <h2 className={`font-display text-[clamp(2.1rem,4.6vw,3.6rem)] uppercase leading-[0.98] ${className}`}>
      <TwoTone light={light}>{children}</TwoTone>
    </h2>
  );
}

const tones = {
  "grape-soft": "card-grape-soft",
  sun: "card-sun",
  "clay-soft": "card-clay-soft",
  white: "card-white",
  mist: "card-mist",
} as const;
export type Tone = keyof typeof tones;
export const toneClass = (t: Tone) => tones[t];

/** Rounded card with the reference's offset outline; the small label sits in Chewy above. */
export function TabCard({
  tab,
  tone = "white",
  children,
  className = "",
  as: Tag = "div",
}: {
  tab: ReactNode;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li" | "figure";
}) {
  return (
    <Tag className={`tab-card mt-8 p-6 sm:p-7 ${tones[tone]} ${className}`}>
      {/* Numbered labels ("01") belonged to the old reference; the cards here carry no numbers. */}
      {!(typeof tab === "string" && /^\d+$/.test(tab)) && <span className="tab text-[18px]">{tab}</span>}
      {children}
    </Tag>
  );
}

export function PhotoFrame({ photo, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority = false }: { photo: Photo; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[22px] bg-mist ${className}`}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

/** Photo cut into an organic blob with a yellow outline offset behind it ("Somos a Girassol"). */
export function BlobPhoto({ photo, className = "", sizes = "(min-width: 1024px) 45vw, 100vw", sun = true, priority = false }: { photo: Photo; className?: string; sizes?: string; sun?: boolean; priority?: boolean }) {
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden="true" className="blob-2 absolute -inset-1.5 border-[3px] border-sun sm:-inset-4 sm:-rotate-3" />
      <div className="blob relative h-full w-full overflow-hidden bg-mist">
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {sun && <Sunburst className="absolute -top-8 right-[12%] w-20 sm:w-24" />}
    </div>
  );
}

export function LeafList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 leading-relaxed">
          <Leaf className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Closing call to action: a dark grape card with grain, a blob photo and the paper plane. */
export function CtaBand({
  title = "Come and say hello!",
  text = "Book a tour with one of Perth’s most trusted childcare centres. We’ll show you around, answer your questions and help you find the right fit.",
  photo,
  primary = { label: "Book a Tour", href: "/book-a-tour" },
  secondary = { label: "Enquire Now", href: "/enquire-now" },
}: {
  title?: string;
  text?: string;
  photo: Photo;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grain relative grid items-center gap-10 overflow-hidden rounded-[40px] bg-grape-deep p-8 text-white sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
          <PaperPlane className="anim-drift absolute -right-6 top-4 w-40 opacity-90 sm:w-56" color="#F9C91F" />
          <div className="relative">
            <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.6rem)] uppercase leading-[0.98]">
              <TwoTone light>{title}</TwoTone>
            </h2>
            {text && <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-white/90">{text}</p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primary.href} className="btn btn-sun">
                {primary.label}
              </Link>
              {secondary && (
                <Link href={secondary.href} className="btn border-white bg-transparent text-white hover:bg-white/10">
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
          <BlobPhoto photo={{ ...photo, alt: "" }} className="mx-auto aspect-square w-full max-w-[360px]" sizes="360px" />
        </div>
      </Container>
    </section>
  );
}

export function CentreCard({ centre, tone }: { centre: Centre; tone: Tone }) {
  return (
    <TabCard as="article" tab={centre.isNew ? `${centre.name} · New!` : centre.name} tone={tone}>
      <Link href={`/${centre.slug}`} className="group block rounded-[18px]">
        <PhotoFrame photo={centre.card} className="aspect-[4/3]" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
        <p className="mt-4 text-[15px] leading-relaxed">{centre.intro}</p>
        <p className="mt-3 text-[14px] font-semibold text-ink-soft">
          {centre.street}, {centre.suburb}
        </p>
        <span className="btn btn-grape mt-5 min-h-[40px] px-5 text-[13px] uppercase tracking-wide">Visit {centre.name}</span>
      </Link>
    </TabCard>
  );
}

export function CentreCards() {
  const t: Tone[] = ["white", "sun", "white", "clay-soft"];
  return (
    <div className="grid items-start gap-x-7 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
      {centres.map((c, i) => (
        <CentreCard key={c.slug} centre={c} tone={t[i]} />
      ))}
    </div>
  );
}

/** Accordion FAQ built on native details/summary (keyboard and screen reader friendly). */
export function FaqList({ items }: { items: [string, ReactNode][] }) {
  return (
    <div className="space-y-3">
      {items.map(([q, a], i) => (
        <details key={q} open={i === 0} className="group rounded-[22px] bg-white px-5 py-1 shadow-[4px_4px_0_var(--color-sun)]">
          <summary className="flex min-h-[56px] list-none items-center justify-between gap-4 rounded-lg py-2 text-[17px] font-bold text-grape [&::-webkit-details-marker]:hidden">
            {q}
            <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sun text-xl leading-none text-ink transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="pb-5 pr-12 leading-relaxed text-ink-soft">{a}</div>
        </details>
      ))}
    </div>
  );
}

/**
 * A team member's words: blob photo with the yellow outline beside a white card with the
 * reference's offset outline. A big yellow Chewy quote mark anchors the card.
 */
export function QuoteCard({ person, cta = true }: { person: Person; cta?: boolean }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-16">
      <BlobPhoto photo={person.photo} className="mx-auto aspect-[4/5] w-full max-w-[360px] lg:max-w-none" sizes="(min-width: 1024px) 400px, 360px" />
      <figure className="tab-card card-sun relative p-7 pt-14 sm:p-10 sm:pt-16">
        <span aria-hidden="true" className="absolute -top-8 left-6 font-display text-[120px] leading-none text-clay sm:left-9">
          &ldquo;
        </span>
        <blockquote className="prose-mira text-[17px] leading-relaxed text-ink sm:text-lg">
          {person.quote.map((q, i) => (
            <p key={i}>{q}</p>
          ))}
        </blockquote>
        <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t-[1.5px] border-dashed border-grape/30 pt-6">
          <span>
            <span className="block font-display text-3xl text-grape">{person.name}</span>
            <span className="block font-semibold text-clay-ink">{person.role}</span>
          </span>
          {cta && (
            <Link href="/enquire-now" className="btn btn-sun">
              Contact Us
            </Link>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

export function PersonCard({ person, tone }: { person: Person; tone: Tone }) {
  return (
    <TabCard as="article" tab={person.role.split(",")[0]} tone={tone}>
      <PhotoFrame photo={person.photo} className="aspect-[4/5]" sizes="(min-width: 1024px) 25vw, 50vw" />
      <h3 className="mt-4 font-display text-2xl text-grape">{person.name}</h3>
      <p className="text-[15px] text-ink-soft">{person.role.split(", ")[1]}</p>
    </TabCard>
  );
}

/** Program card in the reference's "Cursos Livres" style: picture on top, rust panel below. */
export function CourseCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/${program.slug}`}
      className="group block h-full overflow-hidden rounded-[22px] bg-clay-ink transition-transform hover:-translate-y-1 motion-reduce:transition-none"
    >
      <span className="relative block aspect-[4/3] bg-white">
        <Image src={program.cover.src} alt={program.cover.alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </span>
      <span className="block px-5 pb-5 pt-4 text-white">
        <span className="block text-[16px] font-bold uppercase tracking-wide">{program.name}</span>
        <span className="mt-1 block text-[14px] leading-snug text-white/90">{program.short}</span>
      </span>
    </Link>
  );
}

/** Washed-out photo behind a section, like the faded classroom pictures behind the reference's sections. */
export function FadedBg({ photo }: { photo: Photo }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Image src={photo.src} alt="" fill sizes="100vw" className="object-cover opacity-[0.07] grayscale-[30%]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent,white)]" />
    </div>
  );
}

/** Photo beside text (the source's FeatureSplit), in the reference's blob-photo + Signika subtitle style. */
export function FeatureSplit({
  photo,
  eyebrow,
  title,
  children,
  flip = false,
  cta,
}: {
  photo: Photo;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  flip?: boolean;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <BlobPhoto photo={photo} className={`mx-auto aspect-[5/4] w-full max-w-[600px] ${flip ? "lg:order-2" : ""}`} sun={false} />
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <SubTitle className={eyebrow ? "mt-4" : ""}>{title}</SubTitle>
        <div className="prose-mira mt-5 text-lg leading-relaxed text-ink">{children}</div>
        {cta && (
          <Link href={cta.href} className="btn btn-sun mt-8">
            {cta.label}
          </Link>
        )}
      </div>
    </div>
  );
}

/** Short call-to-action card (the source's CtaStrip). */
export function CtaStrip({ text, cta = { label: "Make an Enquiry", href: "/enquire-now" } }: { text: ReactNode; cta?: { label: string; href: string } }) {
  return (
    <div className="tab-card card-sun flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center sm:p-9">
      <p className="max-w-[60ch] text-lg leading-relaxed text-ink sm:text-xl">{text}</p>
      <Link href={cta.href} className="btn btn-sun shrink-0">
        {cta.label}
      </Link>
    </div>
  );
}

/** Small section heading block: eyebrow, two-tone title and optional lead. */
export function SectionHead({ eyebrow, title, lead, center = false }: { eyebrow?: string; title: string; lead?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <SectionTitle className={eyebrow ? "mt-4" : ""}>{title}</SectionTitle>
      {lead && <p className="mt-5 text-lg leading-relaxed text-ink-soft">{lead}</p>}
    </div>
  );
}

/** Leadership card. Until new staff photos arrive, a neutral placeholder stands in (client request). */
export function LeaderCard({ name, role, photo }: { name: string; role: string; photo?: Photo }) {
  return (
    <TabCard as="article" tab={role} tone="white">
      {photo ? (
        <PhotoFrame photo={photo} className="aspect-[4/5]" sizes="(min-width: 1024px) 30vw, 50vw" />
      ) : (
        <div className="grid aspect-[4/5] place-items-center rounded-[22px] bg-mist text-center text-[14px] font-semibold text-ink-soft" aria-hidden="true">
          Photo coming soon
        </div>
      )}
      <h3 className="mt-4 font-display text-2xl text-grape">{name}</h3>
    </TabCard>
  );
}
