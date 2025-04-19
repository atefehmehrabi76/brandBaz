import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

async function Main({ productId }: { productId: string }) {
  if (!productId) {
    return <div>Product ID not provided.</div>;
  }

  try {
    const response = await axios.get(
      `https://brand-baz.liara.run/api/v1/product-category/sub-categories/${productId}`
    );
    const products = response.data.data;

    const baseUrlImg = "https://brand-baz.liara.run";

    return (
      <section className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {products.map((product: any, index: number) => (
            <Link
              href="/"
              key={product._id}
              className="flex justify-around h-[130px] md:h-[160px] bg-white rounded-[8px]"
            >
              <div className="my-auto">
                <span
                  className={`m-5 font-bold ${
                    index >= 4
                      ? "text-[36px] md:text-[60px]"
                      : "text-[60px] md:text-[80px]"
                  } text-[#DEB88733]`}
                >
                  {product.background}
                </span>
                <h3 className="text-2xl md:text-4xl font-medium relative right-8 bottom-8  md:bottom-10">
                  {product.title}
                </h3>
              </div>
              <div className="w-[215px] relative">
                <Image
                  src={`${baseUrlImg}/${product.image}`}
                  crossOrigin="anonymous"
                  className="object-contain"
                  fill={true}
                  alt={product.title}
                  priority={index <= 2}
                  quality={90}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>خطا در دریافت اطلاعات</div>;
  }
}

export default Main;
