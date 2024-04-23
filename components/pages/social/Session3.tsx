import Image from "next/image";

const SocialSession3 = () => {
  return (
    <section className=" py-10 lg:py-16 container">
      <div className=" space-y-5">
        <h2 className="text-center">Social Impact</h2>
        <p className="text-center">
          As a “Business for Good”, we encourage our creators to make a positive
          social impact on society by donating a portion of their profits to a
          number of serious NGOs that we partner with. We offer the possibility
          for our creators to choose a percentage of profit from each of their
          digital products to give back to communities that are developing
          something good.
        </p>
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
