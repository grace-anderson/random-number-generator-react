import React, { Component } from "react";
import ReactDOM from "react-dom";

class RandomApp extends Component {
  state = { value: 0 };

  getRandomNumber = () => Math.floor(Math.random() * this.props.max);

  handleClick = () => {
    this.setState({ value: this.getRandomNumber() });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.value}</h1>
        <button onClick={this.handleClick}>Get Random Number</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RandomApp max={80} />, rootElement);
