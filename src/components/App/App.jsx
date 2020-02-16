import React, { useState, useEffect } from "react";
import "./App.scss";
import NumPlayers from "../NumPlayers/NumPlayers";
import ReactModal from "react-responsive-modal";
import Players from "../Players/Players";

const App = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [nopModal, setNopModal] = useState(true);
  const [playerModal, setPlayerModal] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (nopModal) {
      return
    }
    setPlayerModal(true)
  }, [nopModal])

  useEffect(() => {
    let newState = players;
    for (var i = 0; i < numberOfPlayers; i++) {
      newState.push(
        {
          id: i,
          name: "",
          threat: 0,
          questing: 0
        }
      )  
    }
    setPlayers(players);
    console.log('players ', players);
  }, [numberOfPlayers])

  const handleClose = () => {
    setNopModal(false);
    setPlayerModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>QuestClerk</h1>
      </header>
      
      {/* NOP Modal*/}
      <ReactModal classNames={{modal: "modal"}} open={nopModal} onClose={handleClose} showCloseIcon={false} focusTrapped={false} closeOnOverlayClick={false}>
        <div className="modal-container">
          <NumPlayers
          setNumberOfPlayers={setNumberOfPlayers}
          setNopModal={setNopModal}
        />
        </div>
      </ReactModal>

      {/* Player Name Modal*/}
      <ReactModal classNames={{modal: "modal"}} open={playerModal} onClose={handleClose} showCloseIcon={false} focusTrapped={false} >
        <div className="modal-container">
         <Players players={players}/>
        </div>
      </ReactModal>
    </div>
  );
};

export default App;
