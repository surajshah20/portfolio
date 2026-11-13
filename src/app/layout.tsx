import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://surajkumarsah.dev"),
  title: "Suraj Kumar Sah | Full-Stack Software Engineer",
  description:
    "Portfolio of Suraj Kumar Sah — Full-Stack Software Engineer based in Kathmandu, Nepal. Creator of BlushBook and DevGuard AI. Specializing in React, Node.js, PostgreSQL, static analysis, and complex client-side state.",
  keywords: [
    "Suraj Kumar Sah",
    "Full-Stack Software Engineer",
    "React Developer",
    "Node.js Developer",
    "PostgreSQL",
    "Zustand",
    "DevGuard AI",
    "BlushBook",
    "Kathmandu Nepal Developer",
    "RESTful APIs",
  ],
  authors: [{ name: "Suraj Kumar Sah" }],
  openGraph: {
    title: "Suraj Kumar Sah | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with hands-on experience architecting and shipping production React, Node.js, and PostgreSQL web platforms.",
    url: "https://surajkumarsah.dev",
    siteName: "Suraj Kumar Sah Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Kumar Sah | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with hands-on experience architecting and shipping production React, Node.js, and PostgreSQL web platforms.",
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
      <body className="bg-navy-950 text-mist-100 antialiased selection:bg-cyan-400/30 selection:text-cyan-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
