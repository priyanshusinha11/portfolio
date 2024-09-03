import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyanshu Sinha",
  description: "Priyanshu Sinha, Software Developer, KIIT Bhubaneswar Undergraduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-[100%]`}>
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.05]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > 
        <Navbar/>
          <div>{children}</div>
          <Footer/>
        </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
