// Data Initialization
export const setPizzaData = (data) => ({
  type: SET_PIZZA_DATA,
  data
});


// Pizza Creation
export const setPizzaSize = (size) => ({
  type: SET_PIZZA_SIZE,
  size
});

export const setDefaultToppings = (toppings) => ({
  type: SET_DEFAULT_TOPPINGS,
  toppings
});

export const addPizzaTopping = (topping) => ({
  type: ADD_PIZZA_TOPPING,
  topping
});

export const removePizzaTopping = (topping) => ({
  type: REMOVE_PIZZA_TOPPING,
  topping
});


// Cart Management
export const addPizzaToCart = (pizza) => ({
  type: ADD_PIZZA_TO_CART,
  pizza
});

export const removePizzaFromCart = (pizza) => ({
  type: REMOVE_PIZZA_FROM_CART,
  pizza
});
