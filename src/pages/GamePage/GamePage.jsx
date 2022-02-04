import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import {GAMES} from "../HomePage/HomePage";
import {setCurrentGame} from "../../redux/game/reducer";

const GamePage = (props) => {
  const game = useSelector(state => state.game.currentGame)
  const dispatch = useDispatch();
  const { title } = useParams();

  useEffect(() => {
    const currentGame = GAMES.find(game => game.title === title);
    dispatch(setCurrentGame(currentGame));
  }, [])

  if(!game) {
    return <span>Загрузка...</span>

  }

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
