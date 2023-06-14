import React, { useState } from 'react'
import './Bestsellingproducts.css';
import Card from '../Card/Card';
import { Bestseller } from '../../api/Data';
// import { Bestseller } from '../Data';
// import Card from './Card';

const Bestsellingproducts = ({image,price,title,discount}) => {
  const [bestSelling, setBestSelling] = useState(Bestseller)
  return (
    <div className='bestselling'>

      <div className='bestselling_heading'>
         <h1> Bestseller</h1>
         <p>Get the best prices in town</p>
      </div>

         <div className="bestselling_cards">

              <div className='bestselling_firstcard'>
                  <h2 className="bestselling_cards_title">{title}</h2>
                  <img src="./images/a13.webp" alt={title} className="bestselling_cards_image" />
                  <p className="bestselling_cards_price"> Rs {price}</p>
                  <p className="bestselling_cards_discount"><s> {discount} </s>  8% Off</p>
              </div>
          
              <div className='bestselling_lastcards'>
                {bestSelling.map((item) => {
                        return <Card key={item.id}  {...item}/>
                      })}
              </div>
                

          </div>

    </div>
  )
}

export default Bestsellingproducts