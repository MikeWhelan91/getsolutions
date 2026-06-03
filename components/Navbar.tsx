"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="relative z-50 bg-[#f6f1e8] py-3">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full bg-white px-4 shadow-sm ring-1 ring-black/5 sm:px-5">
        <Link
          href="/"
          className="flex items-center gap-3 text-[#171717]"
          aria-label="GetSolutions home"
          onClick={closeMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#151821] text-sm font-black text-white">
            GS
          </span>
          <span className="text-base font-black tracking-tight">GetSolutions</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#666b70] transition-colors hover:text-[#171717]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://getpdf.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#ff7a59] px-4 text-sm font-black text-[#151821] transition-colors hover:bg-[#ffb45c]"
          >
            Try GetPDF.me
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#171717] md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-4 mt-2 rounded-[24px] bg-white shadow-sm ring-1 ring-black/5 md:hidden" id="mobile-menu">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                className="rounded-2xl px-3 py-3 text-base font-bold text-[#666b70] transition-colors hover:bg-[#f6f1e8] hover:text-[#171717]"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://getpdf.me"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-[#ff7a59] px-4 text-sm font-black text-[#151821]"
              onClick={closeMenu}
            >
              Try GetPDF.me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
