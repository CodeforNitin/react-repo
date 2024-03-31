import Card from "./Card.jsx"
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpg";

function App() {
  return (
    <>
      <Card img = {img1} name = "Light Yagami" age = {23} isStudent = {true}/>
      <Card img = {img2} name = "L Lawliet"    age = {25} isStudent = {false}/>
      <Card />
  
    </>
  );
}

export default App;
