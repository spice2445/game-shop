import React from 'react';
import './GameListItem.css'
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/game/reducer';
import { useNavigate } from 'react-router-dom';
import GameImage from '../GameImage/GameImage';
import GameGenre from '../GameGenre/GameGenre';
import GameBuy from '../GameBuy/GameBuy';

const GameListItem = ({game}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const setGame = (e)=>{
    e.stopPropagation();
    dispatch(setCurrentGame(game))
    navigate(`/game/${game.title}`, { replace: true })
    }   
  return (
        <div className="col"  >
            <div className="game-item" onClick={setGame}>
                    <GameImage game={game}/>
                <div className="game-item__details">
                    <div className="game-item__details-title">{game.title}</div>
                    <GameGenre game={game}/>
                    <GameBuy name="game-item__details-buy" game={game}/>
                </div>
            </div>
        </div>  
  );
};

export default GameListItem; 
