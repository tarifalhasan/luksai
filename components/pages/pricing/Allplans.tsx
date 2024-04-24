const Allplans = () => {
  return (
    <section className=" py-10 container">
      <div
        data-aos-duration="2000"
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
        className=" space-y-4"
      >
        <div>
          <h2 className="text-skin-navy-blue text-center">All plans</h2>
        </div>
        <p className=" max-w-[532px] block mx-auto text-center">
          Processing fees
        </p>
      </div>
      <div className=" h-[1px] bg-border my-5"></div>
      <div className="  w-full block mx-auto  max-w-[500px]">
        <ul className=" space-y-3">
          <li className=" w-full flex items-center justify-between">
            <span className=" text-xs lg:text-base font-bold text-black">
              U.S credit & debit card sales
            </span>
            <span className=" text-xs lg:text-base font-bold text-black">
              2.9% + 30¢
            </span>
          </li>
          <li className=" w-full flex items-center justify-between">
            <span className=" text-xs lg:text-base font-bold text-black">
              International credit & debit card sales
            </span>
            <span className=" text-xs lg:text-base font-bold text-black">
              3.9% + 30¢
            </span>
          </li>
          <li className=" w-full flex items-center justify-between">
            <span className=" text-xs lg:text-base font-bold text-black">
              Chargeback fee
            </span>
            <span className=" text-xs lg:text-base font-bold text-black">
              $15
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Allplans;
