import React from "react";
import lipstick from "../assets/lipstick.png";
import mascara from "../assets/mascara2.webp";
import blush from "../assets/blush.webp";
import eyeshadow from "../assets/Eyeshadow1.jpeg"
import lips from "../assets/lips1.jpeg"
function Makeup( {addToCart }) {
  return (
    <div>

      

      <div className="products">

        <div className="card">
          <img src={lipstick} alt="lipstick" />
          <h3>Lipstick</h3>
          <p>$21</p>
          <button>Add</button>
        </div>

        <div className="card">
          <img src={mascara} alt="mascara" />
          <h3>Mascara</h3>
          <p>$25</p>
          <button onClick={()=> 
    addToCart({
        name:"Mascara",price:25.00
      })
    }>Add</button>
        </div>

        <div className="card">
          <img src={blush} alt="blush" />
          <h3>Blush</h3>
          <p>$30</p>
          <button onClick={()=> 
    addToCart({
        name:"Blush",price:30.00
      })
    }>Add</button>
        </div>

<div className="card">
    <img src={eyeshadow} alt="eyeshadow" />

    <h3>Eyeshadow</h3>

    <p>$67.00</p>

    <button className="prod-btn" onClick={()=> 
    addToCart({
        name:"Eyeshadow",price:67.00
      })
    }>Add</button>
  </div>

<div className="card" >
    <img src={lips} alt="gloss" />

    <h3>Gloss</h3>

    <p>$18.00</p>

    <button className="prod-btn" onClick={()=> 
    addToCart({
        name:"Gloss",price: 18.00
      })
    }>Add</button>
  </div>

      </div>

    </div>
  );
  
}

export default Makeup;