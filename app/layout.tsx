import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "LifeReplay — Save what just happened", template: "%s | LifeReplay" },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: { title: "LifeReplay — Save what just happened", description: site.description, type: "website", url: site.url, images: [{ url: "/og.png", width: 1200, height: 630, alt: "LifeReplay — Life doesn't have a replay button. Now it does." }] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /></body></html>;
}
