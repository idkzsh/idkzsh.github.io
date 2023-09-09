import React from "react";

interface Props {
  icon?: React.ReactNode;
  iconAlt?: string;
  title: string;
  color?: string;
  bg?: string;
}

const ProjectCard = ({ icon, title, color, bg, iconAlt }: Props) => {
  return (
    <div
      className={` text-2xl flex justify-center gap-2 items-center w-[300px] h-[60px] bg-card rounded-lg`}
    >
      <div
        className={`flex items-center justify-center ${color} ${bg} w-8 h-8 rounded-lg bg-opacity-10`}
      >
        
      </div>
      <span className="text-sm">{title}</span>
    </div>
  );
};

export default ProjectCard;