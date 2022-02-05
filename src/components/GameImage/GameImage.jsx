import React from 'react';
import './GameImage.css'

const GameImage = ({game}) => {
  return (
    <img src={game.image} alt={game.title} className="game-item__cover" />
  );
};

export default GameImage;
