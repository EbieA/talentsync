import Navbar from "@/components/home/Navbar";
import Background from "@/components/ui/background";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
        <div className="w-[1728px] h-[8px] px-32 pb-24 flex-col justify-start items-center gap-40 inline-flex"></div>
        <Background />
        <Navbar />
        <section>
          <div>{children}</div>
        </section>
      </main>
    </>
  );
};

export default Layout;
