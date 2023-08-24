import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import backgroundImage from "../images/971.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={backgroundImage} alt="backgroundImage" />
        <Avatar className="sidebar__avatar" />
        <h3 className="sidebar__name">Asfund Mirza</h3>
        <h4 className="sidebar__email">asfundmirzaj@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Connections</p>
          <h4 className="sidebar__statNumber">97</h4>
        </div>

        <div className="sidebar__stat">
          <p>Profile</p>
          <h4 className="sidebar__statNumber">21</h4>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        <div className="sidebar__recentItems">
          <span className="recentItem"># React</span>
          <span className="recentItem"># Javascript</span>
          <span className="recentItem"># Software Engineering</span>
          <span className="recentItem"># Blockchain</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
