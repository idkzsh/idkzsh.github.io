import React from "react";

interface Props {
  icon: React.ReactNode; 
  title: string;
}

const Card = ({ icon, title }: Props) => {
  return (
    <div className="text-2xl flex justify-evenly items-center w-[150px] h-[60px] bg-card rounded-lg">
      {icon}
      <span className="text-base">{title}</span>
    </div>
  );
};

export default Card;
