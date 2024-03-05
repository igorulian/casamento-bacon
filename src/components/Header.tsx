import { Quicksand } from "next/font/google";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

const HeaderButton = (props: ComponentProps<"button">) => (
  <button
    style={{
      color: "#5D758D",
    }}
    className={twMerge("text-base ", quicksand.className)}
  >
    {props.children}
  </button>
);

const HeaderContainer = ({ children, ...props }: ComponentProps<"button">) => {
  return (
    <header
      {...props}
      className="bg-white z-20 sticky h-16  top-0 w-full p-4 flex items-center justify-center gap-8"
    >
      {children}
    </header>
  );
};

const Header = {
  Container: HeaderContainer,
  Button: HeaderButton,
};

export default Header;
