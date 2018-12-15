import {
  ADD_PIZZA_TO_CART,
  REMOVE_PIZZA_FROM_CART
} from '../constants/ActionTypes';


const initialState = [];

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      return [...state, action.pizza];
    case REMOVE_PIZZA_FROM_CART:
      const newCart = state.filter(pizza => JSON.stringify(pizza) !== JSON.stringify(action.pizza));
      return newCart;
    default:
      return state;
  }
}
