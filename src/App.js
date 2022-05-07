import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <button className="btn btn-primary">Kim</button>
        <footer>
          This project was created by Kim MacVicar and is{" "}
          <a
            href="https://github.com/KimMacVicar/react-week-5"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
