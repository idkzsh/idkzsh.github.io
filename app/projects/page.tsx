import LinkCard from "@/components/link-card";
import Link from "next/link";
import React from "react";
import { CgTag } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiEventstore } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="gap-4 flex flex-col items-center justify-center w-[80vw] max-w-[800px] h-[70vh] mb-11 z-10">
        <div className="flex flex-wrap justify-center w-full gap-3">
          <Link href="./projects/nxtStore">
            <LinkCard
              title="nxtStore e-commerce app"
              icon={<SiEventstore />}
              bg="bg-card-foreground"
              color="text-primary"
            />
          </Link>
          <Link href="./projects/image-tool">
            <LinkCard
              title="Image Renaming Tool"
              icon={<CgTag className="rotate-180" />}
              bg="bg-yellow-300"
              color="text-black"
            />
          </Link>
          <Link href="./projects/game-plus">
            <LinkCard
              title="GamePlus"
              icon={<FaReact />}
              bg="bg-blue-500"
              opacity={10}
              color="text-blue-500"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
