import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Section = () => {

  const data = useContext(ThemeDataContext)

  return (
    <div className="bg-cyan-600 h-30 w-full py-10 text-4xl font-semibold">
      <h1>Section - {data}</h1>
    </div>
  );
};

export default Section;
