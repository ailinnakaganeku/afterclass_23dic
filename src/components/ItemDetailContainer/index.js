import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const apiUrl = "https://mocki.io/v1/5fa9aaef-5703-4da8-9163-8d97a504715f";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function filteredData() {
    const filteredProducts = product.filter((product) =>
      product.id.includes(id)
    );
    return filteredProducts;
  }

  const result = filteredData(product);
  console.log(result);

  return loading ? <span>LOADING...</span> : <ItemDetail product={result} />;
};

export default ItemDetailContainer;
