import React from "react";
import TechCard from "@/components/tech-card";
import {CgVercel} from 'react-icons/cg'
import { TbBrandNextjs, TbBrandTailwind, TbBrandDjango } from "react-icons/tb";
import { FaReact, FaHtml5, FaBootstrap, FaDocker } from "react-icons/fa";
import {LiaJava} from 'react-icons/lia'
import { RiJavascriptFill, RiSupabaseFill } from "react-icons/ri";
import { BiLogoCss3, BiLogoNodejs, BiLogoTypescript } from "react-icons/bi";

import { BsGit } from "react-icons/bs";
import { SiChakraui, SiVisualstudiocode } from "react-icons/si";
import Spacer from "@/components/Spacer";

export default function TechStack() {
  return (
    <>

      <div className="z-10 gap-4 flex flex-col items-center justify-center w-[90vw] max-w-[1000px] mb-20">
        <h2 className="flex justify-start min-w-[300px] w-[98%] text-sm">
          FRONTEND
        </h2>

        <div className="flex flex-wrap justify-center w-full gap-3 border-t-[0.5px] border-secondary pt-4 pb-4">
          <TechCard
            title="React.js"
            bg="bg-blue-500"
            color="text-blue-500"
            icon={<FaReact />}
          />
          <TechCard
            title="TailwindCSS"
            bg="bg-teal-500"
            color="text-teal-500"
            icon={<TbBrandTailwind />}
          />
          <TechCard
            title="HTML5"
            bg="bg-orange-600"
            color="text-orange-600"
            icon={<FaHtml5 />}
          />
          <TechCard
            title="CSS3"
            bg="bg-blue-500"
            color="text-blue-500"
            icon={<BiLogoCss3 />}
          />

          <TechCard
            title="Typescript"
            bg="bg-blue-500"
            color="text-blue-500"
            icon={<BiLogoTypescript />}
          />
          <TechCard
            title="Javascript"
            bg="bg-yellow-500"
            color="text-yellow-500"
            icon={<RiJavascriptFill />}
          />
          <TechCard
            title="Bootstrap"
            bg="bg-purple-700"
            color="text-purple-700"
            icon={<FaBootstrap />}
          />
          <TechCard
            title="Chakra-UI"
            bg="bg-teal-500"
            color="text-teal-500"
            icon={<SiChakraui />}
          />
        </div>
        <h2 className="flex justify-start min-w-[300px] w-[100%] text-sm">
          BACKEND
        </h2>

        <div className="flex flex-wrap justify-center w-full gap-3 border-t-[0.5px] border-secondary pt-4 pb-4">
          <TechCard
            title="Python"
            bg="bg-card-foreground"
            iconAlt="/4518857_python_icon.png"
          />
          <TechCard
            title="Supabase"
            bg="bg-emerald-500"
            color="text-emerald-500"
            icon={<RiSupabaseFill />}
          />
          <TechCard
            title="Next.js"
            bg="bg-card-foreground"
            color="text-primary"
            icon={<TbBrandNextjs />}
          />
          <TechCard
            title="Node.js"
            bg="bg-green-500"
            color="text-green-500"
            icon={<BiLogoNodejs />}
          />
          <TechCard
            title="PostgreSQL"
            bg="bg-card-foreground"
            iconAlt="/postgre.png"
          />
          <TechCard
            title="Django"
            color="text-green-800"
            bg="bg-green-800"
            icon={<TbBrandDjango />}
          />
          <TechCard
            title="Java"
            color="text-red-800"
            bg="bg-red-800"
            icon={<LiaJava />}
          />
        </div>
        <h2 className="flex justify-start min-w-[300px] w-[95%] text-sm">
          TOOLS
        </h2>
        
        <div className="flex flex-wrap justify-center w-full gap-3 border-t-[0.5px] border-secondary pt-4 pb-4">
          <TechCard 
            title="Git"
            color="text-orange-600"
            bg="bg-orange-600"
            icon={<BsGit />}
          />
          <TechCard
            title="Docker"
            color="text-blue-600"
            bg="bg-blue-600"
            icon={<FaDocker />}
          />
          <TechCard
            title="VSCode"
            color="text-blue-400"
            bg="bg-blue-400"
            icon={<SiVisualstudiocode />}
          />
          <TechCard
            title="Vercel"
            color="text-primary"
            bg="bg-secondary"
            icon={<CgVercel />}
          />

        </div>
      </div>
    </>
  );
}
