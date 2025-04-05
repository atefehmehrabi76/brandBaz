"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

function MoreServises() {
  const carProperti = [
    {
      id: 1,
      title: "سپر خودرو",
      image: "/images/homePic/car1.png",
    },
    {
      id: 2,
      title: " روکش صندلی خودرو",
      image: "/images/homePic/car2.png",
    },
    {
      id: 3,
      title: "انواع چراغ",
      image: "/images/homePic/car3.png",
    },
    {
      id: 4,
      title: "انواع چراغ",
      image: "/images/homePic/car3.png",
    },
  ];
  return (
    <div className="   h-[238px] md:h-[349px]  bg-[#cbcbcb] pr-5 md:pr-20">
      <div className="flex justify-between md:p-0 py-4 relative md:ml-20 md:top-8">
        <div>
          <h3 className="font-medium text-[13px] md:font-bold md:text-[28px] ">
            همه خدمات خودرویی در یکجا!
          </h3>
          <p className="text-[10px] md:text-[20px]">
            از خرید و فروش تا خدمات پس از فروش، همه‌چیز را در یک مکان تجربه
            کنید.
          </p>
        </div>
        <button className="bg-black flex justify-center gap-[5px] h-[24.5px] md:h-[33px] w-[68px] md:w-[113px] border rounded-[9.2px] md:rounded-[8px] ml-5 md:ml-0">
          <span className="text-white text-[13px] md:text-[20px]">بیشتر</span>
          <Image
            src="/images/homePic/Vector.png"
            width={8}
            height={8}
            alt=""
            className="w-2 md:w-2 h-3 md:h-4 relative top-1 md:top-2"
          />
        </button>
      </div>
      <div className="flex relative md:top-14 ">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          breakpoints={{
            0: { spaceBetween: 5 },
            640: { spaceBetween: 10 },
          }}
        >
          {carProperti.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[115px] md:w-[350px] h-[150px] md:h-[200px] rounded-lg bg-white">
                <div className="relative md:top-3 h-[156px] w-full md:h-[170px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[13px] md:text-[18px] font-medium relative bottom-[35px]  md:bottom-[15px] right-[10px] md:right-[20px]">
                  {item.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MoreServises;
