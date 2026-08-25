import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import { profile, siteUrl } from "@/content/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const title = `${profile.fullName} — ${profile.role}`;
const description = profile.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${profile.fullName}`,
  },
  description,
  keywords: ["portfolio", "developer", profile.role, profile.fullName, "Next.js", "TypeScript"],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: profile.fullName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/** Set the theme before first paint so the page never flashes the wrong colours. */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}.reveal-mask>*{transform:none !important;}`}</style>
        </noscript>
      </head>
      <body className={`${inter.variable} ${display.variable} antialiased`}>
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
