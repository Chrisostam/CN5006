import React from "react";

import happy from "./elements/happy.png";
import sad from "./elements/sad.png";

//task2
class EmojiToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pic: happy };
    this.ToggleMode = this.ToggleMode.bind(this);
  }
  ToggleMode() {
    this.setState((prevState) => {
      if (prevState.pic == sad) {
        this.mode = "happy";
        return { pic: happy };
      } else if (prevState.pic === happy) {
        this.mode = "sad";
        return { pic: sad };
      }
    });
  }
  render() {
    return (
      <div>
        <h3> Output of Task 2: {this.mode}</h3>
        <button onClick={this.ToggleMode}>
          <img src={this.state.pic} width={60} height={60}></img>
        </button>
      </div>
    );
  }
}

export default EmojiToggle;
