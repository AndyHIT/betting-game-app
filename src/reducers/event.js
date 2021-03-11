const initialState = {
  eventList: [],
}

const events = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_EVENT_LIST':
      return {
        ...state,
        eventList: action.eventListData
      }
    default:
      return state
  }
}

export default events;