"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 600,
      once: true,
    });
  }, []);

  return null;
};
