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
      <section className=" flex justify-around mx-10 md:mx-22">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={11}
          loop={true}
          // pagination={{ clickable: true }}

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
            <SwiperSlide>
              <div
                key={user.id}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  src={user.image}
                  alt={user.name}
                  width={70}
                  height={70}
                  quality={90}
                />
                <p className="text-[12px] md:text-[16px] font-medium ">
                  {user.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <BestSellers />
      <LaxuryBrands />
      <section className="mx-10 md:mx-20 my-10 ">
        <h2 className="font-bold text-2xl mb-5 ">برندهای برتر</h2>
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
              <SwiperSlide>
                <div key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={0}
                    height={0}
                    quality={90}
                    className="w-[70px] h-[40px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className=" mx-10 md:mx-20 my-10">
        <h2 className="font-bold text-2xl mb-5 ">برندهای ایرانی</h2>
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
                    className="w-[70px] h-[40px]"
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
