import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContextObject } from "./AuthContext";
import toast from "react-hot-toast";

export const cartContextObject = createContext();

export default function CartContextProvider({ children }) {
  const { token } = useContext(AuthContextObject);
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [cartProducts, setcartProducts] = useState(null);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(false);
  

  function AddProductToCart(id) {
    setLoading(true);

    axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          productId: id,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((res) => {
        setCartId(res.data.cartId)
        setNumOfCartItems(res.data.numOfCartItems);
        setTotalCartPrice(res.data.data.totalCartPrice);
        setcartProducts(res.data.data.products);
        toast.success(`${res.data.message}`, {
          duration: 3000,
          position: "top-center",
        });
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`, {
          duration: 3000,
          position: "top-center",
        });
      })
      .finally(function () {
        setLoading(false);
      });
  }

  function GetLoggedUserCart() {
    setLoading(true);

    axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setCartId(res.data.cartId)
        setNumOfCartItems(res.data.numOfCartItems);
        setTotalCartPrice(res.data.data.totalCartPrice);
        setcartProducts(res.data.data.products);
      })
      .catch((err) => console.log("error", err.response.data.message))
      .finally(function () {
        setLoading(false);
      });
  }

  function ClearUserCart() {
    setLoading(true);

    axios
      .delete("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setCartId(null)
        setNumOfCartItems(0);
        setTotalCartPrice(0);
        setcartProducts(null);
        toast.success(`Cart Cleared is ${res.data.message}`, {
          duration: 3000,
          position: "top-center",
        });
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`, {
          duration: 3000,
          position: "top-center",
        });
      })
      .finally(function () {
        setLoading(false);
      });
  }

  function RemoveSpecificCartItem(id) {
    setLoading(true);

    axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setNumOfCartItems(res.data.numOfCartItems);
        setTotalCartPrice(res.data.data.totalCartPrice);
        setcartProducts(res.data.data.products);
        toast.success(`Cart Item is Cleared  ${res.data.status}`, {
          duration: 3000,
          position: "top-center",
        });
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`, {
          duration: 3000,
          position: "top-center",
        });
      })
      .finally(function () {
        setLoading(false);
      });
  }

  function UpdateCartProductQuantity(id, newCounter) {
    setLoading(true);

    axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: newCounter,
      },
      {
        headers: {
          token: token,
        },
      }
    ) .then((res) => {
      setNumOfCartItems(res.data.numOfCartItems);
      setTotalCartPrice(res.data.data.totalCartPrice);
      setcartProducts(res.data.data.products);
      toast.success(`${res.data.status}`, {
        duration: 3000,
        position: "top-center",
      });
    })
    .catch((err) => {
      toast.error(`${err.response.data.message}`, {
        duration: 3000,
        position: "top-center",
      });
      
    })
    .finally(function () {
      setLoading(false);
    });
  }

  useEffect(() => {
    if (token) GetLoggedUserCart();
  }, [token]);

  return (
    <cartContextObject.Provider
      value={{
        AddProductToCart,
        ClearUserCart,
        RemoveSpecificCartItem,
        GetLoggedUserCart,
        UpdateCartProductQuantity,
        setNumOfCartItems,
        numOfCartItems,
        totalCartPrice,
        cartProducts,
        loading,
        cartId,
      }}
    >
      {children}
    </cartContextObject.Provider>
  );
}
