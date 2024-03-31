import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  img: string;
  className: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({
  img,
  className,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex flex-col justify-between px-4 py-6 w-full  min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt={title} width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
