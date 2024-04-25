import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeSession4 = () => {
  const t = useTranslations("HomeSession4");
  return (
    <section className=" pt-[7.5rem] pb-6 lg:pb-0  bg-[#F6FCFC]">
      <div className="   gap-10 items-center container grid lg:grid-cols-2">
        <div>
          <div
            data-aos-duration="2000"
            data-aos="fade-right"
            className=" relative w-full block mx-auto  lg:max-w-[440px] bg-primary h-[380px] rounded-[150px_0_0_0]"
          >
            <Image
              className=" max-h-[480px] absolute bottom-0 left-1/2 -translate-x-1/2"
              src={
                "https://assets.luksai.com/images/website/home/session-4/woman.webp"
              }
              height={480}
              alt="wemen"
              width={332}
            />
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-left"
          className=" space-y-5 lg:space-y-8"
        >
          <div className=" lg:max-w-[435.366px]">
            <h2>{t("title")}</h2>
          </div>
          <div className=" space-y-2">
            <p>{t("description")}</p>
            <Button className=" gap-4">
              {t("btnText")} <FaArrowRightLong />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSession4;
