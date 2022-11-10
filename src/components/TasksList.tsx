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
    <div className="list">
      <TodoCreator
        tasks={tasks}
        setTasks={(array: TodosProps[]) => setTasks(array)}
      />
    </div>
  );
};
