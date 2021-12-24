import React from "react";

const ItemDetail = ({ product }) => {
  return (
    <>
      {product &&
        product.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} width="200px" />
            <span>{product.description}</span>
          </div>
        ))}
    </>
  );
};

export default ItemDetail;
