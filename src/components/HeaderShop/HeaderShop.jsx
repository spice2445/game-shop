import React, { useCallback, useState } from 'react';
import { BiCartAlt } from "react-icons/bi"
import { useSelector } from 'react-redux';
import ShopMenu from '../ShopMenu/ShopMenu.jsx'
import './HeaderShop.css'
import { calcTotalPrice } from '../utils';
import ItemsInCart from '../ItemsInCart/ItemsInCart.jsx';
import { useNavigate } from 'react-router-dom';

const HeaderShop = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)
  const navigate = useNavigate();
  const handleClick = useCallback(() =>{
    setIsCartMenuVisible(false)
    navigate(`/shop`, { replace: true })
  }, [navigate])
  return (
      <div className="header-item__cart">
          <ItemsInCart quantity={items.length}/>
          <BiCartAlt size={25} className="header-item__cart-icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
          {totalPrice > 0 ? <span className="header-item__cart-price">{totalPrice} руб.</span> : null}
          {isCartMenuVisible && <ShopMenu items={items} onClick={handleClick}/>}
      </div>
  );
};

export default HeaderShop;
