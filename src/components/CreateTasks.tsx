import React from "react";
import "../styles/CreateTask.css";
import { TodoCreator } from "./TodoCreator";
import { TodosProps } from "./App";

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

        <TodoCreator
          tasks={tasks}
          setTasks={(array: TodosProps[]) => setTasks(array)}
        />
      </div>
    </div>
  );
};
