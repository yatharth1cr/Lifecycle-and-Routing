import React, { Component } from "react";
import Stopwatch from "./Stopwatch";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatch: false,
      counntdown: false,
      // date: new Date(),
    };
  }

  handleStopwatch = (prevState) => {
    console.log("clicked");
    this.setState({
      stopwatch: !this.state.stopwatch,
    });
  };

  render() {
    return (
      <>
        {this.state.stopwatch ? (
          <Stopwatch handleStopwatch={this.handleStopwatch} />
        ) : (
          <button onClick={this.handleStopwatch}>Show Stopwatch</button>
        )}
        <button>Show Countdown</button>
      </>
    );
  }
}
