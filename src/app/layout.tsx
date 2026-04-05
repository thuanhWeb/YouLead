import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "You Lead Coaching | Executive & Leadership Coaching",
    template: "%s | You Lead Coaching",
  },
  description:
    "Transform your leadership with You Lead Coaching. Executive coaching, group programs, and workshops for clarity, confidence, and growth.",
  openGraph: {
    title: "You Lead Coaching | Executive & Leadership Coaching",
    description:
      "Transform your leadership with You Lead Coaching. Executive coaching, group programs, and workshops for clarity, confidence, and growth.",
    type: "website",
    locale: "en_US",
    siteName: "You Lead Coaching",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
