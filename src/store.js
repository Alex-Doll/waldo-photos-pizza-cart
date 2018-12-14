import { createStore } from 'redux';

const SET_PIZZA_DATA = 'SET_PIZZA_DATA';
const SET_PIZZA_SIZE = 'SET_PIZZA_SIZE';
const ADD_PIZZA_TOPPING = 'ADD_PIZZA_TOPPING';
const REMOVE_PIZZA_TOPPING = 'REMOVE_PIZZA_TOPPING';
const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';

export const setPizzaData = (data) => {
  return {
    type: SET_PIZZA_DATA,
    data
  }
}

export const setPizzaSize = (size) => {
  return {
    type: SET_PIZZA_SIZE,
    size
  }
}

export const addPizzaTopping = (topping) => {
  return {
    type: ADD_PIZZA_TOPPING,
    topping
  }
}

export const removePizzaTopping = (topping) => {
  return {
    type: REMOVE_PIZZA_TOPPING,
    topping
  }
}

export const addPizzaToCart = (pizza) => {
  return {
    type: ADD_PIZZA_TO_CART,
    pizza
  }
}

const rootReducer = (state, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case SET_PIZZA_DATA:
      newState.pizzaData = action.data;
      return newState;
    case SET_PIZZA_SIZE:
      let sizeData = state.pizzaData.filter(sizeObj => sizeObj.name === action.size)[0];
      newState.pizza.size = sizeData;
      return newState;
    case ADD_PIZZA_TOPPING:
      newState = Object.assign({}, state);
      newState.pizza.toppings.push(action.topping);
      return newState;
    case REMOVE_PIZZA_TOPPING:
      let newToppings = newState.pizza.toppings.filter(topping => JSON.stringify(topping) !== JSON.stringify(action.topping));
      newState.pizza.toppings = newToppings;
      return newState;
    case ADD_PIZZA_TO_CART:
      return state;
    default:
      return state;
  }
};

const initialState = {
  cart: [],
  pizza: {
    size: {},
    toppings: []
  },
  pizzaData: []
};

export const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
