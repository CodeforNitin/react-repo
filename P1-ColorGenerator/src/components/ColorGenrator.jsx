import React, { useEffect, useState } from "react";
import "../index.css";

function ColorGenrator() {

    const [color, setColor] = useState('green')
    const [typeOfColor, setTypeOfColor] = useState('HEX')

    const handleRGB  = ()=> {

        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        setColor(`rgb(${r}, ${g}, ${b})`)

        setTypeOfColor('RGB');
    }

    const handleHEX  = ()=> {
        let str = "#";

        const arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

        for (let i=0; i<6; i++){
            const ran = Math.floor(Math.random()*arr.length);
            str += arr[ran];
        }

        setColor(str);
        setTypeOfColor('HEX');
    }

    const handleRandom = ()=>{
        let val = Math.floor(Math.random()*2);

        if (val == 0) handleHEX();
        else handleRGB();
    }

    useEffect(()=>{
        typeOfColor ==='HEX' ? handleHEX() : handleRGB();
    },[typeOfColor])

  return (
    <div className="container">
      <div className="card" style={{backgroundColor:color}}>
        <h2>Color Type : {typeOfColor}</h2>
        <h2>{color}</h2>
      </div>

        <div>
        <button onClick={handleHEX}>Genrate HEX Color</button>
        <button onClick={handleRGB}>Genrate RGB Color</button>
        <button onClick={handleRandom}>Generate Random Color</button>
        </div>

    </div>
  );
}

export default ColorGenrator;
