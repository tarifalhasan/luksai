import { useTranslations } from "next-intl";
import Image from "next/image";

const SocialSession3 = () => {
  const t = useTranslations("SocialSection3");
  return (
    <section className=" py-10 lg:py-16 container">
      <div className=" space-y-5">
        <h2 className="text-center">{t("title")}</h2>
        <p className="text-center">{t("description")}</p>
      </div>
      <div className=" pt-12">
        <Image
          src={"/images/social/session-3/dashboard.webp"}
          width={1140}
          height={405}
          quality={80}
          className=" w-full h-auto object-cover"
          alt="1119.136px"
        />
      </div>
    </section>
  );
};

export default SocialSession3;
