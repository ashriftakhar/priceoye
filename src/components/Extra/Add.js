import React, { useState } from 'react'
import { collection,addDoc } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'
import { data } from '../../api/Data'
import Card from '../Card/Card'


const Add = () => {
    const [pros, setPros] = useState(data)

    const handleProductClick = async (product) => {
        try {
          const productsCollectionRef = collection(db, "products");
      
          // Add the product data to Firestore
          const newProductDocRef = await addDoc(productsCollectionRef, product);
      
          console.log("Product added with ID: ", newProductDocRef.id);
        } catch (error) {
          console.error("Error adding product: ", error);
        }
      };

      
      
  return (
    <div>
    {pros.map((product) => (
      <div key={product.id}>
        <Card {...product}/>
        <button onClick={() => handleProductClick(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
  )
}

export default Add