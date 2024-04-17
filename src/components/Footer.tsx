import { PiHeart } from "react-icons/pi";

const Footer = () => (
  <footer className="flex flex-row items-center p-4 w-full justify-center h-20 bg-white">
    <p className="text-[#ccc]">Feito com</p>
    <PiHeart className="mx-2" color="#ccc" />
    <p className="text-[#ccc]">por Igor</p>
  </footer>
);

export default Footer;
