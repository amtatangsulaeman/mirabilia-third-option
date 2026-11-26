import type { Metadata } from "next";
import Link from "next/link";
import { PaperPlane } from "@/components/Illustrations";
import { Container, TwoTone } from "@/components/ui";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="pb-24 pt-36 text-center">
      <Container>
        <PaperPlane className="anim-drift mx-auto w-36" />
        <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.4rem)] uppercase leading-[0.98]"><TwoTone>Oops, wrong turn!</TwoTone></h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft">We couldn&apos;t find that page. It may have moved when the site was refreshed.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-grape">
            Back to home
          </Link>
          <Link href="/centres" className="btn btn-white">
            Find a centre
          </Link>
        </div>
      </Container>
    </section>
  );
}
