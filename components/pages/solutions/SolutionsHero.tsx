import { useTranslations } from "next-intl";
import Image from "next/image";

const SolutionsHero = () => {
  const t = useTranslations("solutionsHero");
  return (
    <section className=" py-6 relative z-40 min-h-">
      <div className="   container flex flex-col lg:flex-row gap-10 lg:items-start ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="  lg:pt-12 space-y-4"
        >
          <h2 className=" max-w-[460.451px]">{t("title")}</h2>
          <p className=" max-w-[528px]">{t("description")}</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Image
            width={859}
            height={738}
            alt="luksai bg"
            src={"/images/solutions/session-1/background.webp"}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
