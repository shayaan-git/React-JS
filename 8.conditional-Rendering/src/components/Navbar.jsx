import React from "react";

const Navbar = (props) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="flex items-center justify-between text-2xl text-white"
    >
      <h2>{props.title}</h2>
      <div className="flex gap-10">
        {props.links.map((elem, idx) => (
          <h4 key={idx}>{elem}</h4>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
