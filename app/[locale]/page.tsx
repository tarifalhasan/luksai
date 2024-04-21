import HomeHero from "@/components/pages/home/HomeHero";
import HomeSession7 from "@/components/pages/home/HomeSession7";
import Session2 from "@/components/pages/home/Session2";
import HomeSession4 from "@/components/pages/home/Session4";
import HomeSession5 from "@/components/pages/home/Session5";
import HomeSession6 from "@/components/pages/home/Session6";
import { ITestimonial } from "@/interfaces";
import { useMessages } from "next-intl";

export default function Home() {
  const messages = useMessages();

  return (
    <>
      <HomeHero />
      <Session2 />
      <HomeSession4 />
      <HomeSession5 />
      <HomeSession6 />
      <HomeSession7
        data={messages.testimonialsData as unknown as ITestimonial[]}
      />
    </>
  );
}
