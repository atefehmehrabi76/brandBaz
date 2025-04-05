import React from "react";
import Image from "next/image";
import MainWomen from "./(components)/MainWomen";
import Favorites from "./(components)/Favorites";
import BestSellers from "./(components)/BestSellers";

function page() {
  return (
    <div>
      <MainWomen />
      <BestSellers />

      <div className="hidden md:block h-[350px] mb-6 mx-auto container ">
        <div className="relative mx-auto w-[1240px] h-[350px]">
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
      <Favorites />
    </div>
  );
}

export default page;
