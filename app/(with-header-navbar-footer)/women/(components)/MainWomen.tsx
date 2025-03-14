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
            className="flex justify-around bg-white rounded-[8px]"
          >
            <div>
              <span
                className={`${
                  index >= 4 ? "text-[60px]" : "text-[80px] "
                } font-bold text-[#DEB88733]`}
              >
                {product.placeholder}
              </span>
              <h3 className="text-4xl font-medium relative right-8 bottom-10">
                {product.title}
              </h3>
            </div>
            <div className="w-[215px] h-[143px] relative">
              <Image
                src={product.image}
                className="object-contain"
                fill={true}
                sizes="(max-width: 1200px) 100vw, 215px"
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
