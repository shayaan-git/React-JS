import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <h1><a href="#">Horizon Courts</a></h1>
      <div className="navCenter">
        <h2><a href="#">About Us</a></h2>
        <h2><a href="#">Services</a></h2>
        <h2><a href="#">Coaches</a></h2>
        <h2><a href="#">Events</a></h2>
        <h2><a href="#">Contacts</a></h2>
      </div>
      <button>
        <h3>Book Now ↗</h3>
      </button>
    </div>
  );
};

export default Nav;
