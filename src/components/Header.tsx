import { Lora, Quicksand } from "next/font/google";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const lora = Lora({ subsets: ["latin"] });

type HeaderButtonProps = {
  href: string;
  children: React.ReactNode;
};

const HeaderButton = (props: HeaderButtonProps) => (
  <Link
    style={{
      color: "#5D758D",
    }}
    {...props}
    className={twMerge("text-base ", lora.className)}
  >
    {props.children}
  </Link>
);

const HeaderContainer = ({ children, ...props }: ComponentProps<"button">) => {
  return (
    <header
      {...props}
      className="bg-white shadow-md z-20 sticky h-16  top-0 w-full p-4 flex items-center justify-center gap-8"
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
