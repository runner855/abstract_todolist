import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { RiDeleteBin5Fill } from "react-icons/ri";

import "./App.css";
import { doesNotMatch } from "assert";
import { isTemplateExpression } from "typescript";

export const App = () => {
  const todos = [
    {
      done: false,
      task: "clean your room",
    },
  ];

  type TodosProps = {
    done: boolean;
    task: string;
  };

  const [value, setValue] = useState<string>("");
  // const [list, setList] = useState<string[]>([]);
  const [tasks, setTasks] = useState<TodosProps[]>(todos);

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

        {
          <button
            className="addtask"
            onClick={() => {
              setTasks([...tasks, { task: value, done: checked }]);
              setValue("");
            }}
          >
            Submit
          </button>
        }

        <div className="todo-container">
          {tasks.map((item, index) => {
            return (
              <div className={`single-task `} key={`${item.task}-${index}`}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => setTasks([{ ...item, done: !item.done }])}
                />
                {item.task}

                <button className="delete">
                  <RiDeleteBin5Fill onClick={() => console.log("delete")} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
