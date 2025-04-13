"use client";
import Image from "next/image";
import React from "react";
import { useState, useRef } from "react";

function completedLogin() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e: any, index: number) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputsRef.current[index - 1].focus();
    }
  };
  return (
    <div className=" md:border-[2px] border-[#CBCBCB] rounded-2xl md:w-[391px] h-[453px] md:mx-auto  md:my-[90px] ">
      <div className="mx-auto w-[120px] md:w-[175px] h-4 md:h-[26px] relative  mt-5 md:mt-10">
        <Image src="/images/logoBB.png" fill quality={80} alt="logo" />
      </div>

      <form action="" className="flex flex-col mx-5 md:mx-9 my-28 md:my-13">
        <label htmlFor="login" className="mt-5 text[17px] font-normal">
          کد تایید را وارد کنید
        </label>
        <div className="flex justify-between my-5 md:my-7 " dir="ltr">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => (inputsRef.current[idx] = el)}
              className="w-11 h-12 text-center bg-white rounded-[8px] "
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-black w-full  rounded-[8px] h-[40px] text-[17px] md:text-[20px] font-medium  text-white"
        >
          تایید
        </button>
      </form>
    </div>
  );
}

export default completedLogin;
