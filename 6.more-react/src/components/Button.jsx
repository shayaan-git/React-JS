import React from "react";

const Button = (props) => {
    console.log(props.text);
    
  return (
    <div className="w-fit text-lg font-bold bg-emerald-500 px-5 py-2 rounded m-2 text-white active:scale-95">
      {props.text}
    </div>
  );
};

export default Button;
