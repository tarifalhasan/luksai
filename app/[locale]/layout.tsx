import "@/styles/globals.css";
import { Open_Sans as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { AOSInit } from "@/components/aos";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileHeader from "@/components/common/MobileHeader";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.webp" sizes="any" />
      </head>

      <AOSInit />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Header />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
