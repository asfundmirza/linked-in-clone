import React from "react";
import "../components/InputIcons.css";

function InputIcons(props) {
  return (
    <div className="input__icons">
      {props.icons && (
        <props.icons className="icons__input" style={{ color: props.color }} />
      )}
      <div className="input__text">{props.text}</div>
    </div>
  );
}

export default InputIcons;
