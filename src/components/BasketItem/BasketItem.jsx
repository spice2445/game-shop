import React from 'react';
import { useDispatch } from 'react-redux';
import GameImage from '../GameImage/GameImage';
import './BasketItem.css'
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer';

const BasketItem = ({game}) => {
  const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch(deleteItemFromCart(game.id))
  }
  return (
    <div className="basket-item">
        <div className="basket-item__cover">
            <GameImage game={game}/>
        </div>
        <div className="basket-item__title">
            <span>{game.title}</span>
        </div>
        <div className="basket-item__price">
            <span>{game.price} руб.</span>
            <AiOutlineCloseCircle
                size='25'
                className="basket-item__delete"
                onClick={handleClick}/>
        </div>
    </div>
  );
};

export default BasketItem;
