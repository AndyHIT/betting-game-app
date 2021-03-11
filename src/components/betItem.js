import { useState, useEffect } from 'react';
import { css, cx } from '@emotion/css';

const BetItem = (props) => {
  const { selection, addBetToCart, removeBetToCart, eventId, gameId, gameName, total, cartList } = props;
  
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    const selectedStatus = cartList.map(item => item.optionName).includes(selection.name);
    setSelected(selectedStatus);
  }, [cartList, selection]);

  const color = isSelected ? '#fff' : '#000';
  
  const makeSelectionChange = (eventId, gameId, gameName, price, optionName) => {
    if (!isSelected) {
      addBetToCart(eventId, gameId, gameName, price, optionName);
    } else {
      removeBetToCart(eventId, gameId, price);
    }
  }

  const renderBetItem = (
    <>
      <div 
        key={selection.id} 
        className={cx(css`
          width: calc(100%/${parseInt(total)} - 20px);
          max-width: 120px;
          margin: 10px;
          padding: 12px;
          border: 1px solid silver;
          border-radius: 4px;
          font-size: 12px;
          color: #000;
          &:hover {
            color: ${color};
            cursor: pointer;
          }
        `, {[css`
          background-color: green;
          color: #fff;
        `]: isSelected})}
        onClick={() => makeSelectionChange(eventId, gameId, gameName, selection.price, selection.name)}
      >
        {selection.name}         {/* Betting Options, i.e. Ronaldo, Messi, or Bale */}
        <br />
        {selection.price}        {/* Betting Option Price, i.e. 1.23, 2.50 */}
      </div>
    </>
  )

  return renderBetItem;
}

export default BetItem;