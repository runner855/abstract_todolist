import React from "react";
import "../styles/CreateTask.css";
import { TodoCreator } from "./TodoCreator";
import { TodosProps } from "./App";
import { FcSearch } from "react-icons/fc";

type CreateTasksProps = {
  value: string;
  setValue: (text: string) => void;
  tasks: TodosProps[];
  setTasks: (tasks: TodosProps[]) => void;
};

export const CreateTasks = ({
  value,
  setValue,
  tasks,
  setTasks,
}: CreateTasksProps) => {
  return (
    <div className="CreateTask">
      <div className="title">Create Tasks!!</div>
      <div className="textbox">
        <div className="search">
          <input
            className="search-input"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={"Create Your Tasks!!"}
          />
          <button
            className="search-btn"
            type="submit"
            onClick={() => {
              setTasks([
                ...tasks,
                { id: tasks.length + 1, task: value, done: false },
              ]);
              setValue("");
            }}
          >
            Submit!
          </button>
        </div>

        <TodoCreator
          showElement
          tasks={tasks}
          setTasks={(array: TodosProps[]) => setTasks(array)}
        />
      </div>
    </div>
  );
};
