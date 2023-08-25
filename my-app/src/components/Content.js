import React from "react";
import "../components/Content.css";
import { Avatar } from "@mui/material";
import InputIcons from "../components/InputIcons";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ContentPosts from "./ContentPosts";
function Content() {
  return (
    <div className="content">
      <div className="input__container">
        <div className="input__search">
          <Avatar />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="input__container__icons">
          <InputIcons icons={InsertPhotoIcon} text="Photo" color="#1565c0" />
          <InputIcons icons={SmartDisplayIcon} text="Video" color="#2e7d32" />
          <InputIcons icons={CalendarMonthIcon} text="Event" color="#d50000" />
          <InputIcons
            icons={EditNoteIcon}
            text="Write article"
            color="#dd2c00"
          />
        </div>
      </div>
      {/* {Posts} */}
      <ContentPosts
        name="Asfund Mirza"
        description="description"
        message="this is the test"
      />
    </div>
  );
}

export default Content;
