import React from "react";
import "../index.css";

function ColorGenrator() {

    const handleRGB  = ()=> {

    }

    const handleHEX  = ()=> {

    }


  return (
    <div className="container">
      <div className="card">
        <h2>Color</h2>
      </div>
      <div>
          <button onClick={handleHEX}>Genrate HEX Color</button>
          <button onClick={handleRGB}>Genrate RGB Color</button>
        </div>
    </div>
  );
}

export default ColorGenrator;
