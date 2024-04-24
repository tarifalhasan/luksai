"use client";

import { Button } from "@/components/ui/button";
import { IDiversify } from "@/interfaces";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Diversify = ({ data }: { data: IDiversify[] }) => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <>
      <div className=" relative z-20 pt-8 grid gap-9 items-center lg:grid-cols-2">
        <div
          data-aos-duration="2000"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          className="flex flex-col gap-y-3 lg:max-w-[351px]"
        >
          {data.map((item, i) => (
            <button
              onClick={() => setActiveItem(i)}
              className={cn(
                " bg-skin-navy-blue text-base xl:text-2xl font-bold text-white h-14 items-center rounded-lg inline-flex justify-center px-4",
                i === activeItem && "bg-skin-yellow-accent text-skin-dark-900"
              )}
              key={item.id + i}
            >
              {item.name}
            </button>
          ))}
          <div className=" pt-5">
            <Button className=" bg-skin-dark-900 hover:bg-skin-dark-900/80 gap-4">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  d="M1.27235 5.25C0.858141 5.25 0.522354 5.58579 0.522354 6C0.522354 6.41421 0.858141 6.75 1.27235 6.75V5.25ZM17.785 6.53033C18.0779 6.23744 18.0779 5.76256 17.785 5.46967L13.012 0.696699C12.7191 0.403806 12.2442 0.403806 11.9514 0.696699C11.6585 0.989593 11.6585 1.46447 11.9514 1.75736L16.194 6L11.9514 10.2426C11.6585 10.5355 11.6585 11.0104 11.9514 11.3033C12.2442 11.5962 12.7191 11.5962 13.012 11.3033L17.785 6.53033ZM1.27235 6.75H17.2547V5.25H1.27235V6.75Z"
                  fill="#EDFEFF"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <div className=" relative mx-auto w-full sm:w-[349px]">
            <div className="  w-full  h-[279px] rounded-20 bg-skin-dark-900 rotate-[8.159deg]"></div>
            <div
              style={{
                backgroundImage: `url(${data[activeItem]?.imageSrc})`,
              }}
              className=" absolute left-1/2 bg-no-repeat bg-center bg-cover -translate-x-1/2 top-1/2 -translate-y-1/2  w-full h-[279px] rounded-20 overflow-hidden  "
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diversify;
