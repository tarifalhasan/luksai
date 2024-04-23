import { ITeam } from "@/interfaces";
import { useMessages } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

const AboutSession4 = () => {
  const message = useMessages();

  const data = message.OurTeam as unknown as ITeam[];
  return (
    <section className=" py-10 lg:py-16 bg-skin-navy-blue">
      <div className=" flex flex-col items-center justify-center space-y-4">
        <div>
          <h2 className=" text-center text-white">Our Team</h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="185"
          height="28"
          viewBox="0 0 185 28"
          fill="none"
        >
          <path
            d="M2 2C2 2 149.465 2 153.712 2C157.959 2 69.216 10 64.0906 10.3478C58.9652 10.6957 151.808 15.8261 156.201 15.8261C160.595 15.8261 84.5922 22.1739 88.5461 22.1739C92.5 22.1739 183 26 183 26"
            stroke="#36799B"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className=" container pt-8 lg:pt-16 grid sm:grid-cols-2 gap-6">
        {data.map((member) => (
          <div
            key={member.id}
            className=" rounded-[16px] relative overflow-hidden bg-white flex items-center justify-between h-[151px]"
          >
            <div className="flex basis-[80%] items-center gap-4">
              <div className=" ">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={152}
                  height={151}
                  className=" h-[151px]  w-full"
                />
              </div>
              <div className=" max-w-[100px] lg:max-w-full">
                <h3 className=" text-base lg:text-3xl text-skin-navy-blue font-bold">
                  {member.name}
                </h3>
                <p className=" text-[0.9rem] lg:text-[1.325rem] text-skin-navy-blue font-normal">
                  {member.role}
                </p>
              </div>
            </div>
            <div className=" basis-[20%] pl-3 lg:pr-5">
              <Link href={member.linkedin} target="_blank">
                <FaLinkedin className=" w-[32px] h-[33px] text-skin-dark-900" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSession4;
