"use client";

import React, { useState, useEffect } from "react";
import { BsVr } from "react-icons/bs";
import { CiShare2, CiStar } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import Image from "next/image";
import { GoPlusCircle } from "react-icons/go";
import useFetch from "@/requests/useFetch";

const defaultColors = ["#11111E", "#8A8977", "#EEB7A3"];
const defaultSizes = ["S", "M", "L", "XL"];

function ProductClient({ productId }: { productId: string }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(defaultColors[0]);
  const [selectedSize, setSelectedSize] = useState(defaultSizes[0]);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const {
    data: productData,
    loading,
    error,
    baseUrl,
  } = useFetch(`product?_id=${productId}`);
  console.log("check data", productData);
  console.log("productId", productId);
  const baseUrlImg = baseUrl.split("/api/v1/").slice(0, 3)[0].toString();

  const product = productData?.product || {};
  const images = productData?.images || [];
  console.log(productId);

  useEffect(() => {
    if (productData) {
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }

      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
    }
  }, [productData, product]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center">در حال بارگذاری اطلاعات محصول...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center text-red-500">
          خطا در بارگذاری اطلاعات محصول. لطفاً دوباره تلاش کنید.
        </div>
      </div>
    );
  }

  if (!productData || !product) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center text-red-500">اطلاعات محصول یافت نشد.</div>
      </div>
    );
  }

  const colors = product.colors || defaultColors;
  const sizes = product.sizes || defaultSizes;

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 my-20 container mx-auto pr-6">
        <div>
          <div className="bg-white w-96 h-96 flex justify-center items-center rounded-[8px]">
            {images.length > 0 ? (
              <Image
                width={210}
                height={310}
                src={`${baseUrlImg}/${images[selectedImageIndex]?.image}`}
                alt={product.title || "تصویر محصول"}
                quality={90}
                className="object-cover"
                crossOrigin="anonymous"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                تصویر موجود نیست
              </div>
            )}
          </div>
          <div className="flex gap-7 w-[90%] pr-6 mt-6">
            {images.map((item: any, index: number) => (
              <div
                key={index}
                className={`hover:cursor-pointer bg-white rounded-[8px] w-23 h-23 flex justify-center items-center ${
                  selectedImageIndex === index
                    ? "border-2 border-[#CBCBCB]"
                    : ""
                }`}
                onClick={() => {
                  setSelectedImageIndex(index);
                  if (colors.length > index) {
                    setSelectedColor(colors[index]);
                  }
                }}
              >
                <Image
                  src={`${baseUrlImg}/${item.image}`}
                  width={80}
                  height={80}
                  alt={`تصویر ${index + 1}`}
                  crossOrigin="anonymous"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-110 mt-5">
          <div className="flex justify-between">
            <p className="font-medium text-2xl">{product.title}</p>
            <p className="font-medium text-3xl">
              {product.price?.toLocaleString() || "3700000"} تومان
            </p>
          </div>

          <div className="mt-5">
            <p className="text-[#A1A1A1] text-[15px]">
              {isExpanded
                ? product.description
                : product.description.substring(0, 130) + "..." ||
                  "توضیحات محصول موجود نیست."}
              <span
                onClick={toggleDescription}
                className="text-black hover:cursor-pointer"
              >
                {isExpanded ? "توضیحات کمتر" : "توضیحات بیشتر"}
              </span>
            </p>
          </div>

          <div className="flex mt-10 justify-between">
            <div className="flex justify-center items-center gap-3">
              <p className="font-medium text-[16px]">نظرات کاربران</p>
              <div className="flex text-orange-400">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
            </div>
            <div className="flex gap-5">
              <div
                title="اشتراک گذاری"
                className="bg-white hover:cursor-pointer w-9 h-9 rounded-[4px] flex justify-center items-center title:bg-[#CBCBCB]"
              >
                <CiShare2 className="w-6 h-6" />
              </div>
              <div className="bg-white hover:cursor-pointer w-9 h-9 rounded-[4px] flex justify-center items-center">
                <LiaCommentSolid className="w-6 h-6" />
              </div>
              <div className="bg-white hover:cursor-pointer w-9 h-9 rounded-[4px] flex justify-center items-center">
                <BsVr className="w-6 h-6" />
              </div>
              <div className="bg-white hover:cursor-pointer w-9 h-9 rounded-[4px] flex justify-center items-center">
                <FcLike title="علاقه مندی" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="mt-8 mb-5">
            <span className="font-medium text-[16px]">سایزبندی:</span>
            <div className="flex gap-8 mt-4">
              {sizes.map((item: any, index: number) => (
                <span
                  key={index}
                  onClick={() => setSelectedSize(item)}
                  className={`h-9 w-9 hover:cursor-pointer rounded-[4px] flex justify-center items-center text-[#CBCBCB] font-bold text-[16px] ${
                    selectedSize === item ? "text-white bg-black" : ""
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="font-medium text-[16px]">رنگ:</span>
            <div className="flex gap-5 mt-3">
              {colors.map((item: any, index: number) => (
                <div
                  key={index}
                  style={{ backgroundColor: item }}
                  className={`w-7 h-7 rounded-[4px] hover:cursor-pointer ${
                    selectedColor === item ? "border-3 border-[#CBCBCB]" : ""
                  }`}
                  onClick={() => {
                    setSelectedColor(item);
                    if (images.length > index) {
                      setSelectedImageIndex(index);
                    }
                  }}
                ></div>
              ))}
            </div>
          </div>
          <button className="bg-black rounded-[8px] mt-12 text-white flex justify-center items-center gap-2 w-[230px] h-[35px]">
            <GoPlusCircle className="w-5 h-5" />
            <span className="mb-1 font-medium text-[14px] hover:cursor-pointer">
              افزودن به سبد خرید
            </span>
          </button>
        </div>
        <div className="bg-white w-90 h-125 mr-10 rounded-2xl pt-4 px-6">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px]">فروشگاه ها</h3>
            <span className="text-[12px] font-normal text-[#CBCBCB]">
              بازدید از فروشگاه ها
            </span>
          </div>
        </div>
      </section>
      <section className="mx-auto container">
        <div className="h-[50px] rounded-t-2xl bg-[#CBCBCB] w-full my-10 flex items-center gap-23 pr-5 font-normal text-[18px]">
          <span>معرفی محصول </span>
          <span>جزئیات محصول</span>
          <span>نظرات کاربران</span>
        </div>
        <div>
          <div>
            <h3 className="text-[24px] font-medium my-4">معرفی محصول</h3>
            <div className="flex items-center">
              <span className="w-20 md:w-46 h-[3px] bg-[#DEB887]" />
              <span className="w-3 h-3 rounded-[50%] bg-[#DEB887]" />
            </div>
          </div>
          <p className="text-[#A1A1A1] text-[20px] font-normal my-5">
            {product.description || "توضیحات محصول موجود نیست."}
          </p>
        </div>
        <div className="">
          <div>
            <h3 className="text-[24px] font-medium my-4">جزئیات محصول</h3>
            <div className="flex items-center">
              <span className="w-20 md:w-46 h-[3px] bg-[#DEB887]" />
              <span className="w-3 h-3 rounded-[50%] bg-[#DEB887]" />
            </div>
          </div>
          <table className="w-full mt-5 font-normal mb-20">
            <tbody>
              <tr className="bg-[#DEB8871A] h-12">
                <td className="text-[16px] text-[#A1A1A1] pr-6 w-1/5">
                  کشور مبدا برند :
                </td>
                <td className="text-[20px] border-r-1 border-[#CBCBCB] pr-2">
                  {product.country || "ایران"}
                </td>
              </tr>
              <tr className="h-12">
                <td className="text-[16px] text-[#A1A1A1] pr-6">جنس:</td>
                <td className="text-[20px] border-r-1 border-[#CBCBCB] pr-2">
                  {product.material || "ساتن"}
                </td>
              </tr>
              <tr className="bg-[#DEB8871A] h-12">
                <td className="text-[16px] text-[#A1A1A1] pr-6">برند:</td>
                <td className="text-[20px] border-r-1 border-[#CBCBCB] pr-2">
                  {product.brand?.name || "زارا"}
                </td>
              </tr>
              <tr className="h-12">
                <td className="text-[16px] text-[#A1A1A1] pr-6">مدل:</td>
                <td className="text-[20px] border-r-1 border-[#CBCBCB] pr-2">
                  {product.model || "اورال کوتاه"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-10">
          <h3 className="text-[24px] font-medium my-4">نظرات کاربران</h3>
          <div className="flex items-center">
            <span className="w-20 md:w-46 h-[3px] bg-[#DEB887]" />
            <span className="w-3 h-3 rounded-[50%] bg-[#DEB887]" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductClient;
