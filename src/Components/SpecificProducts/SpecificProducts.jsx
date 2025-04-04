import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import DisplayAllProducts from "../DisplayAllProducts/DisplayAllProducts";
import { useParams } from "react-router-dom";
import NoProducts from './../NoProducts/NoProducts';

export default function SpecificProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id, specification } = useParams();
  let params;

  if (specification === "brand") {
    params = { brand: id };
  }

  if (specification === "category") {
    params = { category: id };
  }

  useEffect(function () {
    setLoading(true);
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products", {
        params: params,
      })
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

  if (loading) {
    return <Loader />;
  }

  if (products?.length) {
    return <DisplayAllProducts products={products} />;
  } else {
    return <NoProducts />;
  }
}
