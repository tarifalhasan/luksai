import { useTranslations } from "next-intl";
import SocaialVideo from "./Video";

const SocialSession2 = () => {
  const t = useTranslations("SocialSection2");
  return (
    <section>
      <div className=" lg:h-[594.597px] py-10 lg:py-14 space-y-4 bg-[#F6FCFC]">
        <div className=" container">
          <div className=" block mx-auto max-w-[981px] space-y-4">
            <h4 className=" text-xl sm:text-2xl xl:text-3xl font-bold text-skin-dark-900">
              {t("title")}
            </h4>
            <p className="text-center">{t("description")}</p>
          </div>
        </div>
      </div>
      <SocaialVideo />
    </section>
  );
};

export default SocialSession2;
