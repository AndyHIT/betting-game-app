import axios from 'axios';
import { END_POINT } from './../api';

const GET_EVENT_LIST = 'GET_EVENT_LIST';

export const getEndPointData = () => async (dispatch) => {
  return axios.get(END_POINT)
  .then(data => dispatch(setEventListData(data.data)))
};

export const setEventListData = (json) => ({
  type: GET_EVENT_LIST,
  eventListData: json
})