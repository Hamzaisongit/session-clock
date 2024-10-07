import React, { useState, useContext, useEffect } from "react";
import Countdown from "react-countdown";
import Context1 from "./Context/creator1";
import Context from "./Context/creator";
import useSound from "use-sound";

export default function SessionCounter() {
  const [reset, setReset] = useState(false);

  useEffect(() => {}, [reset]);

  const { data1, setData1 } = useContext(Context1);
  const { data, setData } = useContext(Context);

  const [play] = useSound("/sound/trialaudio.mp3", {
    volume: 0.4,
  });

  const buttonStyle = {
    background: "transparent",
    color: "#fff",
    border: "1px solid #ffffff6e",
    padding: "5px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
    transition: "background 0.3s ease",
    fontSize: "1rem",
  };

  const render = ({ seconds, minutes, completed, api }) => {
    return (
      <div
        style={{
          fontSize: "1.5rem",
          color: "#495057",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <span style={{fontSize:"6vw", marginRight: "10px" }}>
          {minutes}:{seconds}
        </span>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={api.start} style={buttonStyle}>
            Start
          </button>
          <button onClick={api.pause} style={buttonStyle}>
            Pause
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Countdown
        date={Date.now() + 60000 * data1.sessionTime}
        renderer={render}
        controlled={false}
        onComplete={() => {
          play();
          setData((prev) => ({
            ...prev,
            currentMode: "break",
          }));
        }}
      />
      <button
        onClick={() => setReset(!reset)}
        style={{ ...buttonStyle, marginTop: "10px" }}
      >
        Reset Timer
      </button>
    </>
  );
}
