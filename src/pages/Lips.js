import React from "react";
import lipstick from "../assets/lipstick.png";
import gloss from "../assets/lips1.jpeg";

function Lips( {addToCart }) {
  return (
    <div>

     

      <div className="products">

        <div className="card">
          <img src={lipstick} alt="lipstick" />

          <h3>Lipstick</h3>

          <p>$21</p>

          <button onClick={()=> 
    addToCart({
        name:"Lipstick",price:21.00
      })
    }>Add</button>
        </div>

        <div className="card">
          <img src={gloss} alt="gloss" />

          <h3>Lip Gloss</h3>

          <p>$18</p>

          <button onClick={()=> 
    addToCart({
        name:"Lip gloss",price:18.00
      })
    }>Add</button>
        </div>

      </div>

    </div>
  );
}

export default Lips;