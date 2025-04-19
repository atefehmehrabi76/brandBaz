"use client";
import React, { useEffect, useState } from "react";
// import { navList } from "@/constants/navList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useFetch from "@/requests/useFetch";

const generateSlug = (title: string) => {
  return title.replace(/\s+/g, "-").replace(/[^\w\u0600-\u06ff-]/g, "");
};
const istaticNavBar = [
  {
    title: "خانه",
    link: "/",
    _id: 1,
  },
  {
    title: "Discover",
    link: "/discover",
    _id: 2,
  },
  {
    title: " فروشگاه",
    link: "/discover",
    _id: 3,
  },
];
function NavBar() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const pathname = usePathname();
  const { data } = useFetch(`product-category/all`, 1);
  const allNavList = [...istaticNavBar, ...data];
  useEffect(() => {
    const currentItem = allNavList.find((item) => item.title === pathname);
    if (currentItem) {
      setActiveItem(currentItem._id);
    }
  }, [pathname]);
  return (
    <nav className="hidden md:block w-full  bg-gray-100  border-b border-b-[#CBCBCB] my-7 ">
      <div className="contaner mx-auto">
        <ul className="flex justify-center  text-black md:gap-14 xl:gap-18 lg:text-lg xl:text-[20px]">
          {allNavList?.map((list) => {
            return (
              <li key={`${generateSlug(list.title)}`}>
                <Link
                  href={
                    ["خانه", "Discover", "فروشگاه"].includes(list.title)
                      ? `${list.link}`
                      : `/${list.title}`
                  }
                  className={`relative px-2  py-2 block text-gray-700 hover:text-gray-900 transition-colors`}
                  onClick={() => setActiveItem(list._id)}
                >
                  {list.title}
                  {activeItem === list._id && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DEB887] rounded-t-md transition-all duration-300" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
