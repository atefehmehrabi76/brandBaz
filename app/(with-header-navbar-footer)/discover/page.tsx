import React from "react";
import { bartarBrands, iranianBrands, userStory } from "@/constants/discover";
import Image from "next/image";
import BestSellers from "./(components)/BestSellers";
import LaxuryBrands from "./(components)/LaxuryBrands";
import BestSellers2 from "./(components)/BestSeller2";

function page() {
  return (
    <div>
      <section className="flex justify-around mx-22">
        {userStory.map((user) => (
          <div key={user.id}>
            <Image src={user.image} alt={user.name} width={70} height={70} />
            <p className="text-[16px] font-medium">{user.name}</p>
          </div>
        ))}
      </section>
      <BestSellers />
      <LaxuryBrands />
      <section className=" mx-10 my-10 ">
        <h2 className="font-bold text-2xl mb-5 px-10">برندهای برتر</h2>
        <div className="flex justify-around items-center px-10">
          {bartarBrands.map((item) => (
            <div key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                width={0}
                height={0}
                quality={90}
                className="w-[70px] h-[40px]"
              />
            </div>
          ))}
        </div>
      </section>
      <section className=" mx-10 my-10">
        <h2 className="font-bold text-2xl mb-5 px-10">برندهای ایرانی</h2>
        <div className="flex justify-around items-center px-10">
          {iranianBrands.map((item) => (
            <div key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                width={0}
                height={0}
                quality={90}
                className="w-[70px] h-[40px]"
              />
            </div>
          ))}
        </div>
      </section>
      <BestSellers2 />
    </div>
  );
}

export default page;
