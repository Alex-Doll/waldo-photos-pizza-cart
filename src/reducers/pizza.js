import {
  SET_PIZZA_SIZE,
  SET_DEFAULT_TOPPINGS,
  ADD_PIZZA_TOPPING,
  REMOVE_PIZZA_TOPPING
} from '../constants/ActionTypes';


const initialState = {
  size: {},
  toppings: []
}

export const pizza = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZA_SIZE:
      return {
        ...state,
        size: action.size
      };
    case SET_DEFAULT_TOPPINGS:
      return {
        ...state,
        toppings: action.toppings
      };
    case ADD_PIZZA_TOPPING:
      return {
        ...state,
        toppings: [...state.toppings, action.topping]
      };
    case REMOVE_PIZZA_TOPPING:
      const newToppings = state.toppings.filter(toppingObj => toppingObj.topping.name !== action.topping.topping.name);
      return {
        ...state,
        toppings: newToppings
      };
    default:
      return state;
  }
};
