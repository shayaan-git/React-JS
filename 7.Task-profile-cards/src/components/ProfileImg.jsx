import React from "react";

const ProfileImg = ({profileImage}) => {
  return (
    <div>
      <div className="bg-gray-400 h-22 w-22 rounded-full absolute left-5 top-23">
        <img src={profileImage} alt="" className="h-22 w-22 rounded-full object-cover object-top" />
      </div>
    </div>
  );
};

export default ProfileImg;
