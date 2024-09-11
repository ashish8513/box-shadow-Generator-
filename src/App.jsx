import "./App.css";
import React, { useState } from "react";

function App() {
  const [hori, setHori] = useState(10);
  const [veri, setVeri] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState("black");

  return (
    <>
      <h1>box shadow React App</h1>
      <div className="App">
        <div className="controls">
          <label>Horizontal</label>
          <input
            type="range"
            min="-200"
            max="200"
            value={hori}
            onChange={(e) => setHori(e.target.value)}
          />

          <label>Vertical</label>
          <input
            type="range"
            min="-200"
            max="200"
            value={veri}
            onChange={(e) => setVeri(e.target.value)}
          />

          <label>Blur</label>
          <input
            type="range"
            min="0"
            max="200"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />

          <label>Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="output">
          <div
            className="box"
            style={{ boxShadow: `${hori}px ${veri}px ${blur}px ${color}` }}
          >
            <p>
              box-shadow: {hori}px {veri}px {blur}px {color}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
