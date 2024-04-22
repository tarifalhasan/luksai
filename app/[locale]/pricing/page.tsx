import FrequentlyAskedQuestions from "@/components/common/FrequentlyAskedQuestions";
import Allplans from "@/components/pages/pricing/Allplans";
import PricingHero from "@/components/pages/pricing/PricingHero";
import PricingTable from "@/components/pages/pricing/PricingTable";

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingTable />
      <Allplans />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default Pricing;
