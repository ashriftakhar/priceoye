import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Slider.css"

const HomepageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Add the autoplay option
      autoplaySpeed: 3000,   
    };
  
    return (
      <div className='slider'>

      <Slider  {...settings}>
      
          <img className='slides' src="/images/priceoyeslider.jpg" alt="Slide 1" />
        
      
          <img className='slides' src="/images/priceoyesliderimg.jpg" alt="Slide 2" />

          <img className='slides' src="/images/priceoyesliderimg2.jpg" alt="Slide 3" />

          <img className='slides' src="/images/priceoyesliderimg3.png" alt="Slide 3" />


        
    
      </Slider>
      </div>
    );
  };
  

export default HomepageSlider


