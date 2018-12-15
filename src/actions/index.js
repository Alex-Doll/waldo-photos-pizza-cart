import * as types from '../constants/ActionTypes';


// Data Initialization
export const setPizzaData = (data) => ({
  type: types.SET_PIZZA_DATA,
  data
});


// Pizza Creation
export const setPizzaSize = (size) => ({
  type: types.SET_PIZZA_SIZE,
  size
});

export const setDefaultToppings = (toppings) => ({
  type: types.SET_DEFAULT_TOPPINGS,
  toppings
});

export const addPizzaTopping = (topping) => ({
  type: types.ADD_PIZZA_TOPPING,
  topping
});

export const removePizzaTopping = (topping) => ({
  type: types.REMOVE_PIZZA_TOPPING,
  topping
});


// Cart Management
export const addPizzaToCart = (pizza) => ({
  type: types.ADD_PIZZA_TO_CART,
  pizza
});

export const removePizzaFromCart = (pizza) => ({
  type: types.REMOVE_PIZZA_FROM_CART,
  pizza
});
