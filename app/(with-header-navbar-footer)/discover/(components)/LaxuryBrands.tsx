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
    <section className="container mx-auto mb-5 px-10">
      <h2 className="text-2xl font-medium  my-5">برندهای لاکچری</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={10}
        loop={true}
        breakpoints={{
          0: {
            spaceBetween: 5,
            slidesPerView: 5,
          },
          640: {
            spaceBetween: 10,
            slidesPerView: 10,
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
                  width={80}
                  height={80}
                  quality={90}
                  className=""
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
              spaceBetween: 10,
              slidesPerView: 8,
            },
          }}
          className="w-full  h-[273px] md:h-[303px]  mt-5 bg-[#DEB887] z-0 rounded-2xl"
        >
          {laxuryProduct.map((item) => (
            <SwiperSlide key={item.id} className=" rounded-lg mt-8 mr-8">
              <div className="bg-white  h-[180px] md:h-[204px] z-30 rounded-[8px] ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={0}
                  height={0}
                  quality={90}
                  className="mx-auto w-[145px] h-[150px] md:w-[211px] md:h-[170px]"
                />
                <button className="bg-[#CBCBCB] relative right-25 w-[28px] h-[26px] rounded-[7.5px]">
                  <IoIosHeartEmpty className="text-white w-[26px] h-[24px] mx-auto" />
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
