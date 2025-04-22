import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function TopBrands() {
  return (
    <div className="container  mx-auto px-4 mt-7 md:mt-15 ">
      <h2 className="font-medium text-[14] md:text-2xl mb-3 md:mb-8">
        دنیای لوکس، انتخابی متفاوت
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
        }}
        className=""
      >
        <SwiperSlide>
          <Image
            src="/images/homePic/loloBack.png"
            alt="lolo"
            width={0}
            height={0}
            className="w-[295px] h-[190px] md:w-[600px] md:h-[350px]"
          />
          <div className="relative bottom-44 md:bottom-83 flex gap-20 md:gap-12 px-3 md:px-7">
            <div className="w-40 md:w-120">
              <p className="font-extrabold text-[13px] md:text-[30px]">
                با LOLO، خاص باش
              </p>
              <p className="font-normal text-[11px] md:text-[20px]">
                ترکیبی از سادگی، اصالت و سلیقه در هر محصول.
              </p>
            </div>
            <Image
              src="/images/homePic/logo_lolo_new 1.png"
              alt="logo"
              width={0}
              height={0}
              className="w-8 h-5 md:w-15 md:h-10"
            />
          </div>
          <div className="flex gap-10 md:gap-20  pr-5 ">
            <button className="bg-black text-white  bottom-23 relative md:bottom-40 rounded-[8px] md:rounded-2xl w-30 h-6 md:w-50 md:h-10 text-[9px] md:text-[14px] md:mr-3">
              مشاهده محصولات LOLO
            </button>
            <Image
              src="/images/homePic/loloProduct.png"
              alt="lolo"
              width={0}
              height={0}
              className="relative bottom-40 md:bottom-75 w-[115px] h-[85px] md:w-[280px] md:h-[190px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/homePic/nikeBack.png"
            alt="nike"
            width={0}
            height={0}
            className="w-[295px] h-[190px] md:w-[600px] md:h-[350px]"
          />
          <div className="relative bottom-44 gap-13  md:bottom-83 flex  pr-5 md:px-7">
            <div className="w-40 md:w-190">
              <p className="font-extrabold mb-3 text-[15px] md:text-[30px] text-white">
                Just Do It
              </p>
              <p className="font-normal text-[10px] md:text-[15px] text-white">
                جدیدترین پوشاک ورزشی و کفش‌های حرفه‌ای برای سبک زندگی فعال.
              </p>
            </div>
            <Image
              src="/images/homePic/logoNike.png"
              alt="logo"
              width={0}
              height={0}
              className="w-9 h-3 md:w-20 md:h-6"
            />
          </div>
          <div className="flex gap-8 md:gap-30 pr-5 ">
            <button className="bg-black text-white  bottom-28 relative md:bottom-46 rounded-[8px] md:rounded-2xl w-30 h-6 md:w-50 md:h-10 text-[9px] md:text-[14px] md:mr-3">
              مشاهده محصولات NIKE
            </button>
            <Image
              src="/images/homePic/nikeProduct.png"
              alt="lolo"
              width={0}
              height={0}
              className="relative bottom-49 md:bottom-80 w-[110px] h-[100px] md:w-[200px] md:h-[190px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopBrands;
