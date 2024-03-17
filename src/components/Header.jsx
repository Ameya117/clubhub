"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleLoginPage = () => [router.push("/login")];
  return (
    <div className="flex flex-col items-center my-[10%] gap-2 text-center">
      <div className="text-2xl lg:text-4xl tracking-[0.2rem] lg:tracking-[0.4rem] ">
        Discover the ultimate hub
      </div>
      <div className="text-2xl lg:text-4xl tracking-[0.2rem] lg:tracking-[0.4rem]">
        for creativity and innovation
      </div>
      <button
        className="border-2 bg-black hover:bg-white hover:text-black hover:border-black text-white rounded-xl my-4 text-xl py-1 px-4 tracking-[0.1rem]"
        onClick={handleLoginPage}
      >
        Log in
      </button>
    </div>
  );
};

export default Header;
