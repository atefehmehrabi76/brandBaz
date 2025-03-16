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
      <div className="flex gap-5 ">
        {luxuryBrands.map((item) => (
          <Link href={item.path} key={item.id}>
            <Image
              src={item.image}
              alt="brand"
              width={80}
              height={80}
              quality={90}
              className=""
            />
          </Link>
        ))}
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={8}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full  h-[303px]  mt-5 bg-[#DEB887] z-0 rounded-2xl"
        >
          {laxuryProduct.map((item) => (
            <SwiperSlide key={item.id} className=" rounded-lg mt-8 mr-8">
              <div className="bg-white  h-[204px] z-30 rounded-[8px] ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={0}
                  height={0}
                  quality={90}
                  className="mx-auto w-[211px] h-[170px]"
                />
                <button className="bg-[#CBCBCB] relative right-28 w-[28px] h-[26px] rounded-[7.5px]">
                  <IoIosHeartEmpty className="text-white w-[26px] h-[24px] mx-auto" />
                </button>
              </div>
              {/* <div className="flex flex-col">
                <span className="text-white">{item.price}</span>
                <span className="text-white">{item.name}</span>
              </div> */}
            </SwiperSlide>
          ))}
          <div className="bg-black w-[1280px] h-[84px] relative bottom-[50px] z-20 rounded-b-2xl" />
        </Swiper>
      </div>
    </section>
  );
}

export default LaxuryBrands;
