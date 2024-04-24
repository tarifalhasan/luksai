"use client";
import { animateItems } from "@/lib/animation";
import { motion as m } from "framer-motion";
import { ReactNode } from "react";
const AnimationItem = ({
  className,

  children,
}: {
  className: string;

  children: ReactNode;
}) => {
  return (
    <m.div variants={animateItems} className={className}>
      {children}
    </m.div>
  );
};

export default AnimationItem;
