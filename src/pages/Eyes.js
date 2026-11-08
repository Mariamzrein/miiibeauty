import React from "react";
import mascara from "../assets/mascara2.webp";
import eyeshadow from'../assets/Eyeshadow1.jpeg';
function Eyes({addToCart}) {
  return (
    <div>

   

      <div className="products">

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

     
<div className="products">

        <div className="card">
          <img src={eyeshadow} alt="eyeshadow" />

          <h3>Eyeshadow</h3>

          <p>$67.00</p>

          <button onClick={()=> 
              addToCart({
                  name:"Eyeshadow",price:67.00
                })
              }>Add</button>
        </div> 

        </div>
    </div>
    </div>
  );
}

export default Eyes;