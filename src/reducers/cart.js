const initialState = {
  cart: []
}

const carts = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_BET':
      const newCartItem = {
        id: `${action.eventId}_${action.gameId}_${action.price}`,
        eventId: action.eventId,
        gameId: action.gameId,
        name: action.gameName,
        price: action.price,
        optionName: action.optionName,
      }
      return {
        ...state,
        cart: [...state.cart, newCartItem]
      }
    case 'REMOVE_BET':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== `${action.eventId}_${action.gameId}_${action.price}`)
      }
    default: 
      return state;
  }
}

export default carts;