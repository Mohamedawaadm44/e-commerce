import React, { useEffect, useState } from "react";
import axios from "axios";


export default function useBrands() {

    const [Brands, setBrands] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(function () {
      setLoading(true);
  
      axios
        .get("https://ecommerce.routemisr.com/api/v1/brands")
        .then(function (response) {
          setBrands(response.data.data);
        })
        .catch(function (Error) {
          console.log("Error", Error);
        })
        .finally(function () {
          setLoading(false);
        });
    }, []);
  return { Brands , loading }
  
}
