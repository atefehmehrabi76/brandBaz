"use client";
import { bestSellersDiscover } from "@/constants/discover";
import React, { useState } from "react";
import { BsVr } from "react-icons/bs";
import { CiShare2, CiStar } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import Image from "next/image";
import { GoPlusCircle } from "react-icons/go";

function ProductClient({ product }: { product: any }) {
  const [selectedImages, setSelectedImages] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3   my-20 container mx-auto pr-6 ">
        <div>
          <div className=" bg-white w-96 h-96  flex justify-center  items-center rounded-[8px]">
            <Image
              width={210}
              height={310}
              src={selectedImages}
              alt={product.title}
              quality={90}
              className="object-cover"
            />
          </div>
          <div className="flex gap-7 w-[90%] pr-6  mt-6">
            {product.images?.map((item: any, index: number) => (
              <div
                key={index}
                className={`bg-white rounded-[8px] w-23 h-23 flex justify-center items-center ${
                  selectedImages === item ? "border-2 border-[#CBCBCB]" : ""
                }`}
                onClick={() => {
                  setSelectedImages(item);
                  setSelectedColor(product.colors[index]);
                }}
              >
                <Image src={item} width={80} height={80} alt="item" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-110 mt-5">
          <div className="flex justify-between">
            <p className="font-medium text-2xl">{product.title}</p>
            <p className="font-medium text-3xl">{product.price}</p>
          </div>
          <p className="text-[#A1A1A1] mt-5">{product.content}</p>
          <div className="flex mt-10 justify-between ">
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
                className="bg-white w-9 h-9 rounded-[4px] flex  justify-center items-center title:bg-[#CBCBCB]"
              >
                <CiShare2 className="w-6 h-6" />
              </div>
              <div className="bg-white w-9 h-9 rounded-[4px] flex  justify-center items-center">
                <LiaCommentSolid className="w-6 h-6" />
              </div>
              <div className="bg-white w-9 h-9 rounded-[4px] flex  justify-center items-center">
                <BsVr className="w-6 h-6" />
              </div>
              <div className="bg-white w-9 h-9 rounded-[4px] flex  justify-center items-center">
                <FcLike title=" علاقه مندی" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="mt-8 mb-5">
            <span className="font-medium text-[16px]">سایزبندی:</span>
            <div className="flex gap-8 mt-4">
              {product.sizes.map((item: any, index: number) => (
                <span
                  key={index}
                  onClick={() => setSelectedSize(item)}
                  className={`h-9 w-9 rounded-[4px] flex justify-center items-center text-[#CBCBCB] font-bold text-[16px] ${
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
              {product.colors.map((item: any, index: number) => (
                <div
                  key={index}
                  style={{ backgroundColor: item }}
                  className={`w-7 h-7  rounded-[4px] ${
                    selectedColor === item ? " border-3 border-[#CBCBCB]" : ""
                  }`}
                  onClick={() => {
                    setSelectedColor(item);
                    setSelectedImages(product.images[index]);
                  }}
                ></div>
              ))}
            </div>
          </div>
          <button className="bg-black rounded-[8px] mt-12  text-white flex justify-center items-center gap-2 w-[230px] h-[35px]">
            {" "}
            <GoPlusCircle className="w-5 h-5" />
            <span className="mb-1 font-medium text-[14px]">
              {" "}
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
        <div className="h-[50px] rounded-t-2xl bg-[#CBCBCB] w-full  my-10 flex items-center gap-23 pr-5 font-normal text-[18px]">
          <span>معرفی محصول </span>
          <span>جزئیات محصول</span>
          <span>نظرات کاربران</span>
        </div>
        <div>
          <div>
            <h3 className="text-[24px] font-medium my-4">معرفی محصول</h3>
            <div className="flex items-center">
              <span className=" w-20 md:w-46 h-[3px] bg-[#DEB887]" />
              <span className=" w-3 h-3 rounded-[50%] bg-[#DEB887]" />
            </div>
          </div>
          <p className="text-[#A1A1A1] text-[20px] font-normal my-5">
            اورال ساتن پارچه‌ای نرم و براق است که به دلیل جلوه لوکس و ابریشمی‌اش
            در طراحی لباس‌های شب و مجلسی محبوب است. این پارچه معمولاً از الیاف
            مصنوعی یا ترکیبی ساخته می‌شود و به دلیل درخشندگی‌اش ظاهری خاص و شیک
            ایجاد می‌کند. اورال ساتن برای لباس‌های رسمی، دامن‌ها و پیراهن‌های
            ویژه مناسب است. اورال ساتن زنانه یک انتخاب شیک، مدرن و فوق‌العاده
            جذاب برای خانم‌هایی است که به دنبال استایلی خاص و منحصربه‌فرد هستند.
            این لباس با طراحی یکسره و جنس لطیف و براق ساتن، جلوه‌ای لوکس و
            چشم‌نواز به استایل شما می‌بخشد و مناسب موقعیت‌های رسمی، مهمانی‌های
            خاص و حتی مجالس نیمه‌رسمی است.این اورال از پارچه ساتن درجه یک تهیه
            شده که نرمی و لطافت فوق‌العاده‌ای دارد. این پارچه به دلیل سطح صاف و
            درخشانی که دارد، جلوه‌ای مجلل به استایل شما می‌بخشد. علاوه بر این،
            به‌خوبی روی بدن می‌نشیند و حس راحتی و سبکی را القا می‌کند.. یکی از
            مزیت‌های اصلی اورال ساتن این است که برخلاف لباس‌های دو تکه، نیازی به
            ست کردن جداگانه ندارد و با یک انتخاب، ظاهری بی‌نقص و هماهنگ خواهید
            داشت. همچنین به دلیل الگوی استاندارد و دوخت حرفه‌ای، هنگام پوشیدن حس
            راحتی و آزادی حرکت خواهید داشت. این اورال انتخابی ایده‌آل برای
            مهمانی‌های شبانه، مجالس رسمی، دورهمی‌های دوستانه و حتی جشن‌های
            نامزدی و عروسی است. همچنین می‌توانید آن را با اکسسوری‌های طلایی یا
            نقره‌ای ست کنید تا جلوه‌ای لوکس‌تر به استایل خود ببخشید. این مدل در
            رنگ‌های متنوع از جمله مشکی، قرمز، سبز زمردی، سرمه‌ای و یاسی عرضه
            می‌شود که هر کدام زیبایی خاص خود را دارند. اگر به دنبال ظاهری کلاسیک
            و شیک هستید، رنگ‌های تیره مانند مشکی و سرمه‌ای انتخابی عالی خواهند
            بود، و اگر می‌خواهید استایلی متفاوت و چشمگیر داشته باشید، رنگ‌های
            روشن و پاستلی پیشنهاد می‌شود.
          </p>
        </div>
        <div className="">
          <div>
            <h3 className="text-[24px] font-medium my-4">جزئیات محصول</h3>
            <div className="flex items-center">
              <span className=" w-20 md:w-46 h-[3px] bg-[#DEB887]" />
              <span className=" w-3 h-3 rounded-[50%] bg-[#DEB887]" />
            </div>
          </div>
          <table className="w-full mt-5 font-normal mb-20 ">
            <tr className="bg-[#DEB8871A]  h-12  ">
              <td className="text-[16px]  text-[#A1A1A1] pr-6 w-1/5">
                کشور مبدا برند :
              </td>
              <td className="text-[20px] border-r-1 border-[#CBCBCB] pr-2">
                ایران
              </td>
            </tr>
            <tr className="h-12">
              <td className="text-[16px]  text-[#A1A1A1] pr-6">جنس:</td>
              <td className="text-[20px] border-r-1 border-[#CBCBCB] pr-2">
                ساتن
              </td>
            </tr>
            <tr className="bg-[#DEB8871A] h-12">
              <td className="text-[16px]  text-[#A1A1A1] pr-6">برند:</td>
              <td className="text-[20px] border-r-1 border-[#CBCBCB] pr-2">
                زارا
              </td>
            </tr>
            <tr className="h-12">
              <td className="text-[16px]  text-[#A1A1A1] pr-6">مدل:</td>
              <td className="text-[20px] border-r-1 border-[#CBCBCB] pr-2">
                اورال کوتاه
              </td>
            </tr>
          </table>
        </div>
        <div className="mb-10">
          <h3 className="text-[24px] font-medium my-4">نظرات کاربران</h3>
          <div className="flex items-center">
            <span className=" w-20 md:w-46 h-[3px] bg-[#DEB887]" />
            <span className=" w-3 h-3 rounded-[50%] bg-[#DEB887]" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductClient;
