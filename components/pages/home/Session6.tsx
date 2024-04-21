import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HomeSession6 = () => {
  const t = useTranslations("HomeSession6");
  return (
    <section className=" py-8 relative overflow-hidden lg:py-12">
      <div className=" relative  space-y-6 container">
        <div className=" max-w-[781px] block mx-auto space-y-3">
          <div>
            <h2 className=" text-center">{t("title")}</h2>
          </div>
          <p className=" text-center">{t("description")}</p>
          <div>
            <Image
              width={696}
              height={463}
              quality={80}
              className=" max-w-[20rem] lg:max-w-[34em]  xl:max-w-[40rem] 2xl:max-w-[44rem] block mx-auto lg:w-full object-cover"
              alt="Schedule a Demo Call with one of our team members"
              src={"/images/home/session-6/person-call.webp"}
            />
          </div>
          <div className=" flex justify-center">
            <Button className=" bg-skin-dark-900 hover:bg-skin-dark-900/80  gap-4">
              Schedule Demo Call{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="12"
                viewBox="0 0 26 12"
                fill="none"
              >
                <path
                  d="M1.53497 5.25C1.12076 5.25 0.784973 5.58579 0.784973 6C0.784973 6.41421 1.12076 6.75 1.53497 6.75V5.25ZM25.7253 6.53033C26.0182 6.23744 26.0182 5.76256 25.7253 5.46967L20.9524 0.696699C20.6595 0.403806 20.1846 0.403806 19.8917 0.696699C19.5988 0.989593 19.5988 1.46447 19.8917 1.75736L24.1344 6L19.8917 10.2426C19.5988 10.5355 19.5988 11.0104 19.8917 11.3033C20.1846 11.5962 20.6595 11.5962 20.9524 11.3033L25.7253 6.53033ZM1.53497 6.75H25.195V5.25H1.53497V6.75Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </div>
        <Image
          width={108}
          height={115}
          className=" hidden  lg:block absolute -right-10 top-[60%]"
          quality={80}
          src={"/images/home/session-6/person-1.webp"}
          alt=""
        />
        <Image
          width={80}
          height={108}
          className=" absolute  hidden  lg:block -left-10 top-[55%]"
          quality={80}
          src={"/images/home/session-6/person-2.webp"}
          alt=""
        />
        <Image
          width={60}
          height={80}
          className=" absolute  hidden  lg:block left-[10%] top-[62%]"
          quality={80}
          src={"/images/home/session-6/person-5.webp"}
          alt=""
        />
        <Image
          width={60}
          height={80}
          className=" absolute  hidden  lg:block left-[10%] top-[42%]"
          quality={80}
          src={"/images/home/session-6/person-6.webp"}
          alt=""
        />

        <Image
          width={60}
          height={80}
          className=" absolute  hidden  lg:block right-[10%] top-[70%]"
          quality={80}
          src={"/images/home/session-6/person-3.webp"}
          alt=""
        />
        <Image
          width={60}
          height={80}
          className=" absolute   hidden  lg:block right-[5%] top-[45%]"
          quality={80}
          src={"/images/home/session-6/person-4.webp"}
          alt=""
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="325"
        viewBox="0 0 160 325"
        fill="none"
        className=" absolute opacity-[0.13] left-0 top-8"
      >
        <path
          d="M-66.508 196.741L-121.254 291.564L-62.9244 325.241L-8.17838 230.418L46.5677 325.241L104.897 291.564L50.1512 196.741H159.643V129.388H50.1512L104.897 34.5653L46.5677 0.888672L-8.17838 95.7117L-62.9245 0.888672L-121.254 34.5653L-66.5079 129.388H-176V196.741H-66.508Z"
          fill="#4FC4D0"
        />
      </svg>
    </section>
  );
};

export default HomeSession6;
