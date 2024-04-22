"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b ", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1  items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M12.1933 16.001C12.2884 16.0921 12.4006 16.1634 12.5233 16.211C12.7668 16.311 13.0399 16.311 13.2833 16.211C13.4061 16.1634 13.5182 16.0921 13.6133 16.001L16.6133 13.001C16.8016 12.8127 16.9074 12.5573 16.9074 12.291C16.9074 12.0247 16.8016 11.7693 16.6133 11.581C16.425 11.3927 16.1696 11.2869 15.9033 11.2869C15.637 11.2869 15.3816 11.3927 15.1933 11.581L13.9033 12.881L13.9033 9.29102C13.9033 9.0258 13.798 8.77145 13.6104 8.58391C13.4229 8.39638 13.1685 8.29102 12.9033 8.29102C12.6381 8.29102 12.3837 8.39638 12.1962 8.58391C12.0087 8.77145 11.9033 9.0258 11.9033 9.29102L11.9033 12.881L10.6133 11.581C10.5204 11.4873 10.4098 11.4129 10.2879 11.3621C10.166 11.3114 10.0353 11.2852 9.90332 11.2852C9.77131 11.2852 9.6406 11.3114 9.51874 11.3621C9.39688 11.4129 9.28628 11.4873 9.19332 11.581C9.09959 11.674 9.0252 11.7846 8.97443 11.9064C8.92366 12.0283 8.89752 12.159 8.89752 12.291C8.89752 12.423 8.92366 12.5537 8.97443 12.6756C9.0252 12.7975 9.09959 12.9081 9.19332 13.001L12.1933 16.001ZM12.9033 22.291C14.8811 22.291 16.8145 21.7045 18.459 20.6057C20.1035 19.5069 21.3852 17.9451 22.1421 16.1179C22.899 14.2906 23.097 12.2799 22.7112 10.3401C22.3253 8.40031 21.3729 6.61848 19.9744 5.21995C18.5759 3.82143 16.794 2.86902 14.8542 2.48317C12.9144 2.09732 10.9037 2.29535 9.07649 3.05222C7.24922 3.8091 5.68744 5.09083 4.58862 6.73532C3.48981 8.37981 2.90332 10.3132 2.90332 12.291C2.90332 14.9432 3.95689 17.4867 5.83225 19.3621C6.76084 20.2907 7.86323 21.0273 9.07649 21.5298C10.2897 22.0324 11.5901 22.291 12.9033 22.291ZM12.9033 4.29102C14.4856 4.29102 16.0323 4.76021 17.3479 5.63926C18.6635 6.51831 19.6889 7.76774 20.2944 9.22955C20.8999 10.6914 21.0583 12.2999 20.7496 13.8517C20.4409 15.4036 19.679 16.8291 18.5602 17.9479C17.4414 19.0667 16.0159 19.8286 14.464 20.1373C12.9122 20.446 11.3037 20.2876 9.84185 19.6821C8.38004 19.0766 7.13061 18.0512 6.25156 16.7356C5.37251 15.42 4.90332 13.8733 4.90332 12.291C4.90332 10.1693 5.74618 8.13446 7.24647 6.63417C8.74676 5.13387 10.7816 4.29102 12.9033 4.29102Z"
          fill="#154E6B"
        />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
