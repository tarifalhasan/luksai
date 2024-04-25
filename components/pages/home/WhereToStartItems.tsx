"use client";
import { IWhereToStart } from "@/interfaces";
import { animateContainer, animateItems } from "@/lib/animation";
import { motion as m } from "framer-motion";
import Image from "next/image";

const WhereToStartItems = ({ data }: { data: IWhereToStart[] }) => {
  return (
    <m.div
      variants={animateContainer}
      initial="hidden"
      exit="exit"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className=" py-10 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-9"
    >
      {data.map((item, index) => (
        <m.div
          variants={animateItems}
          key={item.id}
          className=" flex items-start gap-4"
        >
          <div>
            <div className=" rounded-md w-[85px] h-[85px] bg-primary grid place-items-center">
              <Image src={item.icon} alt={item.name} width={61} height={61} />
            </div>
          </div>
          <div className=" space-y-2">
            <div>
              <h3 className=" text-2xl lg:text-3xl font-semibold">
                {item.name}
              </h3>
            </div>
            <p className=" text-base">{item.description}</p>
          </div>
        </m.div>
      ))}
    </m.div>
  );
};

export default WhereToStartItems;
