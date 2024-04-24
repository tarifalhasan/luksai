import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSession1 = () => {
  const t = useTranslations("AboutSession1");
  return (
    <section className="container relative py-10">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className=" grid  rounded-20 relative overflow-hidden lg:grid-cols-2"
      >
        <div className=" overflow-hidden relative min-h-[240px] lg:min-h-[399px] flex items-center justify-center bg-skin-navy-blue px-4 lg:px-10 xl:px-14">
          <p className=" max-w-[432.503px] relative z-30 leading-[134%] text-base lg:text-xl text-white font-semibold">
            {t("title")}
          </p>
          <Image
            src={"/images/about/session-1/line.svg"}
            alt="line"
            width={273}
            height={138}
            className="  hidden lg:block absolute top-[80%] z-10  -translate-y-[80%] -right-[17%]"
            quality={80}
          />
        </div>
        <div className="  min-h-[250px] lg:min-h-[399px] w-full bg-cover bg-no-repeat bg-center bg-[url('/images/about/session-1/people.webp')] "></div>
      </div>
      <Image
        src={"/images/about/session-1/star.svg"}
        alt="line"
        width={73}
        height={78}
        className=" absolute lg:top-[12%] z-10 top-5   lg:-translate-y-[12%] -left-[5px]"
        quality={80}
      />
    </section>
  );
};

export default AboutSession1;
