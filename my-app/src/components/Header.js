import React from "react";
import "./Header.css";
import linkedIn from "../images/linkedIn.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderIcons from "./HeaderIcons";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedIn} alt="linedIn" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderIcons icon={HomeIcon} title="Home" />
        <HeaderIcons icon={SupervisorAccountIcon} title="Network" />
        <HeaderIcons icon={BusinessCenterIcon} title="Jobs" />
        <HeaderIcons icon={MessageIcon} title="Message" />
        <HeaderIcons icon={NotificationsIcon} title="Notifications" />
        <HeaderIcons icon={AccountCircleIcon} title="Me" />
      </div>
    </div>
  );
}

export default Header;
