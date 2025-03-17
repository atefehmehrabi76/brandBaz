import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiShoppingBag } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

function Header() {
  return (
    <header className="w-full">
      <div className="grid grid-cols-4 grid-rows-2  items-center md:gap-5 pt-7  md:pr-10 ">
        <Link
          href="/"
          className="md:col-start-1 md:col-end-3  col-start-2 col-end-4 py-5 md:py-0 pr-13 md:pr-0
           md:row-start-1 md:row-end-2 shrink-0"
        >
          <Image
            src="/images/logoBB.png"
            width={130}
            height={22}
            alt="برند باز"
            className="object-contain"
            priority
            quality={90}
          />
        </Link>
        <div className="col-start-1 col-end-5 md:col-start-3 md:col-end-4 row-start-2 row-end-3 mx-auto md:row-start-1 md:row-end-2 rounded-[8px] w-[90%] md:w-[410px] h-[44px] md:h-[30px] flex justify-between items-center  bg-white px-2">
          <input
            type="text"
            placeholder="جستجو کنید..."
            className="w-full h-10 rounded-lg  pr-4 pl-12 outline-none "
          />
          <button type="button" className="" aria-label="جستجو">
            <Image
              src="/images/Vector1.png"
              width={20}
              height={20}
              alt=""
              className="object-contain"
              quality={90}
            />
          </button>
        </div>

        <div className="flex  col-start-4 col-end-5 items-center gap-5 mr-11 md:mr-2 md:pr-26">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="اعلان‌ها"
            >
              <IoNotificationsOutline className="w-[25.3px] h-[29.87px]" />
              <span className="absolute top-3 right-3 bg-red-500  w-2 h-2 flex items-center justify-center rounded-full" />
            </button>

            <button
              type="button"
              className="hidden md:block relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="سبد خرید"
            >
              <PiShoppingBag className="w-[25.3px] h-[29.87px]" />
            </button>
          </div>

          <div className="hidden md:flex items-center ">
            <Link
              href="/login"
              type="button"
              className=" hover:bg-gray-100 rounded-full transition-colors"
              aria-label="پروفایل کاربری"
            >
              <CiUser className="w-[25.3px] h-[29.87px]" />
            </Link>

            <button
              type="button"
              className=" hover:bg-gray-100 rounded-full transition-colors"
              aria-label="منو"
            >
              <Image
                src="/images/material.png"
                width={24}
                height={24}
                alt=""
                className="object-contain"
                quality={90}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
