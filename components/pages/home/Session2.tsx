import { useTranslations } from "next-intl";
import Image from "next/image";

const Session2 = () => {
  const t = useTranslations("HomeSection2");
  return (
    <section className="container">
      <div className="  rounded-20  py-10 lg:py-[8rem] relative overflow-hidden my-5 lg:my-10 bg-[#F3F4F6] flex flex-col px-5 lg:flex-row gap-12  lg:justify-between lg:items-center ">
        <div className=" w-full lg:w-1/2">
          <div className=" relative  z-20">
            <div className=" rounded-lg  block mx-auto w-[80%] sm:w-[60%] h-[280px] sm:h-[325.09px] bg-skin-dark-900 rotate-[-15deg]"></div>
            <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  block mx-auto w-[80%]  rounded-lg  sm:w-[60%] h-[280px] sm:h-[325.09px] bg-skin-navy-blue ">
              <div>
                <Image
                  width={274}
                  className="absolute  z-50  h-auto max-h-[320px] lg:max-h-[450px] left-1/2  bottom-0 -translate-x-1/2 "
                  height={500}
                  src={
                    "https://assets.luksai.com/images/website/home/session-2/woman.webp"
                  }
                  alt="men"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-left"
          className="  relative z-20 space-y-5 lg:space-y-8 w-full lg:w-1/2"
        >
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
          className=" hidden lg:block absolute bottom-0 left-0 z-10"
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
          className=" absolute hidden sm:block z-10 left-0 top-[55%] sm:top-[70%]"
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
          className=" absolute hidden sm:block left-3 top-10 z-20"
        >
          <path
            d="M21.204 37.4373L10.602 55.5627L21.898 62L32.5 43.8746L43.102 62L54.398 55.5627L43.796 37.4373H65V24.5627H43.796L54.398 6.43729L43.102 0L32.5 18.1254L21.898 0L10.602 6.43729L21.204 24.5627H0V37.4373H21.204Z"
            fill="#FFDE7A"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="115"
          height="161"
          viewBox="0 0 115 161"
          fill="none"
          className=" absolute top-0 right-0 hidden lg:block"
        >
          <path
            d="M50.5336 21.5023C60.6015 11.9679 73.3649 5.77065 87.0838 3.75553C100.803 1.74042 114.809 4.00553 127.193 10.242C139.578 16.4785 149.737 26.3829 156.287 38.6046C162.836 50.8264 165.457 64.7707 163.791 78.5363L163.117 78.4548C164.766 64.8278 162.172 51.024 155.688 38.9254C149.205 26.8268 139.148 17.0222 126.888 10.8486C114.628 4.6749 100.763 2.4326 87.1824 4.42742C73.6019 6.42221 60.967 12.557 51.0006 21.9954L50.5336 21.5023Z"
            fill="#000123"
          />
          <path
            d="M143.224 119.378C133.156 128.913 120.393 135.11 106.674 137.125C92.9554 139.14 78.9489 136.875 66.5645 130.639C54.1802 124.402 44.0206 114.498 37.4712 102.276C30.9218 90.0542 28.3012 76.1099 29.9667 62.3443L30.6409 62.4258C28.9921 76.0528 31.5863 89.8566 38.0698 101.955C44.5532 114.054 54.6104 123.858 66.87 130.032C79.1296 136.206 92.9949 138.448 106.575 136.453C120.156 134.458 132.791 128.324 142.757 118.885L143.224 119.378Z"
            fill="#000123"
          />
          <path
            d="M18.669 71.4052L19.6879 70.605C25.0011 66.4326 26.1282 58.8357 22.2553 53.3003L21.5126 52.2388L22.3128 53.2577C26.4852 58.5709 34.0821 59.698 39.6175 55.8251L40.679 55.0824L39.6601 55.8826C34.3469 60.055 33.2198 67.6519 37.0927 73.1873L37.8354 74.2488L37.0352 73.2299C32.8628 67.9167 25.2659 66.7896 19.7305 70.6625L18.669 71.4052Z"
            fill="#000123"
          />
          <path
            d="M45.8834 11.1304L46.2782 12.3643C48.3372 18.7986 55.0649 22.5028 61.603 20.802L62.8569 20.4758L61.6229 20.8707C55.1886 22.9297 51.4844 29.6574 53.1852 36.1955L53.5114 37.4494L53.1165 36.2154C51.0575 29.7811 44.3298 26.0769 37.7917 27.7777L36.5379 28.1039L37.7718 27.709C44.2061 25.65 47.9103 18.9223 46.2095 12.3842L45.8834 11.1304Z"
            fill="#000123"
          />
        </svg>
      </div>
    </section>
  );
};

export default Session2;
