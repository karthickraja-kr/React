import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [result, setResult] = useState(false);
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);

  const setListValue = (value, lis) => {
    let newArray = [];
    let values = value.split(",");
    if (lis === 1) {
      setList1(newArray.concat(values));
    } else {
      setList2(newArray.concat(values));
    }
  };
  return (
    <div className="background">
      {!result && (
        <div className="block">
          <h1>Compare</h1>
          <div className="list">
            <h3>List 1</h3>
            <textarea
              className="input"
              value={list1}
              onChange={(e) => setListValue(e.target.value, 1)}
            ></textarea>
          </div>
          <div className="list">
            <h3>List 2</h3>
            <textarea
              className="input"
              value={list2}
              onChange={(e) => setListValue(e.target.value, 2)}
            ></textarea>
          </div>
          <p>Seperate a list item by using comma ","</p>
          <button className="btn" onClick={() => setResult(!result)}>
            Compute
          </button>
        </div>
      )}
      {result && (
        <>
          <h2>Items in List1</h2>
          <ul className="ul">
            {list1.map((item, id) => {
              return (
                <li key={id}>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
          <h2>Items in List2</h2>
          <ul className="ul">
            {list2.map((item, id) => {
              return (
                <li key={id}>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
          <h2>Items common in List1 & List2</h2>
          <ul className="ul">
            {list1.map((item, id) => {
              if (list2.includes(item)) {
                return (
                  <li key={id}>
                    <p>{item}</p>
                  </li>
                );
              }
              return "";
            })}
          </ul>
          <h2>Unique Items in List1 & List2</h2>
          <ul className="ul">
            {list1.map((item, id) => {
              return (
                <li key={id}>
                  <p>{item}</p>
                </li>
              );
            })}
            {list2.map((item, id) => {
              if (!list1.includes(item)) {
                return (
                  <li key={id}>
                    <p>{item}</p>
                  </li>
                );
              }
              return "";
            })}
          </ul>
          <button
            className="btn"
            onClick={() => {
              setList2([]);
              setList1([]);
              setResult(!result);
            }}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
}
