import React from "react";
import { mobileHeadrImages } from "@/constants/mobileDatas";
import Image from "next/image";
import Link from "next/link";
function HeaderImagesMobile() {
  return (
    <div className="md:hidden flex justify-around my-5 ">
      {mobileHeadrImages.map((item) => (
        <Link href={item.path} key={item.id}>
          <div className="relative w-[80px] h-[80px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              quality={90}
              className="object-contain"
            />
          </div>
          <h3 className="text-center text-[17px] font-bold mt-1">
            {item.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}

export default HeaderImagesMobile;
