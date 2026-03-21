import React from "react";

const CoverImg = ({ coverImage }) => {
  return (
    <div>
      <div className="bg-gray-700 h-36 w-full rounded-4xl">
        <img className="bg-gray-700 h-36 rounded-4xl w-full object-cover" src={coverImage} alt="" />
      </div>
    </div>
  );
};

export default CoverImg;
