import React from "react";

const Details = ({ fullName, title }) => {
  return (
    <div>
      <div className="h-42 pt-12 p-5 rounded-t-4xl">
        <h2 className="font-semibold text-3xl text-black">{fullName}</h2>
        <p className="text-lg font-light text-gray-500">{title}</p> 
      </div>
    </div>
  );
};

export default Details;
