import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className=" md:border-[2px] border-[#CBCBCB] rounded-2xl md:w-[391px] h-[473px] md:mx-auto  md:my-[90px] ">
      <div className="mx-auto w-[120px] md:w-[175px] h-4 md:h-[26px] relative  mt-5 md:mt-10">
        <Image src="/images/logoBB.png" fill quality={80} alt="logo" />
      </div>
      <div className="my-6">
        <h2 className="text-[22px] font-semibold mx-6 md:mx-7">ثبت نام</h2>
        <div className="flex items-center">
          <span className=" w-20 md:w-26 h-[1.5px] bg-[#DEB887]" />
          <span className=" w-2 h-2 rounded-[50%] bg-[#DEB887]" />
        </div>
      </div>

      <form action="" className="flex flex-col mx-5 md:mx-9">
        <div className="flex gap-5 mb-5">
          <div>
            <label htmlFor="fname">نام</label>
            <input
              id="fname"
              type="text"
              className="bg-white w-full  rounded-[8px] h-[40px] outline-none   px-6"
            />
          </div>
          <div>
            <label htmlFor="lname">نام خانوادگی</label>
            <input
              id="lname"
              type="text"
              className="bg-white w-full  rounded-[8px] h-[40px] outline-none  px-6"
            />
          </div>
        </div>
        <label htmlFor="login" className="my-1 text[17px] font-normal">
          شماره موبایل
        </label>
        <input
          id="login"
          type="text"
          placeholder="98+"
          className="bg-white w-full text-left  rounded-[8px] h-[40px] outline-none mb-10  px-6"
        />
        <button
          type="submit"
          className="bg-black w-full  rounded-[8px] h-[40px] text-[17px] md:text-[20px] font-medium  text-white"
        >
          <Link href={"/completedLogin"}>ثبت نام</Link>
        </button>
      </form>
    </div>
  );
}

export default page;
