import React, { useState } from "react";
import { Header } from "./Header";
import "./App.css";

export const App = () => {
  const [Value, setValue] = useState<string>("");
  return (
    <div className="App">
      <Header />
      <h1>My Tasks!!</h1>
      <div className="textbox">
        <input
          type="text"
          placeholder="Add A New Task"
          onChange={
            ((e: { target: { value: React.SetStateAction<string> } }) =>
              setValue(e.target.value),
            console.log(e.target.value))
          }
        ></input>
        <button onClick={() => console.log("clicked")}>Submit</button>
      </div>
    </div>
  );
};
