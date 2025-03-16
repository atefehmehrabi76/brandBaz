import Image from "next/image";
import React from "react";
import Link from "next/link";

function ImageHeader() {
  return (
    <div className="px-5 md:px-20">
      <div className="relative w-full md:w-full mx-auto h-[118px] md:h-[400px]">
        <Image
          src="/images/homePic/aAXSx1.png"
          fill
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
          alt="header-pic"
          className="object-cover"
        />
        <div className="absolute  flex flex-col justify-center mt-3 md:my-24 mx-6 md:mx-20">
          <div className="text-white font-bold text-[10px] md:text-[28px]">
            <p>همه چیز برای خودروی شما،</p>
            <p>از زیبایی تا ایمنی!</p>
          </div>

          <div className="relative top-[28px] right-[265px] sm:right-[410px] md:right-[130px]">
            <Link
              href={"/"}
              className="inline-flex items-center gap-[5px] md:gap-2 bg-[#0f0f0f] text-white px-2 md:px-4 py-[2px] md:py-1 rounded-[2px] md:rounded-[8px] hover:bg-[#333] transition-colors"
            >
              <span className="text-[8px] md:text-[18px]">رفتن به فروشگاه</span>
              <Image
                src="/images/homePic/Vector.png"
                width={12}
                height={12}
                alt="felesh"
                className="w-1 h-2 md:w-2 md:h-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageHeader;
