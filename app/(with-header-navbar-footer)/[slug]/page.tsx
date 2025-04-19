import React from "react";
import Image from "next/image";
import Main from "./(components)/Main";
import Favorites from "./(components)/Favorites";
import BestSellers from "./(components)/BestSellers";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>
      <Main productId={slug} />
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
