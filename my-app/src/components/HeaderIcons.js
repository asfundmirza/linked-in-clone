import React from "react";
import "./HeaderIcons.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function HeaderIcons(props) {
  const user = useSelector(selectUser);
  return (
    <div className="headerIcons" onClick={props.onClick}>
      {props.icon && (
        <props.icon className="icons">{user && props.avatar}</props.icon>
      )}

      <h3 className="iconTitle">{props.title}</h3>
    </div>
  );
}

export default HeaderIcons;
