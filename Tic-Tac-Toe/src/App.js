import React, { useState } from "react";
import Icon from "./components/Icon";
import "./App.css";

// Tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React-iconns
import { FaRegCircle, FaTimes } from "react-icons/fa";

const item = new Array(9).fill("Empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [count, setCount] = useState(1);

  // Change Item :-
  const changeItem = (index) => {
    if (item[index] === "Empty") {
      item[index] = isCross ? "Cross" : "Circle";
      setIsCross(!isCross);
      setCount(count + 1);
      IsWin();
    } else {
      return toast("Already filled", { type: "error" });
    }
  };

  // Reload Game :-
  const ReloadGame = () => {
    setCount(1);
    item.fill("Empty", 0, 9);
    toast("Game Reloaded");
  };

  // IsWin
  const IsWin = () => {
    if (item[0] === item[1] && item[0] == item[2] && item[0] !== "Empty") {
      toast(`🦄 Hurray! ${item[0]} wins`, { type: "success" });
    } else if (
      item[3] === item[4] &&
      item[3] == item[5] &&
      item[3] !== "Empty"
    ) {
      toast(`🦄 Hurray! ${item[3]} wins`, { type: "success" });
      ReloadGame();
    } else if (
      item[6] === item[7] &&
      item[6] == item[8] &&
      item[6] !== "Empty"
    ) {
      toast(`🦄 Hurray! ${item[6]} wins`, { type: "success" });
      ReloadGame();
    } else if (
      item[0] === item[3] &&
      item[0] == item[6] &&
      item[0] !== "Empty"
    ) {
      toast(`🦄 Hurray! ${item[0]} wins`, { type: "success" });
      ReloadGame();
    } else if (
      item[1] === item[4] &&
      item[1] == item[7] &&
      item[1] !== "Empty"
    ) {
      toast(`🦄 Hurray! ${item[1]} wins`, { type: "success" });
      ReloadGame();
    } else if (
      item[2] === item[5] &&
      item[2] == item[8] &&
      item[2] !== "Empty"
    ) {
      toast(`🦄 Hurray! ${item[2]} wins`, { type: "success" });
      ReloadGame();
    } else if (
      item[0] === item[4] &&
      item[0] == item[8] &&
      item[0] !== "Empty"
    ) {
      toast(`🦄 Hurray! ${item[0]} wins`, { type: "success" });
      ReloadGame();
    } else if (
      item[2] === item[4] &&
      item[2] == item[6] &&
      item[2] !== "Empty"
    ) {
      toast(`🦄 Hurray! ${item[2]} wins`, { type: "success" });
      ReloadGame();
    } else {
      if (count === 9) {
        toast(`Game Over :(`, { type: "warning" });
        ReloadGame();
      }
    }
  };

  return (
    <div className="Content">
      <div className="info">
        {isCross ? (
          <FaTimes className="cross" />
        ) : (
          <FaRegCircle className="circle" />
        )}
        <p>Turn</p>
      </div>
      <ToastContainer position="bottom-center" />
      <div className="Container">
        {item.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              changeItem(index);
            }}
          >
            <Icon name={item} />
          </div>
        ))}
      </div>
      <button className="Button" onClick={ReloadGame}>
        Reload Game
      </button>
    </div>
  );
};

export default App;
