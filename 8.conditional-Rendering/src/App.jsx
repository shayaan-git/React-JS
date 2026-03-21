import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  function btnClicked() {
    console.log("Button is Clicked!!");
  }
  return (
    <div className="bg-black h-screen">
      <Navbar
        title="Shayaan"
        color="blue"
        links={["Courses", "Bootcamp", "Classroom", "Profile"]}
      />

      <div>
        <button
          onClick={btnClicked}
          className="bg-emerald-600 h-15 w-fit px-8 flex items-center active:scale-95 rounded mt-10 text-white font-semibold cursor-pointer"
        >
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default App;
