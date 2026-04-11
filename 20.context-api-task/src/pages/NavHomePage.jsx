import { NavLink } from "react-router-dom";

const NavHomePage = () => {
  return (
    <div>
      <NavLink to="/" className="nav-back">
        Home
      </NavLink>
    </div>
  );
};

export default NavHomePage;
