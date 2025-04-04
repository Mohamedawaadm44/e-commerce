import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Link, useParams } from "react-router-dom";
import { cartContextObject } from "./../../Context/CartContext";

export default function ProductDetails() {
  const [ProductDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { AddProductToCart } = useContext(cartContextObject);

  useEffect(function () {
    setLoading(true);
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(function (response) {
        setProductDetails(response.data.data);
      })
      .catch(function (Error) {
        console.log("Error", Error.message);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto  my-6 flex justify-evenly flex-col md:flex-row">
        {console.log(ProductDetails?.images.length)}
        <div className="grid gap-4 md:w-1/4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ProductDetails?.imageCover}
            />
          </div>
          {/* ${ProductDetails?.images.length} */}
        
          <div
              className={`grid  grid-cols-3 gap-4`}
            >
              {ProductDetails?.images.map((image, id) => (
                <div key={id}>
                  <img className="h-auto max-w-full" src={image} />
                </div>
              ))}
            </div>
        </div>
        <div className="flex flex-col justify-center md:w-1/2">
          {ProductDetails?.priceAfterDiscount ? (
            <span className="my-3 text-center bg-red-100 text-red-800  font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400 text-l ">
              OnSale
            </span>
          ) : (
            ""
          )}

          <h2 className="text-xl text-green-400">
            <span className=" font-bold ">Product Name: </span>{" "}
            {ProductDetails?.title}
          </h2>
          <div className="flex items-center justify-between">
            {ProductDetails?.priceAfterDiscount ? (
              <>
                <span className="text-xl  text-green-600 dark:text-white">
                  <span className=" font-bold ">Price: </span>
                  {ProductDetails?.priceAfterDiscount} L.E
                </span>
                <span className="text-xl font-bold text-red-500 dark:text-white">
                  Price Before Discount:
                  <span className="text-xl font-normal text-red-500 line-through dark:text-white">
                    {ProductDetails?.price} L.E
                  </span>
                </span>
              </>
            ) : (
              <span className="text-xl  text-green-600 dark:text-white">
                <span className=" font-bold ">Price: </span>
                {ProductDetails?.price} L.E
              </span>
            )}
          </div>

          <h2 className="text-xl text-green-600">
            <span className=" font-bold ">Brand: </span>
            {ProductDetails?.brand.name}{" "}
          </h2>
          <h2 className="text-xl text-green-600">
            <span className=" font-bold ">Category: </span>
            {ProductDetails?.category.name}
          </h2>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className={`w-4 h-4 ${
                  ProductDetails?.ratingsAverage > 0
                    ? " text-yellow-300"
                    : "text-gray-200"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${
                  ProductDetails?.ratingsAverage > 1
                    ? " text-yellow-300"
                    : "text-gray-200"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${
                  ProductDetails?.ratingsAverage > 2
                    ? " text-yellow-300"
                    : "text-gray-200"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${
                  ProductDetails?.ratingsAverage > 3
                    ? " text-yellow-300"
                    : "text-gray-200"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${
                  ProductDetails?.ratingsAverage > 4
                    ? " text-yellow-300"
                    : "text-gray-200"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
              {ProductDetails?.ratingsAverage}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              AddProductToCart(id);
            }}
            type="button"
            className="w-full mt-5 text-green-400 hover:text-white border border-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900 text-sm"
          >
            Add to Cart <i className="fa fa-cart-plus fa-xl"></i>
          </button>
        </div>
      </div>
    </>
  );
}
