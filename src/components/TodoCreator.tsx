import * as React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "../styles/TodoCreator.css";
import { TodosProps } from "./App";

type TodoCreatorProps = {
  tasks: TodosProps[];
  setTasks: (tasks: TodosProps[]) => void;
};

export const TodoCreator = ({ tasks, setTasks }: TodoCreatorProps) => {
  const removeTask = (id: number) => {
    const filtered = tasks.filter((item) => item.id !== id);
    setTasks(filtered);
  };
  return (
    <div className="todo-container">
      {tasks.map((item, index) => {
        return (
          <div className={`single-task `} key={`${item.task}-${index}`}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => {
                const tmp = tasks;

                tmp[index].done = !item.done;

                setTasks([...tmp]);
              }}
            />
            {item.task}
            <div className="delete" onClick={() => removeTask(item.id)}>
              <RiDeleteBin5Fill />
            </div>
          </div>
        );
      })}
    </div>
  );
};
