import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import "./Productpage.css";
import { useParams } from "react-router-dom";
import { getProduct,cart,addToCart } from "../../api/Data";
import CartContext from '../../Contextapi/CartContext'
import { data } from "../../api/Data";
import { collection,addDoc, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'




const Productpage = ({rating}) => {
  const {addToCart, removeFromCart } =  useContext(CartContext)
  const [items, setItems] = useState([]);

  const { slug } = useParams();
  const [productData, setProductData] = useState(data);

  useEffect(() => {
    setProductData(getProduct(slug));
  }, []);


  
//  let  rating = 1



// const handleProductClick = async (product) => {
//   try {
//     addToCart(product)
//     const productsCollectionRef = collection(db, "products");

//     // Add the product data to Firestore
//     const newProductDocRef = await addDoc(productsCollectionRef, product);
   

//     console.log("Product added with ID: ", newProductDocRef.id);
//   } catch (error) {
//     console.error("Error adding product: ", error);
//   }
// };

// function addProduct (id) {
//   addToCart(id)
//   const prodRefCollection = collection(db, "products")
//   addDoc(prodRefCollection,{productData})
//   .then(response=>{
//     console.log(response)
//   }).catch(error=>{
//     console.log(error)
//   })
//   }

// const handleRemoveFromCart = async (product) => {
//   try {
//     removeFromCart(product)
//     await removeFromCart(productData.id);

//     const productDocRef = doc(db, "products", productData.id);

//     // Remove the product document from Firestore
//     await deleteDoc(productDocRef);

//     console.log("Product removed from cart and Firestore");
//   } catch (error) {
//     console.error("Error removing product: ", error);
//   }
// };
const HandleAddToCart = async (productData) => {
  try {
    // Add the product to the cart state
    addToCart(productData);

    // Add the product to Firestore
    const productsCollectionRef = collection(db, 'products');
    await addDoc(productsCollectionRef, productData);
  } catch (error) {
    console.error('Error adding product: ', error);
  }
};
  return (
    <>
      <Header />
      <Banner />
      <div className="productpage">
          <div className="productpage_img">
            <img src={productData?.image} />
          </div>

        <div className="productpage_description">
          <h1 style={{fontWeight:"500"}}>{productData?.title}</h1>

          <div className="productpage_rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>5.0 ⭐ 461 ratings</p>
              ))}
          </div>

              <div className="productpage_price" style={{display:"flex", justifyContent:"space-between", marginTop:"25px"}}>
                <div>
                <p style={{color:"#909090"}}>Priceoye Price</p>
                <p style={{fontSize:"33px", fontWeight:"100px"}}>Rs. {productData?.price}</p>
                <p style={{fontSize: "16px"}} className="card-discount"><s> {productData?.discount} </s>  8% Off</p>
                 </div>
              <div >
                <p>Availability</p>
                <h5> In Stock</h5>
                
              </div>
            
            </div>

              <h4>Colors</h4>
              <div className="productpage_color">
                <img src={productData?.image} />
                <img src={productData?.image} />
                <img src={productData?.image} />
              </div>
               
              <button className="productpage_btn" onClick={() => HandleAddToCart(productData)}>Add to Cart</button>
          
           {/* Button to remove from cart */}
     
        </div>
      </div>


      <div className="productpage__banner">
          
          <div className='productpage__banner__logos'> 
            <img  class="productpage__banner__img" src="https://static.priceoye.pk/icons/feature-warranty.svg" />
            <p>No warranty</p>
            <p style={{color:"#909090"}}>Brand Warranty</p>
          </div>
          
          
           <div className='productpage__banner__logos'>
            <img class="productpage__banner__img" src="https://static.priceoye.pk/icons/feature-original.svg" />
            <p>100% original</p>
            <p style={{color:"#909090"}}>Wireless Earbuds</p>
           </div>
          
          
           <div className='productpage__banner__logos'>
            <img class="productpage__banner__img" src="https://static.priceoye.pk/icons/feature-shipping.svg" /> 
            <p>48hr Delivery</p>
            <p style={{color:"#909090"}}>Islamabad & Rawalpindi</p>
           </div>
          
          
          <div className='productpage__banner__logos'> 
            <img class="productpage__banner__img" src="https://static.priceoye.pk/icons/feature-delivery.svg" />
            <p>Free Delivery</p>
            <p style={{color:"#909090"}}>All Over Pakistan</p>
          </div>
                  </div>


                  <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",backgroundColor:"white",marginTop:"18px",gap:"20px", height:"80px", paddingLeft:"50px"}}>
                    <p style={{cursor:"pointer"}}>Specifications</p>
                    <p style={{cursor:"pointer"}}>Similar Products</p>
                    <p style={{cursor:"pointer"}}> Connect Your Accessories</p>
                    <p style={{cursor:"pointer"}}>FAQs</p>
                  </div>
                 

                     

    </>
  );
};

export default Productpage;
