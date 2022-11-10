import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { CreateTasks } from "./CreateTasks";
import { NavBar } from "./NavBar";
import { TasksList } from "../components/TasksList";

const todos = [
  {
    id: 1,
    done: false,
    task: "clean your room",
  },
];

export type TodosProps = {
  id: number;
  done: boolean;
  task: string;
};

export const App = () => {
  const [value, setValue] = useState<string>("");
  const [tasks, setTasks] = useState<TodosProps[]>(todos);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/create-tasks"
          element={
            <CreateTasks
              value={value}
              setValue={(text: string) => setValue(text)}
              tasks={tasks}
              setTasks={(array: TodosProps[]) => setTasks(array)}
            />
          }
        />
        <Route path="/tasks-list" element={<TasksList />} />
      </Routes>
    </div>
  );
};
