import React, { Component } from "react";

let time = new Date().toLocaleString();

class Clock extends Component {
  render() {
    return (
      <p className="App-clock">
        The time is { time }.
      </p>
    );
  }
}

export default Clock;