import React, { useState, useContext, useEffect } from "react";
import Countdown from "react-countdown";
import Context2 from "./Context/creator2";
import Context from "./Context/creator";
import useSound from "use-sound";

export default function BreakCounter() {
  const [reset, setReset] = useState(false);
  const [play] = useSound('/sound/trialaudio.mp3', {
    volume: 0.4
  });
  useEffect(() => {}, [reset]);

  const { data2, setData2 } = useContext(Context2);
  const { data, setData } = useContext(Context);

  const render = ({ seconds, minutes, completed, api }) => {
    return (
      <div style={{ fontSize: "1.5rem", color: "#495057" }}>
        <span style={{ marginRight: "10px" }}>
          {minutes}:{seconds}
        </span>
        <button
          onClick={api.start}
          style={buttonStyle}
        >
          Start
        </button>
        <button
          onClick={() => {
            console.log(completed);
            api.pause();
          }}
          style={buttonStyle}
        >
          Pause
        </button>
      </div>
    );
  };

  return (
    <>
      <Countdown
        date={Date.now() + 60000 * data2.breakTime}
        renderer={render}
        controlled={false}
        onComplete={() => {
          play()
          setData((p) => {
            return {
              ...p,
              currentMode: "session",
            };
          });
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

const buttonStyle = {
  background: "transparent",
  color: "#fff",
  border: "1px solid #ffffff6e",
  padding: "5px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "5px",
  transition: "background 0.3s ease",
};
