import WhereToStart from "@/components/pages/home/WhereToStart";
import AdditionalFeatures from "@/components/pages/solutions/AdditionalFeatures";
import SolutionSession2 from "@/components/pages/solutions/Session2";
import SolutionsSession3 from "@/components/pages/solutions/Session3";
import SolutionsSession4 from "@/components/pages/solutions/Session4";
import SolutionsSession5 from "@/components/pages/solutions/Session5";
import SolutionsSession6 from "@/components/pages/solutions/Session6";
import SolutionsSession8 from "@/components/pages/solutions/Session8";
import SolutionsHero from "@/components/pages/solutions/SolutionsHero";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://luksai.vercel.app/"),
  title: {
    default: "Luksai | Solutions",
    template: `%s | Luksai | Solutions`,
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
      <SolutionsHero />
      <SolutionSession2 />
      <SolutionsSession3 />
      <SolutionsSession4 />
      <SolutionsSession5 />
      <SolutionsSession6 />
      <AdditionalFeatures />
      <SolutionsSession8 />
      <WhereToStart />
    </>
  );
};

export default page;
