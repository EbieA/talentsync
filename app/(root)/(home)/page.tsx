import Clients from "@/components/home/Clients";
import Faq from "@/components/home/Faq";
import Home from "@/components/home/Home";
import Info from "@/components/home/Info";
import Testimonial from "@/components/home/Testimonial";
import Trial from "@/components/home/Trial";
import Footer from "@/components/home/Footer";
import React from "react";

const Page = () => {
  return (
    <main>
      <div className="w-[1728px] mx-auto">
        <Home />
        {/* <Clients />
        <Info />
        <Testimonial />
        <Faq />
        <Trial />
        <Footer /> */}
      </div>
    </main>
  );
};

export default Page;
