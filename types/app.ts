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
  safetyHighlights?: { icon: string; label: string }[];
  screenshots: string[];
  platforms?: ("iOS" | "Android" | "Web")[];
  banner?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  websiteUrl?: string;
  isWebsite?: boolean;
  isComingSoon?: boolean;
  isArchived?: boolean;
}

export const apps: Record<string, AppData> = {
  getpdf: {
    id: "getpdf",
    name: "GetPDF",
    tagline: "Powerful PDF editing that stays on your device",
    description: "Edit, organize, scan, and convert PDFs directly on your Android or iOS device with no accounts or forced uploads.",
    longDescription: "GetPDF is a fast, privacy-first PDF editor for Android and iOS. It keeps most tools on-device so your documents stay under your control while you edit, organize, and convert PDFs. From forms and redaction to OCR and camera scans, GetPDF brings everything into a single, focused workflow with optional upgrades for advanced limits.",
    icon: "/appicons/getpdf.png",
    category: "Productivity",
    size: "Varies by platform",
    version: "See store listing",
    updatedOn: "See store listing",
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
      "/appscreenshots/getpdfapp/Screenshot%202026-07-25%20at%2023-33-51%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png",
      "/appscreenshots/getpdfapp/Screenshot%202026-07-25%20at%2023-34-14%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png",
      "/appscreenshots/getpdfapp/Screenshot%202026-07-25%20at%2023-34-24%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png",
      "/appscreenshots/getpdfapp/Screenshot%202026-07-25%20at%2023-34-35%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png",
      "/appscreenshots/getpdfapp/Screenshot%202026-07-25%20at%2023-34-45%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png",
      "/appscreenshots/getpdfapp/Screenshot%202026-07-25%20at%2023-34-55%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png",
      "/appscreenshots/getpdfapp/Screenshot%202026-07-25%20at%2023-35-24%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png"
    ],
    banner: "/appscreenshots/getpdfapp/banner.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getsolutions.getpdf",
    appStoreUrl: "https://apps.apple.com/us/app/getpdf-pdf-editor-tools/id6757444980"
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
    banner: "/appscreenshots/getscan/banner.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getscan.app",
    isArchived: true
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
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getapps.getcompress",
    isArchived: true
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
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.getapps.getprivacy",
    isArchived: true
  },
  "smart-resume": {
    id: "smart-resume",
    name: "Smart Resume",
    tagline: "AI-assisted resumes and cover letters in minutes",
    description: "Create tailored resumes and cover letters fast with guided AI tools, ATS checks, and polished templates.",
    longDescription: "Smart Resume helps you build, review, and export polished resumes and cover letters in one streamlined flow. Start from scratch or upload an existing CV, then use AI guidance to sharpen your wording, structure, and formatting before exporting ready-to-send documents.",
    icon: "/appicons/resume.png",
    category: "Productivity",
    size: "Varies by platform",
    version: "See store listing",
    updatedOn: "See store listing",
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
        answer: "Yes. Smart Resume is free to download, with optional upgrades for more AI usage and advanced features."
      },
      {
        question: "Is Smart Resume available on iPhone and Android?",
        answer: "Yes. Smart Resume is available on the App Store and Google Play."
      }
    ],
    screenshots: [
      "/appscreenshots/resume/Screenshot%202026-06-03%20at%2022-18-26%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png",
      "/appscreenshots/resume/Screenshot%202026-06-03%20at%2022-18-38%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png",
      "/appscreenshots/resume/Screenshot%202026-06-03%20at%2022-18-48%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png",
      "/appscreenshots/resume/Screenshot%202026-06-03%20at%2022-19-07%20Projects%20AppLaunchpad%20Free%20App%20Store%20Screenshot%20Generator.png"
    ],
    banner: "/appscreenshots/resume/banner.png",
    appStoreUrl: "https://apps.apple.com/us/app/smart-resume-ai-cv-builder/id6758463319",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartresume.app"
  },
  linecheck: {
    id: "linecheck",
    name: "LineCheck",
    tagline: "AI-assisted hCG and LH strip review for iPhone",
    description: "Read pregnancy and ovulation test strips faster with AI-assisted line review, saved results, cycle tracking, and gentle guidance.",
    longDescription: "LineCheck helps you capture hCG and LH test strips, review faint lines, track LH changes, compare saved scans, and keep pregnancy or ovulation timing in one place. It is built for quick reference and trend tracking on iPhone, with clear confidence indicators, result history, calendar views, and Luna guidance for making sense of saved tests. LineCheck is not a medical device and does not diagnose pregnancy, fertility status, or health conditions; always follow your test instructions and consult a healthcare professional when needed.",
    icon: "/appicons/linecheck.png",
    category: "Health & Fitness",
    size: "See App Store",
    version: "See App Store",
    updatedOn: "August 2026",
    features: [
      "AI-assisted review for hCG pregnancy test strips",
      "LH ovulation strip reads with T/C ratio tracking",
      "Faint line detection with read confidence",
      "Saved scan history for pregnancy and ovulation tests",
      "Side-by-side comparison for earlier and later results",
      "Calendar view for tests, cycle timing, and windows",
      "LH trend charts to watch surge patterns over time",
      "Luna chat guidance based on saved test context",
      "Clear reference-only medical disclaimer",
      "Built for iPhone"
    ],
    useCases: [
      "Check whether a pregnancy test image shows a faint second line",
      "Track LH strip changes from low to peak fertility",
      "Compare saved tests to see whether lines look stronger or lighter",
      "Plan testing around cycle dates, windows, and previous results"
    ],
    valueProps: [
      "Turns hard-to-read strip photos into clearer reference results",
      "Combines scan history, comparisons, and calendar context",
      "Designed for sensitive moments with careful, non-diagnostic language"
    ],
    safetyHighlights: [
      {
        icon: "✓",
        label: "Reference-only guidance"
      },
      {
        icon: "i",
        label: "Not a medical device"
      }
    ],
    faqs: [
      {
        question: "What tests does LineCheck support?",
        answer: "LineCheck supports hCG pregnancy test strips and LH ovulation test strips."
      },
      {
        question: "Can LineCheck diagnose pregnancy or fertility status?",
        answer: "No. LineCheck is for reference only and is not a medical device. Follow your test instructions and consult a healthcare professional when needed."
      },
      {
        question: "Does it help with faint lines?",
        answer: "Yes. LineCheck reviews test photos, highlights possible faint lines, and shows read confidence."
      },
      {
        question: "Can I compare results over time?",
        answer: "Yes. Save scans and compare earlier and later tests to see whether lines appear stronger, lighter, or similar."
      },
      {
        question: "Does LineCheck track LH trends?",
        answer: "Yes. It tracks LH ratios and stages so you can watch changes from low through peak."
      },
      {
        question: "Is LineCheck available on Android?",
        answer: "No. LineCheck is iOS only right now."
      }
    ],
    screenshots: [
      "/appscreenshots/linecheck/01-spot-faint-lines-iphone-1242x2688.png",
      "/appscreenshots/linecheck/02-follow-ovulation-trends-iphone-1242x2688.png",
      "/appscreenshots/linecheck/03-plan-your-cycle-iphone-1242x2688.png",
      "/appscreenshots/linecheck/04-see-your-trends-iphone-1242x2688.png",
      "/appscreenshots/linecheck/05-log-everything-iphone-1242x2688.png",
      "/appscreenshots/linecheck/06-see-results-change-iphone-1242x2688.png",
      "/appscreenshots/linecheck/07-ask-luna-iphone-1242x2688.png"
    ],
    appStoreUrl: "https://apps.apple.com/us/app/linecheck-test-line-scanner/id6775990353"
  },
  "kinu-tumble": {
    id: "kinu-tumble",
    name: "Kinu Tumble",
    tagline: "A cosy physics game about fitting one more Kinu",
    description: "Drop, nudge, and stack soft little Kinu into a box, then see how many you can fit before three tumble out.",
    longDescription: "Kinu Tumble is a cosy 3D physics stacking game for iPhone. Drag each Kinu into place, spin the box to find a better angle, and let go to watch it plop into the pile. Small shapes squeeze into gaps while tall and round Kinu make every drop a tiny puzzle, and three tumbles end the run. Keep playing to discover new tofu flavours, dress your Kinu in playful outfits, collect new boxes and rooms, and catch special Lucky and Heart Kinu for helpful rewards.",
    icon: "/appicons/kinu-tumble.png",
    category: "Games",
    size: "",
    version: "",
    updatedOn: "",
    platforms: ["iOS"],
    isComingSoon: true,
    features: [
      "Drag to aim, swipe to spin the box, and release to drop",
      "Physics-based stacking where every shape lands differently",
      "Slot tiny Kinu into gaps to keep the pile growing",
      "Three tumbles end the run",
      "Discover flavours such as matcha, ube, ramune, and kabocha",
      "Unlock bunny hoods, fox ears, ninja suits, and more outfits",
      "Collect new boxes and rooms with their own music",
      "Catch Lucky Kinu for beans and Heart Kinu for another chance",
      "Daily missions and rewards to keep each run fresh",
      "Game Center leaderboard support"
    ],
    useCases: [
      "Play a quick, calming stacking run in a spare minute",
      "Turn the box and hunt for the perfect gap",
      "Discover every Kinu flavour and shape",
      "Personalise the nest with outfits, boxes, and rooms"
    ],
    valueProps: [
      "Simple touch controls with playful physics",
      "A cosy collection game wrapped around a score chase",
      "Short runs that are easy to start and hard to put down"
    ],
    faqs: [
      {
        question: "How do you play Kinu Tumble?",
        answer: "Drag to position each Kinu, swipe to rotate the box, then let go to drop it. Fit as many as you can without letting three tumble out."
      },
      {
        question: "What happens when a Kinu falls out?",
        answer: "It counts as one tumble. The run ends after three tumbles, though a Heart Kinu can win one back."
      },
      {
        question: "How do I find new flavours?",
        answer: "Pile more Kinu into a single run to unlock new flavours, then find them as you continue playing."
      },
      {
        question: "Can I customise the Kinu and their nest?",
        answer: "Yes. Collect outfits, finishes, boxes, and rooms, with different music for each room."
      },
      {
        question: "What are Lucky Kinu?",
        answer: "Lucky Kinu award bonus beans when you land them. Heart Kinu restore one tumble."
      },
      {
        question: "When will Kinu Tumble be available?",
        answer: "Kinu Tumble is coming soon to the App Store for iPhone."
      }
    ],
    screenshots: [
      "/appscreenshots/kinu-tumble/01-how-many-will-fit-iphone-1242x2688.png",
      "/appscreenshots/kinu-tumble/02-drag-spin-drop-iphone-1242x2688.png",
      "/appscreenshots/kinu-tumble/03-squeeze-them-in-iphone-1242x2688.png",
      "/appscreenshots/kinu-tumble/04-find-every-flavour-iphone-1242x2688.png",
      "/appscreenshots/kinu-tumble/05-dress-them-up-iphone-1242x2688.png",
      "/appscreenshots/kinu-tumble/06-make-it-your-own-iphone-1242x2688.png",
      "/appscreenshots/kinu-tumble/07-catch-a-lucky-kinu-iphone-1242x2688.png"
    ]
  },
  "critter-scale": {
    id: "critter-scale",
    name: "Critter Scale",
    tagline: "A cosy physics puzzle about balancing squishy critters",
    description: "Steer falling critters onto two piles, keep the plank level to build your multiplier, and don't let the water spill.",
    longDescription: "Critter Scale is a relaxed but tricky balancing game for iPhone. Every critter that drops in has to go left or right onto a plank balanced on a spike. Keep the board level to grow your multiplier all the way to ×3, or let a bad critter melt on the spike, at the cost of water rising between the piles. Nibblers eat what they land on, Sippers drink the water back up, and Swells keep on growing, so every run plays out differently. Unlock golden critters, new planks, and new skies with the optional Supporter Pack, and chase your best score on the Game Center leaderboard.",
    icon: "/appicons/critterscale.png",
    category: "Games",
    size: "See App Store",
    version: "See App Store",
    updatedOn: "September 2026",
    features: [
      "Swipe or tap to steer each critter onto the left or right pile",
      "Torque-based physics: heavy critters far out tip the plank harder",
      "Keep the plank level to build a multiplier up to ×3",
      "Skip a bad critter by letting it melt, at the cost of rising water",
      "Special critters: Nibblers nibble, Sippers sip, Swells swell",
      "A guided first run that introduces each critter as it appears",
      "Supporter Pack with golden critters, planks, and skies",
      "Game Center leaderboard and personal records",
      "One-time purchase to remove ads",
      "Built for iPhone"
    ],
    useCases: [
      "Play a quick, calming round in a spare minute",
      "Chase a higher multiplier with careful, level placements",
      "Plan around specials to rescue a flooding board",
      "Compete for a spot on the Game Center leaderboard"
    ],
    valueProps: [
      "Simple one-thumb controls with surprisingly deep balancing",
      "Cosmetics never change scores, balance, or the leaderboard",
      "No account needed: your progress stays on your iPhone"
    ],
    faqs: [
      {
        question: "How do you play Critter Scale?",
        answer: "Swipe or tap left or right to send each falling critter onto that pile. Keep the plank level to grow your multiplier, and don't let the water spill over the lower pile."
      },
      {
        question: "What happens if I don't choose a side?",
        answer: "The critter falls onto the centre spike and melts. That's a handy way to skip a bad critter, but it adds water to the plank."
      },
      {
        question: "What do the special critters do?",
        answer: "Nibblers shrink the critter they land on, Sippers drink water back off the plank, and Swells keep growing after they land until they're heavier than anything else."
      },
      {
        question: "Is Critter Scale free?",
        answer: "Yes. The game is free with ads. You can remove ads with a one-time purchase, or get the Supporter Pack, which unlocks every cosmetic look and also removes ads."
      },
      {
        question: "Do cosmetics make the game easier?",
        answer: "No. Supporter looks are purely visual and never change scoring, balance, or the leaderboard."
      },
      {
        question: "Do I need an account?",
        answer: "No. Scores, settings, and unlocked looks are saved on your device. Leaderboards use your existing Game Center profile if you're signed in."
      },
      {
        question: "Is Critter Scale available on Android?",
        answer: "No. Critter Scale is iOS only right now."
      }
    ],
    screenshots: [
      "/appscreenshots/critterscale/01-balance-the-critters-iphone-1242x2688.png",
      "/appscreenshots/critterscale/02-mind-the-water-iphone-1242x2688.png",
      "/appscreenshots/critterscale/03-meet-the-specials-iphone-1242x2688.png",
      "/appscreenshots/critterscale/04-tap-left-tap-right-iphone-1242x2688.png",
      "/appscreenshots/critterscale/05-keep-it-level-iphone-1242x2688.png",
      "/appscreenshots/critterscale/06-dress-up-your-scale-iphone-1242x2688.png",
      "/appscreenshots/critterscale/07-beat-your-best-iphone-1242x2688.png"
    ],
    appStoreUrl: "https://apps.apple.com/us/app/critter-scale-balance-game/id6811691504"
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
        answer: "Yes. GetPDF.me is free to use in your browser."
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
        question: "Is it the same as the mobile app?",
        answer: "GetPDF.me is the browser version of GetPDF, with editing, merging, splitting, compression, and signatures that run on your device."
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
