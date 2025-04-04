import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContextObject } from "../../Context/AuthContext";
import { cartContextObject } from "../../Context/CartContext";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreatOrder() {
  const { token } = useContext(AuthContextObject);
  const { cartId  , setNumOfCartItems } = useContext(cartContextObject);
  const [isCash , setIsCash]=useState(true)
 const navigate = useNavigate()


 const formikObject = useFormik({
    initialValues:{ 
      details: "",
      phone: "",
      city: ""   
    },


    onSubmit:function(values){
      if(isCash){
        handleCashPayment(values)      
      }
      else{
        handleCreatCheckoutSession(values)
      }

    
    }
  })

  function CreatCashOrder(values) {
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {shippingAddress :values}, {
        headers: {
          token: token,
        },
      })
      .then((resp) => {
        console.log("CreatCashOrder resp", resp);
        toast.success("Congratulations !!Order Have been Submitted Successfully ...." , {position: "top-center"})
        setNumOfCartItems(0)
        setTimeout(() => {
          navigate("/home")
        }, 10000);
      })
      .catch((err) => {
        console.log("CreatCashOrder err", err);
        toast.error("Sorry !!Order Have a problem try again later ...." , {position: "top-center"})

      });
  }

  function CreatCheckoutSession(values) {
    axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
        {shippingAddress :values},
        {
          headers: {
            token: token,
          },
          params: {
            url: "http://localhost:5173",
          },
        }
      )
      .then((resp) => {
        window.open(resp.data.session.url , "_self");
      })
      .catch((err) => {
        console.log("CreatCheckoutSession err", err);
      });

    
  }
  
  function getUserOrders() {
    axios
      .get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/6407cf6f515bdcf347c09f17${cartId}`
      )
      .then((resp) => {
        console.log("CreatCashOrder resp", resp);
      })
      .catch((err) => {
        console.log("CreatCashOrder err", err);
      });
  }

  function handleCashPayment(values){
    CreatCashOrder(values)

  }
  function handleCreatCheckoutSession(values){
    CreatCheckoutSession(values)

  }



  return (
    <div className="container mx-auto min-h-96 flex flex-col justify-center py-5">
     <div> 
     <form className="max-w-sm mx-auto" onSubmit={formikObject.handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="details"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Address
          </label>
          <input
           value={formikObject.values.details}
           onChange={formikObject.handleChange}
            type="text"
            id="details"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Phone
          </label>
          <input
            value={formikObject.values.phone}
            onChange={formikObject.handleChange}
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           City
          </label>
          <input
            value={formikObject.values.city}
            onChange={formikObject.handleChange}
            type="text"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      <div className="md:flex flex-col gap-4">
     
        <div className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between content-center">
          <button type="submit" className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 w-full mx-auto">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent w-[100%]">
            Cash Payment
            </span>
          </button>
          </div>
          <div className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between content-center">
          <button onClick={()=>{setIsCash(false)}} type="submit" className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 w-full mx-auto">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent w-[100%]">
            Visa Payment
            </span>
          </button>
          </div>
     
      </div>
      </form>
     </div>
    </div>
  );
}
