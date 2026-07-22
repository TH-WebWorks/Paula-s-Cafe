import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.VERCEL_URL != null
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Paula's Cafe | Valley Junction",
  description:
    "Good food and friendly service at 524 Elm Street in Valley Junction, West Des Moines.",
  openGraph: {
    title: "Paula's Cafe | Valley Junction",
    description:
      "Good food. Good people. A neighborhood lunch counter in Valley Junction.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Paula's Cafe in Valley Junction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
