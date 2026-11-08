import React from "react";
import serum from "../assets/serum.webp";
import cream from "../assets/cream.png";

function Skincare({ addToCart }) {
  return (
    <div>

      

      <div className="products">

        <div className="card">
          <img src={serum} alt="serum" />
          <h3>Serum</h3>
          <p>$40</p>
          <button onClick={()=> 
    addToCart({
        name:"Serum",price:40.00
      })
    }>Add</button>
        </div>

        <div className="card">
          <img src={cream} alt="cream" />
          <h3>Cream</h3>
          <p>$35</p>
          <button onClick={()=> 
    addToCart({
        name:"Cream",price:35.00
      })
    }>Add</button>
        </div>

      </div>

    </div>
  );
}

export default Skincare;