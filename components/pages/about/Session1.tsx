import Image from "next/image";

const AboutSession1 = () => {
  return (
    <section className="container relative py-10">
      <div className=" grid  rounded-20 relative overflow-hidden lg:grid-cols-2">
        <div className=" overflow-hidden relative min-h-[240px] lg:min-h-[399px] flex items-center justify-center bg-skin-navy-blue px-4 lg:px-10 xl:px-14">
          <p className=" max-w-[432.503px] relative z-30 leading-[134%] text-base lg:text-xl text-white font-semibold">
            Luksai emerged in the hearts of founders Talita and Lao in 2020 and,
            shortly afterwards, propelled a group of people who believed in the
            idea to join their efforts to make this dream a reality as soon as
            possible.
          </p>
          <Image
            src={"/images/about/session-1/line.svg"}
            alt="line"
            width={273}
            height={138}
            className="  hidden lg:block absolute top-[80%] z-10  -translate-y-[80%] -right-[17%]"
            quality={80}
          />
        </div>
        <div className="  min-h-[250px] lg:min-h-[399px] w-full bg-cover bg-no-repeat bg-center bg-[url('/images/about/session-1/people.webp')] "></div>
      </div>
      <Image
        src={"/images/about/session-1/star.svg"}
        alt="line"
        width={73}
        height={78}
        className=" absolute top-[12%] z-10  -translate-y-[12%] -left-[5px]"
        quality={80}
      />
    </section>
  );
};

export default AboutSession1;
