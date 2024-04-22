import SolutionSession2 from "@/components/pages/solutions/Session2";
import SolutionsSession3 from "@/components/pages/solutions/Session3";
import SolutionsSession4 from "@/components/pages/solutions/Session4";
import SolutionsHero from "@/components/pages/solutions/SolutionsHero";

const page = () => {
  return (
    <>
      <SolutionsHero />
      <SolutionSession2 />
      <SolutionsSession3 />
      <SolutionsSession4 />
    </>
  );
};

export default page;
