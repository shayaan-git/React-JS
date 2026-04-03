import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "blueviolet" : "white",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/courses"
        style={({ isActive }) => ({
          color: isActive ? "blueviolet" : "white",
        })}
      >
        Courses
      </NavLink>
      <NavLink
        to="/courses/kodr"
        style={({ isActive }) => ({
          color: isActive ? "violet" : "white",
        })}
      >
        Kodr
      </NavLink>
      <NavLink
        to="/courses/kodex"
        style={({ isActive }) => ({ color: isActive ? "violet" : "white" })}
      >
        Kodex
      </NavLink>
    </div>
  );
};

export default Navbar;
