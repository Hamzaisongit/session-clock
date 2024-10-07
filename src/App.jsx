import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Controller from "./Controller";



function App() {

useEffect(()=>{
  document.getElementById('audio').play()
})

  return (
    <>
      <audio onEnded={(e)=>e.target.play()} id="audio" src="/sound/audio.mp3"></audio>
      <div
        id="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "#333",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#495057", marginBottom: "5px" }}>Timer</h1>
        <span style={{color:"gray" ,fontSize:"15px",fontWeight:"normal",marginBottom:"15px"}}>Analog guy in a digital world - track by Martin Roth</span>
        <Counter />
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
          <Controller type="session" />
          <Controller type="break" />
        </div>
        <button
          onClick={() => {
            window.location.reload()
          }}
          style={{
            background: "black",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
            marginBottom: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "background 0.3s ease"
          }}
          onMouseOver={(e) => (e.target.style.background = "transparent")}
          onMouseOut={(e) => (e.target.style.background = "black")}
        >
          Reset Settings
        </button>
        <button onClick={()=>{
          document.getElementById('audio').paused ? document.getElementById('audio').play() : document.getElementById('audio').pause()
        }}>
          track
        </button>
      </div>
    </>
  );
}

export default App;
