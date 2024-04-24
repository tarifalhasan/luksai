import "@/styles/globals.css";
import { Open_Sans as FontSans } from "next/font/google";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileHeader from "@/components/common/MobileHeader";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Luksai",
    template: `%s | Luksai`,
  },
  description: "description of your application",
  verification: {
    google: `google-site-verification=${process.env.GOOGLE_SITE_VERIFICATION}`,
  },
};
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
        <Footer />
      </body>
    </html>
  );
}
