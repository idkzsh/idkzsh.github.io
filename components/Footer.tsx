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
    <div className="fixed bottom-0 flex w-full h-[7vh] items-center justify-evenly border-t-[0.5px] border-secondary ">
      <div className="flex justify-center w-full h-full bg-custom-background">
        <div className="flex justify-evenly items-center max-w-[800px] w-full  ">
          <Link href="/#">
            {path === "/" ? (
              <div className="flex flex-col items-center justify-center">
                <div className="z-10 text-3xl text-teal-600">
                  <RiHome5Fill />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="z-10 text-xl">
                  <RiHome5Fill />
                </div>
              </div>
            )}
          </Link>
          <Link href="/tech">
            {path === "/tech" ? (
              <div className="flex flex-col items-center justify-center">
                <div className="z-10 text-3xl text-teal-600">
                  <FaTools />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="z-10 text-xl">
                  <FaTools />
                </div>
              </div>
            )}
          </Link>
          <Link href="/links">
            {path === "/links" ? (
              <div className="flex flex-col items-center justify-center">
                <div className="z-10 text-3xl text-teal-600">
                  <FaLink />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="z-10 text-xl">
                  <FaLink />
                </div>
              </div>
            )}
          </Link>
          <Link href="/projects">
            {path === "/projects" ? (
              <div className="flex flex-col items-center justify-center">
                <div className="z-10 text-3xl text-teal-600">
                  <FaDiagramProject />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="z-10 text-xl">
                  <FaDiagramProject />
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
