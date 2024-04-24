"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const PricingTableMobile = () => {
  const [tabData, setTabData] = useState("free");

  interface Value {
    name: string;
    value: string | number | boolean;
  }

  interface Value {
    name: string;
    value: string | number | boolean;
  }

  interface IFeature {
    name: string;
    items: (Value | undefined)[];
  }
  interface Plan {
    name: string;
    id: string;
    features: IFeature[];
  }
  const plans: Plan[] = [
    {
      name: "free",
      id: "601",
      features: [
        {
          name: "transation fee",
          items: [{ name: "transation fee", value: "$1 +10%" }],
        },
        {
          name: "Platform Features",
          items: [
            {
              name: "publishedCourse",
              value: 1,
            },
            {
              name: "publishedDigitalProduct",
              value: 10,
            },
            {
              name: "publishedCourseProduct",
              value: 10,
            },
            {
              name: "students",
              value: 1,
            },
            ,
            {
              name: "membeshipTires",
              value: false,
            },
            {
              name: "membeship expds",
              value: true,
            },
            ,
            {
              name: "publishedVideo",
              value: 100,
            },
          ],
        },
      ],
    },
    {
      name: "essential",
      id: "602",
      features: [
        {
          name: "transation fee",
          items: [{ name: "transation fee", value: "$1 +10%" }],
        },
        {
          name: "Platform Features",
          items: [
            {
              name: "publishedCourse",
              value: 1,
            },
            {
              name: "publishedDigitalProduct",
              value: 10,
            },
            {
              name: "publishedCourseProduct",
              value: 10,
            },
            {
              name: "students",
              value: 1,
            },
            ,
            {
              name: "membeshipTires",
              value: false,
            },
            ,
            {
              name: "publishedVideo",
              value: 100,
            },
          ],
        },
      ],
    },
    {
      name: "Scale",
      id: "603",
      features: [
        {
          name: "transation fee",
          items: [{ name: "transation fee", value: "$1 +10%" }],
        },
        {
          name: "Platform Features",
          items: [
            {
              name: "publishedCourse",
              value: 1,
            },
            {
              name: "publishedDigitalProduct",
              value: 10,
            },
            {
              name: "publishedCourseProduct",
              value: 10,
            },
            {
              name: "students",
              value: 1,
            },
            ,
            {
              name: "membeshipTires",
              value: false,
            },
            ,
            {
              name: "publishedVideo",
              value: 100,
            },
          ],
        },
      ],
    },
    {
      name: "pro",
      id: "604",
      features: [
        {
          name: "transation fee",
          items: [{ name: "transation fee", value: "$1 +10%" }],
        },
        {
          name: "Platform Features",
          items: [
            {
              name: "publishedCourse",
              value: 1,
            },
            {
              name: "publishedDigitalProduct",
              value: 10,
            },
            {
              name: "publishedCourseProduct",
              value: 10,
            },
            {
              name: "students",
              value: 1,
            },
            ,
            {
              name: "membeshipTires",
              value: false,
            },
            ,
            {
              name: "publishedVideo",
              value: 100,
            },
          ],
        },
      ],
    },
  ];
  const selectedPlan = plans.find((plan) => plan.name === tabData);

  return (
    <div>
      <Tabs
        onValueChange={setTabData}
        defaultValue={tabData}
        className=" w-full"
      >
        <TabsList className=" w-full">
          {plans.map((plan, i) => (
            <TabsTrigger className=" w-full" key={plan.id} value={plan.name}>
              {plan.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className=" pt-6">
        {selectedPlan?.features.map((feature, i) => (
          <div key={feature.name}>
            <h4 className=" py-3 capitalize text-lg font-semibold">
              {feature.name}
            </h4>
            <ul className=" space-y-2 ">
              {feature.items?.map((i, index) => (
                <li
                  key={index}
                  className=" text-sm capitalize font-normal px-3 flex items-center justify-between border-y py-2"
                >
                  <span className=" block">{i?.name}</span>
                  <span>
                    {typeof i?.value !== "boolean" ? (
                      i?.value
                    ) : typeof i?.value === "boolean" && i?.value == true ? (
                      <IoIosCheckmark size={30} className="  text-green-500" />
                    ) : (
                      <IoCloseOutline size={30} className="  text-red-500" />
                    )}

                    {}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTableMobile;
