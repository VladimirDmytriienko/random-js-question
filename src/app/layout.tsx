import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from '@/components/site-footer';
import { BackgroundLines } from '@/components/ui/background-lines';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Random  js question",
  description: "Random js question",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundLines className="flex flex-col flex-1">
            <SiteHeader />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <SiteFooter />
          </BackgroundLines>
        </ThemeProvider>
      </body>

    </html>
  );
}
