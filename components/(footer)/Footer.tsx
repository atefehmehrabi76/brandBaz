import React from "react";
import FooterLinks from "./(components)/FooterLinksContainer";
import SocialLinks from "./(components)/SocialLinks";
import Image from "next/image";
import FooterCantactUs from "./(components)/FooterCantactUs";

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
      <div className="flex gap-2 justify-center py-3 border-t-1 border-gray-400 mx-20">
        <Image
          src="/footerimg/Vector.png"
          height={18}
          width={20}
          alt="copyright"
        />
        <span className="text-black ">
          کلیه حقوق مادی و معنوی این سایت متعلق به برندباز می باشد
        </span>
      </div>
    </footer>
  );
}

export default Footer;
