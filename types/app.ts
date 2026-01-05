export interface AppData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  rating?: number;
  downloads?: string;
  size: string;
  version: string;
  updatedOn: string;
  features: string[];
  screenshots: string[];
  banner?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  isWebsite?: boolean;
}

export const apps: Record<string, AppData> = {
  getpdf: {
    id: "getpdf",
    name: "GetPDF",
    tagline: "Edit PDFs offline with complete privacy",
    description: "Professional PDF editor that works entirely in your browser. No uploads, no cloud, no compromises.",
    longDescription: "GetPDF is a powerful PDF editing tool that puts privacy first. Edit, annotate, merge, and split PDFs entirely on your device. Your files never leave your phone, ensuring complete privacy and security. Perfect for professionals, students, and anyone who values their data.",
    icon: "/appicons/getpdf.png",
    category: "Productivity",
    rating: 4.8,
    downloads: "10K+",
    size: "8.5 MB",
    version: "2.1.0",
    updatedOn: "December 2025",
    features: [
      "100% Offline - No internet required",
      "Complete Privacy - Files never uploaded",
      "Edit text and images in PDFs",
      "Merge multiple PDFs into one",
      "Split PDFs into separate files",
      "Add annotations and signatures",
      "Fill PDF forms easily",
      "Compress PDFs to reduce size",
      "Password protect your documents",
      "Export to various formats"
    ],
    screenshots: [
      "/appscreenshots/getpdfapp/1.png",
      "/appscreenshots/getpdfapp/2.png",
      "/appscreenshots/getpdfapp/3.png",
      "/appscreenshots/getpdfapp/4.png",
      "/appscreenshots/getpdfapp/5.png"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getsolutions.getpdf"
  },
  getscan: {
    id: "getscan",
    name: "GetScan",
    tagline: "Professional document scanner in your pocket",
    description: "Transform your phone into a powerful document scanner. Scan, enhance, and organize documents with AI-powered edge detection.",
    longDescription: "GetScan turns your Android device into a professional-grade document scanner. Using advanced AI and image processing, it automatically detects document edges, enhances text clarity, and removes shadows. Create multi-page PDFs, organize your scans, and share them instantly. Perfect for receipts, contracts, notes, and any document you need digitized.",
    icon: "/appicons/getscan.png",
    category: "Productivity",
    rating: 4.7,
    downloads: "25K+",
    size: "12.3 MB",
    version: "3.0.1",
    updatedOn: "January 2026",
    features: [
      "AI-powered edge detection",
      "Auto perspective correction",
      "Shadow and noise removal",
      "Multi-page PDF creation",
      "OCR text recognition",
      "Batch scanning mode",
      "Cloud-free operation",
      "Advanced image filters",
      "Organize with folders and tags",
      "Export to PDF, JPG, PNG"
    ],
    screenshots: [
      "/appscreenshots/getscan/1.jpg",
      "/appscreenshots/getscan/2.jpg",
      "/appscreenshots/getscan/3.jpg",
      "/appscreenshots/getscan/4.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getsolutions.getscan"
  },
  getcompress: {
    id: "getcompress",
    name: "GetCompress",
    tagline: "Reduce file sizes without quality loss",
    description: "Compress images, videos, and documents while maintaining quality. Save storage space and share files faster.",
    longDescription: "GetCompress is the ultimate compression tool for Android. Reduce file sizes of images, videos, and PDFs without noticeable quality loss. Using advanced compression algorithms, you can free up storage space, speed up file transfers, and reduce mobile data usage. All processing happens on your device for maximum privacy.",
    icon: "/appicons/getcompress.png",
    category: "Tools",
    rating: 4.6,
    downloads: "15K+",
    size: "6.8 MB",
    version: "1.8.2",
    updatedOn: "November 2025",
    features: [
      "Compress images (JPG, PNG, WebP)",
      "Video compression with quality control",
      "PDF size reduction",
      "Batch compression support",
      "Adjustable quality settings",
      "Before/after comparison",
      "No file uploads required",
      "Fast processing",
      "Save storage space",
      "Preserve EXIF data option"
    ],
    screenshots: [
      "/appscreenshots/getcompress/1.jpg",
      "/appscreenshots/getcompress/2.jpg",
      "/appscreenshots/getcompress/3.jpg",
      "/appscreenshots/getcompress/4.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getsolutions.getcompress"
  },
  getsecure: {
    id: "getsecure",
    name: "GetSecure – Permission Guard",
    tagline: "Monitor permissions, scan on demand, and spot risky apps instantly",
    description: "Monitor permissions, scan on demand, and spot risky apps instantly",
    longDescription: "Protect your privacy without babysitting another app.\n\nGetSecure is a lightweight Android permission manager that scans your installed apps on demand, highlights risky permissions, and shows you exactly how to lock things down—no constant background monitoring, no battery drain.\n\nOpen the app, get a full permission scan, and see where your data is exposed.\n\nWhy users love GetSecure\n\nOn-demand permission scans\nGetSecure only scans when you open it. No 24/7 background services, no silent tracking—just clear, instant results.\n\nClear privacy dashboard\nView user apps and system apps separately. Track high, medium, and low-risk permissions at a glance, and mark trusted apps as Safe to keep your signal clean.\n\nWeekly privacy report\nGet a Monday summary showing new installs, permission changes, and overall privacy health score trends.\n\nPermission drill-downs\nTap any permission group—camera, microphone, location, storage, notifications—and see every app with access. Jump straight to Android settings to revoke or adjust permissions.\n\nTrusted app tracking\nFlag banking, finance, or utility apps as trusted so GetSecure highlights only the surprises that matter.\n\nExtras you'll appreciate\n\n• No hidden background services draining battery\n• Works great on phones and tablets\n• Lightweight banner ads with occasional interstitials\n• One-time upgrade available to remove ads completely\n\nTake back control of your data.\n\nInstall GetSecure today and see exactly which apps deserve your trust.",
    icon: "/appicons/getsecure.png",
    category: "Security",
    size: "9.2 MB",
    version: "2.5.0",
    updatedOn: "January 2026",
    features: [
      "On-demand permission scans",
      "No background services draining battery",
      "Clear privacy dashboard",
      "Track high, medium, and low-risk permissions",
      "Weekly privacy reports",
      "Permission drill-downs by category",
      "Trusted app tracking",
      "Works on phones and tablets",
      "Lightweight ads with one-time upgrade",
      "Jump to Android settings easily"
    ],
    screenshots: [
      "/appscreenshots/getsecure/1.png",
      "/appscreenshots/getsecure/2.png",
      "/appscreenshots/getsecure/3.png",
      "/appscreenshots/getsecure/4.png"
    ],
    banner: "/appscreenshots/getsecure/banner.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getsolutions.getsecure"
  },
  "getpdf-web": {
    id: "getpdf-web",
    name: "GetPDF.me",
    tagline: "Edit PDFs in your browser. Zero uploads. Zero risk.",
    description: "The web version of GetPDF - a privacy-focused PDF editor that runs entirely in your browser.",
    longDescription: "GetPDF.me brings professional PDF editing to your browser without compromising your privacy. Edit, merge, split, compress, and manipulate PDFs entirely client-side. Your files never touch our servers - everything happens in your browser using cutting-edge WebAssembly technology. Perfect for quick edits when you don't want to install software.",
    icon: "/appicons/getpdf.png",
    category: "Web App",
    rating: 4.8,
    downloads: "50K+ monthly users",
    size: "N/A",
    version: "Web",
    updatedOn: "January 2026",
    features: [
      "100% browser-based - no software install",
      "Zero file uploads - complete privacy",
      "Edit PDF text and images",
      "Merge and split PDFs",
      "Compress PDF files",
      "Add watermarks",
      "PDF form filling",
      "Digital signatures",
      "Works offline after first load",
      "Cross-platform compatibility"
    ],
    screenshots: [
      "/appscreenshots/getpdfweb/1.png",
      "/appscreenshots/getpdfweb/2.png",
      "/appscreenshots/getpdfweb/3.png",
      "/appscreenshots/getpdfweb/4.png",
      "/appscreenshots/getpdfweb/5.png"
    ],
    websiteUrl: "https://getpdf.me",
    isWebsite: true
  }
};
