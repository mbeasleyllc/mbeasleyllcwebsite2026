import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import {
  serviceGroups,
  moreServices,
  primaryNav,
  PORTAL_URL,
  REVIEW_HREF,
} from "@/lib/nav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape closes whichever panel is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }, []);

  const closeMegaSoon = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  const solid = isScrolled || megaOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ink shadow-lg" : "bg-gradient-to-b from-ink/90 to-ink/0"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Mike Beasley & Associates — home"
          >
            <Image
              src="/mikebealsleyanassociate-logowht-v1-mao52vtw.png"
              alt="Mike Beasley & Associates"
              width={180}
              height={44}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* ── Desktop navigation ─────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={closeMegaSoon}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ivory/90 transition-colors hover:text-champagne"
                aria-expanded={megaOpen}
                aria-haspopup="true"
                aria-controls="services-mega"
                onClick={() => setMegaOpen((v) => !v)}
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* ── Services mega-menu ───────────────────────── */}
              <div
                id="services-mega"
                hidden={!megaOpen}
                className="absolute left-0 top-full w-[min(58rem,90vw)] pt-2"
              >
                <div className="rounded-xl border border-white/10 bg-ink p-6 shadow-2xl">
                  <div className="grid grid-cols-3 gap-6">
                    {serviceGroups.map((group) => (
                      <div key={group.label}>
                        <p className="type-eyebrow text-champagne">
                          {group.label}
                        </p>
                        <p className="mt-1 text-xs text-mist">{group.blurb}</p>
                        <ul className="mt-4 space-y-3">
                          {group.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="group block rounded-md p-2 -m-2 transition-colors hover:bg-midnight"
                                onClick={() => setMegaOpen(false)}
                              >
                                <span className="block text-sm font-semibold text-ivory group-hover:text-champagne">
                                  {item.name}
                                </span>
                                {item.description && (
                                  <span className="mt-0.5 block text-xs leading-snug text-mist">
                                    {item.description}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-4">
                    <span className="type-eyebrow text-mist">
                      Also from us
                    </span>
                    {moreServices.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-xs text-mist underline-offset-4 transition-colors hover:text-champagne hover:underline"
                        onClick={() => setMegaOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {primaryNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ivory/90 transition-colors hover:text-champagne"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ── Actions ────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-mist transition-colors hover:text-champagne"
            >
              Client login
            </a>
            <Link
              href={REVIEW_HREF}
              className="inline-flex items-center gap-1.5 rounded-md bg-champagne px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-soft"
            >
              Book a free review
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* ── Mobile trigger ─────────────────────────────────── */}
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-ivory"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      <div
        id="mobile-nav"
        hidden={!mobileOpen}
        className="lg:hidden fixed inset-0 top-[73px] z-40 overflow-y-auto bg-ink"
      >
        <div className="container py-6 pb-28">
          <p className="type-eyebrow text-champagne">Services</p>
          <div className="mt-4 space-y-6">
            {serviceGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs uppercase tracking-wider text-mist">
                  {group.label}
                </p>
                <ul className="mt-2 space-y-1">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block py-2.5 text-base font-medium text-ivory"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="type-eyebrow mt-8 text-champagne">More</p>
          <ul className="mt-2 space-y-1">
            {primaryNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-base font-medium text-ivory"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {moreServices.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-base text-mist"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block py-2.5 text-base text-mist"
          >
            Client login
          </a>
        </div>

        {/* Sticky booking button, per the mobile prototype. */}
        <div className="fixed inset-x-0 bottom-0 border-t border-white/10 bg-ink p-4">
          <Link
            href={REVIEW_HREF}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-champagne px-4 py-3.5 text-base font-semibold text-ink"
            onClick={() => setMobileOpen(false)}
          >
            Book a free review
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}
