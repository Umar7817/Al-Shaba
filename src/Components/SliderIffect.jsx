import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Global.css'


function SliderIffect() {
  var settings = {
    infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear"
  };
  return (
    <div className='Slider-min-div'>
      <Slider {...settings}>
        <div className='image-div'>
          <img className='slider-image' src="https://media.islamicity.org/wp-content/uploads/2021/04/iStock-840887390.jpg" alt="" />
        </div>
        
        <div className='image-div'>
          <img className='slider-image' src="https://cdn.britannica.com/86/77986-050-ADB6ED09/site-Prophets-Mosque-Medina-Saudi-Arabia-Mecca.jpg" alt="" />
        </div>
      </Slider>

    </div>
  )
}

export default SliderIffect