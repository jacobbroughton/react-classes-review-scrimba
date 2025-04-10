import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  subtract() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div>
        <button onClick={this.subtract}>-</button>
        {this.state.count}
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}
