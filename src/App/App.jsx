import React, { useState, useEffect } from "react";
import "./App.scss";
import NumPlayers from "../NumPlayers/NumPlayers";
import Modal from "@material-ui/core/Modal";

const App = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(null);
  const [modal, setModal] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to QuestClerk!</h1>
      </header>
      <Modal open={modal}>
        <NumPlayers
          setNumberOfPlayers={setNumberOfPlayers}
          setModal={setModal}
        />
      </Modal>
    </div>
  );
};

export default App;
