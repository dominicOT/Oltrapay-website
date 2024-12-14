import { ChevronRightCircleIcon } from "lucide-react";
import React from "react";

const TradeCard = ({ title, description }) => {
  return (
    <div className="w-full   flex flex-col items-start justify-between h-[200px]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center mb-4">
          <ChevronRightCircleIcon />
        </div>
        <div className="text-left flex flex-col gap-4 flex-grow">
          <p className="text-2xl font-bold text-black">{title}</p>
          <p className="text-sm font-light mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TradeCard;
