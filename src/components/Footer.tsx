import Image from "next/image";
import Link from "next/link";
import { acknowledgement, builtAt, centres, contact, logo } from "@/lib/content";
import { Sunburst } from "./Illustrations";

const programs = [
  { label: "Philosophy", href: "/our-philosophy" },
  { label: "Learning Journeys", href: "/our-curriculum" },
  { label: "Squad Programs", href: "/squad-programs" },
  { label: "A Day at Mirabilia", href: "/a-day-at-mirabilia" },
  { label: "Learning Spaces & Child Safety", href: "/our-spaces" },
];
const families = [
  { label: "Child Care Subsidy", href: "/childcare-subsidy" },
  { label: "Inclusive Care", href: "/inclusive-care" },
  { label: "Family Benefits", href: "/family-benefits" },
  { label: "Our Story", href: "/our-story" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
const linkCls = "inline-block py-1.5 text-[15px] text-white/85 underline-offset-4 hover:text-sun hover:underline";

export function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="grain torn-top relative overflow-hidden bg-grape pt-8 text-white">
        <div className="mx-auto max-w-[2200px] px-4 pb-10 pt-10 sm:px-8 lg:px-[3vw]">
          {/* Contact card: Mirabilia's version of the reference's "Siga a Girassol" card. */}
          <div className="mx-auto grid max-w-5xl items-center gap-6 overflow-hidden rounded-[36px] bg-white text-ink sm:grid-cols-[180px_1fr_auto]">
            <div className="blob-2 grid h-40 place-items-center bg-clay sm:h-full sm:min-h-[180px] sm:rounded-none sm:rounded-r-[90px]">
              <Sunburst className="w-24" color="#F9C91F" core="#812990" />
            </div>
            <div className="px-6 sm:px-0">
              <p className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] uppercase leading-none">
                <span className="text-grape">Come and </span>
                <span className="text-clay-ink">say hello!</span>
              </p>
              <p className="mt-2 text-ink-soft">All our centres are open {contact.hours}. Call us or book a tour.</p>
            </div>
            <div className="flex flex-col gap-2 px-6 pb-6 sm:px-0 sm:pb-0 sm:pr-8">
              <a href={contact.phoneHref} className="btn bg-mist font-bold text-grape hover:bg-grape-soft">
                {contact.phone}
              </a>
              <Link href="/book-a-tour" className="btn btn-sun">
                Book a Tour
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_2fr]">
            <div>
              <Image src={logo.src} alt="Mirabilia" width={logo.w} height={logo.h} className="h-auto w-[200px]" />
              <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-white/85">
                Early Learning Education Centre &amp; Kindergarten. A caring, homelike place for Perth&apos;s little wonders.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-display text-xl text-sun">Curriculum &amp; Programs</h3>
                <ul className="mt-3 space-y-1">
                  {programs.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkCls}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl text-sun">Centres</h3>
                <ul className="mt-3 space-y-1">
                  {centres.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/${c.slug}`} className={linkCls}>{c.name}</Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[15px] font-semibold">Open {contact.hours}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h3 className="font-display text-xl text-sun">Get in touch</h3>
                <ul className="mt-3 space-y-1">
                  <li><a href={contact.phoneHref} className={linkCls}>{contact.phone}</a></li>
                  <li><a href={`mailto:${contact.email}`} className={linkCls}>{contact.email}</a></li>
                  {families.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkCls}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <section aria-labelledby="ack-title" className="mt-14 border-t border-white/20 pt-8">
            <h2 id="ack-title" className="font-display text-xl text-sun">Acknowledgement of Country</h2>
            <p className="mt-3 max-w-[100ch] text-[14px] leading-relaxed text-white/80">{acknowledgement}</p>
          </section>

          <p className="mt-8 text-[13px] text-white/70">© {builtAt.getFullYear()} Cherub and Co | Mirabilia</p>
        </div>
      </div>
    </footer>
  );
}
