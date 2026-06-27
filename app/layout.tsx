import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziphozenkosi Ndlovu | Youth Leadership & Health Advocacy",
  description:
    "Portfolio for Ziphozenkosi Ndlovu, a youth leadership, health advocacy, and strategic communications professional.",
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
