import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://surajkumarsah.dev"),
  title: "Suraj Kumar Sah | Full-Stack Developer, Nepal",
  description:
    "Portfolio of Suraj Kumar Sah — final-year BSc IT student and full-stack developer building secure, scalable web applications with Node.js, React, and PostgreSQL. Based in Kathmandu, Nepal.",
  keywords: [
    "Suraj Kumar Sah",
    "Full-Stack Developer Nepal",
    "Node.js Developer",
    "React Developer Kathmandu",
    "BSc IT Nepal",
  ],
  authors: [{ name: "Suraj Kumar Sah" }],
  openGraph: {
    title: "Suraj Kumar Sah | Full-Stack Developer",
    description:
      "Final-year BSc IT student and full-stack developer crafting secure, scalable web applications.",
    url: "https://surajkumarsah.dev",
    siteName: "Suraj Kumar Sah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Kumar Sah | Full-Stack Developer",
    description:
      "Final-year BSc IT student and full-stack developer crafting secure, scalable web applications.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Self-hosted via Bunny Fonts (no-cookie, GDPR friendly) or replace with local woff2 files */}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=space-grotesk:500,600,700|inter:400,500,600|jetbrains-mono:400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
