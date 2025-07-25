import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope,  Germania_One } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

const germania = Germania_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-germania-one',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${germania.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
