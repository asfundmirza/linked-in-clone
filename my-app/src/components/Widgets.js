import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import "./Widgets.css";

function Widgets() {
  const widgetsRight = (title, text) => {
    return (
      <div className="widgets__bottom">
        <div className="widgets__left">
          <CircleIcon style={{ fontSize: "10px", color: "#0071b4" }} />
        </div>
        <div className="widgets__right">
          <h4 className="widgets__title">{title}</h4>
          <p className="widgets__text">{text}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__container">
        <div className="widgets__top">
          <h3>Add to your feed</h3>
        </div>

        {widgetsRight(
          "BlockChain solutions",
          "Blockchain development and Smart Contracts"
        )}
        {widgetsRight(
          "Javascript solutions",
          "Javascript related articles and development practice"
        )}
        {widgetsRight("React Development", "Full stack developer")}
      </div>
    </div>
  );
}

export default Widgets;
