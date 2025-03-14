import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bestSellers } from "@/constants/bestSellers";

function BestSeller() {
  return (
    <>
      <section className="max-w-3xl md:max-w-[1200px] mx-auto px-4 mt-5 md:my-8">
        <h2 className="text-2xl font-bold mb-6 text-right">پر فروش ترین ها</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-10 ">
          {bestSellers.slice(0, 8).map((item, index) => (
            <Link
              href={"/"}
              key={item.id}
              className={`bg-white flex flex-col items-center  rounded-2xl ${
                index >= 6 ? "hidden sm:block" : ""
              } ${
                item.number === 0
                  ? "h-[100px] md:h-[200px] "
                  : item.number === 2
                  ? "h-[120px] md:h-[270px]"
                  : "h-[160px] md:h-[350px]"
              }`}
            >
              <h3 className="mt-2 font-medium text[12px] md:text-[30px] text-center">
                {item.title}
              </h3>
              {/* <div
                className={`relative w-[90px] md:w-[250px] ${
                  item.number === 0
                    ? "h-100px md:h-[200px] "
                    : item.number === 2
                    ? "h-110px md:h-[220px]"
                    : "h-120px md:h-[300px]"
                }`} */}
              <div className="w-[90px] md:w-[250px] ">
                <Image
                  src={item.image}
                  alt={item.title}
                  // fill
                  className="object-cover w-[220px] mx-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default BestSeller;
