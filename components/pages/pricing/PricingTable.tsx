import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const PricingTable = ({ tab }: { tab: "monthly" | "yearly" }) => {
  const plans = [
    {
      name: "free",
      tranactionFee: "$1+10%",
      usage: [
        {
          name: "Published courses",
          value: "1",
        },
      ],
    },
  ];
  return (
    <section className=" container py-10">
      <div className=" space-y-4">
        <div>
          <h2 className="text-skin-navy-blue text-center">Compare our plans</h2>
        </div>
        <p className=" max-w-[532px] block mx-auto text-center">
          Comparing our pricing plans side-by-side so you can choose the best
          one for yourself.
        </p>
      </div>

      <div className="pt-8">
        <div className=" sr-only sm:not-sr-only ">
          <Table className="  ">
            <TableHeader>
              <TableRow className="  bg-skin-navy-blue hover:bg-skin-navy-blue ">
                <TableHead className=" w-[340px]">
                  <div className=" space-y-1 text-center">
                    <h4 className=" text-2xl font-bold text-primary">
                      Features
                    </h4>
                    <p className="text-lg sr-only font-bold text-white text-center">
                      Try for free
                    </p>
                  </div>
                </TableHead>
                <TableHead className="py-5">
                  <div className=" space-y-1 text-center">
                    <h4 className=" text-2xl font-bold text-primary">Free</h4>
                    <p className="text-lg font-bold text-white text-center">
                      Try for free
                    </p>
                  </div>
                </TableHead>
                <TableHead className="py-5">
                  <div className=" space-y-1 text-center">
                    <h4 className=" text-2xl font-bold text-primary">
                      Essential
                    </h4>
                    <p className="text-lg font-bold text-white text-center">
                      {tab === "monthly" ? "$25 /month" : "380/yearly"}
                    </p>
                  </div>
                </TableHead>
                <TableHead className="py-5">
                  <div className=" space-y-1 text-center">
                    <h4 className=" text-2xl font-bold text-primary">Scale</h4>
                    <p className="text-lg font-bold text-white text-center">
                      {tab === "monthly" ? "$79 /month" : "700/yearly"}
                    </p>
                  </div>
                </TableHead>
                <TableHead className="py-5">
                  <div className=" space-y-1 text-center">
                    <h4 className=" text-2xl font-bold text-primary">Pro</h4>
                    <p className="text-lg font-bold text-white text-center">
                      {tab === "monthly" ? "$129 /month" : "$129/yearly"}
                    </p>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="!border-r">
                  <div className=" space-y-4">
                    <p className=" text-base lg:text-2xl  font-bold text-skin-navy-blue">
                      Usager
                    </p>
                    <div className=" space-y-2">
                      <h3 className=" font-semibold text-skin-dark-900 text-sm lg:text-base">
                        Lorem ipsum is a dummy text
                      </h3>
                      <p className=" text-base font-normal text-skin-blue-gray">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="!border-r">
                  <div className=" space-y-4">
                    <div className=" space-y-2">
                      <h3 className=" font-semibold text-skin-dark-900 text-sm lg:text-base">
                        Lorem ipsum is a dummy text
                      </h3>
                      <p className=" text-base font-normal text-skin-blue-gray">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-red-500 rounded-full grid place-items-center">
                    <IoCloseSharp size={22} className=" text-white" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="!border-r">
                  <div className=" space-y-4">
                    <div className=" space-y-2">
                      <h3 className=" font-semibold text-skin-dark-900 text-sm lg:text-base">
                        Lorem ipsum is a dummy text
                      </h3>
                      <p className=" text-base font-normal text-skin-blue-gray">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-red-500 rounded-full grid place-items-center">
                    <IoCloseSharp size={22} className=" text-white" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="!border-r">
                  <div className=" space-y-4">
                    <p className=" text-base lg:text-2xl  font-bold text-skin-navy-blue">
                      Essentials
                    </p>
                    <div className=" space-y-2">
                      <h3 className=" font-semibold text-skin-dark-900 text-sm lg:text-base">
                        Lorem ipsum is a dummy text
                      </h3>
                      <p className=" text-base font-normal text-skin-blue-gray">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="!border-r">
                  <div className=" space-y-4">
                    <div className=" space-y-2">
                      <h3 className=" font-semibold text-skin-dark-900 text-sm lg:text-base">
                        Lorem ipsum is a dummy text
                      </h3>
                      <p className=" text-base font-normal text-skin-blue-gray">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-red-500 rounded-full grid place-items-center">
                    <IoCloseSharp size={22} className=" text-white" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="!border-r">
                  <div className=" space-y-4">
                    <p className=" text-base lg:text-2xl  font-bold text-skin-navy-blue">
                      Collaboration
                    </p>
                    <div className=" space-y-2">
                      <h3 className=" font-semibold text-skin-dark-900 text-sm lg:text-base">
                        Lorem ipsum is a dummy text
                      </h3>
                      <p className=" text-base font-normal text-skin-blue-gray">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="!border-r">
                  <div className=" space-y-4">
                    <p className=" text-base lg:text-2xl  font-bold text-skin-navy-blue">
                      Support
                    </p>
                    <div className=" space-y-2">
                      <h3 className=" font-semibold text-skin-dark-900 text-sm lg:text-base">
                        Lorem ipsum is a dummy text
                      </h3>
                      <p className=" text-base font-normal text-skin-blue-gray">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
                <TableCell className=" !border-r text-center">
                  <div className=" w-8 mx-auto h-8 bg-primary rounded-full grid place-items-center">
                    <FaCheck size={22} className=" text-white" />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {/* Table for mobile */}
        </div>
        <div className=" sm:sr-only"></div>
      </div>
    </section>
  );
};

export default PricingTable;
