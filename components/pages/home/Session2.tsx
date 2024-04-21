import { useTranslations } from "next-intl";
import Image from "next/image";

const Session2 = () => {
  const t = useTranslations("HomeSection2");
  return (
    <section className=" container rounded-20 py-20 relative overflow-hidden my-5 lg:my-10 bg-[#F3F4F6] flex flex-col px-5 lg:flex-row gap-12  lg:justify-between lg:items-center ">
      <div className=" w-full lg:w-1/2">
        <div className=" relative z-20">
          <div className="  block mx-auto w-[80%] sm:w-[60%] h-[325.09px] bg-skin-dark-900 rotate-[-15deg]"></div>
          <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  block mx-auto w-[80%] sm:w-[60%] h-[325.09px] bg-skin-navy-blue "></div>
          <div>
            <Image
              width={274}
              className="absolute   h-auto max-h-[406px] left-1/2  bottom-0 -translate-x-1/2 "
              height={500}
              src={"/images/home/session-2/woman.webp"}
              alt="women"
            />
          </div>
        </div>
      </div>
      <div className="  relative z-20 space-y-5 lg:space-y-8 w-full lg:w-1/2">
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="107"
        height="114"
        viewBox="0 0 107 114"
        fill="none"
        className=" absolute  hidden sm:block z-10 bottom-0 right-0"
      >
        <path
          d="M47.8232 84.687L24.1932 125.615L49.37 140.151L73 99.2228L96.63 140.151L121.807 125.615L98.1768 84.687H145.437V55.6154H98.1768L121.807 14.6869L96.63 0.151123L73 41.0795L49.37 0.151123L24.1932 14.6869L47.8232 55.6154H0.563232V84.687H47.8232Z"
          fill="#154E6B"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="284"
        height="241"
        viewBox="0 0 284 241"
        fill="none"
        className=" absolute bottom-0 left-0 z-10"
      >
        <path
          opacity="0.1"
          d="M57.1903 196.353L2.44428 291.176L60.7738 324.852L115.52 230.029L170.266 324.852L228.595 291.176L173.849 196.353H283.342V129H173.849L228.596 34.1766L170.266 0.5L115.52 95.323L60.7738 0.5L2.44422 34.1766L57.1903 129H-52.3018V196.353H57.1903Z"
          fill="#4EC4D0"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={74}
        height={40}
        viewBox="0 0 74 40"
        fill="none"
        className=" absolute z-10 left-0 top-[55%] sm:top-[70%]"
      >
        <path
          d="M-93.2483 38.2112C-93.2483 38.2112 36.8276 3.35744 40.5736 2.35371C44.3196 1.34998 -31.9279 29.9026 -36.3607 31.4435C-40.7934 32.9844 42.4037 15.9006 46.2788 14.8622C50.154 13.8239 -15.275 37.8002 -11.7873 36.8657C-8.29968 35.9312 72.4996 18.1656 72.4996 18.1656"
          stroke="#000123"
          strokeWidth={3}
          strokeLinecap="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="62"
        viewBox="0 0 65 62"
        fill="none"
        className=" absolute left-3 top-10 z-20"
      >
        <path
          d="M21.204 37.4373L10.602 55.5627L21.898 62L32.5 43.8746L43.102 62L54.398 55.5627L43.796 37.4373H65V24.5627H43.796L54.398 6.43729L43.102 0L32.5 18.1254L21.898 0L10.602 6.43729L21.204 24.5627H0V37.4373H21.204Z"
          fill="#FFDE7A"
        />
      </svg>
    </section>
  );
};

export default Session2;
