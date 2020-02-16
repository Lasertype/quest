import React from "react";
import "./Players.scss";

const Players = ({ players = () => {}}) => {
    return (
        <div className="player-container">
            <h2 className="player-title">Who's Playing?</h2>
            <div className="player-input-container">
            {players.map((element, index) => {
                return (
                <div key={index} className="player-input">
                    <div>{`Player ${element.id + 1}`}</div>
                    <input type="text" className="input"/>
                </div>
                )
            })}
            </div>
            <div className="start">Start Game</div>
        </div>
    );
};

export default Players;