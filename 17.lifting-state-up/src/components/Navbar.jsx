import React, { useState } from "react";

const Navbar = (props) => {
  const [newTheme, setnewTheme] = useState(""); // form ke input mein use ho raha

  return (
    <div className="nav">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          props.changeTheme(newTheme); //1

          setnewTheme("");
        }}
      >
        <input
          // controlled component => value & onChange()
          value={newTheme}
          onChange={(e) => {
            setnewTheme(e.target.value);
          }}
          type="text"
          placeholder="Enter theme"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
