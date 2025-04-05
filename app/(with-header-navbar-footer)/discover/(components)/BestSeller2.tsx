import React from "react";
import Link from "next/link";
import Image from "next/image";
import { bestSellerDiscover2 } from "@/constants/discover";
import { IoIosHeartEmpty } from "react-icons/io";

// change price format
// const convertToFarsiNumber = (number: number): string => {
//   const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
//   return number
//     .toString()
//     .split("")
//     .map((digit) => farsiDigits[parseInt(digit)] || digit)
//     .join("");
// };
function BestSellers2() {
  return (
    <section className=" container mx-auto mb-[90px] md:mb-[50px] px-6">
      <h3 className="text-xl md:text-3xl font-medium   my-5">
        پر فروش ترین ها
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10 ">
        {bestSellerDiscover2.map((item, index) => (
          <Link
            href={"/"}
            key={item.id}
            className={`flex flex-col w-[158px] md:w-[210px] h-[320px] md:h-[380px] ${
              index === 4 ? "hidden md:block" : ""
            }`}
          >
            <div className="bg-white rounded-[10.8px]">
              <div className=" relative w-[35px] h-[25px] md:h-[35px] mx-auto mt-2">
                <Image
                  src={item.brand}
                  alt={item.title}
                  className=""
                  quality={90}
                  fill
                />
              </div>
              <div className="relative w-[145px] md:w-[180px] h-[210px] md:h-[240px] mx-auto">
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
                <p className="font-normal text-[14px] md:text-[18px]">
                  {/* {convertToFarsiNumber(item.price)} تومان */}
                  {item.price} تومان
                </p>
                <p className="text-[12px] md:text-[16px] font-light">
                  {item.title}
                </p>
              </div>
              <button className="bg-[#CBCBCB] relative w-[28px] md:w-[36px] h-[26px] md:h-[34px] rounded-[7.5px] p-1">
                <IoIosHeartEmpty className="text-white w-[22px] h-[20px] md:w-[26px] md:h-[24px] mx-auto" />
              </button>
            </div>
          </Link>
        ))}
      </div>
      <button className="bg-black flex justify-center gap-[6px] h-[24px] md:h-[34px] w-[70px] md:w-[100px] border rounded-[8px] relative   right-[275px] md:right-[1127px]">
        <span className="text-white text-[16px] md:text-[20px]">بیشتر</span>
        <Image
          src="/images/homePic/Vector.png"
          width={0}
          height={0}
          alt=""
          className="w-2 h-[11px] md:h-4 relative top-[6px] md:top-[8px]"
        />
      </button>
    </section>
  );
}

export default BestSellers2;
