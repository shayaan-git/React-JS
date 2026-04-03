import React from "react";
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <h1>CoursesPage</h1>
      <div className="sale">
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
      </div>
      <Outlet />
    </div>
  );
};

export default Courses;
