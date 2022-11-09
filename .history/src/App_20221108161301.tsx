import React, { useState } from "react";
import { Header } from "./Header";
import "./App.css";

export const App = () => {
  const [Value, setValue] = useState<string>("");

  const onInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };
  return (
    <div className="App">
      <Header />
      <h1>My Tasks!!</h1>
      <div className="textbox">
        <input
          type="text"
          placeholder="Add A New Task"
          value={onInputChange}
        ></input>

        <button onClick={() => console.log("clicked")}>Submit</button>
      </div>
      <h1>{e.target.value}</h1>
    </div>
  );
};
