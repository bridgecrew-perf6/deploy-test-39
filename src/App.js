import React from "react";
import "./App.css";
import Weather from "./Weather";
import CoderStamp from "./CoderStamp";
import "./CoderStamp.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Martina Franca" />
        <CoderStamp />
      </div>
    </div>
  );
}

export default App;
