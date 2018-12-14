import { createStore } from 'redux';

const SET_PIZZA_DATA = 'SET_PIZZA_DATA';
const SET_PIZZA_SIZE = 'SET_PIZZA_SIZE';
const SET_DEFAULT_TOPPINGS = 'SET_DEFAULT_TOPPINGS';
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

export const setDefaultToppings = (toppings) => {
  return {
    type: SET_DEFAULT_TOPPINGS,
    toppings
  };
};

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
    case SET_DEFAULT_TOPPINGS:
      newState.pizza.toppings = action.toppings;
      return newState;
    case ADD_PIZZA_TOPPING:
      const toppingData1 = state.pizza.size.toppings.filter(toppingObj => toppingObj.topping.name === action.topping)[0];
      newState.pizza.toppings.push(toppingData1);
      return newState;
    case REMOVE_PIZZA_TOPPING:
      const toppingData2 = state.pizza.size.toppings.filter(toppingObj => toppingObj.topping.name === action.topping)[0];
      let newToppings = newState.pizza.toppings.filter(topping => JSON.stringify(topping) !== JSON.stringify(toppingData2));
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
