import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";

const apiUrl = "https://mocki.io/v1/5fa9aaef-5703-4da8-9163-8d97a504715f";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return loading ? (
    <span>LOADING...</span>
  ) : (
    <>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
