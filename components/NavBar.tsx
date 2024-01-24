"use client";
import React from "react";
import { Toggle } from "./Toggle";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();

  return (
    <>
      <div className="z-20 flex w-full h-[7vh] justify-center items-center">
        <div className="z-20 flex items-center justify-center w-full h-full bg-custom-gradient">
          <div className="flex items-center max-w-[1000px] w-[100%] justify-between p-4 ">
            <Logo />
            {path === "/" ? (
              ""
            ) : (
              <span className="z-10 text-xs">{path.slice(1)}</span>
            )}
            <Toggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
