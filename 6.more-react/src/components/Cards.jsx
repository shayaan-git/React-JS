import React from "react";

const Cards = (props) => {
  
  return (
    <div className="bg-gray-500 m-2 rounded px-5 py-3 w-fit border-3 border-orange-600">
      <h1 className="text-3xl font-semibold">
        {props.user} {props.age}
      </h1>
    </div>
  );
};

export default Cards;
