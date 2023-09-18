import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/#" className="z-10">
        <div className="flex items-center justify-center w-8 h-8 text-2xl font-bold duration-300 rounded-sm hover:-rotate-6 hover:scale-90 bg-primary text-background">
          ?
        </div>
      </Link>
    </>
  );
};

export default Logo;
