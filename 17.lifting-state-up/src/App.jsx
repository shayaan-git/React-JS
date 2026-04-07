import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("___");

  const changeTheme = (newTheme) => { //3
    setTheme(newTheme);
  };

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme}/> //2
    </div>
  );
};

export default App;
