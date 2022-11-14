import React, { useState, useEffect } from "react";
import "../styles/TasksList.css";
import { TodoCreator } from "./TodoCreator";
import { TodosProps } from "./App";

type TasksListProps = {
  tasks: TodosProps[];
  setTasks: (tasks: TodosProps[]) => void;
};

export const TasksList = ({ tasks, setTasks }: TasksListProps) => {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<TodosProps[]>([]);

  useEffect(() => {
    const filteredArray =
      value.length >= 3 &&
      tasks.filter((item) =>
        item.task.toLowerCase().includes(value.toLowerCase())
      );
    setResult(filteredArray || tasks);
  }, [value]);

  return (
    <div className="list-container">
      <div className="search">
        <input
          className="search-input"
          type="search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder={"Find Your Tasks"}
        />
      </div>

      <div className="list">
        {result.length > 0 ? (
          <TodoCreator
            tasks={result}
            setTasks={(array: TodosProps[]) => setTasks(array)}
          />
        ) : (
          "Error, no results found!!"
        )}
      </div>
    </div>
  );
};
