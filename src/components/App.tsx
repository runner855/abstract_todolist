import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { CreateTasks } from "./CreateTasks";
import { NavBar } from "./NavBar";
import { TasksList } from "../components/TasksList";
export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create-tasks" element={<CreateTasks />} />
        <Route path="/tasks-list" element={<TasksList />} />
      </Routes>
    </div>
  );
};
