import React from "react";
import me from "./me.jpg";

function FunctionButton() {
  function show() {
    var x = document.getElementById("me");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div>
      <button className="wrapper" id="show" onClick={show}>
        show me
      </button>
      <div id="me">
        <img src={me} alt="" width="200" height="200" />
      </div>
    </div>
  );
}

export default FunctionButton;
