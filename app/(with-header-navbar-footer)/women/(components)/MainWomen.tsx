import React from "react";
import Link from "next/link";
import Image from "next/image";
import { womenProducts } from "@/constants/womenProduct";

function MainWomen() {
  return (
    <section className="container  mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {womenProducts.map((product, index) => (
          <Link
            href={"/"}
            key={product.id}
            className="flex justify-around h-[130px] md:h-[160px] bg-white rounded-[8px]"
          >
            <div className="my-auto">
              <span
                className={`m-5 font-bold ${
                  index >= 4
                    ? "text-[36px] md:text-[60px]"
                    : "text-[60px] md:text-[80px] "
                } font-bold text-[#DEB88733]`}
              >
                {product.placeholder}
              </span>
              <h3 className="text-2xl md:text-4xl font-medium relative right-8 bottom-8  md:bottom-10">
                {product.title}
              </h3>
            </div>
            <div className=" w-[215px]  relative">
              <Image
                src={product.image}
                className="object-contain"
                fill={true}
                alt={product.title}
                priority={product.id <= 2}
                quality={90}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default MainWomen;
