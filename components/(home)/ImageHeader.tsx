"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

function ImageHeader() {
  return (
    <div className="px-5 md:px-20">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
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
                  <span className="text-[8px] md:text-[18px]">
                    رفتن به فروشگاه
                  </span>
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
        </SwiperSlide>
        <SwiperSlide>
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
                  <span className="text-[8px] md:text-[18px]">
                    رفتن به فروشگاه
                  </span>
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageHeader;
