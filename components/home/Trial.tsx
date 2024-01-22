import React from "react";
import Image from "next/image";

const Trial = () => {
  return (
    <div className="w-full h-[697px] px-40 py-24 justify-between items-center inline-flex">
      <div className="w-[579px] h-[432] flex-col justify-start items-start gap-10 grid">
        <div className="self-stretch h-[340px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch text-gray-900 text-5xl font-semibold font-['Inter'] leading-[60px]">
            Ready to clear the path to perfect communication?
          </div>
          <div className="self-stretch h-[188px] pl-4 flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch justify-start items-start gap-3 inline-flex">
              <div className="w-7 h-7 rounded-[14px] justify-center items-center flex">
                <Image
                  src="/assets/icons/check-circle.svg"
                  alt="check"
                  width={5}
                  height={7}
                  className="w-7 h-7 relative flex-col justify-start items-start flex"
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-slate-600 text-2xl font-normal font-['Inter'] leading-loose">
                  30 days free trial
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-3 inline-flex">
              <div className="w-7 h-7 rounded-[14px] justify-center items-center flex">
                <Image
                  src="/assets/icons/check-circle.svg"
                  alt="check"
                  width={5}
                  height={7}
                  className="w-7 h-7 relative flex-col justify-start items-start flex"
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-slate-600 text-2xl font-normal font-['Inter'] leading-loose">
                  Cancel at any time
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-3 inline-flex">
              <div className="w-7 h-7 rounded-[14px] justify-center items-center flex">
                <Image
                  src="/assets/icons/check-circle.svg"
                  alt="check"
                  width={5}
                  height={7}
                  className="w-7 h-7 relative flex-col justify-start items-start flex"
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-slate-600 text-2xl font-normal font-['Inter'] leading-loose">
                  Access to all features
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-3 inline-flex">
              <div className="w-7 h-7 rounded-[14px] justify-center items-center flex">
                <Image
                  src="/assets/icons/check-circle.svg"
                  alt="check"
                  width={5}
                  height={7}
                  className="w-7 h-7 relative flex-col justify-start items-start flex"
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-slate-600 text-2xl font-normal font-['Inter'] leading-loose">
                  Peronalized onboarding
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-40 justify-start items-center gap-2 inline-flex">
          <div className="px-6 py-3.5 bg-white rounded-[100px] shadow border border-gray-400 justify-center items-center gap-1 flex">
            <div className="text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
              Talk to sales
            </div>
          </div>
          <div className="px-6 py-3.5 bg-blue-700 rounded-[100px] shadow justify-center items-center gap-1 flex">
            <div className="text-white text-base font-semibold font-['Inter'] leading-normal">
              Start your free trial
            </div>
          </div>
        </div>
      </div>
      <div className="justify-end items-center flex overflow-hidden">
        <div className="w-[1024px] h-[682px] rounded-xl border-8 border-gray-900 justify-center items-center inline-flex transform translate-x-40">
          <Image
            src="/assets/images/call.png"
            alt="call"
            className="w-[1024px] h-[674px] relative rounded-xl"
            width={1024}
            height={682}
          />
        </div>
      </div>
    </div>
  );
};

export default Trial;
