import React from 'react';
import './GameListItem.css'

const GameListItem = ({game}) => {
  return (
        <div className="col"  >
            <div className="game-item">
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
                        <button className="game-item__details-buy__btn">В корзину</button>
                    </div>
                </div>
            </div>
        </div>  
  );
};

export default GameListItem;
