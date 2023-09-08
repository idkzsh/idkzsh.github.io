import React from "react";
import Card from "@/components/ui/card";
import { TbBrandNextjs, TbBrandTailwind, TbBrandDjango } from "react-icons/tb";
import { FaReact, FaPython } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill } from 'react-icons/ri'

const Tech = () => {
  return (
    <div className="gap-4 flex flex-col items-center justify-center w-[80vw] h-[full] mb-4">
      <h2 className="flex justify-start w-[90%]">TECH</h2>
      <hr className="border-[0.5px] border-secondary w-[90%]"/>
      <div className="flex gap-3 flex-wrap w-full justify-center">
        <Card title="Next.js" icon={<TbBrandNextjs />} />
        <Card title="React.js" icon={<FaReact />} />
        <Card title="HTML5" icon={<AiOutlineHtml5 />} />
        <Card title="Tailwind CSS" icon={<TbBrandTailwind />} />
        <Card title="CSS3" icon={<BiLogoCss3 />} />
        <Card title="Python" icon={<FaPython />} />
        <Card title="Supabase" icon={<RiSupabaseFill />} />
        <Card title="Typescript" icon={<BiLogoTypescript />} />
        <Card title="PostgreSQL" icon={<BiLogoPostgresql />} />
        <Card title="Django" icon={<TbBrandDjango />} />


      </div>
    </div>
  );
};

export default Tech;
