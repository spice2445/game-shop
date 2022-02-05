import React, {useEffect} from 'react';
import GameGenre from '../../components/GameGenre/GameGenre';
import GameImage from '../../components/GameImage/GameImage';
import './GamePage.css'
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import {GAMES} from "../HomePage/HomePage";
import {setCurrentGame} from "../../redux/game/reducer";
import GameBuy from '../../components/GameBuy/GameBuy';


const GamePage = (props) => {
  const game = useSelector(state => state.game.currentGame)
  const dispatch = useDispatch();
  const { title } = useParams();

  useEffect(() => {
    const currentGame = GAMES.find(game => game.title === title);
    dispatch(setCurrentGame(currentGame));
  })

  if(!game) {
    return <span>Загрузка...</span>

  }

  return (
    <div className='info wrapper container'>
    <h1 className="info-title">{game.title}</h1>
    <div className="info-content">
      <div className="info-content__left">
        <iframe
          width='90%'
          height='400px'
          src={game.video}
          title='Youtube Video Player'
        ></iframe>
      </div>
      <div className="info-content__right">
        <GameImage game={game}/>
        <p>{game.description}</p>
        <div className="secondary-text">Популярные метки этого продукта</div>
        <GameGenre game={game}/>
        <GameBuy className="game-item__details-genres__item" game={game}/>
      </div>
    </div>
</div>
  );
};

export default GamePage;
