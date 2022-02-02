import React from 'react';
import { calcTotalPrice } from '../utils';
import "./ShopMenu.css"

const ShopMenu = ({items, onClick}) => {
  return (
      <div className="cart-menu">
          <div className="cart-menu__games-list">
            {items.length > 0 ? items.map(game => game.title) : "Корзина пуста" }
          </div>
          {items.length > 0 ? (
            <div className="cart-menu__arrange">
                <div className="cart-menu__total-price">
                    <span>Итого: </span>
                    <span>{calcTotalPrice(items)} руб.</span>
                </div>
                <button style={{fontSize: 20+ "px"}} onClick={onClick} className="game-btn">Оформить заказ</button>
            </div>   
          ): null}
      </div>
  );
};

export default ShopMenu;
