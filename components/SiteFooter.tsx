import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="footer-brand">
              GetSolutions
            </Link>
            <p className="footer-copy">
              Independent utility apps for documents, scanning, file size, privacy, resumes, dating, and test tracking.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm font-semibold text-white/56 md:items-end">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacy" className="transition-colors hover:text-[#ffb45c]">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-[#ffb45c]">
                Terms
              </Link>
              <Link href="/contact" className="transition-colors hover:text-[#ffb45c]">
                Contact
              </Link>
            </div>
            <p>© 2026 GetSolutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
