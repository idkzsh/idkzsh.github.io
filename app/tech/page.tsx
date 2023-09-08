import React from "react";
import TechCard from "@/components/tech-card";
import { TbBrandNextjs, TbBrandTailwind, TbBrandDjango } from "react-icons/tb";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoCss3, BiLogoTypescript } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { BsGit } from "react-icons/bs";


export default function Tech() {
  return (
    <div className="gap-4 flex flex-col items-center justify-center w-[80vw] max-w-[800px] h-[800px] max-h-[80vh] mb-11">
      <h2 className="flex justify-start min-w-[300px] w-[95%] ">TECH</h2>
      <hr className="border-[0.5px] border-secondary min-w-[300px] w-[95%] " />
      <div className="flex gap-3 flex-wrap w-full justify-center">
        <TechCard
          title="Next.js"
          bg="bg-card-foreground"
          color="text-primary"
          icon={<TbBrandNextjs />}
        />
        <TechCard
          title="React.js"
          bg="bg-blue-500"
          color="text-blue-500"
          icon={<FaReact />}
        />
        <TechCard
          title="HTML5"
          bg="bg-orange-600"
          color="text-orange-600"
          icon={<FaHtml5 />}
        />
        <TechCard
          title="TailwindCSS"
          bg="bg-teal-500"
          color="text-teal-500"
          icon={<TbBrandTailwind />}
        />
        <TechCard
          title="CSS3"
          bg="bg-blue-500"
          color="text-blue-500"
          icon={<BiLogoCss3 />}
        />
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
          title="Git"
          color="text-orange-600"
          bg="bg-orange-600"
          icon={<BsGit />}
        />
      </div>
    </div>
  );
}
