import React from "react";
import Image from "next/image";
import Link from "next/link";

const Faq = () => {
  return (
    <div className="w-full h-[912px] px-40 py-24 bg-white flex-col justify-start items-start gap-24 inline-flex">
      <div className="w-[1408px] justify-between items-start inline-flex">
        <div className="w-[547px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch h-[100px] flex-col justify-start items-center gap-3 flex">
            <div className="self-stretch text-blue-700 text-lg font-semibold font-['Inter'] leading-7">
              Support
            </div>
            <div className="self-stretch text-slate-800 text-5xl font-semibold font-['Inter'] leading-[60px]">
              FAQs
            </div>
          </div>
          <div className="self-stretch">
            <span className="text-gray-500 text-2xl font-normal font-['Inter'] leading-loose">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please{" "}
            </span>
            <span className="text-gray-500 text-2xl font-normal font-['Inter'] underline leading-loose">
              <Link href="/chat">chat to our friendly team</Link>
            </span>
            <span className="text-gray-500 text-2xl font-normal font-['Inter'] leading-loose">
              .
            </span>
          </div>
        </div>
        <div className="w-[765px] flex-col justify-start items-center gap-1 inline-flex">
          <div className="self-stretch h-[214px] p-8 bg-gray-50 rounded-2xl border border-gray-200 flex-col justify-start items-start flex">
            <div className="self-stretch h-[150px] flex-col justify-start items-center flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-[30px]">
                    How many participants can join a ClearLink video conference?
                  </div>
                  <div className="self-stretch text-slate-600 text-lg font-normal font-['Inter'] leading-7">
                    ClearLink offers flexible meeting options. Depending on your
                    subscription plan, you can host meetings with varying
                    numbers of participants. Our plans are designed to
                    accommodate small team collaborations and large-scale
                    webinars, ensuring you have the right fit for your needs.
                  </div>
                </div>
                <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                  <Image
                    src="/assets/icons/minus-circle.svg"
                    alt="accordion"
                    height={6}
                    width={6}
                    className="w-6 h-6 relative"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[94px] p-8 rounded-2xl flex-col justify-start items-start flex">
            <div className="self-stretch h-[30px] flex-col justify-start items-center flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-[30px]">
                    Can I use ClearLink on multiple devices?
                  </div>
                </div>
                <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                  <Image
                    src="/assets/icons/plus-circle.svg"
                    alt="accordion"
                    height={6}
                    width={6}
                    className="w-6 h-6 relative"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[94px] p-8 rounded-2xl flex-col justify-start items-start flex">
            <div className="self-stretch h-[30px] flex-col justify-start items-center flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-[30px]">
                    Is ClearLink compatible with other video conferencing
                    platforms?
                  </div>
                </div>
                <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                  <Image
                    src="/assets/icons/plus-circle.svg"
                    alt="accordion"
                    height={6}
                    width={6}
                    className="w-6 h-6 relative"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[94px] p-8 rounded-2xl flex-col justify-start items-start flex">
            <div className="self-stretch h-[30px] flex-col justify-start items-center flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-[30px]">
                    How does ClearLink ensure the security of my video
                    conferences?
                  </div>
                </div>
                <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                  <Image
                    src="/assets/icons/plus-circle.svg"
                    alt="accordion"
                    height={6}
                    width={6}
                    className="w-6 h-6 relative"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[94px] p-8 rounded-2xl flex-col justify-start items-start flex">
            <div className="self-stretch h-[30px] flex-col justify-start items-center flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-[30px]">
                    Do I need to download any software to use ClearLink?
                  </div>
                </div>
                <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                  <Image
                    src="/assets/icons/plus-circle.svg"
                    alt="accordion"
                    height={6}
                    width={6}
                    className="w-6 h-6 relative"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[94px] p-8 rounded-2xl flex-col justify-start items-start flex">
            <div className="self-stretch h-[30px] flex-col justify-start items-center flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-[30px]">
                    What kind of customer support does ClearLink provide?
                  </div>
                </div>
                <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                  <Image
                    src="/assets/icons/plus-circle.svg"
                    alt="accordion"
                    height={6}
                    width={6}
                    className="w-6 h-6 relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
