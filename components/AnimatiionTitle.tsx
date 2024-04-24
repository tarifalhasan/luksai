"use client";

import { fadeId } from "@/lib/animation";
import { motion as m } from "framer-motion";
import { ReactNode } from "react";

const AnimatiionTitle = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <m.h2
      variants={fadeId("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      className={className}
      viewport={{ once: true, amount: 0.6 }}
    >
      {children}
    </m.h2>
  );
};

export default AnimatiionTitle;
