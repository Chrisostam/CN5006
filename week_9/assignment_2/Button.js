import "./Calculator.css";
import React from "react";

const Button = (props) => {
  return (
    <button class="ButtonStyle" value={props.label} onClick={props.ClickHandle}>
      {" "}
      {props.label}{" "}
    </button>
  );
};

export default Button;
