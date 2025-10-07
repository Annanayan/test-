import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yan Wang - Product Engineer & Designer",
  description: "Product engineer and designer specializing in AI-powered platforms, full-stack development, and user-centered design. From Figma prototypes to deployed applications.",
  keywords: "product engineer, product designer, full-stack developer, AI, machine learning, user experience, UX design, React, TypeScript, Python",
  authors: [{ name: "Yan Wang" }],
  creator: "Yan Wang",
  icons: {
    icon: '/YanSpace.png',
    apple: '/YanSpace.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yanwang.dev",
    title: "Yan Wang - Product Engineer & Designer",
    description: "Product engineer and designer specializing in AI-powered platforms, full-stack development, and user-centered design.",
    siteName: "Yan Wang Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yan Wang - Product Engineer & Designer",
    description: "Product engineer and designer specializing in AI-powered platforms, full-stack development, and user-centered design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-poppins antialiased`}>
        <ScrollToTop />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
