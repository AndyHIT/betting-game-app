import { combineReducers } from 'redux';

const initialState = {
  eventList: [],
}

const events = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_EVENT_LIST':
      return {
        ...state,
        eventList: action.eventListData
      }
    default:
      return state
  }
}

const markets = (state=initialState, action) => {
  switch (action.type) {
    // case 'GET_EVENT_LIST':
    //   return {
    //     ...state,
    //     eventList: action.eventListData
    //   }
    default:
      return state
  }
}

const appReducers = combineReducers({
  events,
  markets,
})

export default appReducers;