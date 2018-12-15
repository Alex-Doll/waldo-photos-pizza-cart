import { createStore } from 'redux';

const SET_PIZZA_DATA = 'SET_PIZZA_DATA';
const SET_PIZZA_SIZE = 'SET_PIZZA_SIZE';
const SET_DEFAULT_TOPPINGS = 'SET_DEFAULT_TOPPINGS';
const ADD_PIZZA_TOPPING = 'ADD_PIZZA_TOPPING';
const REMOVE_PIZZA_TOPPING = 'REMOVE_PIZZA_TOPPING';
const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';
const REMOVE_PIZZA_FROM_CART = 'REMOVE_PIZZA_FROM_CART';

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
  console.log(pizza);
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

export const removePizzaFromCart = (pizza) => {
  return {
    type: REMOVE_PIZZA_FROM_CART,
    pizza
  }
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_PIZZA_DATA:
      let newState1 = Object.assign({}, state);
      newState1.pizzaData = action.data;
      return newState1;
    case SET_PIZZA_SIZE:
      let newState2 = Object.assign({}, state);
      let sizeData = state.pizzaData.filter(sizeObj => sizeObj.name === action.size)[0];
      newState2.pizza.size = sizeData;
      return newState2;
    case SET_DEFAULT_TOPPINGS:
      let newState3 = Object.assign({}, state);
      newState3.pizza.toppings = action.toppings;
      return newState3;
    case ADD_PIZZA_TOPPING:
      let newState4 = Object.assign({}, state);
      const toppingData1 = state.pizza.size.toppings.filter(toppingObj => toppingObj.topping.name === action.topping)[0];
      newState4.pizza.toppings.push(toppingData1);
      return newState4;
    case REMOVE_PIZZA_TOPPING:
      let newState5 = Object.assign({}, state);
      const toppingData2 = state.pizza.size.toppings.filter(toppingObj => toppingObj.topping.name === action.topping)[0];
      let newToppings = newState5.pizza.toppings.filter(topping => JSON.stringify(topping) !== JSON.stringify(toppingData2));
      newState5.pizza.toppings = newToppings;
      return newState5;
    case ADD_PIZZA_TO_CART:
      let newState6 = Object.assign({}, state);
      console.log(action.pizza);
      newState6.cart.push(action.pizza);
      return newState6;
    case REMOVE_PIZZA_FROM_CART:
      let newState7 = Object.assign({}, state);
      newState7.cart = state.cart.filter(pizza => JSON.stringify(pizza) !== JSON.stringify(action.pizza))
      return newState7;
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
