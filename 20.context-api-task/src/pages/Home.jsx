import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="home">
      <h2>This is HomePage</h2>
      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Explore All Products
      </button>
    </div>
  );
};

export default Home;
