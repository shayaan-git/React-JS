import React, { useState } from "react";
import Restroom from "./components/Restroom";
// To use UseState first, Use this 'useState' keyword to import it.

const App = () => {
  const [gender, setGender] = useState("Male");

  let changeGender = () => {
    if (gender == "Male") {
      setGender("Female");
    } else if (gender == "Female") {
      setGender("Other");
    } else {
      setGender("Male");
    }
  };

  return (
    <div className="bg-black h-screen text-white">
      <h1 className="text-7xl">{gender}</h1>
      <button
        className="h-10 w-fit px-5 bg-gray-500 rounded mt-10"
        onClick={changeGender}
      >
        Change
      </button>

      <Restroom user = {gender}/>

    </div>
  );
};

export default App;
