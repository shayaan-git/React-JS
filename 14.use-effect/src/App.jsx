import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [allPokemon, setallPokemon] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    setallPokemon(response.data.results);
  };

  useEffect(function(){
    fetchData()
  }, [])
  
  return (
    <div>
      <button className="border-2 bg-gray-600 font-semibold p-2">Click</button>
      {allPokemon.map(function (elem, idx) {
        return (
          <h1 key={idx}>{elem.name}</h1>
        );
      })}
    </div>
  );
};

export default App;
