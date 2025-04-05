"use client";
import React from "react";
import { seenRecently } from "@/constants/discover";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";

export default function SeenRecetly() {
  return (
    <div className="hidden md:block w-[1920px] h-[469px] bg-[#CBCBCB] pr-20 py-10">
      <h3 className="font-medium text-2xl mb-4">آخرین بازدید شما</h3>
      <div className="flex">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={7}
          spaceBetween={1}
        >
          {seenRecently.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={"/"} className="flex flex-col w-[215px] h-[395px]">
                <div className=" bg-white rounded-[10.8px] ">
                  <div className=" relative w-[35px] h-[33px] mx-auto mt-2">
                    <Image
                      src={item.brand}
                      alt={item.title}
                      className=""
                      quality={90}
                      fill
                    />
                  </div>
                  <div className="relative w-[180px] h-[245px] mx-auto">
                    <Image
                      src={item.image}
                      fill
                      className=""
                      alt={item.title}
                      quality={90}
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <div>
                    <p className="font-normal text-[18px]">
                      {/* {convertToFarsiNumber(item.price)} تومان */}
                      {item.price} تومان
                    </p>
                    <p>{item.title}</p>
                  </div>
                  <button>
                    <GrFavorite className="text-white w-[22px] h-[24px] ml-3" />
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
