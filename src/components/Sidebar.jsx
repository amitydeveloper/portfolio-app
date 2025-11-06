import React from "react";
import "../styles/Sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#introvideo">Intro Video</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

