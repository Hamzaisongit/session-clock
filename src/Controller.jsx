import React, { useContext } from "react";
import Context1 from "./Context/creator1";
import Context2 from "./Context/creator2";

export default function Controller({ type }) {
  const { data1, setData1 } = useContext(Context1);
  const { data2, setData2 } = useContext(Context2);

  const buttonStyle = {
    background: "transparent",
    color: "#fff",
    border: "1px solid #ffffff6e",
    padding: "5px 10px", // Adjusted padding for smaller screens
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
    transition: "background 0.3s ease",
    width: "80px", // Ensure buttons remain small on mobile
    textAlign: "center",
  };

  return type === "session" ? (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.13)",
        backdropFilter: "blur(2px)",
        padding: "10px",
        border: "1px solid rgb(200, 200, 200)",
        borderRadius: "5px",
        display: "inline-block",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%", // Ensure responsiveness
        maxWidth: "180px", // Control max width for mobile
      }}
    >
      <span style={{color:"white" , fontSize: "1.1rem", marginRight: "10px" }}>{data1.sessionTime} min</span>
      <div>
      <button onClick={() => setData1((p) => ({ ...p, sessionTime: p.sessionTime < 60 ? ++p.sessionTime : 60 }))} style={buttonStyle}>
        +
      </button>
      <button onClick={() => setData1((p) => ({ ...p, sessionTime: p.sessionTime > 0 ? --p.sessionTime : 0 }))} style={buttonStyle}>
        -
      </button>
      </div>
      
      <span style={{ fontSize: "13px", display: "block", marginTop: "5px" }}>{"(session)"}</span>
    </div>
  ) : (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.13)",
        backdropFilter: "blur(2px)",
        padding: "10px",
        border: "1px solid rgb(200, 200, 200)",
        borderRadius: "5px",
        display: "inline-block",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "180px",
      }}
    >
      <span style={{color:"white" ,fontSize: "1.1rem", marginRight: "10px" }}>{data2.breakTime} min</span>
      <div>
      <button onClick={() => setData2((p) => ({ ...p, breakTime: p.breakTime < 60 ? ++p.breakTime : 60 }))} style={buttonStyle}>
        +
      </button>
      <button onClick={() => setData2((p) => ({ ...p, breakTime: p.breakTime > 0 ? --p.breakTime : 0 }))} style={buttonStyle}>
        -
      </button>
      </div>
      
      <span style={{ fontSize: "13px", display: "block", marginTop: "5px" }}>{"(break)"}</span>
    </div>
  );
}
