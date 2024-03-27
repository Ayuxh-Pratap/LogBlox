import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";
import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {

  const navLinks = [
    {
      name: "Home",
      id: "#"
    },
    {
      name: "Features",
      id: "#Features"
    },
    {
      name: "FAQs",
      id: "#FAQ"
    },
    {
      name: "Pricing",
      id: "#Pricing"
    },
  ];

  return (
    <div className="pt-[80px] pb-[40px]">
      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. LogBlox by Ayush Pratap Singh || All rights reserved
      </p>

      <div className='flex items-center justify-center gap-6 pt-[56px] sm:pt-5 text-gray-700'>
        <a href='mailto:ayuaharshita14@gmail.com' className='text-2xl'><IoIosMailUnread /></a>
        <a href='https://github.com/Ayuxh-Pratap' className='text-2xl'><FaGithub /></a>
        <a href='https://wa.me/9460865839' className='text-2xl'><FaWhatsapp /></a>
      </div>
    </div>
  );
}