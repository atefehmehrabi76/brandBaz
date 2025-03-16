import React from "react";
import Link from "next/link";
import Image from "next/image";
import { bestSellersWomen } from "@/constants/womenProduct";
// import like from "@/public/images/womenPic/bestseller/like.svg";
// import Vector from "@/public/images/homePic/Vector.png";

// const convertToFarsiNumber = (number: number): string => {
//   const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
//   return number
//     .toString()
//     .split("")
//     .map((digit) => farsiDigits[parseInt(digit)] || digit)
//     .join("");
// };
function Favorites() {
  return (
    <section className="hidden md:block container mx-auto mb-[10px]">
      <h3 className="text-3xl font-medium px-10 my-5">محبوب ترین ها</h3>
      <div className="grid grid-cols-5 gap-10 px-10 ">
        {bestSellersWomen.map((item) => (
          <Link
            href={"/"}
            key={item.id}
            className="flex flex-col w-[210px] h-[380px] "
          >
            <div className="bg-white rounded-[10.8px]">
              <div className=" relative w-[35px] h-[35px] mx-auto mt-2">
                <Image
                  src={item.brand}
                  alt={item.title}
                  className=""
                  quality={90}
                  fill
                />
              </div>
              <div className="relative w-[180px] h-[240px] mx-auto">
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
              <button className="bg-[#CBCBCB] w-[36px] h-[34px] rounded-[7.5px] p-1 relative">
                <Image
                  src="/images/womenPic/bestseller/like.svg"
                  alt="like"
                  className=""
                  width={26}
                  height={24}
                />
              </button>
            </div>
          </Link>
        ))}
      </div>
      <button className="bg-black flex justify-center gap-[5px] h-[33px] w-[113px] border rounded-[8px] relative right-[1127px]">
        <span className="text-white text-[20px]">بیشتر</span>
        <Image
          src="/images/homePic/Vector.png"
          width={8}
          height={8}
          alt=""
          className="w-2 h-4 relative top-[8px]"
        />
      </button>
    </section>
  );
}

export default Favorites;
