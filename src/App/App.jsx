import React from "react";
import "./App.scss";
import NumPlayers from "../NumPlayers/NumPlayers";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to QuestClerk!</h1>
      </header>
      <NumPlayers />
    </div>
  );
};

export default App;
