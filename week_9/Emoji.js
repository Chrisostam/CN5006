import React from "react";
import love from "./love.png";
import like from "./like.png";
import happy from "./happy.png";


//task 1
class EmojiCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.increment = this.increment.bind(this);
    this.pic = null;
    if (this.props.type === "love") this.pic = love;
    else if (this.props.type === "like") this.pic = like;
    else if (this.props.type === "happy") this.pic = happy;
  }

  increment() {
    this.setState((prevState) => {
      return { number: prevState.number + 1 };
    });
  }

  render() {
    return (
      <div>
        <h4>
          {this.props.type} = {this.state.number}
        </h4>
        <button onClick={this.increment}>
          <img src={this.pic} width={50} height={50}></img>
          <b>{this.state.number}</b>
        </button>
      </div>
    );
  }
}

export default EmojiCounter;
