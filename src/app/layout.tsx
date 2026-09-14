import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
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
      <body className={`${plexMono.variable} ${plexSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
