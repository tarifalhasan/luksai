import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyAskedQuestions = () => {
  const accordions = [
    {
      title: "Lorem ipsum is a dummy text?",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ",
      id: 200,
    },
    {
      title: "Lorem ipsum is a dummy text?",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ",
      id: 201,
    },
    {
      title: "Lorem ipsum is a dummy text?",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ",
      id: 202,
    },
    {
      title: "Lorem ipsum is a dummy text?",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ",
      id: 203,
    },
  ];
  return (
    <section className=" relative py-10 lg:py-16  overflow-hidden bg-skin-navy-blue">
      <div className=" py-5">
        <h2
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className=" text-center text-white"
        >
          Frequently Asked Questions
        </h2>
      </div>
      <div className=" relative  container pt-8">
        <Accordion
          defaultValue="200"
          className=" max-w-[750px] mx-auto space-y-5"
          type="single"
          collapsible
        >
          {accordions.map((a, i) => (
            <AccordionItem
              className=" bg-white px-4 rounded-md py-3"
              key={a.id}
              value={a.id.toString()}
            >
              <AccordionTrigger className=" text-base sm:text-xl font-normal text-skin-dark-900">
                {a.title}
              </AccordionTrigger>
              <AccordionContent className=" text-sm lg:text-base font-normal text-skin-blue-gray">
                {a.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="153"
          viewBox="0 0 150 153"
          fill="none"
          className=" hidden lg:block absolute top-0 right-0"
        >
          <path
            d="M48.7513 60.6699L0.050843 60.6698L0.0508317 92.3406L48.7513 92.3406L24.4011 136.928L50.3453 152.764L74.6955 108.176L99.0458 152.764L124.99 136.928L100.64 92.3406L149.34 92.3406L149.34 60.6698L100.64 60.6699L124.99 16.0822L99.0458 0.246858L74.6955 44.8345L50.3452 0.24691L24.4011 16.0823L48.7513 60.6699Z"
            fill="#FDD619"
          />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={197}
        height={288}
        viewBox="0 0 197 288"
        fill="none"
        className=" hidden lg:block absolute left-0 top-[95%] -translate-y-[95%]"
      >
        <path
          d="M152.794 67.8364C157.972 66.8112 169.933 64.8519 176.354 65.216"
          stroke="#FDD619"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path
          d="M177.449 66.2356C177.314 71.95 177.454 85.1633 179.101 92.3019"
          stroke="#FDD619"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path
          d="M-60.0001 221.469C-60.0001 221.469 46.6069 99.2513 65.9971 100.56C85.3873 101.868 -5.16595 210.33 19.8035 221.051C44.7729 231.772 172.177 71.5507 172.177 71.5507"
          stroke="#FDD619"
          strokeWidth={3}
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
};

export default FrequentlyAskedQuestions;
