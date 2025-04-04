import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useCategories from "../Categories/useCategories";
import Loader from "../Loader/Loader";


function AutoPlay() {
     const { Categories , loading } = useCategories()
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          speed: 5000,
          autoplaySpeed: 5000,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2000,
          autoplaySpeed: 200,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 200,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  if(loading){
    <Loader /> 
  }
  return (
    <div className="slider-container h-40">
      <Slider {...settings}>
        {Categories?.map((category) => (
          <Link  to={`/specificItems/category/${category._id}`} key={category._id} className="h-40">
            
            <img
              src={category.image}
              alt={category.name}
              className="h-40 object-cover mx-auto w-full bg-white"
            />
            <h6 className="text-center">{category.name}</h6>
          </Link>
        ))}
       
      </Slider>
    </div>
  );
}

export default AutoPlay;
