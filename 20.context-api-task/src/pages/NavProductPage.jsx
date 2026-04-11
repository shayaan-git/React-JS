import React from "react";
import { NavLink } from "react-router-dom";

const NavProductPage = () => {
  return (
    <div>
      <NavLink to="/products" className="nav-back">
        Products
      </NavLink>
    </div>
  );
};

export default NavProductPage;
