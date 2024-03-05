import { Lora } from "next/font/google";
import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ children, ...props }: ComponentProps<"h4">) => (
  <h4 {...props} className={twMerge("text-white text-base", props.className)}>
    {" "}
    {children}{" "}
  </h4>
);

const SectionContainer = ({
  children,
  ...props
}: ComponentProps<"section">) => (
  <section
    className={twMerge("flex flex-col h-dvh w-full bg-white ", props.className)}
  >
    {children}
  </section>
);
const Section = {
  Container: SectionContainer,
  Title: SectionTitle,
};

export default Section;
