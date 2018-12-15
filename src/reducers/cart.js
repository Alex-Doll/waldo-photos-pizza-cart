import {
  ADD_PIZZA_TO_CART,
  REMOVE_PIZZA_FROM_CART
} from '../constants/ActionTypes';


const initialState = [];

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      let newState6 = Object.assign({}, state);
      newState6.cart.push(action.pizza);
      return newState6;
    case REMOVE_PIZZA_FROM_CART:
      let newState7 = Object.assign({}, state);
      newState7.cart = state.cart.filter(pizza => JSON.stringify(pizza) !== JSON.stringify(action.pizza))
      return newState7;
    default:
      return state;
  }
}
