import { useTranslations } from "next-intl";

const HomeSession8 = ({ data }: { data: string[] }) => {
  const t = useTranslations("HomeSession8");

  return (
    <section className=" py-10  space-y-6 container">
      <div className=" max-w-[901px] block mx-auto space-y-3">
        <div className=" space-y-4">
          <h2 className=" text-center">{t("title")}</h2>
          <p className=" text-center text-skin-blue-gray">{t("description")}</p>
        </div>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {data?.map((item, i) => (
          <div
            key={i}
            className="  hover:bg-skin-yellow-accent  transition-all duration-500 border  rounded-[10px] inline-flex items-center border-black justify-center h-[60px] sm:h-[88px]"
          >
            <p className=" text-base sm:text-xl font-bold text-skin-dark-900">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSession8;
