import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed left-0 w-full flex justify-center items-center">
      <div className="w-[1472px] h-[84px] z-50 px-8 py-4 bg-gray-100 rounded-[100px] border border-gray-300 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
          <Image
            src="/assets/images/Group.svg"
            alt="Logo"
            width={25.38}
            height={7}
            className="relative"
          />
          <div>
            <span className="text-gray-900 text-2xl font-semibold font-['Inter']">
              ClearLink
            </span>
            <span className="text-blue-500 text-2xl font-semibold font-['Inter']">
              .
            </span>
          </div>
        </div>
        <div className="justify-start items-start gap-10 flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-gray-500 text-lg font-semibold font-['Inter'] leading-7">
              Products
            </div>
            <Image
              src="/assets/icons/down.svg"
              alt="dropdown"
              width={18}
              height={18}
              className="relative"
            />
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-gray-500 text-lg font-semibold font-['Inter'] leading-7">
              Solutions
            </div>
            <Image
              src="/assets/icons/down.svg"
              alt="dropdown"
              width={18}
              height={18}
              className="relative"
            />
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-gray-500 text-lg font-semibold font-['Inter'] leading-7">
              Resources
            </div>
            <Image
              src="/assets/icons/down.svg"
              alt="dropdown"
              width={18}
              height={18}
              className="relative"
            />
          </div>
          <div className="text-gray-500 text-lg font-semibold font-['Inter'] leading-7">
            Pricing
          </div>
        </div>
        <div className="justify-start items-center gap-2 flex">
          <div className="px-6 py-3.5 bg-white rounded-[100px] shadow border border-gray-400 justify-center items-center gap-1 flex">
            <div className="text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
              Talk to sales
            </div>
          </div>
          <div className="px-6 py-3.5 bg-blue-700 rounded-[100px] shadow justify-center items-center gap-1 flex">
            <div className="text-white text-base font-semibold font-['Inter'] leading-normal">
              Sign up for free
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
