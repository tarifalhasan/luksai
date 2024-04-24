import AboutSession1 from "@/components/pages/about/Session1";
import AboutSession2 from "@/components/pages/about/Session2";
import AboutSession3 from "@/components/pages/about/Session3";
import AboutSession4 from "@/components/pages/about/Session4";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://luksai.vercel.app/"),
  title: {
    default: "Luksai | About",
    template: `%s | Luksai | About`,
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
const page = () => {
  return (
    <>
      <AboutSession1 />
      <AboutSession2 />
      <AboutSession3 />
      <AboutSession4 />
    </>
  );
};

export default page;
