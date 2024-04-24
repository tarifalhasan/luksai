import { IWhyUs } from "@/interfaces";
import { useMessages } from "next-intl";
import Image from "next/image";
import AnimationContainer from "../AnimationContainer";
import AnimationItem from "../AnimationItem";

const AboutSession3 = () => {
  const message = useMessages();
  const data = message.AboutSession3 as unknown as IWhyUs[];
  return (
    <section className="container space-y-9 overflow-hidden relative  pb-10 pt-10 lg:pb-[5rem] lg:pt-[6rem]">
      <div>
        <h2
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          className=" text-center"
        >
          Our <span className=" text-primary">Why</span>
        </h2>
      </div>
      <AnimationContainer containerClass=" relative z-20 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((item) => (
          <AnimationItem
            key={item.id}
            className=" bg-primary rounded-[16px] py-8 px-8  space-y-4"
          >
            <div>
              <div className=" rounded-full grid place-items-center bg-skin-navy-blue w-[79px] h-[79px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={43}
                  height={40}
                  quality={80}
                />
              </div>
            </div>
            <div>
              <h4 className=" text-[1.375rem] text-white font-bold">
                {item.name}
              </h4>
            </div>
            <div>
              <p className=" text-sm lg:text-lg font-normal text-white">
                {item.title}
              </p>
            </div>
          </AnimationItem>
        ))}
      </AnimationContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="116"
        viewBox="0 0 130 116"
        className=" absolute lg:top-[10%] z-10 top-[2%]   -translate-y-[2%] lg:-translate-y-[10%] -right-[5px]"
        fill="none"
      >
        <path
          d="M89.7179 106.498C79.7499 111.86 68.3709 114.016 57.1324 112.674C45.8939 111.332 35.3428 106.556 26.9179 98.9977C18.493 91.4394 12.6042 81.4667 10.0545 70.4392C7.50482 59.4118 8.41828 47.8663 12.6704 37.3769L13.1841 37.5852C8.97484 47.9688 8.07058 59.398 10.5946 70.3144C13.1186 81.2307 18.948 91.103 27.2881 98.5851C35.6281 106.067 46.0728 110.795 57.1981 112.124C68.3234 113.452 79.5878 111.318 89.4554 106.01L89.7179 106.498Z"
          fill="#1E1E1E"
        />
        <path
          d="M37.5963 9.59261C47.5643 4.23122 58.9433 2.07467 70.1818 3.41698C81.4203 4.75931 91.9714 9.53517 100.396 17.0934C108.821 24.6516 114.71 34.6244 117.26 45.6518C119.809 56.6793 118.896 68.2248 114.644 78.7141L114.13 78.5059C118.339 68.1222 119.244 56.6931 116.72 45.7767C114.196 34.8603 108.366 24.9881 100.026 17.506C91.6861 10.0239 81.2414 5.29619 70.1161 3.96739C58.9908 2.6386 47.7264 4.77343 37.8588 10.0808L37.5963 9.59261Z"
          fill="#1E1E1E"
        />
        <path
          d="M37.1408 0.1427C37.3094 6.24812 42.2191 11.1579 48.3245 11.3264C42.2191 11.495 37.3094 16.4048 37.1408 22.5102C36.9722 16.4048 32.0624 11.495 25.957 11.3264C32.0624 11.1579 36.9722 6.24812 37.1408 0.1427Z"
          fill="#FDD619"
        />
        <path
          d="M125.479 73.9886C119.856 76.3726 117.076 82.735 119.146 88.4812C116.762 82.858 110.399 80.0775 104.653 82.1476C110.276 79.7636 113.057 73.4012 110.987 67.655C113.371 73.2782 119.733 76.0587 125.479 73.9886Z"
          fill="#1E1E1E"
        />
        <path
          d="M91.1666 115.663C90.8919 109.561 85.8976 104.738 79.7902 104.675C85.8917 104.401 90.7154 99.4063 90.7778 93.2989C91.0525 99.4005 96.0468 104.224 102.154 104.287C96.0527 104.561 91.229 109.556 91.1666 115.663Z"
          fill="#1E1E1E"
        />
        <path
          d="M23.9152 35.8873C17.8666 36.7351 13.5345 42.1614 14.0473 48.2476C13.1994 42.199 7.77318 37.8669 1.687 38.3797C7.73561 37.5319 12.0677 32.1056 11.5549 26.0194C12.4027 32.068 17.829 36.4001 23.9152 35.8873Z"
          fill="#FDD619"
        />
      </svg>
    </section>
  );
};

export default AboutSession3;
