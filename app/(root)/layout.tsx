import Navbar from "@/components/home/Navbar";
import Background from "@/components/ui/background";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Background />
      <main className="w-full mx-auto h-[868px] pt-10 pb-24 flex-col justify-start items-center gap-40 inline-flex">
        <Navbar />
        <section>
          <div>{children}</div>
        </section>
      </main>
    </>
  );
};

export default Layout;
