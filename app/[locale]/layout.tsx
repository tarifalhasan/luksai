import "@/styles/globals.css";
import { Open_Sans as FontSans } from "next/font/google";

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
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
