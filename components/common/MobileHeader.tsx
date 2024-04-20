"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "../ui/button";

const MobileHeader = () => {
  const local = useLocale();
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const pathName = usePathname();
  const [openMenu, setIsOpenMenu] = useState(false);
  console.log(pathName);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "  lg:hidden py-5 z-50 h-[88px] items-center    sticky left-0 right-0 top-0",
        header ? "backdrop-blur-sm bg-white/[0.8] " : ""
      )}
    >
      <div className=" container sticky top-0 left-0 right-0  flex items-center justify-between">
        <div className=" inline-flex items-center gap-5">
          <Link href={"/"}>
            <Image
              src={"/images/logo.webp"}
              alt="luksai logo"
              width={110}
              height={56}
            />
          </Link>
        </div>
        <Sheet open={openMenu} onOpenChange={setIsOpenMenu}>
          <SheetTrigger asChild>
            <button>
              <HiMenuAlt3 size={34} />
            </button>
          </SheetTrigger>
          <SheetContent>
            <>
              <ul className=" flex-col flex justify-center items-center gap-5">
                <li
                  onClick={() => setIsOpenMenu(false)}
                  className="flex justify-center"
                >
                  <Link
                    className={cn(
                      " text-base text-skin-blue-gray font-normal",
                      pathName === `/${local}` && "font-bold"
                    )}
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpenMenu(false)}
                  className="flex justify-center"
                >
                  <Link
                    className={cn(
                      " text-base text-skin-blue-gray font-normal",
                      pathName === `/${local}/solutions` && "font-bold"
                    )}
                    href={"/solutions"}
                  >
                    Solutions
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpenMenu(false)}
                  className="flex justify-center"
                >
                  <Link
                    className={cn(
                      " text-base text-skin-blue-gray font-normal",
                      pathName === `/${local}/about` && "font-bold"
                    )}
                    href={"/about"}
                  >
                    About
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpenMenu(false)}
                  className="flex justify-center"
                >
                  <Link
                    className={cn(
                      " text-base text-skin-blue-gray font-normal",
                      pathName === `/${local}/social` && "font-bold"
                    )}
                    href={"/social"}
                  >
                    Social
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpenMenu(false)}
                  className="flex justify-center"
                >
                  <Link
                    className={cn(
                      " text-base text-skin-blue-gray font-normal",
                      pathName === `/${local}/pricing` && "font-bold"
                    )}
                    href={"/pricing"}
                  >
                    Pricing
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpenMenu(false)}
                  className="flex justify-center"
                >
                  <Link
                    href={"/login"}
                    className=" text-base font-normal text-skin-blue-gray"
                  >
                    Log In
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpenMenu(false)}
                  className="flex justify-center"
                >
                  <Link href={"/signup"}>
                    <Button className="  font-semibold  gap-2">
                      Register Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M0.80127 5.33057C0.387056 5.33057 0.0512695 5.66635 0.0512695 6.08057C0.0512695 6.49478 0.387056 6.83057 0.80127 6.83057V5.33057ZM17.3139 6.6109C17.6068 6.318 17.6068 5.84313 17.3139 5.55024L12.5409 0.777266C12.248 0.484372 11.7732 0.484372 11.4803 0.777266C11.1874 1.07016 11.1874 1.54503 11.4803 1.83793L15.7229 6.08057L11.4803 10.3232C11.1874 10.6161 11.1874 11.091 11.4803 11.3839C11.7732 11.6768 12.248 11.6768 12.5409 11.3839L17.3139 6.6109ZM0.80127 6.83057H16.7836V5.33057H0.80127V6.83057Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </Link>
                </li>
              </ul>
            </>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileHeader;
