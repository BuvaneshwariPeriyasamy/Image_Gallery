import ReactDOM from "react-dom/client";
import dog01 from "./asset/image/dog01.png"
import dog02 from "./asset/image/dog02.png"
import dog03 from "./asset/image/dog03.png"
import dog04 from "./asset/image/dog04.png"
import dog05 from "./asset/image/dog05.png"
import dog06 from "./asset/image/dog06.png"
import dog07 from "./asset/image/dog07.png"
import dog08 from "./asset/image/dog08.png"


const root = ReactDOM.createRoot(document.getElementById("root"));

function NameOne(props) {
  return (
    <div style={{ backgroundColor: "white", width: "250px", margin: "20px", border: "1px solid", textAlign:"center"}}>
      <img src={props.img} alt={props.myname} style={{border:"1px solid", margin:"10px"}}></img>
      <h3>{props.myname}</h3>
    </div>
  );
}

var arr = [
  { name: "Julie's Rabbit Ears", img: dog01 },
  { name: "The Innocent Look", img: dog02 },
  { name: "Big Eyed Buggy", img: dog03 },
  { name: "The Saint Doggo", img: dog04 },
  { name: "Big Eyed Buggy", img: dog05 },
  { name: "The Innocent Look", img: dog06 },
  { name: "The Saint Doggo", img: dog07 },
  { name: "Julie's Rabbit Ears", img: dog08 }
];

root.render(
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", backgroundColor: "gray", justifyContent: "center" }}>
    {arr.map(function (item, index) {
      return <NameOne key={index} myname={item.name} img={item.img} />;
    })}
  </div>
);
