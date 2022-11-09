import React, { useState } from "react";
import { Header } from "./Header";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./App.css";

export const App = () => {
  const todos = [
    {
      id: 1,
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

  // const removeTask = tasks.filter((id) => id);

  const removeTask = (id: number) => {
    const filtered = tasks.filter((item) => item.id !== id);
    setTasks(filtered);
  };

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
              setTasks([
                ...tasks,
                { id: tasks.length + 1, task: value, done: false },
              ]);
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
                  onChange={() => {}}
                />
                {item.task}

                <div className="delete" onClick={() => removeTask(item.id)}>
                  <RiDeleteBin5Fill />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
