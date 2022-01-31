import React from 'react';
import { BiCartAlt } from "react-icons/bi"
import { Link } from 'react-router-dom';
import './HeaderShop.css'

const HeaderShop = () => {
  return (
      <Link to="/shop" className="header-item__cart">
          <BiCartAlt size={25} className="header-item__cart-icon"/>
          <span className="header-item__cart-price">4500 руб.</span>
      </Link>
  );
};

export default HeaderShop;
