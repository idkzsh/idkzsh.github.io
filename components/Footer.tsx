import React from "react";
import {FaTools, FaLink} from 'react-icons/fa'
import {FaDiagramProject} from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex w-full h-[7vh] items-center justify-evenly border-t-[0.5px] border-secondary">
      <div className="flex justify-evenly items-center w-full">
          <Link href='/tech'>
              <div className="flex flex-col justify-center items-center">
                  <div className="text-xl"><FaTools /></div>
                  <span className="text-xs">Tech</span>
              </div>
          </Link>
          <Link href="/links">
              <div className="flex flex-col justify-center items-center">
                  <div className="text-xl"><FaLink /></div>
                  <span className="text-xs">Links</span>
              </div>
          </Link>
          <div className="flex flex-col justify-center items-center">
              <div className="text-xl"><FaDiagramProject /></div>
              <span className="text-xs">Projects</span>
          </div>
      </div>
    </div>
  );
};

export default Footer;
