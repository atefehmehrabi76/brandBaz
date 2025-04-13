"use client";
import "swiper/css";
import React from "react";
import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { luxuryBrands } from "@/constants/discover";
import { laxuryProduct } from "@/constants/discover";
import { IoIosHeartEmpty } from "react-icons/io";

function LaxuryBrands() {
  return (
    <section className="container mx-auto  px-5">
      <h2 className="text-[14px] md:text-2xl font-medium my-2 md:my-5">
        برندهای لاکچری
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={10}
        loop={true}
        breakpoints={{
          0: {
            spaceBetween: 4,
            slidesPerView: 5,
          },
          640: {
            spaceBetween: 8,
            slidesPerView: 11,
          },
        }}
      >
        <div className="flex gap-5 ">
          {luxuryBrands.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={item.path}>
                <Image
                  src={item.image}
                  alt="brand"
                  width={0}
                  height={0}
                  quality={90}
                  className="w-12 h-12 md:w-20 md:h-20"
                />
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={8}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              spaceBetween: 5,
              slidesPerView: 3,
            },
            640: {
              spaceBetween: 8,
              slidesPerView: 8,
            },
          }}
          className="w-full  h-[253px] md:h-[303px] mt-3 md:mt-5 bg-[#DEB887] z-0 rounded-2xl"
        >
          {laxuryProduct.map((item) => (
            <SwiperSlide
              key={item.id}
              className=" rounded-lg mt-5 md:mt-8 mr-6 md:mr-8"
            >
              <div className="bg-white w-[130px] md:w-[155px] h-[170px] md:h-[204px] z-30 rounded-[8px] ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={0}
                  height={0}
                  quality={90}
                  className="mx-auto w-[145px] h-[160px] md:w-[211px] md:h-[170px]"
                />
                <button className="bg-[#CBCBCB] relative right-25 bottom-[17px] md:bottom-0 md:right-30 w-[24px] md:w-[26px] h-[22px] md:h-[24px] rounded-[7.5px]">
                  <IoIosHeartEmpty className="text-white w-[22px] md:w-[24px] h-[20px] md:h-[22px] mx-auto" />
                </button>
              </div>
            </SwiperSlide>
          ))}
          <div className="bg-black w-[1280px] h-[84px] relative bottom-[50px] z-20 rounded-b-2xl" />
        </Swiper>
      </div>
    </section>
  );
}

export default LaxuryBrands;
