import { ITestimonial } from "@/interfaces";
import { useTranslations } from "next-intl";
import Testimonial from "./Testimonial";

const HomeSession7 = ({ data }: { data: ITestimonial[] }) => {
  const t = useTranslations("HomeSession7");
  return (
    <section>
      <div className="container">
        <div className=" py-6 max-w-[781px] block mx-auto space-y-3">
          <div>
            <h2
              data-aos-duration="2000"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="  text-center"
            >
              {t("title")}
            </h2>
          </div>
        </div>
      </div>
      <Testimonial data={data} />
    </section>
  );
};

export default HomeSession7;
