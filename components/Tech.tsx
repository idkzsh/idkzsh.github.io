import React from "react";
import Card from "@/components/ui/card";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FaReact, FaPython } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { RiSupabaseFill } from 'react-icons/ri'

const Tech = () => {
  return (
    <div className="gap-4 flex flex-col flex-wrap items-center justify-center w-[80vw] h-[40vh]">
      <h2>TECH</h2>
      <div className="flex gap-3 flex-wrap w-full justify-center">
        <Card title="Next.js" icon={<TbBrandNextjs />} />
        <Card title="React.js" icon={<FaReact />} />
        <Card title="HTML5" icon={<AiOutlineHtml5 />} />
        <Card title="Tailwind CSS" icon={<TbBrandTailwind />} />
        <Card title="CSS3" icon={<BiLogoCss3 />} />
        <Card title="Python" icon={<FaPython />} />
        <Card title="Supabase" icon={<RiSupabaseFill />} />

      </div>
    </div>
  );
};

export default Tech;
