import FrequentlyAskedQuestions from "@/components/common/FrequentlyAskedQuestions";
import Allplans from "@/components/pages/pricing/Allplans";
import PricingHero from "@/components/pages/pricing/PricingHero";
import PricingSession5 from "@/components/pages/pricing/PricingSession5";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://luksai.vercel.app/"),
  title: {
    default: "Luksai | Pricing",
    template: `%s | Luksai | Pricing`,
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

const Pricing = () => {
  return (
    <>
      <PricingHero />

      <Allplans />
      <FrequentlyAskedQuestions />
      <PricingSession5 />
    </>
  );
};

export default Pricing;
