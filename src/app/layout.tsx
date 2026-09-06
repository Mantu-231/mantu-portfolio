import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mantu-portfolio-eight.vercel.app"),
  title: "Mantu Kumar | Software Engineer & Analyst",
  description:
    "Portfolio of Mantu Kumar — a final-year Computer Science Engineering student building full-stack applications, backend systems, and fintech-focused projects like payment dashboards and reconciliation platforms.",
  keywords: [
    "Mantu Kumar",
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Fintech Developer",
    "Python Developer",
    "FastAPI",
    "React",
    "Next.js",
    "New Grad",
    "Computer Science",
    "GITAM University",
  ],
  authors: [{ name: "Mantu Kumar" }],
  creator: "Mantu Kumar",
  openGraph: {
    title: "Mantu Kumar | Software Engineer & Analyst",
    description:
      "Final-year CS student building full-stack and fintech-focused software — payment dashboards, reconciliation systems, and backend APIs.",
    type: "website",
    url: "https://mantu-portfolio-eight.vercel.app",
    siteName: "Mantu Kumar — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mantu Kumar — Software Engineer & Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantu Kumar | Software Engineer & Analyst",
    description:
      "Final-year CS student building full-stack and fintech-focused software.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
