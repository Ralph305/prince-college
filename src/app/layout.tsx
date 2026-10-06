import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://princecollege.ac.uk"),
  title: {
    default: "Prince College London | Academic Excellence in Central London",
    template: "%s | Prince College London",
  },
  description:
    "Prince College is an elite academic college in Westminster, London, offering GCSE, A-Level, and BTEC programmes with exceptional university progression to Oxford, Cambridge, and the Russell Group.",
  keywords: [
    "Prince College London",
    "London sixth form college",
    "A-Levels London",
    "GCSE London",
    "BTEC London",
    "Westminster college",
    "Russell Group admissions",
    "Oxbridge preparation",
  ],
  authors: [{ name: "Prince College London Academic Directorate" }],
  openGraph: {
    title: "Prince College London | Academic Excellence in Central London",
    description:
      "Premier Sixth Form and Senior College located in Westminster, London. Rigorous GCSE, A-Level, and BTEC programmes.",
    url: "https://princecollege.ac.uk",
    siteName: "Prince College London",
    images: [
      {
        url: "/images/hero-campus.jpg",
        width: 1200,
        height: 630,
        alt: "Prince College London Historic Quadrangle and Glass Library",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince College London",
    description: "Academic Excellence in Central London. GCSE, A-Level & BTEC Pathways.",
    images: ["/images/hero-campus.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#080D1A] text-slate-900 dark:text-slate-100 antialiased selection:bg-[#C59B27]/30 selection:text-[#0B1E36]">
        {/* Skip to Main Content Link for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C59B27] focus:text-[#0B1E36] focus:font-bold focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
