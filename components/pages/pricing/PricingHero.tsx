"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PricingHero = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const pricing_values = {
    monthly: [
      {
        name: "Free",
        price: 0,
        fetures: [
          "3 Products",
          "100 Students",
          "1 Admin User",
          "7% transaction fee +99c for our integrated paymen",
        ],
      },
      {
        name: "Essential",
        price: 29,
        fetures: [
          "15 Products",
          "Unlimited Students",
          "3 Admin User",
          "250 GB upload",
          "Live chat support",
          "4% transaction fee +99c for our integrated payment",
        ],
      },
      {
        name: "Scale",
        price: 79,
        fetures: [
          "15 Products",
          "Unlimited Students",
          "5 Admin User",
          "1T  upload",
          "Live chat support",
          "Priority support",
          "0% transaction fee for our integrated paymen",
        ],
      },
      {
        name: "Pro",
        price: 129,
        fetures: [
          "Unlimited Products",
          "Unlimited Students",
          "10 Admin User",
          "Unlimited upload",
          "Live chat support",
          "Priority support",
          "Customer Success Manager",
          "0% transaction fee for our integrated paymen",
        ],
      },
    ],
    yearly: [
      {
        name: "Free",
        price: 0,
        fetures: [
          "3 Products",
          "100 Students",
          "1 Admin User",
          "7% transaction fee +99c for our integrated paymen",
        ],
      },
      {
        name: "Essential",
        price: 380,
        fetures: [
          "15 Products",
          "Unlimited Students",
          "3 Admin User",
          "250 GB upload",
          "Live chat support",
          "4% transaction fee +99c for our integrated payment",
        ],
      },
      {
        name: "Scale",
        price: 700,
        fetures: [
          "15 Products",
          "Unlimited Students",
          "5 Admin User",
          "1T  upload",
          "Live chat support",
          "Priority support",
          "0% transaction fee for our integrated paymen",
        ],
      },
      {
        name: "Pro",
        price: 1080,
        fetures: [
          "Unlimited Products",
          "Unlimited Students",
          "10 Admin User",
          "Unlimited upload",
          "Live chat support",
          "Priority support",
          "Customer Success Manager",
          "0% transaction fee for our integrated paymen",
        ],
      },
    ],
  };

  const selectedTab =
    activeTab === "monthly" ? pricing_values.monthly : pricing_values.yearly;
  return (
    <section className=" space-y-5 bg-primary relative overflow-hidden py-10">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h2 className=" text-white text-center">Pricing</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="185"
          height="28"
          viewBox="0 0 185 28"
          fill="none"
        >
          <path
            opacity="0.2"
            d="M2 2C2 2 149.465 2 153.712 2C157.959 2 69.216 10 64.0906 10.3478C58.9652 10.6957 151.808 15.8261 156.201 15.8261C160.595 15.8261 84.5922 22.1739 88.5461 22.1739C92.5 22.1739 183 26 183 26"
            stroke="#154E6B"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className=" w-[calc(157px*2)]  justify-center mx-auto grid grid-cols-2 items-center">
        <button
          className={cn(
            activeTab === "monthly"
              ? " bg-white text-skin-navy-blue"
              : "bg-skin-navy-blue text-white",
            "inline-flex items-center justify-center  py-4 px-5 rounded-l-lg text-xl font-bold"
          )}
          onClick={() => setActiveTab("monthly")}
        >
          Monthly
        </button>
        <button
          className={cn(
            activeTab === "yearly"
              ? " bg-white text-skin-navy-blue"
              : "bg-skin-navy-blue text-white",
            "inline-flex items-center justify-center  py-4 px-5 rounded-r-lg text-xl font-bold"
          )}
          onClick={() => setActiveTab("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className=" container pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {selectedTab.map((price, index) => (
          <div
            className=" rounded-[10px] bg-white py-5 px-5 flex flex-col  items-center justify-between"
            key={price.name}
          >
            <div className="  space-y-5">
              <div>
                <h2 className=" text-center text-xl font-semibold text-primary">
                  {price.name}
                </h2>
              </div>
              <div>
                <h3 className=" font-semibold text-2xl lg:text-4xl text-skin-navy-blue">
                  ${price.price}/
                  <span className="font-medium text-lg text-skin-blue-gray">
                    {activeTab}
                  </span>
                </h3>
              </div>
              <ul className=" pb-7 space-y-5">
                {price.fetures.map((f) => (
                  <li key={f} className=" inline-flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                    >
                      <path
                        d="M11.4017 0.313561C11.3245 0.214204 11.2326 0.135342 11.1315 0.0815249C11.0303 0.0277076 10.9218 0 10.8121 0C10.7025 0 10.594 0.0277076 10.4928 0.0815249C10.3916 0.135342 10.2998 0.214204 10.2226 0.313561L4.03687 8.22153L1.43802 4.89297C1.35788 4.79414 1.26327 4.71642 1.1596 4.66426C1.05594 4.6121 0.945238 4.58652 0.833827 4.58898C0.722417 4.59144 0.612477 4.6219 0.510285 4.6786C0.408092 4.73531 0.315649 4.81716 0.238232 4.91947C0.160816 5.02179 0.0999435 5.14257 0.0590893 5.27493C0.0182351 5.40728 -0.00180055 5.54861 0.000126969 5.69085C0.00205449 5.83309 0.0259073 5.97345 0.0703231 6.10392C0.114739 6.23438 0.178848 6.35241 0.25899 6.45124L3.44735 10.5218C3.52454 10.6212 3.61637 10.7001 3.71755 10.7539C3.81873 10.8077 3.92726 10.8354 4.03687 10.8354C4.14648 10.8354 4.255 10.8077 4.35618 10.7539C4.45737 10.7001 4.5492 10.6212 4.62638 10.5218L11.4017 1.87183C11.4859 1.77257 11.5532 1.65209 11.5992 1.518C11.6452 1.3839 11.669 1.23909 11.669 1.0927C11.669 0.946302 11.6452 0.801494 11.5992 0.667398C11.5532 0.533303 11.4859 0.412826 11.4017 0.313561Z"
                        fill="#4FC4D0"
                      />
                    </svg>
                    <span className=" text-base font-normal">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className=" bg-skin-navy-blue hover:bg-skin-navy-blue/80 flex w-full">
              Start Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingHero;
