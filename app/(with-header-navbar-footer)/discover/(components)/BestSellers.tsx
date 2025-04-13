"use client";
import Link from "next/link";
import Image from "next/image";
// import { bestSellersDiscover } from "@/constants/discover";
import { IoIosHeartEmpty } from "react-icons/io";
// import axios from "axios";
import useFetch from "@/requests/useFetch";

function BestSellers() {
  const baseUrl = "https://brand-baz.liara.run";
  const { data } = useFetch(
    "https://brand-baz.liara.run/api/v1/product/all?page=1"
  );
  console.log(data);
  // const [data, setData] = useState<any>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://brand-baz.liara.run/api/v1/product/all?page=1"
  //       );
  //       setData(response.data.data);
  //       console.log(response.data.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <section className=" container mx-auto md:mb-[50px] px-6">
      <h3 className="text-[14px] md:text-2xl font-bold md:font-medium  my-5">
        محصولات ویژه
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5  md:gap-10  ">
        {data?.map((item: any, index: number) => (
          <Link
            href={`/product/${item._id}`}
            key={item.product._id}
            className={`flex flex-col w-[158px] md:w-[210px] h-[320px] md:h-[380px] ${
              index === 4 ? "hidden sm:block" : ""
            } `}
          >
            <div className="bg-white rounded-[10.8px]">
              <div className=" relative w-[40px] h-[25px] md:h-[20px] mx-auto mt-2">
                <Image
                  src={`${baseUrl}${item.product.brand.image}`}
                  alt={item.product.title}
                  className=""
                  fill
                  crossOrigin="anonymous"
                  quality={90}
                />
              </div>
              <div className="relative w-[145px] md:w-[180px] h-[210px] md:h-[240px] mx-auto">
                <Image
                  src={`${baseUrl}${item.images[0]?.image}`}
                  fill
                  className=""
                  alt={item.product.title}
                  quality={90}
                  crossOrigin="anonymous"
                />
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <p className="font-normal text-[14px] md:text-[18px]">
                  3700000 تومان
                </p>
                <p className="text-[12px] md:text-[16px] font-light">
                  {item.product.title}
                </p>
              </div>
              <button className="bg-[#CBCBCB] relative w-[28px] md:w-[36px] h-[26px] md:h-[34px] rounded-[7.5px] p-1">
                <IoIosHeartEmpty className="text-white w-[22px] h-[20px] md:w-[26px] md:h-[24px] mx-auto" />
              </button>
            </div>
          </Link>
        ))}
      </div>
      <button className="bg-black flex justify-center gap-[6px] h-[22px] md:h-[34px] w-[70px] md:w-[100px] border rounded-[8px] relative   right-[275px] md:right-[1127px]">
        <span className="text-white font-normal text-[10px] md:text-[20px]">
          بیشتر
        </span>
        <Image
          src="/images/homePic/Vector.png"
          width={0}
          height={0}
          alt=""
          className="w-2 h-[9px] md:h-4 relative top-[6px] md:top-[8px]"
        />
      </button>
    </section>
  );
}

export default BestSellers;
