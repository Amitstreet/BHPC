import React from 'react'
import Slider from "react-slick";


function Stciker() {


        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 10000,
            initialSlide: 1,
        };
      

  return (
    <div>
      <Slider {...settings}>
        <div class="sticker_top">
          <h4>   Use  <b>First 10 </b>to get extra 10% OFF</h4>
        </div>
        <div class="sticker_top">
          <h4>   Use  <b>First 10 </b>to get extra 10% OFF</h4>
        </div><div class="sticker_top">
          <h4>   Use  <b>First 10 </b>to get extra 10% OFF</h4>
        </div>
       
     
      </Slider>
    </div>
  )
}

export default Stciker