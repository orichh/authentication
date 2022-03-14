import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <div>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
      </div>
      <button>login</button>
      <div>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
      </div>
      <button>register</button>
    </div>
  );
}

export default App;
