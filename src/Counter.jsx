import React, { useContext } from "react";
import Context from "./Context/creator";
import SessionCounter from "./SessionCounter";
import BreakCounter from "./BreakCounter";

export default function Counter() {
  const { data } = useContext(Context);

  return (
    <>
      <div
        style={{
          background: "#00000021",
          backdropFilter: "blur(2px)",
          border: "0.5px solid rgb(200 200 200)",
          borderRadius: "10px",
          padding: "15px",
          width: "100%", // Made width responsive
          maxWidth: "300px", // Limits width to a max value for larger screens
          marginBottom: "20px",
          textAlign: "center", // Centers text for better mobile layout
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            color: "#495057",
            marginBottom: "10px",
          }}
        >
          {data.currentMode.toUpperCase()}
        </h3>
        {data.currentMode === "session" && <SessionCounter />}
        {data.currentMode === "break" && <BreakCounter />}
      </div>
    </>
  );
}
