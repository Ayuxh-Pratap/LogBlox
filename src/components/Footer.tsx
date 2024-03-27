import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

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
        <a href='mailto:ayuaharshita14@gmail.com' className='text-2xl'><SiGmail /></a>
        <a href='https://wa.me/9460865839' className='text-2xl'><IoLogoWhatsapp /></a>
        <a href="https://www.linkedin.com/in/ayush-pratap-singh-7716b2295/" className="text-2xl" target='_blank'><FaLinkedin /></a>
      </div>
    </div>
  );
}