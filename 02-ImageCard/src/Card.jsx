
import "./App.css";
import PropTypes from 'prop-types';

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


function Card (props) {

  return (
    <div className="container">
      <img src={props.img}></img>
      <h2>Name : {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

//prop types - if it will not be as mentioned below then it will throw an 
Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    img: PropTypes.string.isRequired, // Require img prop
  };
  
  Card.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false,
  };


export default Card;
