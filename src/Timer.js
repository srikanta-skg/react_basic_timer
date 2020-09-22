import React from "react";
import * as Redux from "react-redux";
import Form from "./Form.js";

class Timer extends React.Component {
  _tick = () => {
    this.props.start();
  };

  event_handeler = (event) => {
    var value = event.target.value;
    var min = Math.floor(value / 60);
    var sec = value % 60;
    this.props.addTime(min, sec);
  };

  start_handeler = () => {
    if (this.props.seconds <= 0.1 && this.props.minutes <= 0) {
      alert("enter value greater then 1");
      return;
    }
    this.props.icon_Click();
    this.timer = setInterval(this._tick, 1000);
  };

  rest_handeler = () => {
    this.props.reset();
    clearInterval(this.timer);
    this.props.show_Number();
  };

  stop_handeler = () => {
    clearInterval(this.timer);
    this.props.pause();
    this.props.show_Number();
  };

  render() {
    if (this.props.minutes === 0 && this.props.seconds === 0) {
      clearInterval(this.timer);
    }
    return (
      <div className="container">
        <Form
          obj={this.props}
          start_handeler={this.start_handeler}
          event_handeler={this.event_handeler}
          stop_handeler={this.stop_handeler}
          rest_handeler={this.rest_handeler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  icon_Click: state.icon_Click,
  onClick: state.onClick,
  show_Number: state.show_Number,
  count: state.count,
  Logging: state.Logging,
  minutes: state.minutes,
  seconds: state.seconds,
});

const mapsDispatchToProps = (dispatch) => {
  return {
    addTime: (min, sec) => {
      dispatch({ type: "ADD", min: min, sec: sec });
    },

    start: () => {
      dispatch({ type: "PLAY" });
    },
    pause: () => {
      dispatch({ type: "PAUSE" });
    },
    reset: () => {
      dispatch({ type: "RESET" });
    },
    icon_Click: () => {
      dispatch({ type: "CLICKED" });
    },
    show_Number: () => {
      dispatch({ type: "SHOW_NUMBER" });
    },
  };
};

export default Redux.connect(mapStateToProps, mapsDispatchToProps)(Timer);
