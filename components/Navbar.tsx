import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Get<span className="text-grass-600">Solutions</span>
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#apps"
              className="text-gray-600 hover:text-grass-600 font-medium transition-colors"
            >
              Apps
            </Link>
            <Link
              href="/#about"
              className="text-gray-600 hover:text-grass-600 font-medium transition-colors"
            >
              About
            </Link>
            <a
              href="https://getpdf.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-grass-600 text-white font-semibold rounded-lg hover:bg-grass-500 transition-all duration-300 border-2 border-grass-700"
            >
              Try GetPDF.me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-grass-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
