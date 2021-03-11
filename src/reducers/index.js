import { combineReducers } from 'redux';
import events from './event';
import carts from './cart';

const appReducers = combineReducers({
  events,
  carts
})

export default appReducers;