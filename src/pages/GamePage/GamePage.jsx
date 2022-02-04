import React from 'react';
import { useSelector } from 'react-redux';

const GamePage = () => {
  const game = useSelector(state => state.game.currentGame)
  return (
    <div className='info wrapper container'>
    <div className="info-h1">{game.title}</div>
    <div className="info-h1">{game.title}</div>
    <div className="info-h1">{game.title}</div>
    <div className="info-h1">{game.title}</div>
    <div className="info-h1">{game.title}</div>
    <div className="info-h1">{game.title}</div>
    <div className="info-h1">{game.title}</div>
</div>
  );
};

export default GamePage;
