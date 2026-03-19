import React from "react";

const UserProfiles = (props) => {
  return (
    <div className="profile_card">
      <div className="idBox">
        <p>UserID: </p>
        <h2>{props.userId}</h2>
      </div>

      <div className="skillsBox">
        <p>Skills: </p>
        <h3>{props.userSkills}</h3>
      </div>
    </div>
  );
};

export default UserProfiles;
