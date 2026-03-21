import React from "react";

const Boxes = ({ likesCount, postCount, viewsCount }) => {
  return (
    <div className="flex justify-between">
      <div className="h-22 w-1/2 text-center border-t border-r border-b border-gray-300">
        <h2 className="font-semibold font-sans text-2xl pt-5 text-black">{likesCount}</h2>
        <h3 className="font-semibold font-sans text-gray-400">Likes</h3>
      </div>
      <div className="h-22 w-1/2 text-center border-t border-b border-gray-300">
        <h2 className="font-semibold font-sans text-2xl pt-5 text-black">{postCount}</h2>
        <h3 className="font-semibold font-sans text-gray-400">Posts</h3>
      </div>
      <div className="h-22 w-1/2 text-center border-t border-l border-b border-gray-300">
        <h2 className="font-semibold font-sans text-2xl pt-5 text-black">{viewsCount}</h2>
        <h3 className="font-semibold font-sans text-gray-400">Views</h3>
      </div>
    </div>
  );
};

export default Boxes;
