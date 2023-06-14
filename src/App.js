import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Productpage from "./pages/Productpage/Productpage";
import { useState } from "react";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import { CartProvider } from "./Contextapi/CartContext";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import BestProducts from "./pages/bestSelling/BestProducts";


function App() {
  
  return (
    <>
    <Router>
      <div className="App">
  
  
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Productpage/:slug" element={<Productpage />}></Route>
          <Route path="/BestProducts" element={<BestProducts />}></Route>

        </Routes>
      
      
      </div>
      
    </Router>
    
  </>
  );
}

export default App;
