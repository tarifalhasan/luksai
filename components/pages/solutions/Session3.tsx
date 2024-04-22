import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaArrowRightLong } from "react-icons/fa6";

const SolutionsSession3 = () => {
  const slidesData = [
    {
      name: "Intuitive and simple",
      title:
        "In a few clicks you are able to put your digital product to sell.",
      icon: "/images/solutions/session-3/intuitive-and-simple.svg",
    },
    {
      name: "Secure Hosting",
      title:
        "Your intellectual property is our priority. Therefore, we guarantee the security of your data using secure and encrypted hosting.",
      icon: "/images/solutions/session-3/secure-hosting.svg",
    },
    {
      name: "Integrated Checkout",
      title:
        "We make your financial management easier. All in one simple and fast platform.",
      icon: "/images/solutions/session-3/integrated-checkout.svg",
    },
  ];
  return (
    <section className=" bg-primary py-10">
      <div className=" container  ">
        <Carousel>
          <CarouselContent className=" gap-6">
            <CarouselItem className="lg:basis-1/3  basis-full  max-w-[377px]">
              <div className=" space-y-4 ">
                <h2 className=" text-white lg:text-4xl">
                  Our features specially for you
                </h2>
                <p className=" text-white">
                  Streamline your digital product and secure your content:
                </p>
                <Button variant={"secondary"} className=" gap-4">
                  Register Now <FaArrowRightLong />
                </Button>
              </div>
            </CarouselItem>

            {slidesData.map((slide, index) => (
              <CarouselItem
                key={slide.name}
                className=" basis-full lg:basis-[25%] bg-white  rounded-[1rem] flex flex-col items-center justify-center py-10 gap-5"
              >
                <div className="">
                  <div className=" w-14 h-14 rounded-full bg-primary/[0.8]"></div>
                </div>
                <div>
                  <h4 className=" text-xl font-semibold text-skin-dark-900">
                    {slide.name}
                  </h4>
                </div>
                <div className="">
                  <p className=" text-sm font-normal text-skin-blue-gray text-center">
                    {slide.title}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default SolutionsSession3;
