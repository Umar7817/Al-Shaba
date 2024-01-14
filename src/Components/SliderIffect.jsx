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
          <div className='image1'>

          <img className='slider-image image1' src="https://media.islamicity.org/wp-content/uploads/2021/04/iStock-840887390.jpg" alt="" />
          </div>
          <div className='image2'>

          <img  className='slider-image image2' src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjY2ElMjBrYWFiYXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </div>
        
        <div className='image-div'>
          <div className='image1'>

          <img className='slider-image' src="https://cdn.britannica.com/86/77986-050-ADB6ED09/site-Prophets-Mosque-Medina-Saudi-Arabia-Mecca.jpg" alt="" />
          </div>

          <div className='image2'>
          <img className='slider-image image2' src="https://w0.peakpx.com/wallpaper/395/704/HD-wallpaper-madina-42-masjid-mosque.jpg" alt="" />
          </div>

        </div>
      </Slider>

    </div>
  )
}

export default SliderIffect