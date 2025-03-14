import BestSeller from "@/components/(home)/BestSeller";
import ImageHeader from "@/components/(home)/ImageHeader";
import MoreServises from "@/components/(home)/MoreServises";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeaderImagesMobile from "../(mobile)/HeaderImagesMobile";

function Home() {
  return (
    <div className=" mx-auto">
      <HeaderImagesMobile/>
      <ImageHeader />
      <BestSeller />
      <div className="container mx-auto px-5 md:px-10 py-6">
        <div className="hidden md:block h-[350px] mb-6">
          <div className="relative w-full h-[350px]">
            <Image
              src="/images/homePic/coolection1.png"
              fill
              quality={90}
              alt="collection1"
              className="object-cover"
            />
          </div>
          <div className="text-5xl font-bold text-white relative bottom-[250px] right-[900px] ">
            <h3>کالکشن جدید </h3>
            <p className="text-4xl mt-2">TOM FORD</p>
          </div>
        </div>
        <div className="relative w-full  mx-auto h-[158px] md:hidden">
          <Image
            src="/images/mobile/banner.png"
            fill
            quality={90}
            alt="mobilebanner"
            className="object-cover"
          />
        </div>

        <div className="hidden md:block h-[420px]">
          <div className="relative w-full h-[420px]">
            <Image
              src="/images/homePic/recollection.png"
              fill
              quality={90}
              alt="collection2"
              className="object-cover"
            />
          </div>
          <div className="text-3xl font-bold text-white relative bottom-[385px] right-[70px] ">
            <h3> کالکشن</h3>
            <p className=" text-2xl mt-1">ROSE EXPOSED </p>
          </div>
          <div className="relative bottom-[135px] right-[945px]">
            <Link
              href={"/"}
              className="inline-flex items-center gap-2 bg-[#1c1c1c] text-white px-7 py-1 rounded-[8px] hover:bg-[#333] transition-colors"
            >
              <span className="text-[15px]">همین الان خرید کنید</span>
              <Image
                src="/images/homePic/Vector.png"
                width={12}
                height={12}
                alt="felesh"
                className="w-3 h-4"
              />
            </Link>
          </div>
        </div>
        <div className="relative w-full mx-auto h-[158px] md:hidden">
          <Image
            src="/images/mobile/banner1.png"
            fill
            quality={90}
            alt="mobilebanner"
            className="object-cover"
          />
        </div>
      </div>
      <MoreServises />
      <div className="hidden md:block container mx-auto py-6 h-[350px] mb-15 px-10">
        <div className="relative w-full h-[350px]">
          <Image
            src="/images/homePic/fparfum.png"
            fill
            sizes="(max-width:1200px) 100vh,1200px"
            quality={90}
            alt="perfume"
          />
        </div>
        <div className="text-7xl font-normal text-white relative bottom-[315px] right-[120px] ">
          <h3> تخفیف</h3>
          <p className="  mt-2">100%- </p>
        </div>
        <div className="relative bottom-[225px] right-[985px]">
          <Link
            href={"/"}
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-1 rounded-[8px] hover:bg-[#333] transition-colors"
          >
            <span className="text-[16px] font-normal">همین الان خرید کنید</span>
            <Image
              src="/images/homePic/Vector.png"
              width={12}
              height={12}
              alt="felesh"
              className="w-3 h-4"
            />
          </Link>
        </div>
      </div>
      <div className="relative w-full  h-[158px] md:hidden">
        <Image
          src="/images/mobile/banner3.png"
          fill
          quality={90}
          alt="mobilebanner"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Home;
