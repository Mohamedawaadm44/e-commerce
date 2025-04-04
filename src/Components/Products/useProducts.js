import React, { useEffect, useState } from "react";
import axios from "axios";


export default function useProducts() {
 
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(function () {
      setLoading(true);
  
      axios
        .get("https://ecommerce.routemisr.com/api/v1/products")
        .then(function (response) {
          setProducts(response.data.data);
        })
        .catch(function (Error) {
          console.log("Error", Error);
        })
        .finally(function () {
          setLoading(false);
        });
    }, []);
  
  return { products , loading }
  
}
