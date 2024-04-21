import { useTranslations } from "next-intl";
import Diversify from "./Diversify";

const HomeSession9 = () => {
  const t = useTranslations("HomeSession6");
  const data = [
    {
      name: "One on One Sessions",
      id: 1,
      imageSrc:
        "https://imgs.search.brave.com/0uIWgZrvK6CqYXag7OoZ94S5pxg-5WKtUEONzSN46Gw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/MTVmaXZlLmNvbS9i/bG9nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA2L3NodXR0/ZXJzdG9ja19vbmUt/b24tb25lLW1lZXRp/bmctMS5qcGc",
    },
    {
      name: "Group Mentoring",
      id: 2,
      imageSrc: "/images/home/session-9/online-course.webp",
    },
    {
      name: "Online Courses",
      id: 3,
      imageSrc:
        "https://imgs.search.brave.com/_uw9gKrgvekrPcKWbJauw4oOAVXdgv1DgQz_nP70XrI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MzM3MzIwNS9waG90/by9idXNpbmVzcy12/aWRlby1jb25mZXJl/bmNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1zT3hEYlcy/THlneDBhbXJEbEtp/LTBka0VpcjRJMzIy/bS1pbHhhZ2piUk4w/PQ",
    },
  ];

  return (
    <section className=" my-6">
      <div className="s relative overflow-hidden container xl:px-14 bg-[#F3F4F6] rounded-20 py-10">
        <div className=" max-w-[885px] mx-auto block space-y-4">
          <h2 className="text-center text-skin-dark-900">{t("title")}</h2>
          <p className=" text-center">{t("description")}</p>
        </div>

        <Diversify data={data} />

        <svg
          className=" absolute top-4 left-4"
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="62"
          viewBox="0 0 65 62"
          fill="none"
        >
          <path
            d="M21.2041 37.4373L10.6021 55.5627L21.8981 62L32.5001 43.8746L43.1021 62L54.3981 55.5627L43.7961 37.4373H65.0001V24.5627H43.7961L54.3981 6.43729L43.1021 0L32.5001 18.1254L21.8981 0L10.6021 6.43729L21.2041 24.5627H9.53674e-05V37.4373H21.2041Z"
            fill="#FFDE7A"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={81}
          height={40}
          viewBox="0 0 81 40"
          fill="none"
          className=" z-10 absolute  left-0 top-[70%]"
        >
          <path
            d="M-87 37.7798C-87 37.7798 43.0759 2.92605 46.8219 1.92232C50.5679 0.918584 -25.6796 29.4712 -30.1124 31.0121C-34.5451 32.553 48.652 15.4692 52.5271 14.4308C56.4023 13.3925 -9.02666 37.3688 -5.53903 36.4343C-2.05139 35.4998 78.7479 17.7342 78.7479 17.7342"
            stroke="#000123"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={115}
          height={161}
          className=" absolute top-0 right-0"
          viewBox="0 0 115 161"
          fill="none"
        >
          <path
            d="M50.5336 21.502C60.6015 11.9675 73.3649 5.77028 87.0838 3.75517C100.803 1.74005 114.809 4.00516 127.193 10.2417C139.578 16.4782 149.737 26.3825 156.287 38.6043C162.836 50.826 165.457 64.7704 163.791 78.536L163.117 78.4544C164.766 64.8275 162.172 51.0236 155.688 38.925C149.205 26.8264 139.148 17.0218 126.888 10.8482C114.628 4.67453 100.763 2.43224 87.1824 4.42705C73.6019 6.42185 60.967 12.5567 51.0006 21.995L50.5336 21.502Z"
            fill="#000123"
          />
          <path
            d="M143.224 119.378C133.156 128.912 120.393 135.11 106.674 137.125C92.9554 139.14 78.9489 136.875 66.5645 130.638C54.1802 124.402 44.0206 114.497 37.4712 102.276C30.9218 90.0539 28.3012 76.1095 29.9667 62.3439L30.6409 62.4255C28.9921 76.0524 31.5863 89.8562 38.0698 101.955C44.5532 114.053 54.6104 123.858 66.87 130.032C79.1296 136.205 92.9949 138.448 106.575 136.453C120.156 134.458 132.791 128.323 142.757 118.885L143.224 119.378Z"
            fill="#000123"
          />
          <path
            d="M18.669 71.4051L19.6879 70.605C25.0011 66.4325 26.1282 58.8356 22.2553 53.3003L21.5126 52.2387L22.3128 53.2577C26.4852 58.5709 34.0821 59.698 39.6175 55.8251L40.679 55.0823L39.6601 55.8825C34.3469 60.055 33.2198 67.6519 37.0927 73.1872L37.8354 74.2488L37.0352 73.2298C32.8628 67.9166 25.2659 66.7895 19.7305 70.6624L18.669 71.4051Z"
            fill="#000123"
          />
          <path
            d="M45.8834 11.1303L46.2782 12.3643C48.3372 18.7985 55.0649 22.5028 61.603 20.802L62.8569 20.4758L61.6229 20.8707C55.1886 22.9296 51.4844 29.6573 53.1852 36.1954L53.5114 37.4493L53.1165 36.2154C51.0575 29.7811 44.3298 26.0769 37.7917 27.7777L36.5379 28.1038L37.7718 27.709C44.2061 25.65 47.9103 18.9223 46.2095 12.3842L45.8834 11.1303Z"
            fill="#000123"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomeSession9;
