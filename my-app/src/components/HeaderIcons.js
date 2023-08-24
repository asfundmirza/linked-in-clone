import React from "react";
import "./HeaderIcons.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function HeaderIcons(props) {
  return (
    <div className="headerIcons">
      {props.icon && <props.icon className="icons" />}

      <h3 className="iconTitle">{props.title}</h3>
    </div>
  );
}

export default HeaderIcons;
