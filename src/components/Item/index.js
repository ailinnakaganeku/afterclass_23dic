import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
      <Link to={`/item/${product.id}`}>
        <h1>{product.name}</h1>
        <span>{product.description}</span>
      </Link>
    </>
  );
};

export default Item;
