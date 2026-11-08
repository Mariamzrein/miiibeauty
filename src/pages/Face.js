import React from "react";
import cream from "../assets/cream.webp";


function Face( {addToCart}) {
  return (
    <div>

      

      <div className="products">

        <div className="card">
          <img src={cream} alt="cream" />
          <h3>Cream</h3>
          <p>$40</p>
          <button onClick={()=> 
    addToCart({
        name:"Cream",price:40.00
      })
    } >Add</button>
        </div>

      
      </div>

    </div>
  );
}

export default Face;