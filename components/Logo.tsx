import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/#" className="z-10">
      <div
        className="flex justify-center items-center w-[30px] h-[30px] bg-primary rounded-lg duration-300 text-background font-bold text-xl cursor-pointer hover:-rotate-12 hover:scale-90 z-100"
      >
        ?
      </div>
      </Link>
    </>
  );
};

export default Logo;
