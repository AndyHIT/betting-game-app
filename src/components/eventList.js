import { Fragment, useEffect } from 'react';
import { css } from '@emotion/css';

import BetItem from './betItem';

const EventList = (props) => {
  const { eventList, getEventListData, addBetToCart, removeBetToCart, cartList } = props;

  useEffect(() => {
    (async () => getEventListData())()
  },[])

  const renderEventList = (
    <div
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {eventList.map(item => {
        if (item.markets.length) {
          return (
            <div 
              key={item.id}
              className={css`
                border: 2px solid silver;
                border-bottom: none;
                margin: 5px;
              `}
            >
              <div 
                key={item.name}
                className={css`
                  text-align: center;
                  font-size: 16px;
                  padding: 10px;
                  border-bottom: 1px solid #000;
                `}
              >{item.name}</div>      {/* Team A vs Opponent Team B */}
              {item.markets.map(game => 
                <div 
                  key={`${item.name}-${game.id}`}
                  className={css`
                    text-align: center;
                    border-bottom: 2px solid silver;
                  `}
                >
                  <div 
                    key={game.name}
                    className={css`
                      text-align: left;
                      padding: 10px 0 0 10px;
                      font-size: 14px;
                    `}
                  >
                    {game.name.split(' ').slice(1).join(' ').toUpperCase()}   {/* Game type, i.e. To Win, To Score First */}
                  </div>
                  <div 
                    key={`${game.name}-container`}
                    className={css`
                      display: flex;
                      justify-content: space-between;
                    `}
                  >
                    {/* Betting Options component here */}
                    {game.selections.map(selection => (
                      <Fragment key={selection.id}>
                        <BetItem 
                          selection={selection}
                          addBetToCart={addBetToCart}
                          removeBetToCart={removeBetToCart}
                          eventId={item.id}
                          gameId={game.id}
                          gameName={game.name}
                          cartList={cartList}
                          total={game.selections.length}
                        />
                      </Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        }
      })}
    </div>
  )

  return renderEventList;
}

export default EventList;