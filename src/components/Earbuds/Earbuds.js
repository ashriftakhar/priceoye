import React, { useState } from "react";
import "./Earbuds.css";
import Card from "../Card/Card";
import { data } from "../../api/Data";
import { Link, useNavigate } from "react-router-dom";
import { collection,addDoc } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'

const Earbuds = () => {
  const [product, setProduct] = useState(data);
  const Navigate = useNavigate();

  // const handleProductClick = async (product) => {
  //   try {
  //     const productsCollectionRef = collection(db, "products");
  
  //     // Add the product data to Firestore
  //     const newProductDocRef = await addDoc(productsCollectionRef, product);
  
  //     console.log("Product added with ID: ", newProductDocRef.id);
  //   } catch (error) {
  //     console.error("Error adding product: ", error);
  //   }
  // };
  

  return (
    <>
      <div className="earbuds">
        <div className="earbuds_title">
          <h1 className="earbuds_heading">Latest Wireless Earbuds</h1>
          
            <button className="earbuds_btn" onClick={()=>Navigate('/products')}> View All </button>
          
        </div>
        <div className="earbuds_cards">
          {product.map((prop) => (
            <Card  {...prop} />
          
          ))}
        </div>
      </div>
    </>
  );
};

export default Earbuds;

// function card(val){
//     return(
//        <Card
//        image = {val.image}
//        price= {val.price}
//        title = {val.title}
//        discount= {val.discount}
//       />
//     );
// };
