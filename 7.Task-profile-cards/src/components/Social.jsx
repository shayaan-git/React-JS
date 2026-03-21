import React from "react";
import { RiInstagramLine } from "@remixicon/react";
import { RiTwitterXLine } from "@remixicon/react";
import { RiThreadsLine } from "@remixicon/react";

const Social = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center h-13 w-1/2 border-r border-gray-300">
        <RiInstagramLine size={22} color="" />
      </div>
      <div className="h-13 w-1/2 flex items-center justify-center">
        <RiTwitterXLine size={22} color="" />
      </div>
      <div className="h-13 w-1/2 flex items-center justify-center border-l border-gray-300">
        <RiThreadsLine size={22} color="" />
      </div>
    </div>
  );
};

export default Social;
