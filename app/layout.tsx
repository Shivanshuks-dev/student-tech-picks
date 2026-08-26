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
    "Practical technology buying guides and recommendations for students.",

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  openGraph: {
    title: "Best Laptops for Students 2026 | Student Tech Picks",
    description:
      "Research-backed laptop recommendations for students with practical specs, MBA scores and Amazon links.",
    url: "https://student-tech-picks.vercel.app/laptops/best-students",
    siteName: "Student Tech Picks",
    type: "website",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Student Tech Picks",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Best Laptops for Students 2026 | Student Tech Picks",
    description:
      "Research-backed laptop recommendations for students.",
    images: ["/icon.svg"],
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