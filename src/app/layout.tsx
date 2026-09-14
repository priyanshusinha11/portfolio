import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshusinha.com"),
  title: "Priyanshu Sinha",
  description: "Building consumer brands that reach millions of people.",
  openGraph: {
    title: "Priyanshu Sinha",
    description: "Building consumer brands that reach millions of people.",
    url: "https://priyanshusinha.com",
    siteName: "Priyanshu Sinha",
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
      <body className={`${plexMono.variable} font-mono`}>
        {children}
      </body>
    </html>
  );
}
