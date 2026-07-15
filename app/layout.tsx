import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziphozenkosi Ndlovu | Youth Leadership & Health Advocacy",
  description:
    "Portfolio for Ziphozenkosi Ndlovu, a youth leadership, health advocacy, and strategic communications professional.",
  keywords: [
    "Ziphozenkosi Ndlovu",
    "youth leadership",
    "health advocacy",
    "strategic communications",
    "Zimbabwe",
    "UNDP Impact 2025",
  ],
  authors: [{ name: "Ziphozenkosi Ndlovu" }],
  creator: "Ziphozenkosi Ndlovu",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
  },
  openGraph: {
    title: "Ziphozenkosi Ndlovu | Youth Leadership & Health Advocacy",
    description:
      "Youth leadership, health advocacy, strategic communications, and creative portfolio work rooted in Zimbabwe.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ziphozenkosi Ndlovu | Youth Leadership & Health Advocacy",
    description:
      "Youth leadership, health advocacy, strategic communications, and creative portfolio work rooted in Zimbabwe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
