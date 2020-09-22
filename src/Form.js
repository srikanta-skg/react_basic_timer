import React from "react";

function Form(props) {
  let minutes = props.obj.minutes;
  let seconds = props.obj.seconds;
  let icon_Click = props.obj.onClick;
  let show_Number = props.obj.Logging;

  return (
    <form>
      <div className="number">
        <div>
          <p className="text_color small">
            {" "}
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
          {show_Number === true ? (
            <input
              type="number"
              name="minutes"
              className="input_taker"
              placeholder="Enter Number"
              onChange={props.event_handeler}
            ></input>
          ) : (
            <div>
              {" "}
              {minutes === 0 && seconds <= 10 ? (
                <h1 className="text_color text_colorRed">
                  Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h1>
              ) : (
                <h1 className="text_color">
                  Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h1>
              )}{" "}
            </div>
          )}
        </div>
        <div className="icons">
          {icon_Click === true ? (
            <input
              className="start_button"
              type="button"
              onClick={props.start_handeler}
            />
          ) : (
            <input
              className="start_button pause_button"
              type="button"
              value=" "
              onClick={props.stop_handeler}
            />
          )}

          <span onClick={props.rest_handeler} className="start_button restart_button"></span>
          <div>
            {" "}
            <br></br>{" "}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form