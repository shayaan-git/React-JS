import React from "react";

const Following = ({ followed }) => {
  return (
      <div className="bg-white/20 backdrop-blur-md text-white font-semibold flex items-center justify-center h-10 w-25 px-4 rounded-4xl absolute right-4 top-4 border border-white/30 shadow-lg">

        {followed ? "Following" : "Follow +"}
      </div>
  );
};

export default Following;
