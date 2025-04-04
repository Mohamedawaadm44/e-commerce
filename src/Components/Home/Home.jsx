import React from "react";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import AutoPlay from "../AutoPlaySlider/AutoPlaySlider";
import Brands from "../Brands/Brands";
import Products from "./../Products/Products";
import Categories from './../Categories/Categories';


export default function Home() {

return (
  <div>
    <CategoriesSlider />
    <AutoPlay />
    <Brands />
    <Categories /> 
    <Products />
  </div>
);

 
}
