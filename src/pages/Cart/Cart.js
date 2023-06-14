import React,{useEffect, useState} from 'react'
import CartContext from '../../Contextapi/CartContext'
import { useContext } from 'react'
import Card from '../../components/Card/Card'
import { Firestore } from 'firebase/firestore'
import { data } from "../../api/Data";
import { collection,addDoc, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'
import { getProduct,cart,addToCart } from "../../api/Data";
import { useParams } from "react-router-dom";
import Header from '../../components/Header/Header'

const Cart = () => {
    const {items, removeFromCart} = useContext(CartContext)
    const { slug } = useParams();
  const [productData, setProductData] = useState(data);


  useEffect(() => {
    setProductData(getProduct(slug));
  }, []);
  
    
    useEffect(()=>{
      console.log(items)
    },[])






    // const handleRemoveFromCart = async (productId) => {
    //   try {
    //     // Remove the product from the cart state
    //     const updatedCart = items.filter((item) => item.id !== productId);
    //     setItems(updatedCart);
    
    //     // Remove the product from Firestore
    //     const productDocRef = doc(db, "products", productId);
    //     await deleteDoc(productDocRef);
    //   } catch (error) {
    //     console.error("Error removing product: ", error);
    //   }
    // };
    
    // // Call the function to store data in Firestore
    // storeDataInFirestore();
    // 

  
// function removeProduct(id){
//   const docRef = collection(db, "products",id)
//   deleteDoc(docRef)
//   .then(() => console.log("document deleted"))
//   .catch(error=>console.log(error.message))
// }

// 
const handleRemoveFromCart = async (productId) => {
  await removeFromCart(productId);
};

  return (
   <>         
    <Header />
    <div className='shoppingbag'>
        

        {items.length === 0 ? (
        <h2>Cart is empty.</h2>
        
      ) : (
        <div style={{width :"90%",margin:"0 auto", marginTop:"20px", display:"flex",flexDirection:"column" ,flexWrap:"wrap", gap:"20px",}}>
          {items.map((product) => (
              <div key={product.id} >
                <Card key={product.id} {...product}/>
                <button className = "productpage_btn" style={{width:"229px"}} onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
              </div>
            ))}
          
        </div>
        )}


        
  
    </div>
    </>
  )
}


export default () => (

    <Cart />
  
);