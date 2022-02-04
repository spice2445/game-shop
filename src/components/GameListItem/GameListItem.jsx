import React from 'react';
import './GameListItem.css'
import { useDispatch } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { setCurrentGame } from '../../redux/game/reducer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GameListItem = ({game}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === game.id)
  const handleClick = (e) => {
      e.stopPropagation();
      if(isItemInCart){
          dispatch(deleteItemFromCart(game.id))
      } else{
        dispatch(setItemInCart(game))
      } 
  }
  const setGame = (e)=>{
    e.stopPropagation();
    dispatch(setCurrentGame(game))
    navigate(`/game/${game.title}`, { replace: true })
    }   
  return (
        <div className="col"  >
            <div className="game-item" onClick={setGame}>
                <img src={game.image} alt={game.title} className="game-item__cover" />
                <div className="game-item__details">
                    <div className="game-item__details-title">{game.title}</div>
                    <div className="game-item__details-genres">
                        {game.genres.map(genre=>{
                            return <div className="game-item__details-genres__item">{genre}</div>
                        })}
                    </div>
                    <div className="game-item__details-buy">
                        <div className="game-item__details-buy__price">{game.price} руб.</div>
                        <button className={isItemInCart ? "btn-gray" : 'game-btn'}  onClick={handleClick}>{isItemInCart ? "Убрать из корзины" : "В корзину"}</button>
                    </div>
                </div>
            </div>
        </div>  
  );
};

export default GameListItem; 
