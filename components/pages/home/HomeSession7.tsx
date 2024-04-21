import { ITestimonial } from "@/interfaces";
import Testimonial from "./Testimonial";

const HomeSession7 = ({ data }: { data: ITestimonial[] }) => {
  return (
    <section>
      <div className="container">
        <div className=" max-w-[781px] block mx-auto space-y-3">
          <div>
            <h2 className="  text-center">
              What are people saying about Luksai
            </h2>
          </div>
        </div>
      </div>
      <Testimonial data={data} />
    </section>
  );
};

export default HomeSession7;
