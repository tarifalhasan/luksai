import { useTranslations } from "next-intl";
import Session3VerticalStepper from "./Session3VerticalStepper";

const HomeSection3 = () => {
  const t = useTranslations("HomeSection3");
  return (
    <section className=" py-6 lg:py-10 container">
      <div
        data-aos-duration="2000"
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
        className=" space-y-5"
      >
        <div>
          <h2 className=" text-center">{t("title")}</h2>
        </div>
        <p className=" text-center max-w-[606px] block mx-auto">
          {t("description")}
        </p>
      </div>
      <Session3VerticalStepper />
    </section>
  );
};

export default HomeSection3;
