import AdditionalFeatures from "@/components/pages/solutions/AdditionalFeatures";
import SolutionSession2 from "@/components/pages/solutions/Session2";
import SolutionsSession3 from "@/components/pages/solutions/Session3";
import SolutionsSession4 from "@/components/pages/solutions/Session4";
import SolutionsSession5 from "@/components/pages/solutions/Session5";
import SolutionsSession6 from "@/components/pages/solutions/Session6";
import SolutionsHero from "@/components/pages/solutions/SolutionsHero";

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
    </>
  );
};

export default page;
