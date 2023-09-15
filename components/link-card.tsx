import React from "react";

interface Props {
  icon?: React.ReactNode;
  iconAlt?: string;
  title: string;
  color?: string;
  bg?: string;
}

const LinkCard = ({ icon, title, color, bg, iconAlt }: Props) => {
  return (
    <div
      className={` text-2xl flex justify-center gap-2 items-center w-[300px] h-[60px] bg-card rounded-lg hover:bg-secondary hover:scale-90 duration-200`}
    >
        <div className="flex w-[100px] items-center gap-3">
        <div
          className={`flex items-center justify-center ${color} ${bg} w-8 h-8 rounded-lg bg-opacity-10`}
        >
          {icon ? icon : <img className="w-6 h-6" src={iconAlt}></img>}
        </div>
        <span className="text-sm">{title}</span>
      </div>
    </div>
  );
};

export default LinkCard;
