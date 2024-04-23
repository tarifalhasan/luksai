import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const SocialSession4 = () => {
  const t = useTranslations("SocialSection4");
  return (
    <section className=" py-10 lg:py-16">
      <div className=" container space-y-4">
        <div>
          <div>
            <p className=" text-skin-blue-gray text-sm lg:text-base text-center">
              {t("subTitle")}
            </p>
          </div>
          <div>
            <h2 className=" text-center">{t("title")}</h2>
          </div>
          <div className=" pt-7">
            <p className="text-center  px-4 block mx-auto">
              {t("description")}
            </p>
          </div>
        </div>
        <div className=" grid pt-8  rounded-20 relative overflow-hidden lg:grid-cols-2">
          <div className=" overflow-hidden relative min-h-[240px] lg:min-h-[319px]  bg-skin-navy-blue px-6 flex flex-col justify-center">
            <div className=" space-y-4">
              <h3 className=" text-2xl lg:text-3xl xl:text-4xl text-skin-yellow-accent font-bold">
                {t("contentTitle")}
              </h3>
              <p className=" text-sm  lg:text-lg text-white font-semibold max-w-[413px]">
                {t("contentDescription")}
              </p>
              <Button className=" gap-4">
                Book a Call <FaArrowRightLong />
              </Button>
            </div>
            <Image
              src={"/images/social/session-4/line.svg"}
              alt="line"
              width={273}
              height={138}
              className="  hidden lg:block absolute top-[80%] z-10  -translate-y-[80%] -right-[17%]"
              quality={80}
            />
          </div>
          <div className="  min-h-[250px] lg:min-h-[319px] w-full bg-cover bg-no-repeat bg-center bg-[url('/images/social/session-4/people.webp')] "></div>
        </div>
      </div>
    </section>
  );
};

export default SocialSession4;
