import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import backgroundImage from "../images/971.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  // console.log(user);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={backgroundImage} alt="backgroundImage" />
        <Avatar className="sidebar__avatar">{user.name[0]}</Avatar>
        <h3 className="sidebar__name">{user.name}</h3>
        <h4 className="sidebar__email">{user.email}</h4>
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
