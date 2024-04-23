import { Button } from "@/components/ui/button";
import { IWhereToStart } from "@/interfaces";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const WhereToStart = () => {
  const t = useTranslations("HomeSession10");
  const message = useMessages();

  const data = message.WhereToStartData as unknown as IWhereToStart[];

  return (
    <div className=" relative  ">
      <div className=" relative container py-10">
        <div className=" lg:pt-20 max-w-[705px] mx-auto block space-y-4">
          <p className=" text-center">{t("description")}</p>
          <h2 className="text-center text-skin-dark-900">{t("title")}</h2>
        </div>
        <div className=" py-10 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {data.map((item, index) => (
            <div key={item.id} className=" flex items-start gap-4">
              <div>
                <div className=" rounded-md w-[85px] h-[85px] bg-primary grid place-items-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={61}
                    height={61}
                  />
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
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant={"secondary"} className=" gap-3">
            Get Started <FaArrowRightLong />
          </Button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={202}
          className=" hidden lg:block absolute left-0 top-0"
          height={179}
          viewBox="0 0 202 179"
          fill="none"
        >
          <path
            d="M148.248 136.795C137.519 146.896 123.936 153.442 109.351 155.541C94.7656 157.64 79.8879 155.189 66.7464 148.523C53.6048 141.857 42.839 131.3 35.9168 118.292C28.9947 105.283 26.253 90.4567 28.0658 75.8331L28.782 75.9218C26.9875 90.3981 29.7015 105.076 36.5539 117.953C43.4064 130.83 54.0637 141.281 67.0728 147.88C80.082 154.478 94.8098 156.904 109.248 154.827C123.686 152.749 137.133 146.269 147.753 136.269L148.248 136.795Z"
            fill="#154E6B"
          />
          <path
            d="M50.0493 32.4938C60.778 22.3928 74.361 15.8465 88.9462 13.7477C103.532 11.6488 118.409 14.0994 131.551 20.7654C144.692 27.4313 155.458 37.9882 162.38 50.9967C169.302 64.0051 172.044 78.8319 170.231 93.4555L169.515 93.3667C171.31 78.8905 168.596 64.213 161.743 51.3357C154.891 38.4583 144.233 28.0078 131.224 21.409C118.215 14.8102 103.487 12.3842 89.049 14.462C74.6107 16.5397 61.1646 23.02 50.544 33.0192L50.0493 32.4938Z"
            fill="#154E6B"
          />
          <path
            d="M46.2926 20.7633L46.901 22.8066C48.829 29.2814 55.4801 33.1214 62.0514 31.5536L64.1251 31.0589L62.0818 31.6673C55.6071 33.5953 51.767 40.2464 53.3348 46.8177L53.8295 48.8914L53.2211 46.8481C51.2931 40.3734 44.642 36.5333 38.0707 38.1011L35.997 38.5958L38.0403 37.9874C44.515 36.0594 48.3551 29.4083 46.7873 22.8371L46.2926 20.7633Z"
            fill="#FDD619"
          />
          <path
            d="M182.266 83.862L180.585 85.1738C175.26 89.3308 174.11 96.9243 177.967 102.471L179.184 104.221L177.872 102.541C173.715 97.2154 166.122 96.0661 160.575 99.9229L158.825 101.14L160.505 99.8281C165.831 95.6712 166.98 88.0776 163.123 82.531L161.906 80.7806L163.218 82.4612C167.375 87.7865 174.969 88.9358 180.515 85.0791L182.266 83.862Z"
            fill="#FDD619"
          />
          <path
            d="M153.158 147.832L152.514 145.799C150.474 139.359 143.757 135.635 137.214 137.317L135.149 137.848L137.181 137.204C143.622 135.163 147.345 128.447 145.664 121.904L145.133 119.839L145.777 121.871C147.817 128.311 154.534 132.035 161.077 130.354L163.142 129.823L161.109 130.467C154.669 132.507 150.945 139.224 152.627 145.767L153.158 147.832Z"
            fill="#FDD619"
          />
          <path
            d="M41.7052 70.1703L39.7425 71.0027C33.5229 73.6401 30.4479 80.6777 32.7381 87.0333L33.4609 89.0391L32.6285 87.0763C29.9911 80.8567 22.9535 77.7817 16.5978 80.0719L14.5921 80.7947L16.5549 79.9624C22.7745 77.3249 25.8495 70.2873 23.5592 63.9317L22.8365 61.9259L23.6688 63.8887C26.3063 70.1083 33.3439 73.1833 39.6995 70.8931L41.7052 70.1703Z"
            fill="#FDD619"
          />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={333}
        height={196}
        viewBox="0 0 333 196"
        fill="none"
        className="  hidden lg:block absolute top-0 right-0"
      >
        <path
          opacity="0.13"
          d="M109.849 66.5511L55.1027 161.374L113.432 195.05L168.178 100.228L222.924 195.05L281.254 161.374L226.508 66.5511H336V-0.802124H226.508L281.254 -95.6252L222.924 -129.302L168.178 -34.4788L113.432 -129.302L55.1027 -95.6252L109.849 -0.802124H0.356689V66.5511H109.849Z"
          fill="#4FC4D0"
        />
      </svg>
    </div>
  );
};

export default WhereToStart;
