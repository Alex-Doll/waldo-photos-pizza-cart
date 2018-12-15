import { combineReducers } from 'redux';

import { pizza } from './pizza';
import { cart } from './cart';
import { SET_PIZZA_DATA } from '../constants/ActionTypes';


const initialState = [];

const pizzaData = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZA_DATA:
      return action.data;
    default:
      return state;
  }
};


export default combineReducers({
  pizzaData,
  pizza,
  cart
});
