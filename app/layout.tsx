import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { metadata as siteContent } from "./content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteContent.title} — ${siteContent.subtitle}`,
  description: siteContent.description,
  authors: [{ name: siteContent.title }],
  openGraph: {
    title: siteContent.title,
    description: siteContent.description,
    type: "profile",
    images: ["/profile.JPG"],
  },
  twitter: {
    card: "summary",
    title: siteContent.title,
    description: siteContent.description,
    images: ["/profile.JPG"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
