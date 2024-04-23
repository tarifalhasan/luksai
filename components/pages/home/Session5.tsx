import { useTranslations } from "next-intl";
import Image from "next/image";

const HomeSession5 = () => {
  const t = useTranslations("HomeSession5");
  return (
    <section className=" relative overflow-hidden bg-skin-navy-blue pt-16 pb-4">
      <div className=" relative   container grid lg:grid-cols-2 gap-10 lg:items-center">
        <div className=" space-y-6 lg:space-y-9">
          <div>
            <h2 className=" text-white">{t("title")}</h2>
          </div>
          <p className=" text-sm lg:text-base text-white">{t("description")}</p>
        </div>
        <div className=" relative">
          <Image
            src={"/images/home/session-5/dashboard.webp"}
            alt="dashboard"
            width={585}
            height={444}
            className=" w-[95%] block mx-auto h-auto"
            quality={80}
          />
          <div className=" absolute left-0 bottom-0 h-auto">
            <Image
              src={"/images/home/session-5/card.svg"}
              alt="dashboard"
              width={243}
              className=" max-w-[8rem] sm:max-w-[10rem] lg:max-w-[12rem]"
              height={154}
              quality={80}
            />
          </div>

          <div className=" absolute right-0 -bottom-8 h-auto">
            <Image
              src={"/images/home/session-5/kpi.webp"}
              alt="dashboard"
              className=" max-w-[8rem] sm:max-w-[10rem] lg:max-w-[12rem"
              width={243}
              height={154}
              quality={80}
            />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="54"
          viewBox="0 0 56 54"
          fill="none"
          className=" absolute top-2 hidden sm:block  -left-[5%]"
        >
          <path
            d="M18.9633 33.0592L10.6852 48.7223L20.3463 53.798L28.6243 38.135L38.0866 53.1124L47.327 47.3061L37.8648 32.3287L55.6051 31.643L55.1845 20.761L37.4442 21.4467L45.7222 5.78358L36.0612 0.707825L27.7832 16.3709L18.3209 1.39347L9.08042 7.19976L18.5427 22.1772L0.802408 22.8628L1.22299 33.7449L18.9633 33.0592Z"
            fill="#FDD619"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomeSession5;
