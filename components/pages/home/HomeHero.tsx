import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";

const HomeHero = () => {
  const t = useTranslations("HomeSection1");
  return (
    <div className=" py-10 relative overflow-hidden container flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className=" space-y-6 xl:space-y-8  basis-[70%]"
      >
        <div className="max-w-[625px]">
          <h2 data-aos-easing="ease-in-sine" className="">
            {t("title")}
          </h2>
        </div>
        <p className=" max-w-[625px] text-skin-blue-gray">{t("description")}</p>
        <div>
          <Button className=" gap-4">
            Get Started <FaArrowRightLong />
          </Button>
        </div>
        <div className=" basis-[30%] flex items-center gap-3">
          <div className="inline-flex items-center  -space-x-5">
            <Avatar className=" border-2 border-transparent">
              <AvatarImage src="/images/home/session-1/customer-1.webp" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white">
              <AvatarImage
                className=" "
                src="/images/home/session-1/customer-2.webp"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white">
              <AvatarImage src="/images/home/session-1/customer-3.webp" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className=" inline-flex items-center gap-1">
              <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
              <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
              <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
              <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
              <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
              <span className=" text-base font-bold text-skin-dark-900">
                5.0
              </span>
            </div>
            <div>
              <h5 className=" text-base font-bold text-skin-dark-900">
                {t("satisfied_user")}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className=" flex gap-7 justify-center lg:justify-stretch items-center"
      >
        <div className=" relative">
          <Image
            src={"/images/home-hero.webp"}
            alt="home hero"
            width={486}
            className=" mx-auto block"
            height={475}
          />
          <div className=" hidden lg:block absolute top-[72%] -left-[35%]">
            <h3 className=" rounded-[24px_24px_24px_0px] bg-skin-yellow-accent p-4 text-xl font-bold text-skin-dark-900">
              Create an account <br /> for free
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
