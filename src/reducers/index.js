import { combineReducers } from 'redux';

import { pizzaCreation } from './pizza';
import { cart } from './cart';


const seedData = (state, action) => {
  switch (action.type) {
    case SET_PIZZA_DATA:
      let newState1 = Object.assign({}, state);
      newState1.pizzaData = action.data;
      return newState1;
    default:
      return state;
  }
};


export default combineReducers({
  seedData,
  pizzaCreation,
  cart
});
