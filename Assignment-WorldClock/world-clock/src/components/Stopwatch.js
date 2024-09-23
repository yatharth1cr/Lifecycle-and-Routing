import * as React from "react";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      formatted: "00:00:00:0000",
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      isRunning: false,
    };
    this.timer = null;
  }

  // Update the stopwatch time
  handleChange = () => {
    const { hours, minutes, seconds, milliseconds } = this.state;

    let newMillisecond = milliseconds + 10;
    let newSecond = seconds;
    let newMinute = minutes;
    let newHour = hours;

    if (newMillisecond === 1000) {
      newSecond += 1;
      newMillisecond = 0;
    }
    if (newSecond === 60) {
      console.log("chekkkk");
      newMinute += 1;
      newSecond = 0;
    }
    if (newMinute === 60) {
      newHour += 1;
      newMinute = 0;
    }

    this.setState({
      milliseconds: newMillisecond,
      seconds: newSecond,
      minutes: newMinute,
      hours: newHour,
      formatted: `${String(newHour).padStart(2, "0")}:${String(
        newMinute
      ).padStart(2, "0")}:${String(newSecond).padStart(2, "0")}:${String(
        newMillisecond
      ).padStart(4, "0")}`,
    });
  };

  // start and Stop
  handleStartAndStop = () => {
    if (!this.state.isRunning) {
      this.timer = setInterval(this.handleChange, 10);
    } else {
      clearInterval(this.timer);
    }

    this.setState({ isRunning: !this.state.isRunning });
  };

  // reset the stopwatch
  handleReset = () => {
    clearInterval(this.timer);
    this.setState({
      formatted: "00:00:00:0000",
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      isRunning: false,
    });
  };

  onCallback = () => console.log("Finish");

  render() {
    const { formatted, isRunning } = this.state;
    return (
      <>
        <div className="card">
          <h2>Stopwatch</h2>
          <p>Formatted: {formatted}</p>
          <button onClick={this.handleStartAndStop}>
            {!isRunning ? "Start" : "Stop"}
          </button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
        <button onClick={this.props.handleStopwatch}>Hide Stopwatch</button>
      </>
    );
  }
}

export default Stopwatch;
