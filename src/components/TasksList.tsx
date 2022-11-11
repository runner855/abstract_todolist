import React, { useState } from "react";
import "../styles/TasksList.css";
import { TodoCreator } from "./TodoCreator";
import { TodosProps } from "./App";

type TasksListProps = {
  tasks: TodosProps[];
  setTasks: (tasks: TodosProps[]) => void;
};

export const TasksList = ({ tasks, setTasks }: TasksListProps) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="list-container">
      <div className="search">
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder={"Find Your Tasks"}
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
      <div className="list">
        <TodoCreator
          tasks={tasks}
          setTasks={(array: TodosProps[]) => setTasks(array)}
        />
      </div>
    </div>
  );
};
