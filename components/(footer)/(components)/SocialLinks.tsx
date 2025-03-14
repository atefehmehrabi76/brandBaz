import React from "react";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { PiTelegramLogoLight } from "react-icons/pi";

function SocialLinks() {
  return (
    <div className="flex relative  gap-15 ">
      <Link href="/">
        <BsTwitterX className="w-[27px] h-[27px]" />
      </Link>
      <Link href="/">
        <AiOutlineWhatsApp className="w-[27px] h-[27px]" />
      </Link>
      <Link href="/">
        <PiTelegramLogoLight className="w-[27px] h-[27px]" />
      </Link>
      <Link href="/">
        <BsInstagram className="w-[27px] h-[27px]" />
      </Link>
    </div>
  );
}

export default SocialLinks;
