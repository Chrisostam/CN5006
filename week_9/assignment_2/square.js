import React from "react";
import Button from "./Button.js";
import { useState } from "react";

function Square(props) {
  const [text1, setText] = useState("");
  const ClickHandle = (e) => {
    setText(text1 * text1);
  };
  return (
    <div>
      <button ClickHandle={ClickHandle}>Square</button>
    </div>
  );
}

export default Square;
