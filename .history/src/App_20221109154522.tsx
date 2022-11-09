import React, { useState } from "react";
import { Header } from "./Header";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import "./App.css";

export const App = () => {
  console.log(typeof uuid());
  const todos = [
    {
      id: 4,
      done: false,
      task: "clean your room",
    },
  ];

  type TodosProps = {
    id: number;
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
              setTasks([...tasks, { id: 1, task: value, done: false }]);
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
                {item.done}
                <a className="delete">
                  <RiDeleteBin5Fill
                    onClick={() => console.log("task deleted")}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
