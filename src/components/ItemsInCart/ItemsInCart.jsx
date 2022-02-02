import React from 'react';
import './ItemsInCart.css'

const ItemsInCart = ({quantity}) => {
  return quantity > 0 ? (
    <div className="itemsInCart">{quantity}</div>
  ) : null
};

export default ItemsInCart;
