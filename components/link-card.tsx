import React from "react";

interface Props {
  icon?: React.ReactNode;
  iconAlt?: string;
  title: string;
  color?: string;
  bg?: string;
  opacity?: number;
  subtitle?: string;
}

const LinkCard = ({
  icon,
  title,
  color,
  bg,
  iconAlt,
  opacity,
  subtitle,
}: Props) => {
  return (
    <div
      className={` text-2xl flex justify-center gap-2 items-center w-[300px] h-[60px] bg-card rounded-lg hover:bg-secondary hover:scale-90 duration-200`}
    >
      <div
        className={`flex items-center justify-center ${color} ${bg} w-8 h-8 rounded-lg bg-opacity-${opacity}`}
      >
        {icon ? icon : <img className="w-6 h-6" src={iconAlt}></img>}
      </div>

      <span className="text-sm">{title}</span>
    </div>
  );
};

export default LinkCard;
