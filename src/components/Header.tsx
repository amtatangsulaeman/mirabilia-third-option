"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contact, ctaLinks, logo, nav, navLinks, type NavLink } from "@/lib/content";
import { PaintBlob } from "./Illustrations";

const menuId = (label: string) => `menu-${label.replace(/[^a-z]/gi, "")}`;

/** The reference's big paint mass behind the nav: a grape shape with a wavy, brushy lower-left edge. */
function PaintMass({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className={className} aria-hidden="true">
      <defs>
        <filter id="mass-grain">
          <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" result="n" />
          <feColorMatrix in="n" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .07 0" result="g" />
          <feComposite in="g" in2="SourceGraphic" operator="in" result="gg" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="gg" />
          </feMerge>
        </filter>
      </defs>
      <path
        filter="url(#mass-grain)"
        fill="#812990"
        d="M70 0H1000V176c-60 10-120 4-190 10-90 8-150 2-240 6-110 4-190-8-280 2-60 6-110-4-150-26C110 150 92 110 96 70 100 36 82 14 70 0z"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Close everything after navigating (state adjusted during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenMenu(null);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Hide on scroll down, reveal on scroll up. "top" = resting at the top of the page.
  const [bar, setBar] = useState<"top" | "shown" | "hidden">("top");
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      if (y < 80) setBar("top");
      else if (y < lastY - 4) setBar("shown");
      else if (y > lastY + 4) {
        setBar("hidden");
        setOpenMenu(null);
      }
      lastY = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (l: NavLink) => (
    <li key={l.href + l.label}>
      <Link
        href={l.href}
        aria-current={pathname === l.href ? "page" : undefined}
        className="block rounded-xl px-3 py-2.5 text-[15px] font-semibold text-grape hover:bg-grape-soft aria-[current=page]:bg-sun-soft"
      >
        {l.label}
      </Link>
    </li>
  );

  return (
    <header className="relative z-40">
      {/* The transform lives on this layer, not on <header>, so the fixed mobile sheet below is not trapped by it. */}
      <div
        // A keyboard user tabbing into a hidden header brings it back.
        onFocusCapture={() => bar === "hidden" && setBar("shown")}
        // No bar background: only the logo, the paint mass and the nav float. Empty areas ignore clicks.
        className={`pointer-events-none fixed inset-x-0 top-0 transition-transform duration-300 motion-reduce:transition-none ${
          bar === "hidden" ? "-translate-y-[130%]" : "translate-y-0"
        }`}
      >
        <PaintMass className="absolute right-0 top-0 h-[96px] w-[62%] sm:h-[120px] lg:h-[140px] lg:w-[74%]" />
        <PaintBlob className="absolute -left-14 -top-12 w-36 sm:w-44" color="#F15C25" />

        <div className="relative mx-auto flex max-w-[2200px] items-start justify-between gap-4 px-4 pt-3 sm:px-8 lg:px-[3vw] lg:pt-4 [&>*]:pointer-events-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="shrink-0 rounded-md pt-2" aria-label="Mirabilia home">
              <Image src={logo.src} alt="Mirabilia" width={logo.w} height={logo.h} priority className="h-9 w-auto sm:h-12" />
            </Link>
            <Link
              href="/"
              aria-label="Home"
              className="hidden h-12 w-12 place-items-center rounded-full bg-sun text-clay-ink shadow-[2px_-1px_0_3px_var(--color-sun-soft)] lg:grid"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" fill="currentColor" />
              </svg>
            </Link>
          </div>

          {/* Desktop nav on the paint mass */}
          <nav ref={navRef} aria-label="Main" className="hidden flex-col items-end gap-2 lg:flex">
            <ul className="flex items-center gap-5 text-[13px] font-bold text-white">
              <li>
                <a href={contact.phoneHref} className="rounded hover:text-sun">{contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="rounded hover:text-sun">{contact.email}</a>
              </li>
            </ul>
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const isOpen = openMenu === item.label;
                const active = navLinks(item).some((l) => l.href === pathname);
                if (!item.items && !item.groups && item.href) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="flex min-h-[44px] items-center rounded-full px-3 text-[15px] font-bold text-white transition-colors hover:text-sun aria-[current=page]:text-sun"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={item.label} className="relative">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={menuId(item.label)}
                      onClick={() => setOpenMenu(isOpen ? null : item.label)}
                      className={`flex min-h-[44px] items-center gap-1 rounded-full px-3 text-[15px] font-bold text-white transition-colors hover:text-sun ${active ? "text-sun" : ""}`}
                    >
                      {item.label}
                      <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
                        <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </button>
                    <div
                      id={menuId(item.label)}
                      className={`absolute right-0 top-full mt-3 rounded-[22px] bg-white p-2 shadow-[6px_6px_0_var(--color-sun)] ring-[1.5px] ring-grape ${isOpen ? "block" : "hidden"} ${
                        item.groups ? "w-[460px]" : "min-w-[240px]"
                      }`}
                    >
                      {item.groups ? (
                        <div className="grid grid-cols-2 gap-2">
                          {item.groups.map((g) => (
                            <div key={g.heading}>
                              <p className="px-3 pb-1 pt-2 font-display text-[15px] text-clay-ink">{g.heading}</p>
                              <ul>{g.items.map(link)}</ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul>{item.items?.map(link)}</ul>
                      )}
                    </div>
                  </li>
                );
              })}
              {/* "Explore Now": the client's main call to action, opening Book a Tour / Make an Enquiry. */}
              <li className="relative ml-3">
                <button
                  type="button"
                  aria-expanded={openMenu === "__cta"}
                  aria-controls="menu-cta"
                  onClick={() => setOpenMenu(openMenu === "__cta" ? null : "__cta")}
                  className="btn btn-sun"
                >
                  Explore Now
                </button>
                <div
                  id="menu-cta"
                  className={`absolute right-0 top-full mt-3 min-w-[220px] rounded-[22px] bg-white p-2 shadow-[6px_6px_0_var(--color-sun)] ring-[1.5px] ring-grape ${openMenu === "__cta" ? "block" : "hidden"}`}
                >
                  <ul>{ctaLinks.map(link)}</ul>
                </div>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="mt-2 flex h-11 items-center gap-2 rounded-full bg-sun px-5 text-[15px] font-bold uppercase text-grape-deep lg:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Menu
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-50 overflow-y-auto bg-paper lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Image src={logo.src} alt="Mirabilia" width={logo.w} height={logo.h} className="h-9 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 items-center gap-2 rounded-full border-[1.5px] border-grape px-4 text-[15px] font-bold uppercase text-grape"
          >
            Close
          </button>
        </div>
        <nav aria-label="Mobile" className="px-4 pb-10">
          <ul className="divide-y divide-grape/15">
            {nav.map((item) =>
              !item.items && item.href ? (
                <li key={item.label} className="py-4">
                  <Link href={item.href} className="font-display text-2xl text-grape underline-offset-4 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ) : (
              <li key={item.label} className="py-4">
                <p className="font-display text-2xl text-grape">{item.label}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {navLinks(item).map((c) => (
                    <li key={c.href + c.label}>
                      <Link href={c.href} className="inline-flex min-h-[44px] items-center rounded-full bg-mist px-4 text-[15px] font-semibold text-grape">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              ),
            )}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/book-a-tour" className="btn btn-sun">
              Book a Tour
            </Link>
            <Link href="/enquire-now" className="btn btn-white">
              Make an Enquiry
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
