import axios from 'axios';
import { END_POINT } from './../api';

const SET_EVENT_LIST = 'SET_EVENT_LIST';

export const getEndPointData = () => async (dispatch) => {
  return axios.get(END_POINT)
  .then(data => dispatch(setEventListData(data.data)))
};

export const setEventListData = (json) => ({
  type: SET_EVENT_LIST,
  eventListData: json
})

const ADD_BET = 'ADD_BET';
const REMOVE_BET = 'REMOVE_BET';

export const addBetToCart = (eventId, gameId, gameName, price, optionName) => ({
  type: ADD_BET,
  eventId,
  gameId,
  gameName,
  price,
  optionName,
})

export const removeBetToCart = (eventId, gameId, price) => ({
  type: REMOVE_BET,
  eventId, 
  gameId, 
  price
})

const GET_BET_LIST = 'GET_BET_LIST';

export const getCart = () => ({
  type: GET_BET_LIST
})