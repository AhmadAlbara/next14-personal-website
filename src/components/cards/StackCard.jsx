import React from "react";

const StackCard = ({ name, icon }) => {
  return (
    <div className="px-2">
      <div className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium rounded-md md:text-base">
        {icon}
        {name}
      </div>
    </div>
  );
};

export default StackCard;
