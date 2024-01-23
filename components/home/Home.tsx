import React from "react";
import Image from "next/image";
import { icons, ratingImages } from "@/constant";

const Home = () => {
  return (
    <div className="mt-40 w-[1728px] mx-auto justify-center items-center inline-flex p-4 md:p-8">
      <div className="w-[780px] h-[472px] flex-col justify-center items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="w-full md:w-[780px] text-slate-800 text-4xl font-semibold leading-[72px]">
            Uniting the world, one video call at a time
          </div>
          <div className="w-full md:w-[662px] text-gray-500 text-2xl font-normal leading-loose">
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </div>
        </div>
        <div className="flex justify-start items-center gap-5">
          {/* Start your free trial button */}
          <div className="px-7 py-4 bg-blue-700 rounded-full shadow text-white text-lg font-semibold">
            Start your free trial
          </div>
          {/* Discover AI assistant button */}
          <div className="flex gap-3 items-center">
            <Image
              src="/assets/icons/Robot.svg"
              alt="robot"
              className="w-5 h-5"
              width={50}
              height={50}
            />
            <div className="text-blue-700 text-lg font-semibold">
              Discover AI assistant
            </div>
          </div>
        </div>
        <div className="w-[327px] h-[52px] justify-start items-center gap-4 inline-flex">
          <div className="w-[154px] h-[10px]justify-start items-start gap-2 flex">
            {ratingImages.map((item, index) => (
              <div
                key={index}
                className="justify-start items-start flex"
                style={{ position: "relative" }}
              >
                <div
                  className="w-10 h-10 rounded-[200px] border border-white flex-col justify-center items-center inline-flex absolute"
                  style={{ top: 0, left: 10 }}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    className="rounded-[200px] border border-blue-700"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="justify-start items-center gap-1 flex"
                >
                  <div className="w-5 h-5 relative">
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
              <div className="text-slate-700 text-base font-semibold font-['Inter'] leading-normal">
                5.0
              </div>
            </div>
            <div className="text-slate-600 text-base font-medium font-['Inter'] leading-normal">
              from 3,000+ reviews
            </div>
          </div>
        </div>
      </div>
      <div className="w-[584px] h-[488px] p-8 bg-sky-50 rounded-2xl drop-shadow-2xl  border border-sky-200 flex-col justify-center items-center gap-10 inline-flex">
        <div className="flex-col justify-center items-center gap-5 flex">
          <div className="justify-center items-center gap-5 inline-flex">
            <div className="w-40 h-40 relative rounded-xl">
              <div className="w-40 h-40 left-0 top-0 absolute bg-orange-300" />
              <Image
                src="/assets/images/image1.png"
                alt="image"
                className="left-[3.28px] top-[6.41px] absolute"
                height={154}
                width={154}
              />
            </div>
            <div className="w-40 h-40 relative rounded-xl">
              <div className="w-40 h-40 left-0 top-0 absolute bg-purple-300" />
              <Image
                className="left-[-7.50px] top-0 absolute"
                src="/assets/images/image2.png"
                alt="images"
                width={175}
                height={175}
              />
            </div>
            <div className="w-40 h-40 relative rounded-xl">
              <div className="w-40 h-40 left-0 top-0 absolute bg-lime-300" />
              <Image
                className="left-0 top-[5.47px] absolute"
                src="/assets/images/image3.png"
                alt="images"
                width={153}
                height={153}
              />
            </div>
          </div>
          <div className="justify-center items-center gap-5 inline-flex">
            <div className="w-40 h-40 relative rounded-xl">
              <div className="w-40 h-40 left-0 top-0 absolute bg-indigo-300" />
              <Image
                className="left-0 top-[12.50px] absolute"
                src="/assets/images/image4.png"
                alt="images"
                width={147}
                height={147}
              />
            </div>
            <div className="w-40 h-40 relative rounded-xl">
              <div className="w-40 h-40 left-0 top-0 absolute bg-amber-300" />
              <Image
                className="left-0 top-0 absolute"
                src="/assets/images/image5.png"
                alt="images"
                width={175}
                height={175}
              />
            </div>
            <div className="w-40 h-40 relative rounded-xl">
              <div className="w-40 h-40 left-0 top-0 absolute bg-rose-300" />
              <Image
                className="left-[-7.50px] top-0 absolute"
                src="/assets/images/image6.png"
                alt="images"
                width={175}
                height={175}
              />
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-4 inline-flex">
          {icons.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-white rounded-[100px] shadow border border-blue-100 justify-center items-center gap-2.5 flex"
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                className="w-5 h-5 relative"
                width={10}
                height={10}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
