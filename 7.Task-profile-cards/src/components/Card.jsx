import React from "react";
import CoverImg from "./CoverImg";
import ProfileImg from "./ProfileImg";
import Details from "./Details";
import Following from "./Following";
import Boxes from "./Boxes";
import Social from "./Social";

const Card = ({user}) => {
  return (
    <div className="relative h-115 w-80 bg-white rounded-4xl p-1.5">
      <CoverImg coverImage={user.coverImage} />
      <Following followed={user.followed} />
      <ProfileImg profileImage={user.profileImage} />
      <Details fullName={user.fullName} title={user.title}/>
      <Boxes likesCount={user.likesCount} postCount={user.postCount} viewsCount={user.viewsCount}/>
      <Social />
    </div>
  );
};

export default Card;
