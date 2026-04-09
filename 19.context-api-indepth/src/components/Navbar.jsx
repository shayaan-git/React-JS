import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div className="text-4xl p-10 flex justify-between">
      <h1>Navbar - {theme}</h1>
      <button
        className="bg-gray-600 rounded border-2 active:scale-95 text-2xl p-2 font-semibold "
        onClick={() => {
          if(theme == 'light'){
            setTheme("dark")
          } else {
            setTheme("light")
          }
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
