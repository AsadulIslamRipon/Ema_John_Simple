import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import "./Product.css";

const Product = ({product, handleAddToCart}) => {
  // const {product, handleAddToCart} =props;
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-seller">Manufacturer: {seller}</p>
        <p className="product-ratings">Ratings: {ratings}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
          <p>Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
