import React from "react";
import "./NumPlayers.scss";

const NumPlayers = ({ setNumberOfPlayers = () => {}, setNopModal = () => {} }) => {
  const chooseNOP = num => {
    setNumberOfPlayers(num);
    setNopModal(false);
  };

  return (
    <div className="nop-container">
      <h2 className="nop-title">How Many Players?</h2>
      <div className="nop-number-container">
        <div className="number" onClick={() => {chooseNOP(1)}}>
          1
        </div>
        <div className="number" onClick={() => {chooseNOP(2)}}>
          2
        </div>
        <div className="number" onClick={() => {chooseNOP(3)}}>
          3
        </div>
        <div className="number" onClick={() => {chooseNOP(4)}}>
          4
        </div>
      </div>
    </div>
  );
};

export default NumPlayers;
