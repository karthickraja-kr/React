import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

const App = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem !== "") {
      let temp = [];
      temp = temp.concat(list);
      temp.push(newItem);
      setList(temp);
      setNewItem("");
    } else {
      alert("Please add Todo item");
    }
  };

  const deleteItem = (id) => {
    let temp = list;
    let UpdatedList = temp.filter((item, index) => index !== id.id);
    setList(UpdatedList);
  };

  return (
    <div className="container">
      <img alt="React logo" src={logo} style={{ height: 100, width: 100 }} />
      <h1>ToDo App</h1>
      <div className="inputContainer">
        <h3>Add an item.....</h3>
        <input
          className="input"
          type="text"
          placeholder="Write a Todo"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button className="btn" onClick={(e) => addItem()}>
          Add
        </button>
      </div>
      <div className="list">
        <ul>
          {list.map((item, id) => {
            return (
              <li className="listItem" key={id}>
                <input type="checkbox" />
                <p>{item}</p>
                <button className="delBtn" onClick={() => deleteItem({ id })}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
