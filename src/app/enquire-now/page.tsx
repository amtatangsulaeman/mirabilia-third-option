import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Sunburst } from "@/components/Illustrations";
import { Container, TwoTone } from "@/components/ui";
import { centres, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enquire Now",
  description: "Have a question about Mirabilia childcare? Send an enquiry about enrolments, fees or CCS and our team will get back to you.",
};

export default function EnquirePage() {
  return (
    <section className="pb-20 pt-32 sm:pb-28 sm:pt-40">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Sunburst className="anim-drift w-24 sm:w-28" />
          <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] uppercase leading-[0.98]"><TwoTone>Have any questions?</TwoTone></h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Contact us here and our team will get back to you. Tell us a little about your family and the care you need.
          </p>

          <h2 className="mt-10 font-display text-2xl font-black">Talk to a real person</h2>
          <p className="mt-2 leading-relaxed text-ink-soft">Our team is happy to help with enrolments, fees, CCS or anything else.</p>
          <dl className="mt-6 space-y-4">
            <div>
              <dt><a href={contact.phoneHref} className="font-display text-lg font-black hover:text-grape hover:underline">{contact.phone}</a></dt>
              <dd className="text-ink-soft">Call any centre</dd>
            </div>
            <div>
              <dt><a href={`mailto:${contact.email}`} className="font-display text-lg font-black hover:text-grape hover:underline">{contact.email}</a></dt>
              <dd className="text-ink-soft">We reply within business hours</dd>
            </div>
            <div>
              <dt className="font-display text-lg font-black">{contact.hours}</dt>
              <dd className="text-ink-soft">Opening hours, all centres</dd>
            </div>
          </dl>
          <ul className="mt-8 space-y-2">
            {centres.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="group block rounded-[10px] bg-paper px-5 py-3 hover:bg-grape-soft">
                  <span className="block font-display font-extrabold group-hover:text-grape">{c.name}</span>
                  <span className="block text-[15px] text-ink-soft">{c.street}, {c.suburb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="self-start tab-card card-white p-6 sm:p-8">
          <EnquiryForm />
        </div>
      </Container>
    </section>
  );
}
