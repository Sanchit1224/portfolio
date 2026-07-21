import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://sanchit-gade.vercel.app"),
  title: "Sanchit Gade | Backend Engineer & Full Stack Builder",
  description:
    "Portfolio of Sanchit Gade, a backend engineer building scalable systems, microservices, and modern web applications.",
  keywords: [
    "Sanchit Gade",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "Microservices",
    "React",
    "Portfolio",
  ],
  openGraph: {
    title: "Sanchit Gade | Backend Engineer & Full Stack Builder",
    description:
      "Scalable backend systems, distributed services, and modern web applications built with care.",
    url: "https://sanchit-gade.vercel.app",
    siteName: "Sanchit Gade",
    type: "website",
    images: [{ url: "/profile.JPEG", width: 1200, height: 630, alt: "Sanchit Gade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchit Gade | Backend Engineer & Full Stack Builder",
    description:
      "Scalable backend systems, distributed services, and modern web applications built with care.",
    images: ["/profile.JPEG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050816] text-white">{children}</body>
    </html>
  );
}
