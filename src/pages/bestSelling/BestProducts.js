import React,{useState,useEffect,useParams} from 'react'
import Header from '../../components/Header/Header'
import { getBestSeller } from '../../api/Data';
import { Bestseller } from '../../api/Data';

const BestProducts = () => {
    const [bestSellingData, setbestSellingDataData] = useState(Bestseller);
    const { slug } = useParams();
   
  
    useEffect(() => {
      setbestSellingDataData(getBestSeller(slug));
    }, []);


  return (
    <>
    <Header/>
    <div className="productpage">
          <div className="productpage_img">
            <img src={bestSellingData?.image} />
          </div>

        <div className="productpage_description">
          <h1 style={{fontWeight:"500"}}>{bestSellingData?.title}</h1>


              <div className="productpage_price" style={{display:"flex", justifyContent:"space-between", marginTop:"25px"}}>
                <div>
                <p style={{color:"#909090"}}>Priceoye Price</p>
                <p style={{fontSize:"33px", fontWeight:"100px"}}>Rs. {bestSellingData?.price}</p>
                <p style={{fontSize: "16px"}} className="card-discount"><s> {bestSellingData?.adiscount} </s>  8% Off</p>
                 </div>
              <div >
                <p>Availability</p>
                <h5> In Stock</h5>
                
              </div>
            
            </div>

              <h4>Colors</h4>
              <div className="productpage_color">
                <img src={bestSellingData?.image} />
                <img src={bestSellingData?.image} />
                <img src={bestSellingData?.image} />
              </div>
               
              {/* <button className="productpage_btn" onClick={() => HandleAddToCart(bestSellingData)}>Add to Cart</button> */}
          
           {/* Button to remove from cart */}
     
        </div>
      </div>
     </>
  )
}

export default BestProducts