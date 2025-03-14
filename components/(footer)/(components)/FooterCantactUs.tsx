import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterCantactUs() {
  return (
    <div className="flex gap-[80px]">
      <Link href={"/"} className="flex gap-3">
        <Image src="/footerimg/phonecall.png" width={30.37} height={30.35} alt="call us" />
        <h4 className="text-black text-xl font-bold">ارتباط باما</h4>
      </Link>
      <Link href={"/"}>
        <button className="bg-black text-white rounded-[8px] w-[100px] h-[30px]">
          تماس
        </button>
      </Link>
    </div>
  );
}

export default FooterCantactUs;
