import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import './GameBuy.css'

const GameBuy = ({game, name}) => {
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.stopPropagation();
        if(isItemInCart){
            dispatch(deleteItemFromCart(game.id))
        } else{
          dispatch(setItemInCart(game))
        } 
    }
  return (
    <div className={name}>
        <div className="game-item__details-buy__price">{game.price} руб.</div>
        <button className={isItemInCart ? "btn-gray" : 'game-btn'}  onClick={handleClick}>{isItemInCart ? "Убрать из корзины" : "В корзину"}</button>
    </div>
  );
};

export default GameBuy;
