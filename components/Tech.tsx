import React from "react";
import Card from "@/components/ui/card";
import { TbBrandNextjs, TbBrandTailwind, TbBrandDjango } from "react-icons/tb";
import { FaReact, FaPython, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoCss3, BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill } from 'react-icons/ri'
import PythonIcon from "./icons/PythonIcon";

const Tech = () => {
  return (
    <div className="gap-4 flex flex-col items-center justify-center w-[80vw] max-w-[800px]  h-[full] mb-4">
      <h2 className="flex justify-start w-full max-w-[800px]">TECH</h2>
      <hr className="border-[0.5px] border-secondary w-full max-w-[800px]"/>
      <div className="flex gap-3 flex-wrap w-full justify-center">
        <Card title="Next.js" icon={<TbBrandNextjs />} />
        <Card title="React.js" bg="bg-blue-500" color="text-blue-500" icon={<FaReact />} />
        <Card title="HTML5" bg="bg-orange-600" color="text-orange-600" icon={<FaHtml5 />} />
        <Card title="TailwindCSS" bg="bg-teal-500" color="text-teal-500" icon={<TbBrandTailwind />} />
        <Card title="CSS3" bg="bg-blue-500" color="text-blue-500" icon={<BiLogoCss3 />} />
        <Card title="Python" iconAlt='/4518857_python_icon.png'/>
        <Card title="Supabase" bg="bg-emerald-500" color="text-emerald-500" icon={<RiSupabaseFill />} />
        <Card title="Typescript"  bg="bg-blue-500" color="text-blue-500" icon={<BiLogoTypescript />} />
        <Card title="Javascript"  bg="bg-yellow-500" color="text-yellow-500" icon={<RiJavascriptFill />} />
        <Card title="PostgreSQL" icon={<BiLogoPostgresql />} />
        <Card title="Django" color="text-green-800" bg="bg-green-800" icon={<TbBrandDjango />} />


      </div>
    </div>
  );
};

export default Tech;
