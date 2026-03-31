import React, { useEffect, useState } from "react";

const RandomNum = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  useEffect(() => {
    console.log("running useffect");
  }, [number3]);

  return (
    <div>
      <h1 className="text-7xl">{number1}</h1>
      <button className="border-2 p-2 rounded bg-gray-600 font-semibold"
        onClick={() => {
          setNumber1(Math.floor(Math.random() * 100));
        }}
      >Change Number1</button>
      <br /><br />

      <h1 className="text-7xl">{number2}</h1>
      <button className="border-2 p-2 rounded bg-gray-600 font-semibold"
        onClick={() => {
          setNumber2(Math.floor(Math.random() * 100));
        }}
      >Change Number2</button>
      <br /><br />

      <h1 className="text-7xl">{number3}</h1>
      <button className="border-2 p-2 rounded bg-gray-600 font-semibold"
        onClick={() => {
          setNumber3(Math.floor(Math.random() * 100));
        }}
      >Change Number3</button>
      <br /><br />

    </div>
  );
};

export default RandomNum;