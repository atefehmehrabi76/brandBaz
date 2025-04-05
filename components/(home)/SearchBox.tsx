"use client";
import { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([
    "کیف زارا",
    "عطر کوکو شنل",
    "کفش آدیداس",
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative col-start-1 col-end-5 md:col-start-3 md:col-end-4 row-start-2 row-end-3 mx-auto md:row-start-1 md:row-end-2 rounded-[8px] w-[90%] md:w-[410px] h-[44px] md:h-[33px] flex justify-between items-center  bg-white px-2"
      ref={searchRef}
    >
      <input
        type="text"
        className="w-full h-10 rounded-lg  pr-3 pl-12 outline-none placeholder-gray-300"
        placeholder="جستجو کنید..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
      />
      <button type="button" className="" aria-label="جستجو">
        <IoIosSearch className="text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute flex gap-5 left-0 top-full mt-1 h-[200px] w-full bg-white  shadow-lg rounded-md p-2 z-10">
          {history.length > 0 ? (
            history.map((item, index) => (
              <div
                key={index}
                className=" px-2 py-1 hover:bg-gray-200 font-medium text-[15px] cursor-pointer rounded-[4.7px] bg-[#CBCBCB] text-white h-fit w-fit"
                onClick={() => setSearch(item)}
              >
                {item}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm px-2">تاریخچه‌ای وجود ندارد</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
