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
  title: "Marco De Vincentiis | Consulente Informatico & Web Developer",
  description: "Portfolio personale di Marco De Vincentiis. Sviluppo soluzioni web con Next.js e React.",
  openGraph: {
    title: "Marco De Vincentiis | Web Developer",
    description: "Portfolio e progetti web.",
    url: "https://marcodv.com",
    siteName: "Marco De Vincentiis",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">{children}</body>
    </html>
  );
}
