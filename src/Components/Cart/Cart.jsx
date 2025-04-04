import React, { useContext, useEffect, useState } from "react";
import { cartContextObject } from "../../Context/CartContext";
import { AuthContextObject } from "../../Context/AuthContext";
import Loader from "./../Loader/Loader";
import { Link } from "react-router-dom";
import EmptyCart from "../EmptyCart/EmptyCart";

export default function Cart() {
  const { token } = useContext(AuthContextObject);
  const {
    ClearUserCart,
    RemoveSpecificCartItem,
    UpdateCartProductQuantity,
    cartProducts,
    totalCartPrice,
    GetLoggedUserCart,
    loading,
  } = useContext(cartContextObject);

  useEffect(() => {
    GetLoggedUserCart();
  }, [token]);

  if (loading) {
    return <Loader />;
  }

  if (cartProducts?.length) {
    return (
      <div className="container mx-auto px-10 my-5">
        <h3 className="text-center text-5xl font-bold  mt-5 bg-white p-5 flex content-center justify-center ">
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>{" "}
          <span className="mx-3">Cart</span>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
          <i className="fa fa-star text-xl my-3 text-yellow-300"></i>
        </h3>
        <div className="md:flex md:justify-between md:content-center my-4 px-6">
          <h1 className=" text-3xl font-bold my-3 text-gray-500 ">
            Cart Items :
          </h1>
          <button
            onClick={ClearUserCart}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete All Items <i className="fa-solid fa-trash"></i>
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-l text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartProducts?.map((product) => (
                <tr
                  key={product.product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <img
                      src={product.product.imageCover}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt={product.product.title}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl">
                    {product.product.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                        onClick={() =>
                          UpdateCartProductQuantity(
                            product.product.id,
                            product.count - 1
                          )
                        }
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          className="text-center bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={1}
                          value={product.count}
                          onChange={() => (value = product.count)}
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                        onClick={() =>
                          UpdateCartProductQuantity(
                            product.product.id,
                            product.count + 1
                          )
                        }
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 ">
                    <button
                      onClick={() => {
                        RemoveSpecificCartItem(product.product.id);
                      }}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      <i className="fa-solid fa-trash me-2"></i>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between content-center py-4">
            <p className="text-xl font-bold my-3 text-gray-500 mx-auto">
              Total Cart Price
            </p>
            <p className="text-xl font-bold my-3 text-gray-500 mx-auto">
              {totalCartPrice} $
            </p>
          </div>
          <div className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between content-center p-4 ">
          <Link to={"/creatOrder"} className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 w-[50%] mx-auto">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent w-[100%]">
             Buy Now ...
            </span>
          </Link>
          </div>
         
        </div>
      </div>
    );
  } else {
    return <EmptyCart />;
  }
}
