import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://surajkumarsah.dev"),
  title: "Suraj Kumar Sah | Software QA & Full-Stack Developer",
  description:
    "Portfolio of Suraj Kumar Sah — Software QA and Full-Stack Developer based in Kathmandu, Nepal. Specializing in React, Node.js, backend architecture, and rigorous edge-case testing.",
  keywords: [
    "Suraj Kumar Sah",
    "Software QA Internship Nepal",
    "QA Engineer Kathmandu",
    "Full-Stack Developer Nepal",
    "Node.js Developer",
    "React Developer",
    "Software Testing",
    "MERN Stack",
  ],
  authors: [{ name: "Suraj Kumar Sah" }],
  openGraph: {
    title: "Suraj Kumar Sah | Software QA & Full-Stack Developer",
    description:
      "Architecture first. Details always. Crafting secure, scalable web applications and testing them to perfection.",
    url: "https://surajkumarsah.dev",
    siteName: "Suraj Kumar Sah Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Kumar Sah | Software QA & Full-Stack Developer",
    description:
      "Architecture first. Details always. Crafting secure, scalable web applications and testing them to perfection.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Self-hosted via Bunny Fonts (no-cookie, GDPR friendly) */}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=space-grotesk:500,600,700|inter:400,500,600|jetbrains-mono:400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Added antialiased and text-rendering optimizations for the heavy typography */}
      <body className="bg-navy-950 text-mist-100 antialiased selection:bg-cyan-400/30 selection:text-cyan-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}