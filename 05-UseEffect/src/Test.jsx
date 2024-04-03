import React, { useEffect, useState } from 'react'

function Test() {

const [width, setWidth] = useState(window.innerWidth);

const handleResize = () =>{
    setWidth(window.innerWidth);
}

useEffect (() => {

    window.addEventListener("resize", handleResize);
    
    //cleanup function

    return () => {
        window.removeEventListener("resize", handleResize);
    }

},[])

  return (
    <div>
        <p>windw width : {width} </p>
    </div>
  )
}

export default Test