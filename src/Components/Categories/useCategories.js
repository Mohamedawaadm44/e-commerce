import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useCategories() {
    const [Categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(function () {
      setLoading(true);
  
      axios
        .get("https://ecommerce.routemisr.com/api/v1/categories")
        .then(function (response) {
          setCategories(response.data.data);
        })
        .catch(function (Error) {
          console.log("Error", Error);
        })
        .finally(function () {
          setLoading(false);
        });
    }, []);
  
  return { Categories , loading }
}
