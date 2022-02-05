import React from 'react';
import { useSelector } from 'react-redux';
import BasketItem from '../../components/BasketItem/BasketItem';
import { calcTotalPrice } from '../../components/utils';
import './BasketPage.css'

const BasketPage = () => {
  const items = useSelector(state => state.cart.itemsInCart)
  if(items.length < 1 ) return <div className="basket container wrapper"><h1>Ваша корзина пуста</h1></div>
  const ItemsFins ={
    1: 'товар',
    2: 'товара',
    3: 'товара',
    4: 'товара',
    5: 'товаров',
    6: 'товаров'
  }
  return (
    <div className="basket container wrapper">
      <div className="basket-left">
        {items.map(game => <BasketItem key={game.id} game={game}/>)}
      </div>
      <div className="basket-right">
        <div className="basket-total__price">
          <span>{items.length} {ItemsFins[items.length]} на сумму {calcTotalPrice(items)} руб.</span>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
