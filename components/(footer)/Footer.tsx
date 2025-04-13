import React from "react";
import FooterLinks from "./(components)/FooterLinksContainer";
import SocialLinks from "./(components)/SocialLinks";
import Image from "next/image";
import FooterCantactUs from "./(components)/FooterCantactUs";
import { PiCopyrightLight } from "react-icons/pi";

function Footer() {
  return (
    <footer className="hidden md:block w-full bg-[#CBCBCB]">
      <div className="flex justify-between">
        <FooterLinks />
        <div className="ml-20 mt-5 flex flex-col gap-y-8">
          <Image
            className="relative right-24"
            src="/footerimg/brandbaz.png"
            width={204.7}
            height={48.16}
            alt="logoshop"
          />
          <FooterCantactUs />
          <SocialLinks />
        </div>
      </div>
      <div className="flex gap-[6px] justify-center items-center py-3 border-t-1 border-gray-400 mx-20">
        <PiCopyrightLight className="w-5 h-5" />
        <span className="text-black font-light text-[16px] ">
          کلیه حقوق مادی و معنوی این سایت متعلق به برندباز می باشد
        </span>
      </div>
    </footer>
  );
}

export default Footer;
