import { ISolutionsSection8Data } from "@/interfaces";
import { useMessages } from "next-intl";
import Image from "next/image";

const SolutionsSession8 = () => {
  const message = useMessages();
  const data =
    message.SolutionsSection8Data as unknown as ISolutionsSection8Data[];
  return (
    <section className=" bg-[#F6FCFC] py-10 lg:py-14">
      <div className="container">
        <div>
          <h2 className=" text-center text-skin-navy-blue">Benefits</h2>
        </div>
        <div className=" pt-12 lg:pt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.map((value, index) => (
            <div key={value.id} className=" space-y-4">
              <div>
                <div
                  style={{
                    background: "hsla(200, 67%, 25%, 0.1)",
                  }}
                  className="  mx-auto rounded-lg  grid place-items-center w-[133px] h-[133px]"
                >
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={68}
                    height={68}
                  />
                </div>
              </div>
              <p className=" lg:max-w-[201px] mx-auto text-center text-base font-semibold text-skin-dark-900">
                {value.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSession8;
