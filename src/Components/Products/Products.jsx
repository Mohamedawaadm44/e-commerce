import React from "react";
import Loader from "../Loader/Loader";
import DisplayAllProducts from "./../DisplayAllProducts/DisplayAllProducts";
import useProducts from "./useProducts";
import { Link } from "react-router-dom";

export default function Products() {
  const { products, loading } = useProducts();
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Link to={'/products'} className="text-center text-5xl font-bold  mt-5 bg-white p-5 flex content-center justify-center ">
        <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
        <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
        <i className="fa fa-star text-xl my-3 text-yellow-300"></i>{" "}
        <span className="mx-3">Products</span>
        <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
        <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
        <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
      </Link>
      <DisplayAllProducts products={products} />
    </>
  );
}
