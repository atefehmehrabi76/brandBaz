import Image from "next/image";
import React from "react";

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
  ];
  return (
    <div className="   h-[248px] md:h-[349px]  bg-[#cbcbcb]">
      <div className="flex justify-between md:p-0 p-4 relative md:ml-20 md:top-8">
        <div>
          <h3 className="font-medium text-[13px] md:font-bold md:text-[28px] md:mr-20">
            همه خدمات خودرویی در یکجا!
          </h3>
          <p className="text-[10px] md:text-[20px] md:mr-10">
            از خرید و فروش تا خدمات پس از فروش، همه‌چیز را در یک مکان تجربه
            کنید.
          </p>
        </div>
        <button className="bg-black flex justify-center gap-[5px] h-[24.5px] md:h-[33px] w-[68px] md:w-[113px] border rounded-[9.2px] md:rounded-[8px]">
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
      <div className="flex justify-evenly gap-5 relative md:top-14 ">
        {carProperti.map((item) => (
          <div
            key={item.id}
            className="w-[135px] md:w-[350px] h-[156px] md:h-[200px] rounded-lg bg-white"
          >
            <div className="relative md:top-3 h-[156px] w-full md:h-[170px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[13px] md:text-[18px] font-medium relative bottom-[27px]  md:bottom-[15px] right-[10px] md:right-[20px]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreServises;
