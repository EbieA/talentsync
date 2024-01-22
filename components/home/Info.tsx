import React from "react";
import Image from "next/image";

const Info = () => {
  return (
    <div className="relative w-full h-[983px] px-40 py-24 bg-white flex-col justify-start items-start gap-20 inline-flex">
      <div className="flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-[100px] flex-col justify-start items-center gap-3 flex">
          <div className="self-stretch text-blue-700 text-lg font-semibold font-['Inter'] leading-7">
            The ClearLink Advantage
          </div>
          <div className="w-[1168px] text-slate-800 text-5xl font-semibold font-['Inter'] leading-[60px]">
            Why choose ClearLink?
          </div>
        </div>
        <div className="w-[842px] text-gray-500 text-2xl font-normal font-['Inter'] leading-loose">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </div>
      </div>
      <div className="w-[1408px] justify-between items-center inline-flex">
        <div className="h-[488px] justify-start items-start gap-10 grid grid-cols-2">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              <Image
                src="assets/icons/video-recorder.svg"
                alt="info"
                height={25}
                width={25}
                className="relative"
              />
            </div>
            <div className="self-stretch h-[124px] flex-col justify-start items-start gap-2 flex">
              <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">
                Crystal-clear HD video
              </div>
              <div className="w-[360px] text-slate-600 text-lg font-normal font-['Inter'] leading-7">
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              <Image
                src="assets/icons/recording.svg"
                alt="info"
                height={25}
                width={25}
                className="relative"
              />
            </div>
            <div className="self-stretch h-[152px] flex-col justify-start items-start gap-2 flex">
              <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">
                Scheduling made easy
              </div>
              <div className="w-[360px] text-slate-600 text-lg font-normal font-['Inter'] leading-7">
                Streamline your agenda with ClearLink&apos;s intuitive
                scheduling. Set up meetings, send invitations, and receive
                reminders in one place.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              <Image
                src="assets/icons/calendar.svg"
                alt="info"
                height={25}
                width={25}
                className="relative"
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">
                Noise-canceling audio
              </div>
              <div className="w-[360px] text-slate-600 text-lg font-normal font-['Inter'] leading-7">
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              <Image
                src="assets/icons/lock.svg"
                alt="info"
                height={25}
                width={25}
                className="relative"
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">
                Bank-grade security
              </div>
              <div className="w-[360px] text-slate-600 text-lg font-normal font-['Inter'] leading-7">
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/images/grid.png"
          alt="grid"
          width={544}
          height={527}
        />
      </div>
      <div className="absolute top-78 right-80 z-10">
        <Image
          src="/assets/images/arrow.svg"
          alt="arrow"
          width={380}
          height={280}
          className="relative origin-top-left"
        />
      </div>
    </div>
  );
};

export default Info;
