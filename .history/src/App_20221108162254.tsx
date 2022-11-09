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
          onChange={(e) => console.log(e)}
        ></input>

        <button onClick={(e) => console.log(e.target)}>Submit</button>
      </div>
    </div>
  );
};
