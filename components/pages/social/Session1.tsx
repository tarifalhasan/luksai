import Image from "next/image";

const SocialSession1 = () => {
  return (
    <section className=" container   gap-8 py-10 lg:py-12 grid lg:grid-cols-2 ">
      <div className="  flex flex-col justify-end">
        <div className=" space-y-4">
          <h2 className="  font-bold  xl:text-6xl text-skin-dark-900 max-w-[409.381px]">
            It&apos;s not about business. It&apos;s about people
          </h2>
          <p className=" max-w-[521.469px] text-skin-blue-gray">
            We believe that everyone has a unique purpose that can transform
            lives. Luksai is a collaborative platform that connects the digital
            entrepreneur to social actions around the world.
          </p>
        </div>
      </div>
      <div className="">
        <Image
          src={"/images/social/session-1/hero.webp"}
          alt="We believe that everyone has a unique purpose that can transform
            lives. Luksai is a collaborative platform that connects the digital
            entrepreneur to social actions around the world."
          width={668}
          height={496}
          className=" w-full"
          quality={80}
        />
      </div>
    </section>
  );
};

export default SocialSession1;
