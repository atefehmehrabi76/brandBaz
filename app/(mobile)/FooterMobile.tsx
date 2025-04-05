"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { PiShoppingBagBold } from "react-icons/pi";
import { RiUserLine } from "react-icons/ri";
const mobileFooter = [
  {
    id: 1,
    title: "خانه",
    path: "/",
    icon: <FiHome />,
  },
  {
    id: 2,
    title: "Discover",
    path: "/discover",
    icon: <BiCategoryAlt />,
  },
  {
    id: 3,
    title: "سبد خرید",
    path: "/",
    icon: <PiShoppingBagBold />,
  },
  {
    id: 4,
    title: "علاقه مندی ها",
    path: "/",
    icon: <MdOutlineFavoriteBorder />,
  },
  {
    id: 5,
    title: "پروفایل",
    path: "/login",
    icon: <RiUserLine />,
  },
];

function FooterMobile() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    const currentItem = mobileFooter.find((item) => item.path === pathname);
    if (currentItem) {
      setActiveItem(currentItem.id);
    }
  }, [pathname]);
  return (
    <div className="h-[77px] bg-white flex justify-evenly md:hidden fixed bottom-0 right-0 left-0 border-t border-[0.5px] border-[#CBCBCB] z-70">
      {mobileFooter.map((item) => (
        <Link
          href={item.path}
          key={item.id}
          className="flex flex-col gap-[5px] justify-center items-center relative"
          onClick={() => setActiveItem(item.id)}
        >
          {activeItem === item.id && (
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[66px] h-1 bg-[#DEB887] rounded-b-md transition-all duration-300" />
          )}

          <span
            className={`object-contain text-2xl ${
              activeItem === item.id ? "opacity-100" : "opacity-30"
            }`}
          >
            {item.icon}
          </span>
          <h3
            className={`text-[12px] font-normal  ${
              activeItem === item.id ? "opacity-100" : "opacity-30"
            }`}
          >
            {item.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}

export default FooterMobile;
