import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Price.css";

function MyPlayer() {
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <div>
      <div className="predict-How-to-use-Button">
        <button onClick={togglePlayer}>How To Use</button>
      </div>
      {showPlayer && (
        <div className="predict-MyPlayer">
          <button className="close-button" onClick={togglePlayer}>
            X
          </button>
          <h1 className="predict-How-to-use-description">
            How to Use Price Forecasting
          </h1>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=erCg5vyq_hc"}
            controls={true}
            height="400px"
            width="625px"
            style={{ margin: "100px auto", display: "block" }}
          />
        </div>
      )}
    </div>
  );
}

export default MyPlayer;
