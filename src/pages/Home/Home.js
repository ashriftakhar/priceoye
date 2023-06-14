import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner"
import HomepageSlider from "../../components/Slider/Slider";
import Earbuds from "../../components/Earbuds/Earbuds";
import Bestsellingproducts from "../../components/Bestsellingproduct/Bestsellingproducts";







function Home() {
  const [cartItems, setCartItems] = useState([]);
  
  // const onAdd = (product) =>{
  //   let exist = cartItems.find(x=> x.id == product.id);
  //   if(exist) {
  //     setCartItems(cartItems.map(x=> x.id == product.id ? {...exist, qty : exist.qty+1} : x))
  //   }else{
  //     set
  //   }
  // }
  return (
    <>
    <Header />
    <div className="Home">
      
      <Banner />
      <HomepageSlider />
      <Earbuds />
      <Bestsellingproducts 
      
       price =  " 51,900 "
       title =  "Samsung Galaxy A 13"
       discount = " 51,900 "
      />
      
    </div>
    </>
  
  );
}

export default Home;
