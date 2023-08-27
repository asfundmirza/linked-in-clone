import { Avatar } from "@mui/material";
import React from "react";
import "./ContentPosts.css";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MessageIcon from "@mui/icons-material/Message";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";
import InputIcons from "./InputIcons";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function ContentPosts({ name, description, message, photoURL }) {
  // const user = useSelector(selectUser);
  return (
    <div className="content__posts">
      <div className="post__top">
        <Avatar />
        <div className="post__details">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__message">
        <p>{message}</p>
      </div>
      <hr className="divider" />
      <div className="post__icons">
        <InputIcons icons={ThumbUpAltIcon} text="Like" />
        <InputIcons icons={MessageIcon} text="Comment" />
        <InputIcons icons={RepeatIcon} text="Repost" />
        <InputIcons icons={SendIcon} text="Send" />
      </div>
    </div>
  );
}

export default ContentPosts;
