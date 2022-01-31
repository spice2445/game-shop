import React from 'react';
import GameListItem from '../GameListItem/GameListItem';
import './GameList.css'

const GameList = (props) => {
  return (
    <div className='wrapper overflow-hidden '>
      <div className="container-sm game-list row g-4 row-cols-lg-3  gx-4">
        {props.games.map((game)=>{
          return <GameListItem game={game}/>
        })}
      </div>
    </div>
  );
};

export default GameList;
