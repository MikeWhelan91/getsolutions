"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  const toggleMenu = () => setMobileOpen((prev) => !prev);
  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="GetSolutions home" onClick={closeMenu}>
            <Image
              src="/getsolutionslogo.png"
              alt="GetSolutions"
              width={180}
              height={48}
              priority
              className="h-10 w-auto object-contain sm:h-12"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-grass-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://getpdf.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-grass-600 text-white font-semibold rounded-lg hover:bg-grass-500 transition-all duration-300"
            >
              Try GetPDF.me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-grass-600 rounded-lg focus-visible:outline-none"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="md:hidden fixed inset-x-4 top-[5.5rem] z-50 rounded-2xl bg-white shadow-2xl"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  className="text-gray-800 text-lg font-semibold hover:text-grass-600 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://getpdf.me"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-grass-600 text-white font-semibold rounded-lg hover:bg-grass-500 transition-all duration-300 text-center"
                onClick={closeMenu}
              >
                Try GetPDF.me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
