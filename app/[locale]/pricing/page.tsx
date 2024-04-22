import FrequentlyAskedQuestions from "@/components/common/FrequentlyAskedQuestions";
import Allplans from "@/components/pages/pricing/Allplans";
import PricingHero from "@/components/pages/pricing/PricingHero";
import PricingSession5 from "@/components/pages/pricing/PricingSession5";
import PricingTable from "@/components/pages/pricing/PricingTable";

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingTable />
      <Allplans />
      <FrequentlyAskedQuestions />
      <PricingSession5 />
    </>
  );
};

export default Pricing;
