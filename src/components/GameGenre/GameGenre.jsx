import React from 'react';
import './GameGenre.css'

const GameGenre = ({game, className}) => {
  return (
        <div className="game-item__details-genres">
            {game.genres.map(genre=>{
                return <div className="game-item__details-genres__item" key={genre}>{genre}</div>
            })}
        </div>

  );
};

export default GameGenre;
