import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ITestimonial } from "@/interfaces";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";

const Testimonial = ({ data }: { data: ITestimonial[] }) => {
  return (
    <section
      id="testimonial"
      className=" py-12 lg:py-[72px] text-white bg-skin-navy-blue"
    >
      <div className="  container  space-y-12">
        <Carousel className="  relative max-w-[78%] mx-auto">
          <CarouselContent className="">
            {data?.map((item, index) => (
              <CarouselItem key={index}>
                <div className=" flex flex-col gap-6 sm:flex-row items-center justify-between">
                  <div className=" max-w-[320.994px]  space-y-4">
                    <p className=" text-center sm:text-left  text-white text-base xl:text-xl">
                      {item.title}
                    </p>
                    <div className=" flex justify-center sm:justify-stretch items-center gap-1">
                      <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
                      <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
                      <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
                      <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
                      <FaStar className=" w-6 h-6 text-skin-yellow-accent" />
                    </div>
                    <div className="flex justify-center sm:justify-stretch">
                      <Button className=" gap-4">
                        Get Started <FaArrowRightLong />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Avatar className=" border-[8px] border-white w-[12rem] h-[12rem] lg:w-[15rem] lg:h-[15rem] xl:w-[17rem] xl:h-[17rem]">
                      <AvatarImage src={item.author.avatar} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=" pt-5">
                      <p className=" text-center text-white font-bold text-2xl xl:text-4xl">
                        {item.author.name}
                      </p>
                      <p className=" text-center font-normal text-sm sm:text-base">
                        {item.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
