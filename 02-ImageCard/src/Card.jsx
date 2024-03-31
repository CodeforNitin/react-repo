import profilePic from './assets/img1.jpeg';
import './App.css'


function Card(){
    return(
        <div className="container">
            <img src= {profilePic} alt="Light Yagami pic"></img>
            <h2>Light Yagami</h2>
            <p>People know me as Kira</p>
        </div>
    
    );

    
}

export default Card;