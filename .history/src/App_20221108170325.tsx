import React, { useState } from "react";
import { Header } from "./Header";
import "./App.css";

export const App = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  console.log(list);

  return (
    <div className="App">
      <Header />
      <h1>My Tasks!!</h1>
      <div className="textbox">
        <input
          type="text"
          placeholder="Add A New Task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>

        <button
          onClick={() => {
            setList([...list, value]);
          }}
        >
          Submit
        </button>
        <ul className="text">
          <li>{list}</li>
        </ul>
      </div>
    </div>
  );
};
