import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="w-full h-[748px] py-24 bg-gray-50 flex-col justify-center items-center gap-16 inline-flex">
      <div className="w-[1408px] px-8 justify-center items-center gap-16 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
          <Image
            src="assets/icons/Shopify.svg"
            alt="shopify"
            width={112.79}
            height={8}
            className="relative"
          />
          <div className="justify-start items-center gap-1 inline-flex">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-5 h-5 relative">
                <div className="w-5 h-5 left-0 top-0 absolute">
                  <Image
                    src="/assets/icons/Star.png"
                    alt="star"
                    className="left-0 top-0 absolute"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="self-stretch text-gray-900 text-[44px] font-medium font-['Inter'] leading-[60px]">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </div>
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 h-[60px] justify-start items-start gap-4 flex">
              <div className="w-14 h-14 rounded-[200px] flex-col justify-center items-center inline-flex">
                <Image
                  src="/assets/images/Avatar.png"
                  alt="avatar"
                  width={50}
                  height={50}
                  className="relative rounded-[200px] border border-blue-700"
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-[30px]">
                  Sarah Thompson
                </div>
                <div className="self-stretch text-slate-600 text-lg font-normal font-['Inter'] leading-7">
                  Project Manager, Shopify
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-8 flex">
              <div className="w-14 h-14 bg-white bg-opacity-90 rounded-[28px] border border-blue-100 justify-center items-center gap-3 flex">
                <Image
                  src="/assets/icons/arrow-left.svg"
                  alt="arrow"
                  height={30}
                  width={30}
                  className="relative"
                />
              </div>
              <div className="w-14 h-14 bg-white bg-opacity-90 rounded-[28px] border border-blue-100 justify-center items-center gap-3 flex">
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="arrow"
                  height={30}
                  width={30}
                  className="relative"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[640px] h-[496px] relative">
          <Image
            alt="images"
            className="w-40 h-60 left-[328px] top-0 absolute"
            src="/assets/images/test2.jpeg"
            height={240}
            width={160}
          />
          <Image
            alt="images"
            className="w-48 h-32 left-[416px] top-[256px] absolute"
            src="/assets/images/test5.jpeg"
            height={128}
            width={192}
          />
          <Image
            alt="images"
            className="w-48 h-32 left-[32px] top-[256px] absolute"
            src="/assets/images/test3.jpeg"
            height={128}
            width={192}
          />
          <Image
            alt="images"
            className="w-40 h-60 left-[240px] top-[256px] absolute"
            src="/assets/images/test4.jpeg"
            height={240}
            width={160}
          />
          <Image
            alt="images"
            className="w-40 h-40 left-[152px] top-[80px] absolute"
            src="/assets/images/test1.jpeg"
            height={160}
            width={160}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
