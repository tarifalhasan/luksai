import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-white py-6 lg:py-10 bg-skin-dark-900">
      <div className="container flex gap-10    flex-col lg:flex-row lg:justify-evenly lg:items-start">
        <div>
          <div className=" space-y-5">
            <div>
              <Image
                width={145}
                height={73}
                src={"/images/Logo-white.png"}
                alt="luksai"
              />
            </div>
            <h4 className=" text-lg font-bold text-white">Connect with us</h4>
            <ul className=" inline-flex items-center gap-2">
              <li>
                <Link
                  className=" transition-all duration-500 hover:bg-skin-yellow-accent flex justify-center items-center bg-white rounded-full w-10 h-10 text-black"
                  href={"/"}
                  target="_blank"
                >
                  <FaFacebookF className=" w-5 h-5" />
                </Link>
              </li>
              <li>
                <Link
                  className=" transition-all duration-500 hover:bg-skin-yellow-accent flex justify-center items-center bg-white rounded-full w-10 h-10 text-black"
                  href={"/"}
                  target="_blank"
                >
                  <FaXTwitter className=" w-5 h-5" />
                </Link>
              </li>
              <li>
                <Link
                  className=" transition-all duration-500 hover:bg-skin-yellow-accent flex justify-center items-center bg-white rounded-full w-10 h-10 text-black"
                  href={"/"}
                  target="_blank"
                >
                  <FaInstagram className=" w-5 h-5" />
                </Link>
              </li>
              <li>
                <Link
                  className=" transition-all duration-500 hover:bg-skin-yellow-accent flex justify-center items-center bg-white rounded-full w-10 h-10 text-black"
                  href={"/"}
                  target="_blank"
                >
                  <FaLinkedin className=" w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" space-y-4">
          <h4 className=" text-xl lg:text-2xl text-white font-bold capitalize ">
            useful links
          </h4>
          <ul className=" space-y-4">
            <li>
              <Link
                className=" hover:text-skin-yellow-accent  transition-all duration-700 hover:underline text-base font-normal capitalize text-white"
                href={"/solutions"}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-skin-yellow-accent  transition-all duration-700 hover:underline text-base font-normal capitalize text-white"
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-skin-yellow-accent  transition-all duration-700 hover:underline text-base font-normal capitalize text-white"
                href={"/social"}
              >
                Social
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-skin-yellow-accent  transition-all duration-700 hover:underline text-base font-normal capitalize text-white"
                href={"/blog"}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-skin-yellow-accent  transition-all duration-700 hover:underline text-base font-normal capitalize text-white"
                href={"/pricing"}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className=" space-y-4">
          <h4 className=" text-xl lg:text-2xl text-white font-bold capitalize ">
            Support
          </h4>
          <ul className=" space-y-4">
            <li>
              <Link
                className="hover:text-skin-yellow-accent  transition-all duration-700 hover:underline text-base font-normal capitalize text-white"
                href={"/privacy_policy"}
              >
                privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
