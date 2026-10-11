import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAZE — Every Second Counts",
  description:
    "Real-time emergency resource allocator coordinating hospital beds and ambulance routing.",
  openGraph: {
    title: "KAZE — Every Second Counts",
    description: "Real-time emergency resource allocation.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
