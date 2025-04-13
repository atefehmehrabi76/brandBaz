"use client";
import React from "react";
import { bartarBrands, iranianBrands, userStory } from "@/constants/discover";
import Image from "next/image";
import BestSellers from "./(components)/BestSellers";
import LaxuryBrands from "./(components)/LaxuryBrands";
import BestSellers2 from "./(components)/BestSeller2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

function page() {
  return (
    <div>
      <section className=" flex mx-4 md:mx-22">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={11}
          loop={true}
          breakpoints={{
            0: {
              spaceBetween: 5,
              slidesPerView: 5,
            },
            640: {
              spaceBetween: 10,
              slidesPerView: 11,
            },
          }}
        >
          {userStory.map((user) => (
            <SwiperSlide key={user.id}>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={0}
                  height={0}
                  quality={90}
                  className="w-13 h-13 md:w-20 md:h-20"
                />
                <p className="text-[10px] md:text-[16px] font-medium ">
                  {user.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <BestSellers />
      <LaxuryBrands />
      <section className="mx-5 md:mx-20 my-5 md:my-10 ">
        <h2 className="font-bold text-[14px] md:text-[24px] mb-3 ">
          برندهای برتر
        </h2>
        <div className="flex justify-around items-center ">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={11}
            loop={true}
            breakpoints={{
              0: {
                spaceBetween: 5,
                slidesPerView: 5,
              },
              640: {
                spaceBetween: 10,
                slidesPerView: 11,
              },
            }}
            className="w-full"
          >
            {bartarBrands.map((item) => (
              <SwiperSlide key={item.id}>
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={0}
                    height={0}
                    quality={90}
                    className="w-[45px] md:w-[70px] h-[27px] md:h-[40px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className=" mx-5 md:mx-20 my-5 md:my-10">
        <h2 className="font-bold text-[14px] md:text-2xl mb-3 ">
          برندهای ایرانی
        </h2>
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
              slidesPerView: 11,
            },
          }}
        >
          <div className="flex justify-around items-center px-10">
            {iranianBrands.map((item) => (
              <SwiperSlide key={item.id}>
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={0}
                    height={0}
                    quality={90}
                    className="w-[45px] md:w-[70px] h-[27px] md:h-[40px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
      <BestSellers2 />
    </div>
  );
}

export default page;
