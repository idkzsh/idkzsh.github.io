import React from "react";
import { Toggle } from "./Toggle";
import Head from 'next/head';

export const metadata = {
    title: "idkz"
  };

interface Props {
  page: string;
}

const NavBar = ({ page }: Props) => {
  return (
    <>
      <div className="fixed bg-background flex w-full h-[7vh] justify-evenly items-center border-b-[0.5px] border-secondary">
        <div className="flex items-center max-w-[800px] w-[70%] justify-between">
          <h1>idkz</h1>
          <span>{page}</span>
          <Toggle />
        </div>
      </div>
    </>
  );
};

export default NavBar;
