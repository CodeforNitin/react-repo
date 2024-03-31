
import "./App.css";

//This function returns a single card

// function Card(){
//     return(
//         <div className="container">
//             <img src= {profilePic} alt="Light Yagami pic"></img>
//             <h2>Light Yagami</h2>
//             <p>People know me as Kira</p>
//         </div>

//     );

//Using Props


function Card(props) {

  return (
    <div className="container">
      <img src={props.img}></img>
      <h2>Name : {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}


export default Card;
