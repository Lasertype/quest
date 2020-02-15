import React, { useState, useEffect } from "react";
import "./App.scss";
import NumPlayers from "../NumPlayers/NumPlayers";
import ReactModal from "react-responsive-modal";

const App = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [modal, setModal] = useState(true);

  const handleClose = () => {
    setModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to QuestClerk!</h1>
      </header>
      <ReactModal classNames={{modal: "modalf"}} open={modal} onClose={handleClose} showCloseIcon={false} focusTrapped={false}>
        <div className="modal-container">
          <NumPlayers
          setNumberOfPlayers={setNumberOfPlayers}
          setModal={setModal}
        />
        </div>
      </ReactModal>
    </div>
  );
};

export default App;
