"use client"; // Make sure this is at the top of your file


import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider
import "./globals.css";
import { useState, useEffect } from "react";
import { metadata } from "./metadata"; // Import metadata from the separate file
import Head from "next/head"; // Import Next.js Head component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only mounted after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent server and client mismatch
    return <html lang="en"><body /></html>;
  }

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags or custom headers here */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
