import React from "react";
import {FaTools, FaLink} from 'react-icons/fa'
import {FaDiagramProject} from 'react-icons/fa6'
import {RiHome5Fill} from 'react-icons/ri'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="fixed bottom-0 flex w-full h-[7vh] items-center justify-evenly border-t-[0.5px] border-secondary">
      <div className="flex justify-evenly items-center max-w-[800px] w-full ">
          <Link href='/#'>
              <div className="flex flex-col justify-center items-center">
                  <div className="text-xl"><RiHome5Fill /></div>
                  
              </div>
          </Link>
          <Link href='/tech'>
              <div className="flex flex-col justify-center items-center">
                  <div className="text-xl"><FaTools /></div>
                  
              </div>
          </Link>
          <Link href="/links">
              <div className="flex flex-col justify-center items-center">
                  <div className="text-xl"><FaLink /></div>
                  
              </div>
          </Link>
          <div className="flex flex-col justify-center items-center">
              <div className="text-xl"><FaDiagramProject /></div>
              
          </div>
      </div>
    </div>
  );
};

export default Footer;
