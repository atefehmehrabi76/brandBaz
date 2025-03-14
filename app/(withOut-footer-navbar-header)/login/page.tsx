import Image from "next/image";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className=" md:border-[2px] border-[#CBCBCB] rounded-2xl md:w-[391px] h-[453px] md:mx-auto  md:my-[90px] ">
      <div className="mx-auto w-[120px] md:w-[175px] h-4 md:h-[26px] relative  mt-5 md:mt-10">
        <Image src="/images/logoBB.png" fill quality={80} alt="logo" />
      </div>
      <div className="my-10">
        <h2 className="text-[22px] font-semibold mx-6 md:mx-9">ورود</h2>
        <div className="flex items-center">
          <span className=" w-20 md:w-26 h-[1.5px] bg-[#DEB887]" />
          <span className=" w-2 h-2 rounded-[50%] bg-[#DEB887]" />
        </div>
      </div>

      <form action="" className="flex flex-col mx-5 md:mx-9">
        <label htmlFor="login" className="my-1 text[17px] font-normal">
          شماره موبایل خود را وارد کنید.
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
          ورود
        </button>
      </form>
      <p className="mx-9 my-3 text-[16px] font-normal">
        حساب ندارید؟{" "}
        <Link href={"/register"} className="text-blue-500">
          ثبت نام
        </Link>{" "}
        کنید.
      </p>
    </div>
  );
}

export default Login;
