import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContextObject } from './../../Context/CartContext';

export default function DisplayAllProducts({ products }) {
const {AddProductToCart}=useContext(cartContextObject)

  return (
    <div className="container mx-auto my-8 px-5">
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products?.map((product) => (
          <div
            key={product._id}
            className="group relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 "
          > 
            <Link to={`/productdetails/${product._id}`}>
              <div className=" overflow-hidden">
                <img
                  className="w-full h-80 rounded-t-lg  group-hover:scale-110 transition-all duration-700"
                  src={product.imageCover}
                  alt={product.title}
                />
              </div>

              {product.priceAfterDiscount ? (
                <span className=" bg-red-100 text-red-800  font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400 absolute top-0 left-0 text-l m-5">
                  OnSale
                </span>
              ) : (
                ""
              )}
              <div className="px-5 pb-5 ">
                <h5 className=" tracking-tight text-green-500 dark:text-white">
                  {product.category.name}
                </h5>

                <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </h5>

                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                      className={`w-4 h-4 ${
                        product.ratingsAverage > 0
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
                        product.ratingsAverage > 1
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
                        product.ratingsAverage > 2
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
                        product.ratingsAverage > 3
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
                        product.ratingsAverage > 4
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
                    {product.ratingsAverage}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  {product.priceAfterDiscount ? (
                    <>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {product.priceAfterDiscount} L.E
                      </span>
                      <span className="text-xl  text-red-500 line-through dark:text-white">
                        {product.price} L.E
                      </span>
                    </>
                  ) : (
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {product.price} L.E
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    AddProductToCart(product._id)
                  }}
                  type="button"
                  className="w-full mt-5 text-green-400 hover:text-white border border-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900 text-sm"
                >
                  Add to Cart <i className="fa fa-cart-plus fa-xl"></i>
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
