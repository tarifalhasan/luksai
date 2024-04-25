"use client";
import { animateContainer } from "@/lib/animation";
import { motion as m } from "framer-motion";
import { ReactNode } from "react";
const AnimationContainer = ({
  containerClass,

  children,
}: {
  containerClass: string;

  children: ReactNode;
}) => {
  return (
    <m.div
      variants={animateContainer}
      initial="hidden"
      exit="exit"
      whileInView="show"
      className={containerClass}
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </m.div>
  );
};

export default AnimationContainer;
