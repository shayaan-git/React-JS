import React from "react";

const DataCards = (props) => {
  const clr1 = Math.floor(Math.random() * 256);
  const clr2 = Math.floor(Math.random() * 256);
  const clr3 = Math.floor(Math.random() * 256);

  return (
    <div
      className="user-card flex flex-col gap-1"
      style={{ backgroundColor: `rgb(${clr1},${clr2},${clr3})` }}
    >
      <>
        <p>Name: </p>
        <h1>{props.user}</h1>
      </>
      <hr />
      <>
        <p>Mail: </p>
        <h2>{props.mail}</h2>
      </>
    </div>
  );
};

export default DataCards;
