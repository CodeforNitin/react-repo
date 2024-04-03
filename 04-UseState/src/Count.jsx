import React,{useState} from 'react'

function Count() {

//using array destructuring method

// const [any name, any name] = useState(initialvalue can be anything Array,object,bool etc)

  const [count, setCount] = useState(0);

  const handleClick1 = () => {

    //this will create count+1 and put this value to count using setCount
    setCount(count+1);

  }
  
  const handleClick3 = () => {
  
    // //we expect this to run three time but it wll not work 
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    //if we want to run this for three time then useState must remember the prev state
    //but its not remembering 

    // //so we can use updater function
    // //except for the actual variable count in this case
    // setCount((count) => count+1);
    // setCount((count) => count+1);
    // setCount((count) => count+1);

    setCount((prev) => prev+1);
    setCount((prev) => prev+1);
    setCount((prev) => prev+1);

  }
  

  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={handleClick1}>+1</button>
      <button onClick={handleClick3}>+3</button>
    </div>
    
  );
}

export default Count