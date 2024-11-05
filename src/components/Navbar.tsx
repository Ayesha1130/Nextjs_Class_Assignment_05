import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-[#A29875] flex items-center w-full">
      <div className=" flex items-center justify-between w-full max-w-[1486px]  h-[80px] px-4 py-4  mx-auto">
        <div className=" flex  items-center justify-start flex-shrink-0 ">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="object-contain "
          />
        </div>
        {/* Search Bar Section */}

        <div className="relative hidden rounded-lg md:flex items-center  h-12 lg:h-14 w-[60%] lg:w-[40%] xl:w-[30%] mx-4 bg-neutral-100 ">
          <input
            type="text"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
            className=" w-full bg-transparent h-[40px] p-4 pl-10 text-sm  text-gray-600 outline-none "
          />
          <div className="absolute right-3 top-4/1 transform-translate-y-1/2">
            <Image
              src={"/images/searchicon.png"}
              alt="search icon"
              width={20}
              height={20}
              className=" cursor-pointer "
            />
          </div>
        </div>
        <div className=" items-center space-x-4 hidden md:flex">
          <Image
            src={"/images/heart.png"}
            alt="cart icon"
            width={30}
            height={30}
            className="cursor-pointer "
          />

          <Image
            src={"/images/user.png"}
            alt="cart icon"
            width={30}
            height={30}
            className="cursor-pointer "
          />

          <Image
            src={"/images/cart.png"}
            alt="cart icon"
            width={30}
            height={30}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
