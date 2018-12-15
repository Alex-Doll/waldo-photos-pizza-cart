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
    default:
      return state;
  }
};
