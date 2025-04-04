import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageone from "../../assets/images/slider-image-3.jpeg"
import imagetwo from "../../assets/images/slider-image-1.jpeg"
import imagethree from "../../assets/images/slider-image-2.jpeg"
import imagefour from "../../assets/images/slider-2.jpeg"
import imagefive from "../../assets/images/grocery-banner-2.jpeg"
import imagesideone from "../../assets/images/blog-img-1.jpeg";
import imagesidetwo from "../../assets/images/blog-img-2.jpeg";

function CategoriesSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (


    <div className="flex flex-col md:flex-row-reverse">
    <div className="md:w-1/4">
      <div className="md:h-36">
        <img src={imagesideone} className="h-full  w-full" alt="" />
      </div>
      <div className="md:h-36">
        <img src={imagesidetwo} className="h-full  w-full" alt="" />
      </div>
    </div>
    <div className="md:w-3/4 ">
    
      <div className="slider-container">
      <Slider {...settings} autoplay>
        <div className="h-72">
          <img src={imageone} className="h-full  w-full"  alt="" />
        </div>
        <div className="h-72">
          <img src={imagetwo} className="h-full  w-full"  alt="" />
        </div>
        <div className="h-72">
          <img src={imagethree} className="h-full  w-full"  alt="" />
        </div>      
        <div className="h-72">
          <img src={imagefour} className="h-full  w-full"  alt="" />
        </div>      
        <div className="h-72">
          <img src={imagefive} className="h-full  w-full"  alt="" />
        </div>      
       
      </Slider>
    </div>
    </div>
  </div>
   
  );
}

export default CategoriesSlider;

