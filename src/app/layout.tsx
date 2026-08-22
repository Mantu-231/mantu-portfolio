import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mantu Kumar | Software Developer",
  description:
    "Portfolio of Mantu Kumar — Computer Science Engineering student focused on backend development, APIs, data systems, and intelligent software.",
  keywords: [
    "Mantu Kumar",
    "Software Developer",
    "Backend Developer",
    "Python Developer",
    "FastAPI",
    "Computer Science",
    "GITAM University",
  ],
  authors: [{ name: "Mantu Kumar" }],
  creator: "Mantu Kumar",
  openGraph: {
    title: "Mantu Kumar | Software Developer",
    description:
      "Software developer focused on backend systems, APIs, data, and intelligent software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
