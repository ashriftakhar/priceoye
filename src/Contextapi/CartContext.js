import {createContext, useState, useEffect} from "react"
import { collection, addDoc, deleteDoc, doc} from "firebase/firestore";
import { db } from "../Firebase/Firebase";





const CartContext = createContext();


export function CartProvider({children}) {

const [items, setItems] = useState([]);

const addToCart = (productData) =>{

    setItems([...items, productData])
}


const removeFromCart = async (productId) => {
    const updatedItems = items.filter((item) => item.id !== productId);
    setItems(updatedItems);
    // Additional logic to remove the product from Firestore or any other data source
  
  };
  
    return(
         <CartContext.Provider  value= {{items,addToCart,removeFromCart}}>
             {children}
         </CartContext.Provider>
    )
}

export default CartContext




// import  React, {  useContext, useReducer } from "react";



// export const CartContext = createContext();


// export const CartProvider = ({reducer, initialState, children}) => {
    
//     return (
//          <CartContext.Provider value = {useReducer(reducer,initialState)}>
//             {children}
//          </CartContext.Provider>
//     )
// }

// export const useStateValue = () => useContext(CartContext);









  

 



// import  React, { createContext, useContext, useReducer } from "react";



// export const StateContext = createContext();


// export const StateProvider = ({reducer, initialState, children}) => {
    
//     return (
//          <StateContext.Provider value = {useReducer(reducer,initialState)}>
//             {children}
//          </StateContext.Provider>
//     )
// }

// export const useStateValue = () => useContext(StateContext);









  

 