import HomeHero from "@/components/pages/home/HomeHero";
import HomeSession7 from "@/components/pages/home/HomeSession7";
import HomeSection3 from "@/components/pages/home/Section3";
import HomeSession10 from "@/components/pages/home/Session10";
import Session2 from "@/components/pages/home/Session2";
import HomeSession4 from "@/components/pages/home/Session4";
import HomeSession5 from "@/components/pages/home/Session5";
import HomeSession6 from "@/components/pages/home/Session6";
import HomeSession8 from "@/components/pages/home/Session8";
import HomeSession9 from "@/components/pages/home/Session9";
import { ITestimonial } from "@/interfaces";
import { Metadata } from "next";
import { useMessages } from "next-intl";

export const metadata: Metadata = {
  metadataBase: new URL("https://luksai.vercel.app/"),
  title: {
    default: "Luksai | Home",
    template: `%s | Luksai | Home`,
  },
  description: "Description for you appplication",
  alternates: {
    canonical: `https://luksai.vercel.app/`,
    languages: {
      en: "en-US",
      th: "th-th",
    },
  },
};

export default function Home() {
  const messages = useMessages();

  return (
    <>
      <HomeHero />
      <Session2 />
      <HomeSection3 />
      <HomeSession4 />
      <HomeSession5 />
      <HomeSession6 />
      <HomeSession7
        data={messages.testimonialsData as unknown as ITestimonial[]}
      />
      <HomeSession8 data={messages.HomeSession8Data as unknown as string[]} />
      <HomeSession9 />
      <HomeSession10 />
    </>
  );
}
