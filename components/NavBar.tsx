"use client";
import React, { useState } from "react";
import { navList } from "@/constants/navList";
import Link from "next/link";
function NavBar() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  return (
    <nav className="hidden md:block w-full  bg-gray-100  border-b border-b-[#CBCBCB] my-7 ">
      <div className="contaner mx-auto">
        <ul className="flex justify-center  text-black md:gap-16 xl:gap-24 lg:text-lg xl:text-[20px]">
          {navList.map((list) => {
            return (
              <li key={list.id}>
                <Link
                  href={list.href}
                  className={`relative px-2  py-2 block text-gray-700 hover:text-gray-900 transition-colors`}
                  onClick={() => setActiveItem(list.id)}
                >
                  {list.name}
                  {activeItem === list.id && (
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
