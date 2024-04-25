import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const SolutionsSession6 = () => {
  return (
    <section className=" bg-[#EDFEFF] relative overflow-hidden py-10">
      <div className="  relative  container">
        <div className=" grid lg:grid-cols-2 gap-5 lg:items-center">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="  space-y-4 lg:space-y-7"
          >
            <div>
              <h4 className=" text-2xl font-bold text-skin-dark-900">
                Integrated checkout
              </h4>
            </div>
            <p>
              Facilitate worldwide transactions using Stripe and swiftly provide
              entry to your gated content immediately after purchase, ensuring a
              smooth and secure payment experience for your customers.
            </p>
            <Button className=" gap-4">
              Register Now <FaArrowRightLong />
            </Button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Image
              src={
                "https://assets.luksai.com/images/website/solutions/session-6/background.webp"
              }
              width={695}
              height={585}
              quality={80}
              className=" w-full h-auto object-cover"
              alt="background"
            />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={202}
          height={190}
          viewBox="0 0 202 190"
          fill="none"
          className=" hidden lg:block absolute top-5 left-8"
        >
          <path
            d="M148.107 147.173C137.379 157.274 123.796 163.82 109.21 165.919C94.625 168.018 79.7473 165.567 66.6058 158.901C53.4642 152.235 42.6984 141.678 35.7762 128.67C28.854 115.661 26.1124 100.835 27.9251 86.211L28.6413 86.2998C26.8469 100.776 29.5609 115.453 36.4133 128.331C43.2657 141.208 53.9231 151.659 66.9322 158.258C79.9414 164.856 94.6692 167.282 109.107 165.205C123.546 163.127 136.992 156.647 147.613 146.647L148.107 147.173Z"
            fill="#154E6B"
          />
          <path
            d="M49.9086 42.872C60.6373 32.771 74.2203 26.2247 88.8056 24.1258C103.391 22.0269 118.269 24.4776 131.41 31.1435C144.552 37.8095 155.317 48.3664 162.24 61.3748C169.162 74.3833 171.903 89.2101 170.091 103.834L169.375 103.745C171.169 89.2686 168.455 74.5912 161.603 61.7139C154.75 48.8365 144.093 38.386 131.084 31.7871C118.075 25.1883 103.347 22.7624 88.9084 24.8402C74.4701 26.9179 61.0239 33.3982 50.4033 43.3974L49.9086 42.872Z"
            fill="#154E6B"
          />
          <path
            d="M46.152 31.1415L46.7604 33.1848C48.6883 39.6595 55.3395 43.4995 61.9107 41.9318L63.9845 41.4371L61.9412 42.0455C55.4664 43.9735 51.6264 50.6246 53.1941 57.1958L53.6889 59.2696L53.0805 57.2263C51.1525 50.7515 44.5014 46.9115 37.9301 48.4792L35.8563 48.974L37.8997 48.3656C44.3744 46.4376 48.2144 39.7865 46.6467 33.2152L46.152 31.1415Z"
            fill="#154E6B"
          />
          <path
            d="M182.125 94.2397L180.444 95.5515C175.119 99.7085 173.97 107.302 177.826 112.849L179.044 114.599L177.732 112.918C173.575 107.593 165.981 106.444 160.435 110.301L158.684 111.518L160.365 110.206C165.69 106.049 166.839 98.4553 162.983 92.9087L161.766 91.1583L163.077 92.8389C167.234 98.1642 174.828 99.3135 180.375 95.4568L182.125 94.2397Z"
            fill="#154E6B"
          />
          <path
            d="M153.017 158.209L152.373 156.177C150.333 149.737 143.616 146.013 137.073 147.694L135.008 148.225L137.041 147.581C143.481 145.541 147.205 138.824 145.523 132.281L144.992 130.216L145.636 132.249C147.676 138.689 154.393 142.413 160.936 140.731L163.001 140.201L160.969 140.844C154.529 142.885 150.805 149.601 152.486 156.144L153.017 158.209Z"
            fill="#154E6B"
          />
          <path
            d="M41.5646 80.5483L39.6018 81.3806C33.3822 84.018 30.3073 91.0556 32.5975 97.4113L33.3202 99.417L32.4879 97.4542C29.8505 91.2346 22.8129 88.1597 16.4572 90.4499L14.4515 91.1726L16.4143 90.3403C22.6339 87.7029 25.7088 80.6653 23.4186 74.3096L22.6959 72.3039L23.5282 74.2667C26.1656 80.4863 33.2032 83.5612 39.5589 81.271L41.5646 80.5483Z"
            fill="#154E6B"
          />
        </svg>
      </div>
    </section>
  );
};

export default SolutionsSession6;
