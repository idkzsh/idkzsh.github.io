"use client";
import React from "react";
import { FaTools, FaLink } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { RiHome5Fill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  return (
    <div className="fixed bottom-0 flex w-full h-[7vh] items-center justify-evenly border-t-[0.5px] border-secondary bg-background z-10">
      <div className="flex justify-evenly items-center max-w-[800px] w-full ">
        <Link href="/#">
          {path === "/" ? (
            <div className="flex flex-col justify-center items-center">
              <div className="text-3xl text-teal-600">
                <RiHome5Fill />
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl">
                <RiHome5Fill />
              </div>
            </div>
          )}
        </Link>

        <Link href="/tech">
          {path === "/tech" ? (
            <div className="flex flex-col justify-center items-center">
              <div className="text-3xl text-teal-600">
                <FaTools />
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl">
                <FaTools />
              </div>
            </div>
          )}
        </Link>

        <Link href="/links">
          {path === "/links" ? (
            <div className="flex flex-col justify-center items-center">
              <div className="text-3xl text-teal-600">
                <FaLink />
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl">
                <FaLink />
              </div>
            </div>
          )}
        </Link>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl">
            <FaDiagramProject />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
