import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://student-tech-picks.vercel.app"),

  title: "Student Tech Picks | Smarter Tech Choices",

  description:
    "Research-backed laptop recommendations for students, with practical specs, MBA scores and Amazon links.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Best Laptops for Students 2026 | Student Tech Picks",
    description:
      "Research-backed laptop recommendations for students, with practical specs, MBA scores and Amazon links.",
    url: "https://student-tech-picks.vercel.app/laptops/best-students",
    siteName: "Student Tech Picks",
    images: [
      {
        url: "/student-tech-picks-og-image.png",
        width: 1200,
        height: 630,
        alt: "Student Tech Picks - Best Laptops for Students 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Laptops for Students 2026 | Student Tech Picks",
    description:
      "Research-backed laptop recommendations for students, with practical specs, MBA scores and Amazon links.",
    images: ["/student-tech-picks-og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}