import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const SolutionsSession5 = () => {
  return (
    <section className="  relative overflow-hidden py-10">
      <div className="  relative container">
        <div className=" grid lg:grid-cols-2 gap-5 lg:items-center">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Image
              src={
                "https://assets.luksai.com/images/website/solutions/session-5/artboard.svg"
              }
              width={539}
              height={403}
              quality={80}
              className=" w-full h-auto object-cover"
              alt="background"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" space-y-4 lg:space-y-7"
          >
            <div>
              <h4 className=" text-2xl font-bold text-skin-dark-900">
                Engaging Content
              </h4>
            </div>
            <p>
              Deliver captivating material that keeps your audience hooked and
              enhances learning outcomes. Our platform supports various formats,
              including video, text, PDFs, downloads, external links, to cater
              to diverse learning preferences and ensure a comprehensive
              educational experience
            </p>
            <Button className=" gap-4">
              Register Now <FaArrowRightLong />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSession5;
