import React from "react";
import Cards from "./components/cards";
import Button from "./components/Button";

const App = () => {
  const users = ["Shayaan", "Sarthak", "Anubhav", "Harsh", ""];

  return (
    <div className="p-10 h-screen bg-black text-white">
      {users.map((elem) => {
        return <Cards user={elem} />;
      })}

      <Cards user="Sarthak" age={30} />
      <Cards user="Shayaan" age={21} />

      <Button text="Download" />
      <Button text="Explore Now" />
    </div>
  );
};

export default App;
  