import React from 'react';
import './GameListItem.css'

const GameListItem = (props) => {
    const GAMES = [
        {
            image: './images/forza_5.jpeg',
            title: 'Forza Horizon 5',
            genres: ['Гонки', 'Симулятор', 'Открытый мир'],
            price: 2343,
            video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
            id: 1,
            description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
        },
        {
            image: './images/battlefield_2042.jpg',
            title: 'Battlefield 2042',
            genres: ['Экшен', 'Шутер', 'Война'],
            video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
            price: 2433,
            id: 2,
            description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
        },
        {
            image: './images/life_is_strange_true_colors.jpeg',
            title: 'Life is Strange True Colors',
            genres: ['Глубокий сюжет', 'Протагонистка'],
            video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
            price: 3021,
            id: 3,
            description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
        },
        {
            image: './images/gta_v.jpeg',
            title: 'Grand Theft Auto V',
            genres: ['Открытый мир', 'Экшен'],
            video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
            price: 789,
            id: 4,
            description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
        },
        {
            image: './images/rainbow_siege.jpeg',
            title: 'Tom Clancy\'s Rainbow Six® Siege',
            video: 'https://www.youtube.com/embed/6wlvYh0h63k',
            genres: ['Тактика', 'Шутер'],
            price: 982,
            id: 5,
            description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
        },
        {
            image: './images/assassins_creed_valhalla.png',
            title: 'Assassin’s Creed Valhalla',
            genres: ['Паркур', 'РПГ', 'Открытый мир'],
            video: 'https://www.youtube.com/embed/ssrNcwxALS4',
            price: 2863,
            id: 6,
            description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
        },
    ]
  return (
      GAMES.map(game=>{
          return (
              <div className="col" >
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
                            <button className="game-item__details-buy__btn">ggg</button>
                        </div>
                    </div>
                </div>
              </div>
            
          )

      })
      
  );
};

export default GameListItem;
