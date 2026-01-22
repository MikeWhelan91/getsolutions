export interface AppData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  size: string;
  version: string;
  updatedOn: string;
  features: string[];
  faqs?: { question: string; answer: string }[];
  useCases?: string[];
  valueProps?: string[];
  screenshots: string[];
  banner?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  isWebsite?: boolean;
  isComingSoon?: boolean;
}

export const apps: Record<string, AppData> = {
  getpdf: {
    id: "getpdf",
    name: "GetPDF",
    tagline: "Powerful PDF editing that stays on your device",
    description: "Edit, organize, scan, and convert PDFs directly on your Android device with no accounts or forced uploads.",
    longDescription: "GetPDF is a fast, privacy-first PDF editor for Android. It keeps most tools on-device so your documents stay under your control while you edit, organize, and convert PDFs. From forms and redaction to OCR and camera scans, GetPDF brings everything into a single, focused workflow with optional upgrades for advanced limits.",
    icon: "/appicons/getpdf.png",
    category: "Productivity",
    size: "8.5 MB",
    version: "2.1.0",
    updatedOn: "December 2025",
    features: [
      "Edit PDFs directly on your phone",
      "Add text, page numbers, headers, and watermarks",
      "Fill, edit, and flatten PDF forms",
      "Redact sensitive information",
      "Merge, split, reorder, and rotate pages",
      "Compress PDFs without losing quality",
      "Lock, unlock, and restrict PDFs with passwords",
      "Convert PDFs to images and images to PDFs",
      "Create searchable PDFs with OCR",
      "Scan documents with your camera"
    ],
    useCases: [
      "Edit contracts, reports, and assignments on the go",
      "Scan documents and make them searchable with OCR",
      "Merge, split, and organize multi-page PDFs",
      "Protect sensitive files with passwords and redaction"
    ],
    valueProps: [
      "On-device processing keeps files under your control",
      "Fast tools for editing, organizing, and converting PDFs",
      "Clear upgrade path without forcing subscriptions"
    ],
    faqs: [
      {
        question: "What can I do with GetPDF?",
        answer: "Edit, organize, scan, and convert PDFs on-device, including forms, redaction, and OCR."
      },
      {
        question: "Does GetPDF upload my files?",
        answer: "No. Most tools run locally; a single advanced feature uses an external API and is clearly labeled."
      },
      {
        question: "Can I merge, split, and reorder pages?",
        answer: "Yes. Combine PDFs, split them, and reorder or rotate pages."
      },
      {
        question: "Does GetPDF work offline?",
        answer: "Yes. Core PDF editing tools run fully on-device without an internet connection."
      },
      {
        question: "Can I edit forms and redact text?",
        answer: "Yes. GetPDF supports filling forms, flattening them, and redacting sensitive content."
      },
      {
        question: "Does it support OCR?",
        answer: "Yes. Create searchable PDFs with OCR for scans or images."
      },
      {
        question: "Can I add watermarks or page numbers?",
        answer: "Yes. Add headers, footers, page numbers, and watermarks."
      },
      {
        question: "Can I password-protect PDFs?",
        answer: "Yes. Lock, unlock, and restrict PDF access with passwords."
      },
      {
        question: "Can I convert images to PDF?",
        answer: "Yes. Convert images to PDF and export PDFs as images."
      },
      {
        question: "Is it fast on large PDFs?",
        answer: "GetPDF is optimized for performance and handles large files smoothly on modern devices."
      },
      {
        question: "Is GetPDF free to use?",
        answer: "Core tools are free, with optional upgrades for higher limits and advanced features."
      }
    ],
    screenshots: [
      "/appscreenshots/getpdfapp/1.png",
      "/appscreenshots/getpdfapp/2.png",
      "/appscreenshots/getpdfapp/3.png",
      "/appscreenshots/getpdfapp/4.png",
      "/appscreenshots/getpdfapp/5.png"
    ],
    banner: "/appscreenshots/getpdfapp/banner.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getsolutions.getpdf"
  },
  getscan: {
    id: "getscan",
    name: "GetScan",
    tagline: "Scan to PDF in seconds with a single tap",
    description: "A no-frills document scanner that saves PDFs locally with fast edge detection and zero accounts.",
    longDescription: "GetScan keeps document scanning simple. Open the app, tap Start Scan, and save a clean PDF straight to your Downloads folder. It uses Google ML Kit edge detection, shows your latest scan instantly, and keeps a streamlined history list so you can re-download in seconds.",
    icon: "/appicons/getscan.png",
    category: "Productivity",
    size: "12.3 MB",
    version: "3.0.1",
    updatedOn: "January 2026",
    features: [
      "One-tap camera to PDF workflow",
      "Automatic edge detection via Google ML Kit",
      "Save scans directly to the Downloads folder",
      "Instant latest scan preview",
      "Streamlined scan history list",
      "Local-only processing with no accounts",
      "Clean, distraction-free interface",
      "Fast capture and export"
    ],
    useCases: [
      "Scan receipts, contracts, and notes in seconds",
      "Save PDFs straight to Downloads for quick sharing",
      "Create multi-page PDFs for reports or forms",
      "Keep a lightweight scan history without clutter"
    ],
    valueProps: [
      "No accounts or cloud storage required",
      "Fast edge detection and one-tap workflow",
      "Simple UI that stays out of your way"
    ],
    faqs: [
      {
        question: "How does GetScan work?",
        answer: "Tap Start Scan to capture a page, auto-detect edges, and save a clean PDF."
      },
      {
        question: "Are my scans uploaded anywhere?",
        answer: "No. Everything stays on your device with no accounts or cloud storage."
      },
      {
        question: "Does it auto-detect edges?",
        answer: "Yes. It uses Google ML Kit edge detection for fast capture."
      },
      {
        question: "Where are PDFs saved?",
        answer: "Scans are saved straight to your Downloads folder for quick access."
      },
      {
        question: "Can I export or share scans?",
        answer: "Yes. Share PDFs using your device's standard share options."
      },
      {
        question: "Can I scan multiple pages?",
        answer: "Yes. Create multi-page PDFs in a single session."
      },
      {
        question: "Is there a scan history?",
        answer: "Yes. The app keeps a streamlined history list for quick re-downloads."
      },
      {
        question: "Does it keep a latest scan preview?",
        answer: "Yes. Your most recent scan is always visible for fast access."
      },
      {
        question: "Does it work offline?",
        answer: "Yes. Scanning and saving PDFs works without an internet connection."
      },
      {
        question: "Do I need to sign in?",
        answer: "No sign-in required. Open the app and start scanning immediately."
      }
    ],
    screenshots: [
      "/appscreenshots/getscan/1.jpg",
      "/appscreenshots/getscan/2.jpg",
      "/appscreenshots/getscan/3.jpg",
      "/appscreenshots/getscan/4.jpg"
    ],
    banner: "/appscreenshots/getscan/ChatGPT%20Image%20Jan%2022,%202026,%2002_30_09%20AM.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getscan.app"
  },
  getcompress: {
    id: "getcompress",
    name: "GetCompress",
    tagline: "Private PDF & image compression on-device",
    description: "Compress PDFs and images locally with simple controls and zero uploads.",
    longDescription: "GetCompress makes PDF and image compression fast, simple, and private. Everything runs directly on your phone, so your files never leave your device. Use the safe-to-strong compression slider for quick results or dial in advanced controls when you need precise output for size limits and storage savings.",
    icon: "/appicons/getcompress.png",
    category: "Tools",
    size: "6.8 MB",
    version: "1.8.2",
    updatedOn: "November 2025",
    features: [
      "On-device PDF and image compression",
      "Works fully offline with no uploads",
      "Adjustable compression slider with visible trade-offs",
      "Preserve text, links, and document structure",
      "Optional rasterize mode for maximum size reduction",
      "Advanced controls for target size and DPI",
      "Metadata removal and grayscale options",
      "Batch compression and reusable presets",
      "Ad-free upgrade available"
    ],
    useCases: [
      "Meet upload limits for email and web portals",
      "Reduce storage usage on your device",
      "Share smaller PDFs without quality loss",
      "Batch compress multiple files at once"
    ],
    valueProps: [
      "All compression runs on-device with no uploads",
      "Quick slider or advanced controls for precision",
      "Preserve document readability while reducing size"
    ],
    faqs: [
      {
        question: "What files can GetCompress handle?",
        answer: "PDFs and images including JPG and PNG, all processed locally."
      },
      {
        question: "Does GetCompress work offline?",
        answer: "Yes. Compression runs entirely on-device with no uploads."
      },
      {
        question: "Is there a quick compression mode?",
        answer: "Yes. Use the safe-to-strong slider for instant results."
      },
      {
        question: "Can I control compression quality?",
        answer: "Use the quick slider or advanced controls for target size, DPI, and JPEG quality."
      },
      {
        question: "Will text and links stay intact?",
        answer: "Yes. Documents can retain text and links, with optional rasterize mode for max reduction."
      },
      {
        question: "Do I have to rasterize PDFs?",
        answer: "No. Rasterize mode is optional and only needed for maximum reduction."
      },
      {
        question: "Can I batch compress files?",
        answer: "Yes. Batch compression and reusable presets are available."
      },
      {
        question: "Does it remove metadata?",
        answer: "Yes. Advanced controls include metadata removal and grayscale options."
      },
      {
        question: "Does it require an account?",
        answer: "No. Compress files immediately with no sign-in."
      },
      {
        question: "Can I choose a target file size?",
        answer: "Yes. Advanced controls let you aim for a specific file size."
      }
    ],
    screenshots: [
      "/appscreenshots/getcompress/1.png",
      "/appscreenshots/getcompress/2.png",
      "/appscreenshots/getcompress/3.png",
      "/appscreenshots/getcompress/4.png",
      "/appscreenshots/getcompress/5.png"
    ],
    banner: "/appscreenshots/getcompress/banner.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getapps.getcompress"
  },
  getsecure: {
    id: "getsecure",
    name: "GetSecure",
    tagline: "Monitor permissions, scan on demand, and spot risky apps instantly",
    description: "On-demand permission scans and a clear privacy dashboard without constant background monitoring.",
    longDescription: "GetSecure is a lightweight Android permission manager that scans installed apps on demand, highlights risky permissions, and shows you exactly how to lock things down. There is no constant background monitoring or battery drain, just instant results, a clear privacy dashboard, and drill-downs for every permission group.",
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
    useCases: [
      "Audit new installs for risky permissions",
      "Review camera, mic, and location access quickly",
      "Track trusted apps to reduce noise",
      "Run weekly privacy checkups in minutes"
    ],
    valueProps: [
      "On-demand scans with zero background drain",
      "Clear risk categories and permission drill-downs",
      "Fast jump into Android settings for changes"
    ],
    faqs: [
      {
        question: "What does GetSecure scan?",
        answer: "It scans installed apps for risky permissions and groups them by category."
      },
      {
        question: "Does it run in the background?",
        answer: "No. Scans happen on demand only when you open the app."
      },
      {
        question: "How are risks categorized?",
        answer: "Permissions are grouped by high, medium, and low risk for quick review."
      },
      {
        question: "Does it show system apps?",
        answer: "Yes. View user apps and system apps separately."
      },
      {
        question: "Can I change permissions from the app?",
        answer: "Yes. Jump directly to Android settings to adjust access."
      },
      {
        question: "Can I mark trusted apps?",
        answer: "Yes. Mark apps as Safe to keep your focus on surprises."
      },
      {
        question: "Does it drain battery?",
        answer: "No. There are no background services, so battery impact stays minimal."
      },
      {
        question: "Does GetSecure collect data?",
        answer: "It focuses on on-device scans and does not require sign-in."
      },
      {
        question: "Is there an ad-free option?",
        answer: "Yes. A one-time upgrade removes ads."
      },
      {
        question: "Does it include privacy reports?",
        answer: "Yes. A weekly summary highlights new installs, changes, and overall privacy trends."
      }
    ],
    screenshots: [
      "/appscreenshots/getsecure/1.png",
      "/appscreenshots/getsecure/2.png",
      "/appscreenshots/getsecure/3.png",
      "/appscreenshots/getsecure/4.png",
      "/appscreenshots/getsecure/5.png"
    ],
    banner: "/appscreenshots/getsecure/banner.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getapps.getprivacy"
  },
  "smart-resume": {
    id: "smart-resume",
    name: "Smart Resume",
    tagline: "AI-assisted resumes and cover letters in minutes",
    description: "Create tailored resumes and cover letters fast with guided AI tools, ATS checks, and polished templates.",
    longDescription: "Smart Resume helps you build, review, and export polished resumes and cover letters in one streamlined flow. Start from scratch or upload an existing CV, then use AI guidance to sharpen your wording, structure, and formatting before exporting ready-to-send documents.",
    icon: "/appicons/resume.png",
    category: "Productivity",
    size: "TBD",
    version: "Coming soon",
    updatedOn: "Coming soon",
    features: [
      "Guided AI resume builder with structured sections",
      "Instant cover letter generator from your resume",
      "All-in-one workflow for resumes and cover letters",
      "ATS compatibility checks with actionable feedback",
      "AI suggestions for wording, structure, and clarity",
      "Custom templates and styling controls",
      "PDF export for ready-to-send documents"
    ],
    useCases: [
      "Apply faster with tailored resumes per role",
      "Generate cover letters alongside your resume",
      "Check ATS compatibility before submitting",
      "Polish wording and structure with AI suggestions"
    ],
    valueProps: [
      "All-in-one resume and cover letter flow",
      "Guided sections that prevent blank-page paralysis",
      "Export polished PDFs ready to send"
    ],
    faqs: [
      {
        question: "What can I build with Smart Resume?",
        answer: "Create professional resumes and cover letters in a single guided workflow."
      },
      {
        question: "Does it support ATS checks?",
        answer: "Yes. It analyzes for ATS compatibility and suggests improvements."
      },
      {
        question: "Can I customize templates?",
        answer: "Yes. Control layout, formatting, and styling to match your role."
      },
      {
        question: "Can I upload an existing CV?",
        answer: "Yes. Start from an existing resume and refine it with AI guidance."
      },
      {
        question: "Does it export to PDF?",
        answer: "Yes. Export ready-to-send resumes and cover letters as PDFs."
      },
      {
        question: "Can it generate tailored cover letters?",
        answer: "Yes. The cover letter generator adapts to your resume and job description."
      },
      {
        question: "Can I create multiple versions?",
        answer: "Yes. Build multiple versions for different roles or industries."
      },
      {
        question: "Can I edit content after generating it?",
        answer: "Yes. You can revise sections at any time before exporting."
      },
      {
        question: "Is Smart Resume free?",
        answer: "It is launching soon with free tools and optional upgrades."
      },
      {
        question: "When will Smart Resume launch?",
        answer: "It is coming soon. The Play Store listing will be published after launch."
      }
    ],
    screenshots: [
      "/appscreenshots/resume/image1.png",
      "/appscreenshots/resume/image2.png",
      "/appscreenshots/resume/image3.png",
      "/appscreenshots/resume/image4.png",
      "/appscreenshots/resume/image5.png"
    ],
    banner: "/appscreenshots/resume/banner.png",
    isComingSoon: true
  },
  "getpdf-web": {
    id: "getpdf-web",
    name: "GetPDF.me",
    tagline: "Edit PDFs in your browser. Zero uploads. Zero risk.",
    description: "The web version of GetPDF - a privacy-focused PDF editor that runs entirely in your browser.",
    longDescription: "GetPDF.me brings professional PDF editing to your browser without compromising your privacy. Edit, merge, split, compress, and manipulate PDFs entirely client-side. Your files never touch our servers - everything happens in your browser using cutting-edge WebAssembly technology. Perfect for quick edits when you don't want to install software.",
    icon: "/appicons/getpdf.png",
    category: "Web App",
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
    useCases: [
      "Quick PDF edits without installing software",
      "Merge, split, and compress files before sharing",
      "Fill forms and add signatures in the browser",
      "Handle PDFs on any device with a modern browser"
    ],
    valueProps: [
      "No uploads or server-side processing",
      "Runs in-browser with privacy-first design",
      "Works offline after the first load"
    ],
    faqs: [
      {
        question: "Does GetPDF.me upload files to a server?",
        answer: "No. Editing runs entirely in your browser with zero uploads."
      },
      {
        question: "Can I use it offline?",
        answer: "Yes. After the first load, it works offline for most tasks."
      },
      {
        question: "What file types are supported?",
        answer: "PDFs are supported for editing, merging, splitting, and compression."
      },
      {
        question: "What can I do in the web app?",
        answer: "Edit, merge, split, compress, and sign PDFs directly in the browser."
      },
      {
        question: "Is it free to use?",
        answer: "Yes. The web app is free with optional upgrades in the wider GetSolutions suite."
      },
      {
        question: "Do I need to install anything?",
        answer: "No. It runs in the browser with no downloads required."
      },
      {
        question: "Does it work on mobile?",
        answer: "Yes. It works on mobile and desktop browsers."
      },
      {
        question: "Are files stored anywhere?",
        answer: "No. Files stay in your browser session unless you save or export them."
      },
      {
        question: "Can I add signatures?",
        answer: "Yes. Add signatures directly in the browser."
      },
      {
        question: "Is it the same as the Android app?",
        answer: "It is the web version with a browser-first workflow and privacy-first design."
      }
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
