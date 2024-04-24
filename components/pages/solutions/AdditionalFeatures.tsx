import { Button } from "@/components/ui/button";
import { IAdditionalFeatures } from "@/interfaces";
import { useMessages } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimationContainer from "../AnimationContainer";
import AnimationItem from "../AnimationItem";

const AdditionalFeatures = () => {
  const messages = useMessages();
  const data = messages.AdditionalFeatures as unknown as IAdditionalFeatures[];
  return (
    <section className=" container py-9 lg:py-12">
      <div className=" ">
        <h2
          data-aos-duration="2000"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          className=" text-center"
        >
          Additional Features
        </h2>
      </div>
      <AnimationContainer containerClass=" py-14 lg:py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((item) => (
          <AnimationItem className=" space-y-4" key={item.id}>
            <div>
              <h4 className=" text-xl font-bold">{item.title}</h4>
            </div>
            <p className=" text-base font-normal leading-[187.5%]">
              {item.description}
            </p>
          </AnimationItem>
        ))}
      </AnimationContainer>
      <div className="flex items-center justify-center">
        <Button className=" gap-4">
          Schedule Demo Call <FaArrowRightLong />
        </Button>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
