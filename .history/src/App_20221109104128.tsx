import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { RiDeleteBin5Fill } from "react-icons/ri";

import "./App.css";

export const App = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [tick, setTick] = useState<boolean>(false);

  const tasks = [
    {
      done: <input type="checkbox" />,
      task: "clean your room",
    },
  ];

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
            setValue("");
          }}
        >
          Submit
        </button>

        <div className="todo-container">
          {list.map((item, index) => {
            return (
              <div className={`single-task `} key={`${item}-${index}`}>
                <input
                  type="checkbox"
                  checked={tick}
                  onChange={() => setTick(!tick)}
                />
                {item}

                <RiDeleteBin5Fill />
                <h1>{tasks}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
