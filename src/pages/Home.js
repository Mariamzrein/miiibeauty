import React from "react";
import hero from "../assets/first.png";
import lips from "../assets/lips1.jpeg";
import eyes from "../assets/eyes1.jpeg";
import face from "../assets/face1.jpeg";
import matte from "../assets/matte1.jpeg";
import download from "../assets/download.jpg";
import eyeshadow from '../assets/Eyeshadow1.jpeg'
import lipstick from "../assets/lipstick.png";
import mascara from "../assets/mascara2.webp";
import blush from "../assets/blush.webp";
import serum from "../assets/serum.webp";
import cream from "../assets/cream.png";


   function Beauty({ addToCart , searchTerm}) {

 

  const products = [
    { name: "Lipstick", price: 21, image: lipstick },
    { name: "Eyeshadow", price: 67, image: eyeshadow },
    { name: "Blush", price: 32, image: blush },
    { name: "Gloss", price: 18, image: lips },
    { name: "Mascara", price: 25, image: mascara },
    { name: "Skincare Cream", price: 40, image: cream },
    { name: "Serum", price: 55, image: serum }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <div className="hero">
        <img src={hero} alt="hero" className="hero-img" />

        <div className="hero-text">
          <h1>THE NEW Collection</h1>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="gallery">
        <img src={lips} alt="lips" />
        <img src={eyes} alt="eyes" />
        <img src={face} alt="face" />
        <img src={matte} alt="matte" />
        <img src={download} alt="download" />
      </div>

  
      <div className="products">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product, index) => (

            <div className="prod" key={index}>

              <img src={product.image} alt={product.name} />

              <h6>{product.name}</h6>

              <p>${product.price.toFixed(2)}</p>

              <button
                className="prod-btn"
                onClick={() => addToCart(product)}
              >
                Add
              </button>
       </div>
          ))

        ) : (

          <p className="no-results">
            No products found.
          </p>
        )}
      </div>

      <footer className="footer">
        <h2>JOIN THE GLOW</h2>
        <p>© MII Beauty</p>
      </footer>

    </div>
  );
}



export default Beauty