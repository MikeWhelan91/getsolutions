import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#151821] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="text-2xl font-black tracking-tight">
              GetSolutions
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
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
