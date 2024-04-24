"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const Session3VerticalStepper = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = [
    {
      name: "One on One Sessions",
      id: 1,
      content: {
        description:
          "One-to-one mentoring involves a process between a mentor who helps your mentee solve a problem or improve your performance. It focuses on exchanging knowledge and experience on a particular subject or area, showing the best ways to deal with various circumstances. At Luksai, your mentees will have their own access environment where they can re-watch the recording of their session, as well as benefit from the tools and assessments that you offer especially for them.",
        imageSrc: "/images/home/session-3/digital-download.webp",
      },
    },
    {
      name: "Group Mentoring",
      id: 2,
      content: {
        description:
          "One-to-one mentoring involves a process between a mentor who helps your mentee solve a problem or improve your performance. It focuses on exchanging knowledge and experience on a particular subject or area, showing the best ways to deal with various circumstances. At Luksai, your mentees will have their own access environment where they can re-watch the recording of their session, as well as benefit from the tools and assessments that you offer especially for them.",
        imageSrc:
          "https://imgs.search.brave.com/7n6WGnewQy4LrwnwkKYX8o3thtVQ-UaCfCTBpc5jXfo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjQxNzgyMzIzNjMt/MWZiMmIwNzViNjU1/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGJX/VnVkRzl5YVc1bmZH/VnVmREI4ZkRCOGZI/d3c",
      },
    },
    {
      name: "Online Courses",
      id: 3,
      content: {
        description:
          "One-to-one mentoring involves a process between a mentor who helps your mentee solve a problem or improve your performance. It focuses on exchanging knowledge and experience on a particular subject or area, showing the best ways to deal with various circumstances. At Luksai, your mentees will have their own access environment where they can re-watch the recording of their session, as well as benefit from the tools and assessments that you offer especially for them.",
        imageSrc:
          "https://imgs.search.brave.com/-A9LuRei9GNTUReFuumCvphkO1oZXZqKlcmTTjsgSDk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2luZG93c3JlcG9y/dC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDQvbWlj/cm9zb2Z0LWRpZ2l0/YWwtaW1hZ2UtODg2/eDU5MC5qcGc",
      },
    },
    {
      name: "Digital download",
      id: 4,
      content: {
        description:
          "One-to-one mentoring involves a process between a mentor who helps your mentee solve a problem or improve your performance. It focuses on exchanging knowledge and experience on a particular subject or area, showing the best ways to deal with various circumstances. At Luksai, your mentees will have their own access environment where they can re-watch the recording of their session, as well as benefit from the tools and assessments that you offer especially for them.",
        imageSrc: "/images/home/session-3/group-mentoring.webp",
      },
    },
    {
      name: "Webinar",
      id: 5,
      content: {
        description:
          "One-to-one mentoring involves a process between a mentor who helps your mentee solve a problem or improve your performance. It focuses on exchanging knowledge and experience on a particular subject or area, showing the best ways to deal with various circumstances. At Luksai, your mentees will have their own access environment where they can re-watch the recording of their session, as well as benefit from the tools and assessments that you offer especially for them.",
        imageSrc: "/images/home/session-3/group-mentoring.webp",
      },
    },
    {
      name: "Membership",
      id: 6,
      content: {
        description:
          "One-to-one mentoring involves a process between a mentor who helps your mentee solve a problem or improve your performance. It focuses on exchanging knowledge and experience on a particular subject or area, showing the best ways to deal with various circumstances. At Luksai, your mentees will have their own access environment where they can re-watch the recording of their session, as well as benefit from the tools and assessments that you offer especially for them.",
        imageSrc: "/images/home/session-3/group-mentoring.webp",
      },
    },
  ];
  return (
    <div className=" pt-8">
      <div className=" flex-col  sm:flex-row flex items-start gap-8">
        <div className=" grid  grid-cols-8  basis-[calc(30%-2rem)] ">
          <div className=" col-span-1 w-1 h-full "></div>
          <div className=" relative after:absolute after:left-[-22%] after:w-1 after:h-full after:bg-skin-blue-gray col-span-7 flex max-w-[220px] after:z-10 flex-col gap-y-10">
            {data.map((item, index) => (
              <button
                onClick={() => setActiveTab(index)}
                className={cn(
                  " text-lg relative after:absolute  text-left text-skin-blue-gray font-normal",
                  activeTab === index &&
                    "text-primary font-bold after:w-[10px] after:h-[57px] after:bg-primary after:rounded-full after:left-[-23.5%] after:z-30 after:top-[-20px]"
                )}
                key={index}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className=" basis-[calc(70%-2rem)] space-y-4">
          <motion.div
            data-aos-duration="2000"
            data-aos="fade-down-right"
            className=" fade-animtion z-30 relative h-[320px] bg-cover bg-no-repeat bg-center  before:absolute  before:-z-10  before:bg-primary before:w-full before:h-full before:top-4 before:left-5 rounded-lg  before:rounded-lg w-full"
          >
            <div
              className="absolute rounded-lg inset-0 z-10 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 1, 35, 0.00) 0%, #000123 106.87%), url(${data[activeTab].content.imageSrc})`,
              }}
            ></div>
            <p className=" text-white absolute bottom-5 font-semibold left-3 text-2xl xl:text-3xl z-20">
              {data[activeTab].name}
            </p>
          </motion.div>
          <p
            data-aos-duration="2000"
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            className=" pt-6 text-base text-skin-blue-gray font-normal"
          >
            {data[activeTab].content.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Session3VerticalStepper;
