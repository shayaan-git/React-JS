import React from "react";

const Cards = (props) => {
  return (
    <div className="lg:w-[23vw] md:w-[42vw] sm:w-[95vw] bg-white text-black flex items-center flex-col rounded-xl p-5 px-8 py-8 text-center">
      <img
        className="h-24 w-24 rounded-full object-cover object-center"
        src={props.imgURL}
        alt="profile_image"
      />
      <h2 className="text-2xl mt-2 font-semibold">{props.username}</h2>
      <h5 className="text-blue-500 font-semibold my-2 text-lg">
        {props.userRole}
      </h5>
      <p className="text-sm font-medium leading-tight">{props.userDesc}</p>

      <button
        className="px-4 py-2 rounded  bg-red-600 text-white font-semibold mt-3 text-xs cursor-pointer active:scale-95"
        onClick={() => props.deleteHandler(props.idx)}
      >
        Remove
      </button>
    </div>
  );
};

export default Cards;
