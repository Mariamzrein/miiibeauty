import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./Components/Navbar";
import Beauty from "./pages/Home";
import Makeup from "./pages/Makeup";
import Skincare from "./pages/Skincare";
import Lips from "./pages/Lips";
import Eyes from "./pages/Eyes";
import Face from "./pages/Face";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

function App() {

  const [cart, setCart] = useState([]);


  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  
  const removeFromCart = (index) => {
    setCart((prevCart) =>
      prevCart.filter((item, i) => i !== index)
    );
  };

  return (
    <BrowserRouter>

      <Navbar cart={cart} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <Routes>
        <Route path="/" element={ <Beauty addToCart={addToCart} searchTerm={searchTerm}/> } />
        <Route path="/makeup" element={<Makeup addToCart={addToCart} />} />
        <Route path="/skincare" element={<Skincare addToCart={addToCart} />} />
        <Route path="/lips" element={<Lips addToCart={addToCart} />} />
        <Route path="/eyes" element={<Eyes addToCart={addToCart} />} />
        <Route path="/face" element={<Face addToCart={addToCart} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={ <Cart cart={cart} removeFromCart={removeFromCart} /> } />
        <Route path="/checkout" element={ <Checkout  cart={cart}  setCart={setCart} /> } />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
