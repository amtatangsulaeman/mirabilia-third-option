import Link from "next/link";
import { contact, offerActive } from "@/lib/content";

/**
 * The reference's sticky "Matrículas abertas" strip in its dark rust, filled with Mirabilia's
 * real offer (or a plain tour invitation once the offer has ended). White on clay-ink is 6.6:1.
 */
export function EnrolBar() {
  const active = offerActive();
  return (
    <aside aria-label="Book a tour" className="grain fixed inset-x-0 bottom-0 z-30 bg-clay-ink">
      <div className="mx-auto flex max-w-[2200px] items-center justify-center gap-3 px-3 py-2.5 sm:gap-6 sm:px-8 lg:px-[3vw]">
        <Link
          href={active ? "/promotion" : "/book-a-tour"}
          className="hidden font-display text-[26px] leading-none text-white underline-offset-4 hover:underline md:block"
        >
          {active ? "25% off your first month" : "Come and say hello!"}
        </Link>
        <a href={contact.phoneHref} className="btn btn-sun btn-phone">
          <span className="sm:hidden">Call us</span>
          <span className="hidden sm:inline">Call {contact.phone}</span>
        </a>
        <Link href="/book-a-tour" className="btn btn-sun">
          Book a Tour
        </Link>
      </div>
    </aside>
  );
}
