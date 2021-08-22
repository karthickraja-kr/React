import React, { useState } from "react";
import Countdown from "react-countdown";
import "./App.css";

export default function App() {
  const [cycle, setCycle] = useState(1);
  const [val, setVal] = useState(2);

  const setCycleChange = (value) => {
    let temp = cycle + value;
    if (temp > 0) {
      setCycle(temp);
      setVal(temp * 2);
    } else {
      setCycle(1);
      setVal(2);
    }
  };
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      let temp = val - 1;
      if (temp === 0) {
        setCycle(0);
      } else if (temp % 2 === 0) {
        setCycle(Math.floor(temp / 2));
      } else {
        setCycle(Math.floor(temp / 2) + 1);
      }
      setVal(temp);
      return <p>Completed</p>;
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div className="pomodoro">
      <div className="timer">
        {val % 2 === 0 && val > 0 && (
          <>
            <Countdown date={Date.now() + 1500000} renderer={renderer} />
            <h4 className="status">Work</h4>
          </>
        )}
        {val % 2 !== 0 && val > 0 && (
          <>
            <Countdown date={Date.now() + 300000} renderer={renderer} />
            <h4 className="status">Rest</h4>
          </>
        )}
        {val === 0 && <h4>Finish</h4>}
      </div>
      <div className="cycleContainer">
        <button className="btn" onClick={() => setCycleChange(-1)}>
          -
        </button>
        <div className="btn-text">{cycle}</div>
        <button className="btn" onClick={() => setCycleChange(+1)}>
          +
        </button>
      </div>
      <div className="btn-text">Remaining cycles</div>
      <br />
      <div className="btn-text-sm">
        Each cycle -&gt; 25min(work) + 5min(rest)
      </div>
    </div>
  );
}
