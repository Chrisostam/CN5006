import React from "react";
import KeyPadComponent from "./Calculator";
import me from "./me.jpg";

function Display() {
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
      <KeyPadComponent />
      <div>
        <button className="wrapper" id="show" onClick={show}>
          show me
        </button>
        <div id="me">
          <img src={me} alt="" width="200" height="200" />
        </div>
      </div>
    </div>
  );
}

export default Display;
