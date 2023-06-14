import React, { useEffect, useState } from 'react';
import './Card.css';
import { Link,useNavigate } from 'react-router-dom';
import CartContext from '../../Contextapi/CartContext';
import { useContext } from 'react';
import 'firebase/firestore';
import { dataref } from '../../Firebase/Firebase';
import { db } from '../../Firebase/Firebase';
import {  collection, addDoc} from "firebase/firestore";





const Card = ({ image, title, price,discount,id}) => {
  const [products, setProducts] = useState([])
  const {addToCart} =  useContext(CartContext)
  const Navigate = useNavigate();

 


  return (

    <div className="card" 
    onClick={()=>Navigate(`/productpage/${id}`)}
    >
     
      <img src={image} alt={title} className="card-image" />
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <p className="card-price"> Rs {price}</p>
        <p className="card-discount"><s> {discount} </s>  8% Off</p>
     
        
      </div>
      <div>
  {/* Product rendering */}
  
</div>

      
    </div>

  );
};

export default Card;
