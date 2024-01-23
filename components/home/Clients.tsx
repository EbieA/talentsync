import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="w-[1728px] h-[313px] mx-auto py-24 bg-white justify-center items-start inline-flex">
      <div className="flex-col justify-start items-start gap-12 inline-flex">
        <div className="self-stretch text-center text-slate-600 text-xl font-medium font-['Inter'] leading-[30px]">
          Join 1,500+ companies already video conferencing the ClearLink way
        </div>
        <div className="justify-start items-center gap-[69px] inline-flex">
          <Image
            src="/assets/icons/Shopify.svg"
            alt="client"
            className="relative"
            width={151.56}
            height={43}
          />
          <Image
            src="/assets/icons/Coinbase.svg"
            alt="client"
            className="relative"
            width={177.78}
            height={8}
          />
          <Image
            src="/assets/icons/Dropbox.svg"
            alt="client"
            className="relative"
            width={183.05}
            height={9}
          />
          <Image
            src="/assets/icons/Intercom.svg"
            alt="client"
            className="relative"
            width={174.44}
            height={10}
          />
          <div className="w-[100px] h-10 relative">
            <Image
              src="/assets/icons/Marvel.svg"
              alt="client"
              className="left-0 top-0 absolute"
              width={100}
              height={10}
            />
          </div>
          <div className="w-60 h-[18.40px] relative">
            <Image
              src="/assets/icons/Automattic.svg"
              alt="client"
              className="left-0 top-0 absolute"
              width={160}
              height={18.4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
